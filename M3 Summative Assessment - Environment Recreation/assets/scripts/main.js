// Stephanie Pearl F. Virtudazo - A223
// Computer Graphics Computing Module 3 Summative Assessment

import * as THREE from './three.module.js';
import { GLTFLoader } from './GLTFLoader.js';
import { OrbitControls } from './OrbitControls.js';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
const loader = new GLTFLoader();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Orbit Controls
const cameraControl = new OrbitControls(camera, renderer.domElement);

// Camera setup
camera.position.set(-7 , 13.2, -20); 
camera.lookAt(15.2, 50, -18);

// Resize handling
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

const textureLoader = new THREE.TextureLoader();

// Set background color
const backgroundColor = 0x85BCF4;
scene.background = new THREE.Color(backgroundColor);

// Lining Texture
const whitelininghorizontalTexture = textureLoader.load('../assets/textures/whitelininghorizontal.png');
const whitelininghorizontalTMaterial = new THREE.MeshStandardMaterial({ map: whitelininghorizontalTexture });

const whiteliningverticalTexture = textureLoader.load('../assets/textures/whiteliningvertical.png');
const whiteliningverticalTMaterial = new THREE.MeshStandardMaterial({ map: whiteliningverticalTexture });

const whiteleftTexture = textureLoader.load('../assets/textures/whiteleft.png');
const whiteleftMaterial = new THREE.MeshStandardMaterial({ map: whiteleftTexture });

const whiterightTexture = textureLoader.load('../assets/textures/whiteright.png');
const whiterightMaterial = new THREE.MeshStandardMaterial({ map: whiterightTexture });

const wallliningTexture = textureLoader.load('../assets/textures/walllining.png');
const walllining = new THREE.MeshStandardMaterial({ map: wallliningTexture });

const whiteTexture = textureLoader.load('../assets/textures/white.png');
const whiteMaterial = new THREE.MeshStandardMaterial({ map: whiteTexture });

// Base
const lawntexture = textureLoader.load('../assets/textures/lawn.png'); 
lawntexture.wrapS = THREE.RepeatWrapping;
lawntexture.wrapT = THREE.RepeatWrapping;
lawntexture.repeat.set(4, 4); 

const standardMaterial = new THREE.MeshStandardMaterial({ map: lawntexture });
const baseGeometry = new THREE.BoxGeometry(120, 0.5, 120);
const baseCube = new THREE.Mesh(baseGeometry, standardMaterial);
scene.add(baseCube);
baseCube.position.set(0, -1, 0.5);


// House Base
const housebaseTexture = textureLoader.load('../assets/textures/Base.png');
const housebaseMaterial = new THREE.MeshStandardMaterial({ map: housebaseTexture });
const housebaseGeometry = new THREE.BoxGeometry(50, 4.5, 35);
const housebaseCube = new THREE.Mesh(housebaseGeometry, housebaseMaterial);
scene.add(housebaseCube);

housebaseCube.position.set(-6.3, 1.5, -12);

// House Flooring
const housefloorTexture = textureLoader.load('../assets/textures/floor.png');
const housefloorMaterial = new THREE.MeshStandardMaterial({ map: housefloorTexture });
const housefloorGeometry = new THREE.BoxGeometry(39, 0.5, 34);
const housefloorCube = new THREE.Mesh(housefloorGeometry, housefloorMaterial);
scene.add(housefloorCube);

housefloorCube.position.set(-1.3, 4, -11.9);

// House Walls
// Wall A - Back
const wallATexture = textureLoader.load('../assets/textures/walllining.png');
const housewallAMaterial = new THREE.MeshStandardMaterial({ map: wallATexture });
const housewallAGeometry = new THREE.BoxGeometry(49.8, 23, 1);
const housewallA = new THREE.Mesh(housewallAGeometry, housewallAMaterial);
scene.add(housewallA);

housewallA.position.set(-6.2, 15.3, -28.85);

// Wall B - Left
const wallBTexture = textureLoader.load('../assets/textures/walllining.png');
const housewallBMaterial = new THREE.MeshStandardMaterial({ map: wallBTexture });
const housewallBGeometry = new THREE.BoxGeometry(10.5, 23, 34.8);
const wallBMaterials = [
    whiteMaterial, // right
    housewallBMaterial, // left
    whiteMaterial, // top
    whiteMaterial, // bottom
    whiteleftMaterial, // front
    whiteMaterial  // back
];
const housewallB = new THREE.Mesh(housewallBGeometry, wallBMaterials);
scene.add(housewallB);

housewallB.position.set(-25.9, 15.3, -11.9);

// Wall C - Right
const wallCTexture = textureLoader.load('../assets/textures/walllining.png');
const housewallCMaterial = new THREE.MeshStandardMaterial({ map: wallCTexture });
const housewallCGeometry = new THREE.BoxGeometry(1, 23, 34.8);
const housewallC = new THREE.Mesh(housewallCGeometry, housewallCMaterial);
scene.add(housewallC);

housewallC.position.set(18.2, 15.3, -11.9);

// Front Wall 
const frontwall1Texture = textureLoader.load('../assets/textures/white.png');
const frontwall1TMaterial = new THREE.MeshStandardMaterial({ map: frontwall1Texture });
const frontwall1Geometry = new THREE.BoxGeometry(10, 23, 1);
const frontwall1Materials = [
    whiteliningverticalTMaterial, // right
    frontwall1TMaterial, // left
    frontwall1TMaterial, // top
    frontwall1TMaterial, // bottom
    frontwall1TMaterial, // front
    frontwall1TMaterial  // back
];
const frontwall1 = new THREE.Mesh(frontwall1Geometry, frontwall1Materials);
scene.add(frontwall1);

