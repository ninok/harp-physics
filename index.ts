/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */

import { GeoCoordinates, TileKey } from "@here/harp-geoutils";
import { View } from "./View";
import * as THREE from "three";
import {
  MapViewEventNames,
  RenderEvent,
  TileLoaderState,
  TileObject,
  Tile
} from "@here/harp-mapview";
import {
  OmvDataSource,
  APIFormat,
  OmvWithRestClientParams,
  OmvWithCustomDataProvider,
  OmvTile
} from "@here/harp-omv-datasource";
import { GeometryType, BufferAttribute } from "@here/harp-datasource-protocol";

// Physics variables
var collisionConfiguration: Ammo.btDefaultCollisionConfiguration;
var dispatcher: Ammo.btCollisionDispatcher;
var broadphase: Ammo.btDbvtBroadphase;
var solver: Ammo.btSequentialImpulseConstraintSolver;
var physicsWorld: Ammo.btDiscreteDynamicsWorld;
var transformAux1: Ammo.btTransform;

const clock = new THREE.Clock();
const dynamicObjects: THREE.Mesh[] = [];

const canvas = document.getElementById("map") as HTMLCanvasElement;
const app = new View({
  canvas
});

const mapView = app.mapView;

// center the camera to Singapore
const singapore = new GeoCoordinates(1.3029095, 103.8494058, 0);

// choose a center for the physics world
const physicsWorldCenter = mapView.projection.projectPoint(singapore, new THREE.Vector3());

class PhysicsDataSource extends OmvDataSource {
  constructor(params: OmvWithRestClientParams | OmvWithCustomDataProvider) {
    super(params);
  }

  getTile(tileKey: TileKey): OmvTile | undefined {
    const omvTile = super.getTile(tileKey);
    omvTile.tileLoader.waitSettled().then((value: TileLoaderState) => {
      if (value !== TileLoaderState.Ready) {
        return;
      }

      for (const geometry of omvTile.tileLoader.decodedTile.geometries) {
        if (geometry.type === GeometryType.ExtrudedPolygon) {
          geometry.vertexAttributes.forEach((vertexAttribute: BufferAttribute) => {
            try {
              if (vertexAttribute.name !== "position") {
                return;
              }
              if (vertexAttribute.type !== "float") {
                console.log("position vertex attribute needs to be float.");
                return;
              }
              if (geometry.index === undefined) {
                console.log("No index buffer defined.");
                return;
              }
              if (geometry.index.type !== "uint32") {
                console.log("index buffer needs to be uint32.");
                return;
              }

              const positions = new Float32Array(vertexAttribute.buffer);
              const indices = new Uint32Array(geometry.index.buffer);

              const mesh = new Ammo.btTriangleMesh(true /*use32bitIndices*/);
              for (let i = 0; i < indices.length; i += 3) {
                const v0 = new Ammo.btVector3(
                  positions[indices[i] * 3],
                  positions[indices[i] * 3 + 1],
                  positions[indices[i] * 3 + 2]
                );
                const v1 = new Ammo.btVector3(
                  positions[indices[i + 1] * 3],
                  positions[indices[i + 1] * 3 + 1],
                  positions[indices[i + 1] * 3 + 2]
                );
                const v2 = new Ammo.btVector3(
                  positions[indices[i + 2] * 3],
                  positions[indices[i + 2] * 3 + 1],
                  positions[indices[i + 2] * 3 + 2]
                );
                mesh.addTriangle(v0, v1, v2);
              }
              const shape = new Ammo.btBvhTriangleMeshShape(mesh, true, true);

              // Tile origin relative to the center of our physics simulation.
              const tileOrigin = omvTile.center.clone().sub(physicsWorldCenter);
              console.log(omvTile.center, tileOrigin);

              var mass = 0; // make it unmoveable
              var localInertia = new Ammo.btVector3(0, 0, 0);
              shape.calculateLocalInertia(mass, localInertia);
              var transform = new Ammo.btTransform();
              transform.setIdentity();
              transform.setOrigin(new Ammo.btVector3(tileOrigin.x, tileOrigin.y, tileOrigin.z));
              var motionState = new Ammo.btDefaultMotionState(transform);
              var rbInfo = new Ammo.btRigidBodyConstructionInfo(
                mass,
                motionState,
                shape,
                localInertia
              );
              var body = new Ammo.btRigidBody(rbInfo);

              physicsWorld.addRigidBody(body);
            } catch (error) {
              console.log(error);
            }
          });
        }
      }
    });
    return omvTile;
  }
}

const omvDataSource = new PhysicsDataSource({
  baseUrl: "https://xyz.api.here.com/tiles/herebase.02",
  apiFormat: APIFormat.XYZOMV,
  styleSetName: "tilezen",
  maxZoomLevel: 17,
  authenticationCode: "AB5W33i5bYqI2dY_cDYIcG0"
});
mapView.addDataSource(omvDataSource);

// make map full-screen
mapView.resize(window.innerWidth, window.innerHeight);

// react on resize events from the browser.
window.addEventListener("resize", () => {
  mapView.resize(window.innerWidth, window.innerHeight);
});

mapView.lookAt(singapore, 500);

mapView.addEventListener(MapViewEventNames.Render, (event: RenderEvent) => {
  updatePhysics(clock.getDelta());
});

// constantly animate to update the physics.
mapView.beginAnimation();

Ammo().then(function(AmmoLib) {
  initPhysics();
});

