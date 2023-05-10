import * as THREE from 'three';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

// loaders
let mtlLoader;
let objLoader;

export class Fish {
  constructor() {
    let fish = new THREE.Object3D();
    let fishRotation = [Math.PI * -0.5, 0, Math.PI * 1.0];
    let fishPosition = [60, 20, 0];
    let fishScale = [1, 1, 1];
    let fish_size_ratio = 2;

    this.minX = -100 - fishPosition[0]; // -100 ~ 100
    this.maxX = 100 - fishPosition[0];
    this.minY = 30 - fishPosition[1]; // 30 ~ 170
    this.maxY = 170 - fishPosition[1];
    this.speed = 5;

    mtlLoader = new MTLLoader();
    mtlLoader.load('../../models/fish/fish9/13014_Six_Line_Wrasse_v1_l3.mtl', function (materials) {
        materials.preload();
        new OBJLoader().setMaterials(materials).load('../../models/fish/fish9/13014_Six_Line_Wrasse_v1_l3.obj', object => {
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