frontwall1.position.set(-16, 15.3, 5);

const frontwall2Texture = textureLoader.load('../assets/textures/white.png');
const frontwall2TMaterial = new THREE.MeshStandardMaterial({ map: frontwall2Texture });
const frontwall2Geometry = new THREE.BoxGeometry(39.5, 7, 1);
const frontwall2Materials = [
    frontwall2TMaterial, // right
    frontwall2TMaterial, // left
    frontwall2TMaterial, // top
    whitelininghorizontalTMaterial, // bottom
    frontwall2TMaterial, // front
    frontwall2TMaterial  // back
];
const frontwall2 = new THREE.Mesh(frontwall2Geometry, frontwall2Materials);
scene.add(frontwall2);

frontwall2.position.set(-1.2, 25, 5);

// Front Wall 
const frontwall3Texture = textureLoader.load('../assets/textures/white.png');
const frontwall3TMaterial = new THREE.MeshStandardMaterial({ map: frontwall3Texture });
const frontwall3Geometry = new THREE.BoxGeometry(5, 23, 1);
const frontwall3Materials = [
    frontwall3TMaterial, // right
    whiteliningverticalTMaterial, // left
    frontwall3TMaterial, // top
    frontwall3TMaterial, // bottom
    whiterightMaterial, // front
    frontwall3TMaterial  // back
];
const frontwall3 = new THREE.Mesh(frontwall3Geometry, frontwall3Materials);
scene.add(frontwall3);

frontwall3.position.set(16, 15.3, 5);

// Second Floor
const secondFloorTexture = textureLoader.load('../assets/textures/secondfloorlining.png');
const secondFloorMaterial = new THREE.MeshStandardMaterial({ map: secondFloorTexture });
const secondFloorGeometry = new THREE.BoxGeometry(49.85, 28, 34.8);
const secondFloorMaterials = [
    secondFloorMaterial, // right
    secondFloorMaterial, // left
    housewallCMaterial, // top
    secondFloorMaterial, // bottom
    secondFloorMaterial, // front
    secondFloorMaterial  // back
];
const secondFloor = new THREE.Mesh(secondFloorGeometry, secondFloorMaterials);
scene.add(secondFloor);

secondFloor.position.set(-6.2, 40.8, -11.9);

// Interior Lining
const interiorliningTexture = textureLoader.load('../assets/textures/black.png');
const interiorliningMaterial = new THREE.MeshStandardMaterial({ map: interiorliningTexture });
const interiorliningGeometry = new THREE.BoxGeometry(0.4, 23, 0.5);

const interiorliningA = new THREE.Mesh(interiorliningGeometry, interiorliningMaterial);
scene.add(interiorliningA);
interiorliningA.position.set(17.7, 15.3, -28);

const interiorliningB = new THREE.Mesh(interiorliningGeometry, interiorliningMaterial);
scene.add(interiorliningB);
interiorliningB.position.set(-20.7, 15.3, -28);

const interiorliningC = new THREE.Mesh(interiorliningGeometry, interiorliningMaterial);
scene.add(interiorliningC);
interiorliningC.position.set(-20.7, 15.3, 4.5);

const interiorliningD = new THREE.Mesh(interiorliningGeometry, interiorliningMaterial);
scene.add(interiorliningD);
interiorliningD.position.set(17.7, 15.3, 4.5);

// Drawer A
const drawerA1Texture = textureLoader.load('../assets/textures/DrawerA1.png');
const drawerA2Texture = textureLoader.load('../assets/textures/DrawerA2.png');
const drawerA2Material = new THREE.MeshStandardMaterial({ map: drawerA2Texture });  // Solid color material for non-textured sides
const drawerA1Material = new THREE.MeshStandardMaterial({ map: drawerA1Texture }); // Material with texture for the desired side
const drawerAGeometry = new THREE.BoxGeometry(4, 8, 7.5);

const drawerAMaterials = [
    drawerA2Material, // right
    drawerA1Material, // left
    drawerA2Material, // top
    drawerA2Material, // bottom
    drawerA2Material, // front
    drawerA2Material  // back
];

const drawerA = new THREE.Mesh(drawerAGeometry, drawerAMaterials);
scene.add(drawerA);

drawerA.position.set(15.2, 8.3, -0.5);

// TV Table
const tvTableTexture1 = textureLoader.load('../assets/textures/tvtable1.png');
const tvTableTexture2 = textureLoader.load('../assets/textures/tvtable2.png');
const tvTableMaterial1 = new THREE.MeshStandardMaterial({ map: tvTableTexture1 }); // Material with texture for the desired side
const tvTableMaterial2 = new THREE.MeshStandardMaterial({ map: tvTableTexture2 }); // Solid color material for non-textured sides
const tvTableGeometry = new THREE.BoxGeometry(3.5, 3, 10);

const tvTableMaterials = [
    tvTableMaterial2, // right
    tvTableMaterial1, // left
    tvTableMaterial2, // top
    tvTableMaterial2, // bottom
    tvTableMaterial2, // front
    tvTableMaterial2  // back
];

const tvTable = new THREE.Mesh(tvTableGeometry, tvTableMaterials);
scene.add(tvTable);

tvTable.position.set(15.2, 5.8, -9.5);

