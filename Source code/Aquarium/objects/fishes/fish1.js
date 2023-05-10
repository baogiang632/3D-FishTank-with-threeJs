import * as THREE from 'three';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

// loaders
let mtlLoader;
let objLoader;

export class Fish {
  constructor() {
    let fish = new THREE.Object3D();
    let fishRotation = [Math.PI * -0.5, 0, Math.PI * -0.5];
    let fishPosition = [-65, 70, 0];
    let fishScale = [0.5, 0.5, 0.5];
    let fish_size_ratio = 2.5;

    this.minX = -100 - fishPosition[0]; // -100 ~ 100
    this.maxX = 100 - fishPosition[0];
    this.minY = 30 - fishPosition[1]; // 30 ~ 170
    this.maxY = 170 - fishPosition[1];
    this.speed = 4;

    mtlLoader = new MTLLoader();
    mtlLoader.load('../../models/fish/fish1/13003_Auriga_Butterflyfish_v1_L3.mtl', function (materials) {
        materials.preload();
        new OBJLoader().setMaterials(materials).load('../../models/fish/fish1/13003_Auriga_Butterflyfish_v1_L3.obj', object => {
          object.rotation.set(
            fishRotation[0],
            fishRotation[1],
            fishRotation[2]
          );
          object.position.set(
            fishPosition[0],
            fishPosition[1],
            fishPosition[2]
          );
          object.scale.set(
            fish_size_ratio * fishScale[0],
            fish_size_ratio * fishScale[1],
            fish_size_ratio * fishScale[2]
          );

          fish.add(object);
        });
    });

    this.fishObj = fish;
  }
}
