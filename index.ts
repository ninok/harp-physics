/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */

import { GeoCoordinates } from "@here/harp-geoutils";
import { View } from "./View";
import * as THREE from "three";
import { MapViewEventNames, RenderEvent } from "@here/harp-mapview";


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

// make map full-screen
mapView.resize(window.innerWidth, window.innerHeight);

// react on resize events from the browser.
window.addEventListener("resize", () => {
    mapView.resize(window.innerWidth, window.innerHeight);
});

// center the camera to Singapore
const singapore = new GeoCoordinates(1.3029095, 103.8494058, 0);

mapView.camera.position.set(0, 0, 500);
mapView.geoCenter = singapore.clone();

// choose a center for the physics world
const physicsWorldCenter = mapView.worldCenter.clone();

mapView.addEventListener(MapViewEventNames.Render, (event: RenderEvent) => {
    updatePhysics(clock.getDelta());
});

function animateMap() {
    requestAnimationFrame(() => {
        mapView.update();
        animateMap();
    });
}

Ammo().then(function (AmmoLib) {
    initPhysics();
});

animateMap();

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
    physicsWorld = new Ammo.btDiscreteDynamicsWorld(dispatcher, broadphase, solver, collisionConfiguration);
    physicsWorld.setGravity(new Ammo.btVector3(0, 0, -9.82));
    transformAux1 = new Ammo.btTransform();

    generateGroundPlane();
    function addObjects() { setTimeout(addObjects, 500); generateObject() };
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
    console.log("generating object");
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
            threeObject = new THREE.Mesh(new THREE.SphereGeometry(radius, 20, 20), createObjectMaterial());
            shape = new Ammo.btSphereShape(radius);
            shape.setMargin(margin);
            break;
        case 2:
            // Box
            var sx = 1 + Math.random() * objectSize;
            var sy = 1 + Math.random() * objectSize;
            var sz = 1 + Math.random() * objectSize;
            threeObject = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz, 1, 1, 1), createObjectMaterial());
            shape = new Ammo.btBoxShape(new Ammo.btVector3(sx * 0.5, sy * 0.5, sz * 0.5));
            shape.setMargin(margin);
            break;
        case 3:
            // Cylinder
            var radius = 1 + Math.random() * objectSize;
            var height = 1 + Math.random() * objectSize;
            threeObject = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, height, 20, 1), createObjectMaterial());
            shape = new Ammo.btCylinderShape(new Ammo.btVector3(radius, height * 0.5, radius));
            shape.setMargin(margin);
            break;
        default:
            // Cone
            var radius = 1 + Math.random() * objectSize;
            var height = 2 + Math.random() * objectSize;
            threeObject = new THREE.Mesh(new THREE.CylinderGeometry(0, radius, height, 20, 2), createObjectMaterial());
            shape = new Ammo.btConeShape(radius, height);
            break;
    }

    threeObject.position.set(0, 0, 200);
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