// Drawer B
const drawerBTexture1 = textureLoader.load('../assets/textures/DrawerB1.png');
const drawerBTexture2 = textureLoader.load('../assets/textures/DrawerB2.png');
const drawerBMaterial1 = new THREE.MeshStandardMaterial({ map: drawerBTexture1 }); // Material with texture for the desired side
const drawerBMaterial2 = new THREE.MeshStandardMaterial({ map: drawerBTexture2 }); // Solid color material for non-textured sides
const drawerBGeometry = new THREE.BoxGeometry(4, 5.5, 7.5);

const drawerBMaterials = [
    drawerBMaterial2, // right
    drawerBMaterial1, // left
    drawerBMaterial2, // top
    drawerBMaterial2, // bottom
    drawerBMaterial2, // front
    drawerBMaterial2  // back
];

const drawerB = new THREE.Mesh(drawerBGeometry, drawerBMaterials);
scene.add(drawerB);

drawerB.position.set(15.2, 7, -18.5);

// Pile
const pileTexture1 = textureLoader.load('../assets/textures/pile1.png');
const pileTexture2 = textureLoader.load('../assets/textures/pile2.png');
const pileMaterial1 = new THREE.MeshStandardMaterial({ map: pileTexture1 }); // Material with texture for the desired side
const pileMaterial2 = new THREE.MeshStandardMaterial({ map: pileTexture2 }); // Solid color material for non-textured sides
const pileGeometry = new THREE.BoxGeometry(3.5, 3.5, 3.5);

const pileMaterials = [
    pileMaterial1, // right
    pileMaterial1, // left
    pileMaterial2, // top
    pileMaterial2, // bottom
    pileMaterial1, // front
    pileMaterial1  // back
];

const pile = new THREE.Mesh(pileGeometry, pileMaterials);
scene.add(pile);

pile.position.set(15.2, 6, -24.3);

// Picture Frames
// Frame 1
const pictureframe1Texture = textureLoader.load('../assets/textures/Frame1.png');
const pictureframe1Material = new THREE.MeshStandardMaterial({ map: pictureframe1Texture });
const pictureframe1Geometry = new THREE.BoxGeometry(0.5, 5.5, 4);
const pictureframe1 = new THREE.Mesh(pictureframe1Geometry, pictureframe1Material);
scene.add(pictureframe1);

pictureframe1.position.set(17.9, 14, -16);

// Frame 2
const pictureframe2Texture = textureLoader.load('../assets/textures/Frame2.png');
const pictureframe2Material = new THREE.MeshStandardMaterial({ map: pictureframe2Texture });
const pictureframe2Geometry = new THREE.BoxGeometry(0.5, 5, 5.5);
const pictureframe2 = new THREE.Mesh(pictureframe2Geometry, pictureframe2Material);
scene.add(pictureframe2);

pictureframe2.position.set(17.9, 17, -1);

// Wall Shelf
const wallshelfTexture = textureLoader.load('../assets/textures/pile2.png');
const wallshelfMaterial = new THREE.MeshStandardMaterial({ map: wallshelfTexture });
const wallshelfGeometry = new THREE.BoxGeometry(2.5, 1, 5.5);
const wallshelf = new THREE.Mesh(wallshelfGeometry, wallshelfMaterial);
scene.add(wallshelf);

wallshelf.position.set(16.8, 15, -8);

// Cups
const cupAMaterial = new THREE.MeshStandardMaterial({ color: 0xFCE65D});
const cupAGeometry = new THREE.CylinderGeometry( 0.7, 0.6, 1.5, 32 ); 
const cupA = new THREE.Mesh(cupAGeometry, cupAMaterial);
scene.add(cupA);
cupA.position.set(16.8, 16.2, -7);

const cupBMaterial = new THREE.MeshStandardMaterial({ color: 0xFD9837});
const cupBGeometry = new THREE.CylinderGeometry( 0.7, 0.6, 1.2, 32 ); 
const cupB = new THREE.Mesh(cupBGeometry, cupBMaterial);
scene.add(cupB);
cupB.position.set(16.8, 16, -9);

// Flower Pot
const flowerpotfMaterial = new THREE.MeshStandardMaterial({ color: 0xFAF9F6});
const flowerpotGeometry = new THREE.CylinderGeometry( 1, 0.5, 3, 32 ); 
const flowerpot = new THREE.Mesh(flowerpotGeometry, flowerpotfMaterial);
scene.add(flowerpot);

flowerpot.position.set(15.2, 12.8, -0.5);

// Soil
const soilMaterial = new THREE.MeshStandardMaterial({ color: 0x3e3117});
const soilGeometry = new THREE.CylinderGeometry( 0.8, 0.3, 3, 32 ); 
const soil = new THREE.Mesh(soilGeometry, soilMaterial);
scene.add(soil);

soil.position.set(15.2, 12.9, -0.5);

// Grass
loader.load( './assets/3D/grass/scene.gltf', function ( gltf ) {
    const grasspot = gltf.scene;
    scene.add( grasspot );

    grasspot.position.set (14.9, 14.4, -0.8);
    grasspot.scale.set(0.008, 0.008, 0.008); 
    grasspot.rotation.y = Math.PI / 4;

}, undefined, function ( error ) {
	console.error( error );
} );

// TV
// TV Stand
const tvstandTexture = textureLoader.load('../assets/textures/black.png');
const tvstandMaterial = new THREE.MeshStandardMaterial({ map: tvstandTexture }); // Material with texture for the desired side
const tvstandGeometry = new THREE.CylinderGeometry(1, 1, 0.2, 32 );

const tvstand = new THREE.Mesh(tvstandGeometry, tvstandMaterial);
scene.add(tvstand);

