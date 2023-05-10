import * as THREE from 'three';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

// loaders
let mtlLoader;
let objLoader;

export class Starfish {
  constructor() {
    let fish = new THREE.Object3D();
    let fishRotation = [0, 0, 0];
    let fishPosition = [45, 20, 45];

    this.minX = -100 - fishPosition[0]; // -100 ~ 100
    this.maxX = 100 - fishPosition[0];
    this.minY = 30 - fishPosition[1]; // 30 ~ 170
    this.maxY = 170 - fishPosition[1];

    mtlLoader = new MTLLoader();
    mtlLoader.load('../../models/starfish/star.mtl', function (materials) {
        materials.preload();
        new OBJLoader().setMaterials(materials).load('../../models/starfish/star.obj', object => {
          object.rotation.set(fishRotation[0], fishRotation[1], fishRotation[2]);
          object.position.set(fishPosition[0], fishPosition[1], fishPosition[2]);
          object.scale.set(30, 30, 30);
          fish.add(object);
        });
    });

    this.fishObj = fish;
  }
}
