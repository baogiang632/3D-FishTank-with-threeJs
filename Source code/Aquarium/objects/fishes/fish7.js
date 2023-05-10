import * as THREE from 'three';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

// loaders
let mtlLoader;
let objLoader;

export class Fish {
  constructor() {
    let fish = new THREE.Object3D();
    let fishRotation = [Math.PI * -0.5, 0, Math.PI * -0.2];
    let fishPosition = [20, 60, -20];
    let fishScale = [1.7, 1.7, 1.7];
    let fish_size_ratio = 3;

    this.minX = -100 - fishPosition[0]; // -100 ~ 100
    this.maxX = 100 - fishPosition[0];
    this.minY = 30 - fishPosition[1]; // 30 ~ 170
    this.maxY = 170 - fishPosition[1];
    this.speed = 5;

    mtlLoader = new MTLLoader();
    mtlLoader.load('../../models/fish/fish7/12993_Long_Fin_White_Cloud_v1_l3.mtl', function (materials) {
        materials.preload();
        new OBJLoader().setMaterials(materials).load('../../models/fish/fish7/12993_Long_Fin_White_Cloud_v1_l3.obj', object => {
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
