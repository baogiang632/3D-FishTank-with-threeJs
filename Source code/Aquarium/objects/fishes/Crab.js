// import * as THREE from 'three';

// const Pi = Math.PI,
//     halfPI = Math.PI / 2;

// export class Crab {
//     constructor() {
//         this.displacementX = 0;
//         this.displacementY = 0;
//         this.y = 100;
//         this.z = 110;
//         this.minX = -100;
//         this.maxX = 100;
//         this.minY = 30;
//         this.maxY = 180;

//         this.mesh = new THREE.Group();

//         // Body
//         var bodyGeom = new THREE.BoxGeometry(130 / 2, 100 / 2, 100 / 2);
//         var bodyMat = new THREE.MeshLambertMaterial({
//             color: 0xff3333,
//             shading: THREE.FlatShading,
//         });
//         this.bodyCrab = new THREE.Mesh(bodyGeom, bodyMat);

//         // Legs
//         var legGeom = new THREE.CylinderGeometry(10 / 2, 10 / 2, 50 / 2, 10 / 2, false);
//         var legMat = new THREE.MeshLambertMaterial({
//             color: 0xff8800,
//             shading: THREE.FlatShading,
//         });

//         this.leg1 = new THREE.Mesh(legGeom, legMat);
//         this.leg1.position.set(-50, -40, 0);

//         this.leg2 = new THREE.Mesh(legGeom, legMat);
//         this.leg2.position.set(-50, -40, -50);

//         this.leg3 = new THREE.Mesh(legGeom, legMat);
//         this.leg3.position.set(-50, -40, 50);

//         this.leg4 = new THREE.Mesh(legGeom, legMat);
//         this.leg4.position.set(50, -40, 0);

//         this.leg5 = new THREE.Mesh(legGeom, legMat);
//         this.leg5.position.set(50, -40, -50);

//         this.leg6 = new THREE.Mesh(legGeom, legMat);
//         this.leg6.position.set(50, -40, 50);

//         // Eyes
//         var eyeGeom = new THREE.BoxGeometry(10 / 2, 10 / 2, 5 / 2);
//         var eyeMat = new THREE.MeshLambertMaterial({
//             color: 0xffffff,
//             shading: THREE.FlatShading,
//         });

//         this.rightEye = new THREE.Mesh(eyeGeom, eyeMat);
//         this.rightEye.position.z = -20 / 2;
//         this.rightEye.position.x = 20 / 2;
//         this.rightEye.position.y = 20 / 2;

//         var irisGeom = new THREE.BoxGeometry(5 / 2, 5 / 2, 3 / 2);
//         var irisMat = new THREE.MeshLambertMaterial({
//             color: 0xffffff,
//             shading: THREE.FlatShading,
//         });

//         this.rightIris = new THREE.Mesh(irisGeom, irisMat);
//         this.rightIris.position.z = -25 / 2;
//         this.rightIris.position.x = 22 / 2;
//         this.rightIris.position.y = 21 / 2;

//         this.leftEye = new THREE.Mesh(eyeGeom, eyeMat);
//         this.leftEye.position.z = 20 / 2;
//         this.leftEye.position.x = 20 / 2;
//         this.leftEye.position.y = 20 / 2;

//         this.leftIris = new THREE.Mesh(irisGeom, irisMat);
//         this.leftIris.position.z = 25 / 2;
//         this.leftIris.position.x = 22 / 2;
//         this.leftIris.position.y = 21 / 2;

//         this.mesh.add(this.bodyCrab);
//         this.mesh.add(this.rightClaw);
//         this.mesh.add(this.leftClaw);
//         this.mesh.add(this.rightEye);
//         this.mesh.add(this.rightIris);
//         this.mesh.add(this.leftEye);
//         this.mesh.add(this.leftIris);

//         this.mesh.rotation.y = Math.PI / 6;
//         this.mesh.position.y = 10;
//         this.mesh.position.z = -120;

//         this.angleClaw = 0;
//         this.mesh.scale.set(0.15, 0.15, 0.15);
//     }

//     moveClaw() {
//         var s2 = 0.2; // used for the claw speed
//         this.angleClaw += s2;
//         var frontClawCycle = Math.cos(this.angleClaw);
//         var backClawCycle = Math.sin(this.angleClaw);
//         this.rightClaw.rotation.z = -halfPI + (backClawCycle * Pi) / 2;
//         this.leftClaw.rotation.z = halfPI - (backClawCycle * Pi) / 2;
//     }

//     swim() {
//         this.displacementY += 0.05;
//         this.y = this.minY + Math.abs(this.maxY - this.minY) / 2 + Math.sin(this.displacementY) * Math.abs(this.maxY - this.minY) / 2;
//         this.mesh.position.y = this.y;
//         this.displacementX += 0.02;
//         this.x = this.minX + Math.abs(this.maxX - this.minX) / 2 + Math.sin(this.displacementX) * Math.abs(this.maxX - this.minX) / 2;
//         this.mesh.position.x = this.x;
//     }
// }
// export { Crab };