tvstand.position.set(15.2, 7.4, -9.5);

// TV Box
const tvboxTexture1 = textureLoader.load('../assets/textures/tvscreen.png');
const tvboxTexture2 = textureLoader.load('../assets/textures/black.png');
const tvboxMaterial1 = new THREE.MeshStandardMaterial({ map: tvboxTexture1 }); 
const tvboxMaterial2 = new THREE.MeshStandardMaterial({ map: tvboxTexture2 }); // Material with texture for the desired side

const tvboxMaterials = [
    tvboxMaterial2, // right
    tvboxMaterial1, // left
    tvboxMaterial2, // top
    tvboxMaterial2, // bottom
    tvboxMaterial2, // front
    tvboxMaterial2  // back
];
const tvboxGeometry = new THREE.BoxGeometry(0.4, 5, 8.5 );

const tvbox = new THREE.Mesh(tvboxGeometry, tvboxMaterials);
scene.add(tvbox);

tvbox.position.set(14.9, 10, -9.5);

// Carpet
const carpetTexture = textureLoader.load('../assets/textures/carpet.png');
const carpetMaterial = new THREE.MeshStandardMaterial({ map: carpetTexture });
const carpetGeometry = new THREE.BoxGeometry(20, 0.5, 15);
const carpet = new THREE.Mesh(carpetGeometry, carpetMaterial);
scene.add(carpet);

carpet.position.set(-1, 4.1, -7);

// Back Area 
// Door Frame A
const doorframeATexture = textureLoader.load('../assets/textures/doorframe.png');
const doorframeAMaterial = new THREE.MeshStandardMaterial({ map: doorframeATexture });
const doorframeAGeometry = new THREE.BoxGeometry(1.5, 14.5, 1.5);
const doorframeA = new THREE.Mesh(doorframeAGeometry, doorframeAMaterial);
scene.add(doorframeA);

doorframeA.position.set(16.6, 11.5, -27.7);

// Door Frame B
const doorframeB = new THREE.Mesh(doorframeAGeometry, doorframeAMaterial);
scene.add(doorframeB);

doorframeB.position.set(-2, 11.5, -27.7);

// Door Frame C
const doorframeC = new THREE.Mesh(doorframeAGeometry, doorframeAMaterial);
scene.add(doorframeC);

doorframeC.position.set(-19.3, 11.5, -27.7);

// Upper Door Frame
const doorframeDTexture = textureLoader.load('../assets/textures/upperframe.png');
const doorframeDMaterial = new THREE.MeshStandardMaterial({ map: doorframeDTexture });
const doorframeDGeometry = new THREE.BoxGeometry(38, 1.5, 1.5);
const doorframeD = new THREE.Mesh(doorframeDGeometry, doorframeDMaterial);
scene.add(doorframeD);

doorframeD.position.set(-1.5, 19.5, -27.7);

// Door A
const doorATexture = textureLoader.load('../assets/textures/door.png');
const doorAMaterial = new THREE.MeshStandardMaterial({ map: doorATexture });
const doorAGeometry = new THREE.BoxGeometry(10, 14.5, 0.5);
const doorA = new THREE.Mesh(doorAGeometry, doorAMaterial);
scene.add(doorA);
doorA.position.set(3.7 , 11.5, -28.3);

// Door B
const doorB = new THREE.Mesh(doorAGeometry, doorAMaterial);
scene.add(doorB);
doorB.position.set(10.7 , 11.5, -27.3);

// Door C
const doorC = new THREE.Mesh(doorAGeometry, doorAMaterial);
scene.add(doorC);
doorC.position.set(-13.5 , 11.5, -28.3);

// Door D
const doorD = new THREE.Mesh(doorAGeometry, doorAMaterial);
scene.add(doorD);
doorD.position.set(-7.8, 11.5, -27.3);

// Bookshelf
// Back
const bookshelfbackTexture = textureLoader.load('../assets/textures/shelfback.png');
const bookshelfbackMaterial = new THREE.MeshStandardMaterial({ map: bookshelfbackTexture });
const bookshelfbackGeometry = new THREE.BoxGeometry(12, 18, 1);
const bookshelfback = new THREE.Mesh(bookshelfbackGeometry, bookshelfbackMaterial);
scene.add(bookshelfback);

bookshelfback.position.set(-14 , 13.2, -26);

// Sides
// Left Side
const bookshelfsidesTexture = textureLoader.load('../assets/textures/shelfback.png');
const bookshelfsidesMaterial = new THREE.MeshStandardMaterial({ map: bookshelfsidesTexture });
const bookshelfsidesGeometry = new THREE.BoxGeometry(1, 18, 5);
const bookshelfleftside = new THREE.Mesh(bookshelfsidesGeometry, bookshelfsidesMaterial);
scene.add(bookshelfleftside);

bookshelfleftside.position.set(-19.5 , 13.2, -23);

// Right Side
const bookshelfrightside = new THREE.Mesh(bookshelfsidesGeometry, bookshelfsidesMaterial);
scene.add(bookshelfrightside);

bookshelfrightside.position.set(-8.5 , 13.2, -23);

// Shelf Rows
// Row A
const bookshelrowTexture = textureLoader.load('../assets/textures/shelfback.png');
const bookshelrowMaterial = new THREE.MeshStandardMaterial({ map: bookshelrowTexture });
const bookshelrowGeometry = new THREE.BoxGeometry(11.8, 1, 4.8);
const bookshelfrowA = new THREE.Mesh(bookshelrowGeometry, bookshelrowMaterial);
scene.add(bookshelfrowA);
bookshelfrowA.position.set(-14 , 4.8, -23.1);

