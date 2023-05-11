// import * as THREE from 'three';
// import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
// import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

// // loaders
// let mtlLoader;
// let objLoader;

// export class Crab {
//     constructor() {
//         let crab = new THREE.Object3D();
//         let crabRotation = [Math.PI * -0.5, 0, Math.PI * -0.5];
//         let crabPosition = [-60, -25, 0];
//         let crabScale = [0.15, 0.15, 0.15];
//         let crab_size_ratio = 2.5;
//         this.minX = -100 - crabPosition[0]; // -100 ~ 100
//         this.maxX = 100 - crabPosition[0];
//         this.minY = -150 - crabPosition[1]; // -150 ~ 50
//         this.maxY = 50 - crabPosition[1];
//         this.speed = 2;

//         mtlLoader = new MTLLoader();
//         mtlLoader.load('../../models/crab/crab.mtl', function (materials) {
//             materials.preload();
//             new OBJLoader().setMaterials(materials).load('../../models/crab/crab.obj', object => {
//                 object.rotation.set(
//                     crabRotation[0],
//                     crabRotation[1],
//                     crabRotation[2]
//                 );
//                 object.position.set(
//                     crabPosition[0],
//                     crabPosition[1],
//                     crabPosition[2]
//                 );
//                 object.scale.set(
//                     crab_size_ratio * crabScale[0],
//                     crab_size_ratio * crabScale[1],
//                     crab_size_ratio * crabScale[2]
//                 );

//                 crab.add(object);
//             });
//         });

//         this.crabObj = crab;
//     }
// }