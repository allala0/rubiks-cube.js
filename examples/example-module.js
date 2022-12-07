/*
Creator: Artur Brytkowski
https://www.fiverr.com/arturbrytkowski
*/

import * as THREE from 'three';
import ThreeEngine from 'three-engine';
import RubiksCube from 'rubiks-cube';

let cube;

new ThreeEngine({
    callbacks: {
        init: threeEngine => {
            cube = new RubiksCube(3, threeEngine.camera, threeEngine.renderer.domElement, threeEngine.controls);
            threeEngine.scene.add(cube);
        },
        update: threeEngine => {
            cube.update();
        }
    },
    setup: {
        enableTestLights: true,
        enableControls: true,
        enableAntialias: true,
        cameraPosition: new THREE.Vector3(10, 10, 10),
        backgroundColor: 0xffffff,
        controlsMaxZoom: 1
    }
});