// Row B
const bookshelfrowB = new THREE.Mesh(bookshelrowGeometry, bookshelrowMaterial);
scene.add(bookshelfrowB);
bookshelfrowB.position.set(-14 , 10.7, -23.1);

// Row C
const bookshelfrowC = new THREE.Mesh(bookshelrowGeometry, bookshelrowMaterial);
scene.add(bookshelfrowC);
bookshelfrowC.position.set(-14 , 16.7, -23.1);

// Row D
const bookshelrowDGeometry = new THREE.BoxGeometry(12, 1, 6);
const bookshelfrowD = new THREE.Mesh(bookshelrowDGeometry, bookshelrowMaterial);
scene.add(bookshelfrowD);
bookshelfrowD.position.set(-14 , 22.6, -23.5);

// Books...
const cyanbookTexture = textureLoader.load('../assets/textures/cyanbook.png');
const cyanbookMaterial = new THREE.MeshStandardMaterial({ map: cyanbookTexture });
const cyanbookGeometry = new THREE.BoxGeometry(1, 4.5, 4.2);

const cyanbookA = new THREE.Mesh(cyanbookGeometry, cyanbookMaterial);
scene.add(cyanbookA);
cyanbookA.position.set(-18.4, 19.5, -23.1); 

const cyanbookB = new THREE.Mesh(cyanbookGeometry, cyanbookMaterial);
scene.add(cyanbookB);
cyanbookB.position.set(-17.3 , 19.5, -23.1); 

const cyanbookC = new THREE.Mesh(cyanbookGeometry, cyanbookMaterial);
scene.add(cyanbookC);
cyanbookC.position.set(-16.2 , 19.5, -23.1); 

const cyanbookD = new THREE.Mesh(cyanbookGeometry, cyanbookMaterial);
scene.add(cyanbookD);
cyanbookD.position.set(-15.1, 19.5, -23.1); 

const cyanbookE = new THREE.Mesh(cyanbookGeometry, cyanbookMaterial);
scene.add(cyanbookE);
cyanbookE.position.set(-14, 19.5, -23.1);

const cyanbookF = new THREE.Mesh(cyanbookGeometry, cyanbookMaterial);
scene.add(cyanbookF);
cyanbookF.position.set(-12.9, 19.5, -23.1); 

const cyanbookG = new THREE.Mesh(cyanbookGeometry, cyanbookMaterial);
scene.add(cyanbookG);
cyanbookG.position.set(-11.8, 19.5, -23.1); 

const cyanbookH = new THREE.Mesh(cyanbookGeometry, cyanbookMaterial);
scene.add(cyanbookH);
cyanbookH.position.set(-10.7, 19.5, -23.1); 

const cyanbookI = new THREE.Mesh(cyanbookGeometry, cyanbookMaterial);
scene.add(cyanbookI);
cyanbookI.position.set(-9.6, 19.5, -23.1); 

const yellowbookTexture = textureLoader.load('../assets/textures/yellowbook.png');
const yellowbookMaterial = new THREE.MeshStandardMaterial({ map: yellowbookTexture });
const yellowbookGeometry = new THREE.BoxGeometry(1, 4.5, 4.2);

const yellowbookA = new THREE.Mesh(yellowbookGeometry, yellowbookMaterial);
scene.add(yellowbookA);
yellowbookA.position.set(-18.4, 13.5, -23.1); 

const yellowbookB = new THREE.Mesh(yellowbookGeometry, yellowbookMaterial);
scene.add(yellowbookB);
yellowbookB.position.set(-17.3 , 13.5, -23.1);

const yellowbookC = new THREE.Mesh(yellowbookGeometry, yellowbookMaterial);
scene.add(yellowbookC);
yellowbookC.position.set(-16.2 , 13.5, -23.1);

const yellowbookD = new THREE.Mesh(yellowbookGeometry, yellowbookMaterial);
scene.add(yellowbookD);
yellowbookD.position.set(-15.1, 13.5, -23.1);

const yellowbookE = new THREE.Mesh(yellowbookGeometry, yellowbookMaterial);
scene.add(yellowbookE);
yellowbookE.position.set(-14, 13.5, -23.1);

const yellowbookF = new THREE.Mesh(yellowbookGeometry, yellowbookMaterial);
scene.add(yellowbookF);
yellowbookF.position.set(-12.9, 13.5, -23.1);

const yellowbookG = new THREE.Mesh(yellowbookGeometry, yellowbookMaterial);
scene.add(yellowbookG);
yellowbookG.position.set(-11.8, 13.5, -23.1);

const yellowbookH = new THREE.Mesh(yellowbookGeometry, yellowbookMaterial);
scene.add(yellowbookH);
yellowbookH.position.set(-10.7, 13.5, -23.1);

const yellowbookI = new THREE.Mesh(yellowbookGeometry, yellowbookMaterial);
scene.add(yellowbookI);
yellowbookI.position.set(-9.6, 13.5, -23.1);

const redbookTexture = textureLoader.load('../assets/textures/redbook.png');
const redbookMaterial = new THREE.MeshStandardMaterial({ map: redbookTexture });
const redbookGeometry = new THREE.BoxGeometry(1, 4.5, 4.2);

const redbookA = new THREE.Mesh(redbookGeometry, redbookMaterial);
scene.add(redbookA);
redbookA.position.set(-18.4, 7.6, -23.1); 

const redbookB = new THREE.Mesh(redbookGeometry, redbookMaterial);
scene.add(redbookB);
redbookB.position.set(-17.3 , 7.6, -23.1);

