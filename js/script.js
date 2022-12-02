import RubiksCube from "./RubiksCube.js";
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});

renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.shadowMap.enabled = false;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x99ccff);

document.body.appendChild(renderer.domElement);

camera.position.x = -7.431142130785419;
camera.position.y = 6.905612043117398;
camera.position.z = -7.473329173937004;

var lights = []

var power1 = 0.3;
var power2 = 0.18;


var color = 0xffffff;


var lights_properties = [[15, 15, 15, power1], [-15, -15, -15, power1], [-15, 15, 15, power1], [15, -15, 15, power1], [15, 15, -15, power1], [-15, -15, 15, power1], [15, -15, -15, power1], [-15, 15, -15, power1], [15, 0, 0, power2], [0, 15, 0, power2], [0, 0, 15, power2], [-15, 0, 0, power2], [0, -15, 0, power2], [0, 0, -15, power2]];

for(var i = 0; i < lights_properties.length; i++){
    var light = new THREE.DirectionalLight(color, lights_properties[i][3]);
    lights.push(light);
    light.position.set(lights_properties[i][0], lights_properties[i][1], lights_properties[i][2]);
    light.target.position.set(0, 0, 0);
    light.castShadow = true;
    light.receiveShadow = false;
    scene.add(light);
}

window.addEventListener('resize', function(){
    
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width/height;
    camera.updateProjectionMatrix();
});

var mouse = new THREE.Vector2();
mouse.x = 1;
mouse.y = 1;

var size = 3;
var cube = new RubiksCube(mouse, camera, renderer.domElement, size);
scene.add(cube);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.enablePan = false;
controls.minDistance = 2.2 * size;

controls.maxDistance = 4.2 * size;
controls.enableDamping = true;

window.addEventListener('mousemove', function(event){
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
}, false);

window.addEventListener('mousedown', mouse_down);
window.addEventListener('mouseup', mouse_up);

window.addEventListener('touchstart', function(e){
    mouse.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (e.touches[0].clientY / window.innerHeight) * 2 + 1;


});
window.addEventListener('touchend', function(e){
    mouse.x = (e.changedTouches[0].clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (e.changedTouches[0].clientY / window.innerHeight) * 2 + 1;
});

window.addEventListener('touchstart', mouse_down);
window.addEventListener('touchend', mouse_up);
window.addEventListener('touchend', function(){mouse.x=1;mouse.y=1;});

function mouse_down(){
    cube.handleMouseDown();
    if(cube.intersects){
        controls.enableRotate = false;
    }
    else{
        controls.enableRotate = true;
    }
}

function mouse_up(){
    cube.handleMouseUp();
    controls.enableRotate = true;
}

document.addEventListener('keypress', function(key){
    if(key.code == 'KeyQ'){
        cube.scramble();
    }
    else if(key.code == 'KeyW'){
        cube.undo_moves();
    }
    
});

var update = function(){
    cube.update();
    controls.update();
};

var render = function(){
    renderer.render(scene, camera);
};

var GameLoop = function(){  
    requestAnimationFrame(GameLoop);
    
    render();
    update();
    
};

GameLoop();
