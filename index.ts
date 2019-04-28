/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */

import { GeoCoordinates } from "@here/harp-geoutils";
import { View } from "./View";
import * as THREE from "three";
import { MapViewEventNames, RenderEvent } from "@here/harp-mapview";

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

const singapore = new GeoCoordinates(1.3029095, 103.8494058, 0);
// center the camera to Singapore
mapView.camera.position.set(0, 0, 1600);
mapView.geoCenter = singapore.clone();

const sphereGeoCenter = singapore.clone();
const projection = mapView.projection;
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(10, 10, 10),
    new THREE.MeshStandardMaterial({color: "#ff0000", depthTest: true}));
sphere.renderOrder = 10000;

mapView.addEventListener(MapViewEventNames.Render, (event:RenderEvent) => {
    const ms = event.time;
    sphereGeoCenter.longitude = singapore.longitude + Math.cos(ms / 1000) / 1000;
    sphereGeoCenter.latitude = singapore.latitude + Math.sin(ms / 1000) / 1000;

    projection.projectPoint(sphereGeoCenter, sphere.position);
    sphere.position.sub(mapView.worldCenter);
});

mapView.scene.add(sphere);

function animateSphere()
{
    requestAnimationFrame(()=> {
        mapView.update();
        animateSphere();
    });
}

animateSphere();