const redbookC = new THREE.Mesh(redbookGeometry, redbookMaterial);
scene.add(redbookC);
redbookC.position.set(-16.2 , 7.6, -23.1);

const redbookD = new THREE.Mesh(redbookGeometry, redbookMaterial);
scene.add(redbookD);
redbookD.position.set(-15.1, 7.6, -23.1);

const redbookE = new THREE.Mesh(redbookGeometry, redbookMaterial);
scene.add(redbookE);
redbookE.position.set(-14, 7.6, -23.1);

const redbookF = new THREE.Mesh(redbookGeometry, redbookMaterial);
scene.add(redbookF);
redbookF.position.set(-12.9, 7.6, -23.1);

const redbookG = new THREE.Mesh(redbookGeometry, redbookMaterial);
scene.add(redbookG);
redbookG.position.set(-11.8, 7.6, -23.1);

const redbookH = new THREE.Mesh(redbookGeometry, redbookMaterial);
scene.add(redbookH);
redbookH.position.set(-10.7, 7.6, -23.1);

const redbookI = new THREE.Mesh(redbookGeometry, redbookMaterial);
scene.add(redbookI);
redbookI.position.set(-9.6, 7.6, -23.1);

// Sliding Door
// Sliding Door Frame A
const slidingdoorframeATexture = textureLoader.load('../assets/textures/doorframe.png');
const slidingdoorframeAMaterial = new THREE.MeshStandardMaterial({ map: slidingdoorframeATexture });
const slidingdoorframeAGeometry = new THREE.BoxGeometry(1.5, 21, 1.5);
const slidingdoorframeA = new THREE.Mesh(slidingdoorframeAGeometry, slidingdoorframeAMaterial);
scene.add(slidingdoorframeA);

slidingdoorframeA.position.set(-20, 14.7, 2.5);

// Frame B
const slidingdoorframeB = new THREE.Mesh(slidingdoorframeAGeometry, slidingdoorframeAMaterial);
scene.add(slidingdoorframeB);

slidingdoorframeB.position.set(-20, 14.7, -12);

// Frame: Rows
const slidingdoorframeRowsTexture = textureLoader.load('../assets/textures/doorframe.png');
const slidingdoorframeRowsMaterial = new THREE.MeshStandardMaterial({ map: slidingdoorframeRowsTexture });
const slidingdoorframeRowsGeometry = new THREE.BoxGeometry(1.5, 1.5, 16);
const slidingdoorframerowA = new THREE.Mesh(slidingdoorframeRowsGeometry, slidingdoorframeRowsMaterial);
scene.add(slidingdoorframerowA);

slidingdoorframerowA.position.set(-20, 25.9, -4.75);

// Row B
const slidingdoorframeRowBGeometry = new THREE.BoxGeometry(1.5, 1, 16);
const slidingdoorframerowB = new THREE.Mesh(slidingdoorframeRowBGeometry, slidingdoorframeRowsMaterial);
scene.add(slidingdoorframerowB);

slidingdoorframerowB.position.set(-20.2, 20, -4.7);

// Sliding Door B
// Door B
const slidingdoorB1exture = textureLoader.load('../assets/textures/slidingdoorB1.png');
const slidingdoorB1Material = new THREE.MeshStandardMaterial({ map: slidingdoorB1exture });
const slidingdoorGeometry = new THREE.BoxGeometry(0.5, 15.4, 8);
const slidingdoorA = new THREE.Mesh(slidingdoorGeometry, slidingdoorB1Material);
scene.add(slidingdoorA);
slidingdoorA.position.set(-20.5, 11.9, -2.25);

// Door B
const slidingdoorB2Texture = textureLoader.load('../assets/textures/slidingdoorB2.png');
const slidingdoorB2Material = new THREE.MeshStandardMaterial({ map: slidingdoorB2Texture });
const slidingdoorB = new THREE.Mesh(slidingdoorGeometry, slidingdoorB2Material);
scene.add(slidingdoorB);
slidingdoorB.position.set(-20, 11.9, -7.25);

// Window1
const window1Texture = textureLoader.load('../assets/textures/Window1.png');
const window1Material = new THREE.MeshStandardMaterial({ map: window1Texture });
const windowGeometry = new THREE.BoxGeometry(0.5, 4.6, 8);
const windowA = new THREE.Mesh(windowGeometry, window1Material);
scene.add(windowA);
windowA.position.set(-20.5, 22.8, -2.25);

// Window2
const window2Texture = textureLoader.load('../assets/textures/Window2.png');
const window2Material = new THREE.MeshStandardMaterial({ map: window2Texture });
const windowB = new THREE.Mesh(windowGeometry, window2Material);
scene.add(windowB);
windowB.position.set(-20, 22.8, -7.25);

// Ceiling
const ceilingTexture = textureLoader.load('../assets/textures/ceiling.png');
const ceilingMaterial = new THREE.MeshStandardMaterial({ map: ceilingTexture });
const ceilingGeometry = new THREE.BoxGeometry(39, 2, 34);
const ceiling = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
scene.add(ceiling);

ceiling.position.set(-1.3, 27.7, -12);

const ceilingLightGeometry = new THREE.SphereGeometry(6, 32, 40); 
const ceilingLightMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff}); 
const ceilingLight = new THREE.Mesh(ceilingLightGeometry, ceilingLightMaterial);
scene.add(ceilingLight);
ceilingLight.position.set(-1.3, 30, -12);

