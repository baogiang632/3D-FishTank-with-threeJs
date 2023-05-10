import * as THREE from 'three';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
// loaders
let mtlLoader;
let objLoader;

export class Fish {
  constructor() {
    let fish = new THREE.Object3D();
    let fishRotation = [Math.PI * -0.5, 0, Math.PI * 0.3];
    let fishPosition = [-30, 60, 30];
    let fishScale = [3, 3, 3];
    let fish_size_ratio = 1.5;

    this.minX = -100 - fishPosition[0]; // -100 ~ 100
    this.maxX = 100 - fishPosition[0];
    this.minY = 30 - fishPosition[1]; // 30 ~ 170
    this.maxY = 170 - fishPosition[1];
    this.speed = 10;

    mtlLoader = new MTLLoader();
    mtlLoader.load('../../models/fish/fish4/13008_Clown_Goby_Citrinis_v1_l3.mtl', function (materials) {
        materials.preload();
        new OBJLoader().setMaterials(materials).load('../../models/fish/fish4/13008_Clown_Goby_Citrinis_v1_l3.obj', object => {
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
