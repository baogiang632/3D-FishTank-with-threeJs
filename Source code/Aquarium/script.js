import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { Water } from '../objects/water/WaterFlow.js';
import * as Fishes from '../objects/fishes/fishes.js';

//Canvas
let canvas = document.querySelector('#gl-canvas');

// Renderer
const renderer = new THREE.WebGLRenderer({canvas, antialias: true});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

// Scene
const scene = new THREE.Scene();

new RGBELoader().load('../textures/background.hdr', function (texture) {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.background = texture;
    scene.texture = texture;
});

// Global variables
let camera, light, controls, FPControls, fishes, water;

var FishTankSizeX = 0, FishTankSizeY = 0, FishTankSizeZ = 0;

let cameraPostionTempZ;


// Constant
const clock = new THREE.Clock();
const blocker = document.querySelector("#blocker");
const instructions = document.querySelector("#instructions");

function initThree() {  
    // Fixed Camera
    camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 1, 20000);
    camera.position.set(-800, 300, 400);
    camera.lookAt(0, 0, 0);

    // Controls
    controls = new OrbitControls(camera, canvas);
    controls.maxDistance = 1500;
}

function initLight() {
    // Lights
    const directionalLight = new THREE.DirectionalLight(0xF0F0F0, 0.7);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);
}

const onProgress = function (xhr) {
    if (xhr.lengthComputable) {
        const percentComplete = xhr.loaded / xhr.total * 100;
        console.log(Math.round(percentComplete, 2) + '% downloaded');
    }
}

function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
    const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
    const halfFovY = THREE.MathUtils.degToRad(camera.fov * 0.5);
    const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
  
    // Compute a unit vector that points
    // In the direction the camera is now in the x, z plane from the center of the box
    const direction = new THREE.Vector3()
      .subVectors(camera.position, boxCenter)
      .multiply(new THREE.Vector3(1, 0, 1))
      .normalize();
  
    // Move the camera to a position distance units way
    // From the center in whatever direction the camera was from the center already
    camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));
  
    // Pick some near and far values for the frustum
    // That will contain the box
    camera.near = boxSize / 100;
    camera.far = boxSize * 100;
  
    camera.updateProjectionMatrix();
  
    // Point the camera to look at the center of the box
    camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
  
    // Variable to return to the initial camera position
    // When the viewpoint is changed
    cameraPostionTempZ = camera.position.z;
}

function createFishTank() {
    let mtlLoader = new MTLLoader();
    mtlLoader.load('models/fishTank/fishTank.mtl', function (materials) {
        materials.preload();
        new OBJLoader().setMaterials(materials).load('models/fishTank/fishTank.obj', function (object) {
            object.rotation.x = Math.PI * -0.5;
            object.scale.set(7, 15, 7);
            object.receiveShadow = true;
            object.castShadow = true;
            scene.add(object);

            // Compute the box that contains all the stuff
            // From root and below
            const boundingBox = new THREE.Box3().setFromObject(object);
            const boxSize = boundingBox.getSize(new THREE.Vector3()).length();
            const boxCenter = boundingBox.getCenter(new THREE.Vector3());

            FishTankSizeX = boundingBox.max.x - boundingBox.min.x
            FishTankSizeY = boundingBox.max.y - boundingBox.min.y
            FishTankSizeZ = boundingBox.max.z - boundingBox.min.z

            // Set the camera to frame the box
            frameArea(boxSize * 1.2, boxSize, boxCenter, camera);
    
            // Update the Trackball controls to handle the new size
            controls.target.copy(boxCenter);
            controls.minDistance = 5;
            controls.maxDistance = boxSize * 1.2;
        }, onProgress);
    });
}

function createWater() {
    // Water surface
    const waterGeometry = new THREE.PlaneGeometry(218, 176);
    const textureLoader = new THREE.TextureLoader();
    //const flowMap = textureLoader.load('models/water/Water_1_M_Flow.jpg');

    water = new Water( waterGeometry, {
        scale: 2,
        textureWidth: 1024,
        textureHeight: 1024,
        //flowMap: flowMap
    } );

    water.position.y = 100;
    water.rotation.x = -Math.PI/2;
    scene.add(water);
    
    // Undersea
    let materialArray = [];
    materialArray.push(new THREE.MeshPhongMaterial({color: 0x77E6FE, transparent: true, opacity: 0.3}));
    materialArray.push(new THREE.MeshPhongMaterial({color: 0x77E6FE, transparent: true, opacity: 0.3}));
    materialArray.push(new THREE.MeshPhongMaterial({color: 0x77E6FE, transparent: true, opacity: 0.0}));
    materialArray.push(new THREE.MeshPhongMaterial({color: 0x77E6FE, transparent: true, opacity: 0.3}));
    materialArray.push(new THREE.MeshPhongMaterial({color: 0x77E6FE, transparent: true, opacity: 0.3}));
    materialArray.push(new THREE.MeshPhongMaterial({color: 0x77E6FE, transparent: true, opacity: 0.3}));
    for (let i = 0; i < 6; i++) materialArray[i].side = THREE.DoubleSide;

    const waterBlocksGeometry = new THREE.BoxGeometry(218, 90, 175);
    const waterBlocks = new THREE.Mesh(waterBlocksGeometry, materialArray);
    waterBlocks.position.y = 55;
    scene.add(waterBlocks);
}

function createFish() {
    fishes = new Fishes.Fishes();
    fishes.createFishes(scene);
}

function initObj() {
    createFishTank();
    createWater();
    createFish();
}

function render() {
    fishes.move();
    renderer.render(scene, camera);
	requestAnimationFrame(render);
}

window.onload = function init() {
    initThree();
    initLight();
    initObj();
    render();
};//change something