// Glass Panel
const glassATexture = textureLoader.load('../assets/textures/glass.png');
const glassAMaterial = new THREE.MeshStandardMaterial({ map: glassATexture, transparent: true }); 
const metalTexture = textureLoader.load('../assets/textures/glass.png');
const metalMaterial = new THREE.MeshStandardMaterial({ map: metalTexture }); 
const glassAGeometry = new THREE.BoxGeometry(10, 17.5, 0.5);
const glassMaterials = [
    metalMaterial, // right
    metalMaterial, // left
    metalMaterial, // top
    metalMaterial, // bottom
    glassAMaterial, // front
    glassAMaterial  // back
];
const glass = new THREE.Mesh(glassAGeometry, glassMaterials);
scene.add(glass);

glass.position.set(8.5, 12.8, 5);

// Curtain
const curtainTexture = textureLoader.load('../assets/textures/curtain.png');
const curtainMaterial = new THREE.MeshStandardMaterial({ map: curtainTexture });

const curtainATexture = textureLoader.load('../assets/textures/curtainA.png');
const curtainAMaterial = new THREE.MeshStandardMaterial({ map: curtainATexture, transparent: true }); 
const curtainAGeometry = new THREE.BoxGeometry(7.5, 18, 0.5);
const curtainAMaterials = [
    curtainMaterial, // right
    curtainMaterial, // left
    curtainMaterial, // top
    curtainMaterial, // bottom
    curtainAMaterial, // front
    curtainAMaterial  // back
];
const curtainA = new THREE.Mesh(curtainAGeometry, curtainAMaterials);
scene.add(curtainA);
curtainA.position.set(10, 13.5, 3.5);

const curtainBGeometry = new THREE.BoxGeometry(5.5, 18, 0.5);
const curtainB = new THREE.Mesh(curtainBGeometry, curtainAMaterials);
scene.add(curtainB);
curtainB.position.set(-9, 13.5, 3.5);

// Ceiling Mount
const ceilingmountTexture = textureLoader.load('../assets/textures/wall.png');
const ceilingmountMaterial = new THREE.MeshStandardMaterial({ map: ceilingmountTexture });
const ceilingmountGeometry = new THREE.BoxGeometry(26, 1, 2);
const ceilingmount = new THREE.Mesh(ceilingmountGeometry, ceilingmountMaterial);
scene.add(ceilingmount);

ceilingmount.position.set(1.3, 23, 3.5);

// Outdoors
// Platform
const platformwoodTexture = textureLoader.load('../assets/textures/platformwood.png');
const platformwoodMaterial = new THREE.MeshStandardMaterial({ map: platformwoodTexture });
const platformTexture = textureLoader.load('../assets/textures/platformsides.png');
const platformsidesMaterial = new THREE.MeshStandardMaterial({ map: platformTexture });
const platformGeometry = new THREE.BoxGeometry(24.5, 1, 7);
const platformMaterials = [
    platformsidesMaterial, // right
    platformsidesMaterial, // left
    platformwoodMaterial, // top
    platformwoodMaterial, // bottom
    platformsidesMaterial, // front
    platformsidesMaterial  // back
];
const platform = new THREE.Mesh(platformGeometry, platformMaterials);
scene.add(platform);

platform.position.set(1.3, 3.65, 8.9);

// Platform stands
const platformstandTexture = textureLoader.load('../assets/textures/platformstand.png');
const platformstandMaterial = new THREE.MeshStandardMaterial({ map: platformstandTexture });
const platformstandmGeometry = new THREE.BoxGeometry(1, 4, 1);
const platformstandA = new THREE.Mesh(platformstandmGeometry, platformstandMaterial);
scene.add(platformstandA);
platformstandA.position.set(-9.5, 1.5, 11);

const platformstandB = new THREE.Mesh(platformstandmGeometry, platformstandMaterial);
scene.add(platformstandB);
platformstandB.position.set(12, 1.5, 11);

// Mini Roof
const miniroofTexture = textureLoader.load('../assets/textures/miniroof.png');
const miniroofMaterial = new THREE.MeshStandardMaterial({ map: miniroofTexture });
const miniroofGeometry = new THREE.BoxGeometry(24.5, 1, 5);
const miniroof = new THREE.Mesh(miniroofGeometry, miniroofMaterial);
scene.add(miniroof);

miniroof.position.set(1.3, 23, 7.8);
miniroof.rotation.set(Math.PI / 16, 0, 0);

// Rock
const rockTexture = textureLoader.load('../assets/textures/rock.png');
const rockMaterial = new THREE.MeshStandardMaterial({ map: rockTexture });
const rockGeometry = new THREE.BoxGeometry(6, 1, 3);
const rock = new THREE.Mesh(rockGeometry, rockMaterial);
scene.add(rock);

rock.position.set(-5, -0.3, 14);

// Carpet
const outdoorcarpetTexture = textureLoader.load('../assets/textures/outdoorcarpet.png');
const outdoorcarpetMaterial = new THREE.MeshStandardMaterial({ map: outdoorcarpetTexture });
const outdoorcarpetGeometry = new THREE.BoxGeometry(13, 0.2, 9);
const outdoorcarpet = new THREE.Mesh(outdoorcarpetGeometry, outdoorcarpetMaterial);
scene.add(outdoorcarpet);

outdoorcarpet.position.set(6, -0.7, 19);

// Glass Windows
const glasswindowTexture = textureLoader.load('../assets/textures/glasswindow.png');
const glasswindowMaterial = new THREE.MeshStandardMaterial({ map: glasswindowTexture });