function updatePhysics(deltaTime) {
  if (!physicsWorld) {
    // physics not initialized yet
    return;
  }
  physicsWorld.stepSimulation(deltaTime, 10);

  // Update objects
  for (var i = 0, il = dynamicObjects.length; i < il; i++) {
    var objThree = dynamicObjects[i];
    var objPhys = objThree.userData.physicsBody;
    var ms = objPhys.getMotionState();
    if (ms) {
      ms.getWorldTransform(transformAux1);
      var p = transformAux1.getOrigin();
      var q = transformAux1.getRotation();
      objThree.position.set(p.x(), p.y(), p.z());
      objThree.position.add(physicsWorldCenter);
      objThree.position.sub(mapView.worldCenter);
      objThree.quaternion.set(q.x(), q.y(), q.z(), q.w());
    }
  }
}

function initPhysics() {
  collisionConfiguration = new Ammo.btDefaultCollisionConfiguration();
  dispatcher = new Ammo.btCollisionDispatcher(collisionConfiguration);
  broadphase = new Ammo.btDbvtBroadphase();
  solver = new Ammo.btSequentialImpulseConstraintSolver();
  physicsWorld = new Ammo.btDiscreteDynamicsWorld(
    dispatcher,
    broadphase,
    solver,
    collisionConfiguration
  );
  physicsWorld.setGravity(new Ammo.btVector3(0, 0, -9.82));
  transformAux1 = new Ammo.btTransform();

  generateGroundPlane();
  function addObjects() {
    setTimeout(addObjects, 500);
    generateObject();
  }
  addObjects();
}

function createObjectMaterial() {
  var c = Math.floor(Math.random() * (1 << 24));
  return new THREE.MeshPhongMaterial({ color: c });
}

function generateGroundPlane() {
  const shape = new Ammo.btStaticPlaneShape(new Ammo.btVector3(0, 0, 1), 0);
  var mass = 0; // make it unmoveable
  var localInertia = new Ammo.btVector3(0, 0, 0);
  shape.calculateLocalInertia(mass, localInertia);
  var transform = new Ammo.btTransform();
  transform.setIdentity();
  transform.setOrigin(new Ammo.btVector3(0, 0, 0));
  var motionState = new Ammo.btDefaultMotionState(transform);
  var rbInfo = new Ammo.btRigidBodyConstructionInfo(mass, motionState, shape, localInertia);
  var body = new Ammo.btRigidBody(rbInfo);

  physicsWorld.addRigidBody(body);
}

function generateObject() {
  if (!mapView) {
    return;
  }
  var numTypes = 4;
  var objectType = Math.ceil(Math.random() * numTypes);

  var threeObject: THREE.Mesh = null;
  var shape = null;

  var objectSize = 10;
  var margin = 0.05;

  switch (objectType) {
    case 1:
      // Sphere
      var radius = 1 + Math.random() * objectSize;
      threeObject = new THREE.Mesh(
        new THREE.SphereGeometry(radius, 20, 20),
        createObjectMaterial()
      );
      shape = new Ammo.btSphereShape(radius);
      shape.setMargin(margin);
      break;
    case 2:
      // Box
      var sx = 1 + Math.random() * objectSize;
      var sy = 1 + Math.random() * objectSize;
      var sz = 1 + Math.random() * objectSize;
      threeObject = new THREE.Mesh(
        new THREE.BoxGeometry(sx, sy, sz, 1, 1, 1),
        createObjectMaterial()
      );
      shape = new Ammo.btBoxShape(new Ammo.btVector3(sx * 0.5, sy * 0.5, sz * 0.5));
      shape.setMargin(margin);
      break;
    case 3:
      // Cylinder
      var radius = 1 + Math.random() * objectSize;
      var height = 1 + Math.random() * objectSize;
      threeObject = new THREE.Mesh(
        new THREE.CylinderGeometry(radius, radius, height, 20, 1),
        createObjectMaterial()
      );
      shape = new Ammo.btCylinderShape(new Ammo.btVector3(radius, height * 0.5, radius));
      shape.setMargin(margin);
      break;
    default:
      // Cone
      var radius = 1 + Math.random() * objectSize;
      var height = 2 + Math.random() * objectSize;
      threeObject = new THREE.Mesh(
        new THREE.CylinderGeometry(0, radius, height, 20, 2),
        createObjectMaterial()
      );
      shape = new Ammo.btConeShape(radius, height);
      break;
  }

  threeObject.position.set(0, 0, 10);
  threeObject.position.add(mapView.worldCenter).sub(physicsWorldCenter);
  threeObject.renderOrder = 1000;

  var mass = objectSize * 5;
  var localInertia = new Ammo.btVector3(0, 0, 0);
  shape.calculateLocalInertia(mass, localInertia);
  var transform = new Ammo.btTransform();
  transform.setIdentity();
  var pos = threeObject.position;
  transform.setOrigin(new Ammo.btVector3(pos.x, pos.y, pos.z));
  var motionState = new Ammo.btDefaultMotionState(transform);
  var rbInfo = new Ammo.btRigidBodyConstructionInfo(mass, motionState, shape, localInertia);
  var body = new Ammo.btRigidBody(rbInfo);

  threeObject.userData.physicsBody = body;

  mapView.scene.add(threeObject);
  dynamicObjects.push(threeObject);

  physicsWorld.addRigidBody(body);
}