const glasswindowAGeometry = new THREE.BoxGeometry(2, 15, 21);
const glasswindowA = new THREE.Mesh(glasswindowAGeometry, glasswindowMaterial);
scene.add(glasswindowA);
glasswindowA.position.set(17.8, 40, -11.9);

const glasswindowBGeometry = new THREE.BoxGeometry(2, 15, 21);
const glasswindowB = new THREE.Mesh(glasswindowBGeometry, glasswindowMaterial);
scene.add(glasswindowB);
glasswindowB.position.set(-30.3, 40, -11.9);

const glasswindowCGeometry = new THREE.BoxGeometry(21, 15, 2);
const glasswindowC = new THREE.Mesh(glasswindowCGeometry, glasswindowMaterial);
scene.add(glasswindowC);
glasswindowC.position.set(-18, 40, 4.7);

const glasswindowDGeometry = new THREE.BoxGeometry(21, 15, 2);
const glasswindowD = new THREE.Mesh(glasswindowDGeometry, glasswindowMaterial);
scene.add(glasswindowD);
glasswindowD.position.set(6, 40, 4.7);

// 3D Assets
// Cats
loader.load( './assets/3D/tubbs/scene.gltf', function ( gltf ) {
	const tubbs = gltf.scene;
    scene.add( tubbs );

    tubbs.position.set (-6, 5.5, 10);
    tubbs.scale.set(2, 2, 2); 
}, undefined, function ( error ) {
	console.error( error );
} );


loader.load( './assets/3D/Cat/scene.gltf', function ( gltf ) {
	const Cat = gltf.scene;
    scene.add( Cat );

    Cat.position.set (15.2, 10.2, -18);
    Cat.scale.set(0.8, 0.8, 0.8); 
    Cat.rotation.y = - Math.PI/2;
}, undefined, function ( error ) {
	console.error( error );
} );


// Trees
loader.load( './assets/3D/tree/scene.gltf', function ( gltf ) {
	const treeA = gltf.scene;
    scene.add( treeA );

    treeA.position.set (25, 0, 35);
    treeA.scale.set(0.05, 0.05, 0.05); 
}, undefined, function ( error ) {
	console.error( error );
} );

loader.load( './assets/3D/tree/scene.gltf', function ( gltf ) {
    const treeB = gltf.scene;
    scene.add( treeB );

    treeB.position.set (-30, 0, 30);
    treeB.scale.set(0.03, 0.03, 0.03); 

}, undefined, function ( error ) {
	console.error( error );
} );

loader.load( './assets/3D/tree/scene.gltf', function ( gltf ) {
    const treeC = gltf.scene.clone(); // Cloning the tree scene
    scene.add( treeC );

    treeC.position.set( 50, 0, -40 ); // Position of the third tree
    treeC.scale.set( 0.07, 0.07, 0.07 ); // Scale of the third tree
}, undefined, function ( error ) {
    console.error( error );
} );

// Fourth tree
loader.load( './assets/3D/tree/scene.gltf', function ( gltf ) {
    const treeD = gltf.scene.clone(); // Cloning the tree scene
    scene.add( treeD );

    treeD.position.set( 45, 0, 1 ); // Position of the fourth tree
    treeD.scale.set( 0.05, 0.05, 0.05 ); // Scale of the fourth tree
}, undefined, function ( error ) {
    console.error( error );
} );

// Fifth tree
loader.load( './assets/3D/tree/scene.gltf', function ( gltf ) {
    const treeE = gltf.scene.clone(); // Cloning the tree scene
    scene.add( treeE );

    treeE.position.set( -45, 0, -45 ); // Position of the fifth tree
    treeE.scale.set( 0.05, 0.05, 0.05 ); // Scale of the fifth tree
}, undefined, function ( error ) {
    console.error( error );
} );


loader.load( './assets/3D/grass/scene.gltf', function ( gltf ) {
    const grassA = gltf.scene;
    scene.add( grassA );

    grassA.position.set (10, -1, 10);
    grassA.scale.set(0.03, 0.03, 0.03); 
    grassA.rotation.y = Math.PI / 4;

}, undefined, function ( error ) {
	console.error( error );
} );

// Directional light
const directionalLight = new THREE.DirectionalLight(0xFFFFED, 0.5);
scene.add(directionalLight);

// Ambient light
const ambientLight = new THREE.AmbientLight(0xFFFFED, 1); // Soft white light
scene.add(ambientLight);

// Falling Leaves
let leaves, leafGeo;
particles();

function particles() {
    const points = [];

    for (let i = 0; i < 1000; i++) {
        let leaf = new THREE.Vector3(Math.random() * 600 - 300, Math.random() * 600 - 300, Math.random() * 600 - 300);
        points.push(leaf);
    }

    leafGeo = new THREE.BufferGeometry().setFromPoints(points);

    let sprite = new THREE.TextureLoader().load("../assets/textures/leaf.png");
    let leafMaterial = new THREE.PointsMaterial({ size: 2, map: sprite, transparent: true});

    leaves = new THREE.Points(leafGeo, leafMaterial);

    scene.add(leaves);
}

function animateParticles() {
    const positions = leafGeo.attributes.position;

    for (let i = 0; i < positions.count; i++) {
        positions.setY(i, positions.getY(i) - 0.9);

        if (positions.getY(i) < -300) {
            positions.setY(i, 300);
        }
    }

    positions.needsUpdate = true;
}

// Animate scene
function animate() {
  requestAnimationFrame(animate);
  cameraControl.update();
  animateParticles(); 
  renderer.render(scene, camera);
}

animate();
