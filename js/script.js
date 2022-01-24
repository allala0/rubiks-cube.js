var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x99ccff);

document.body.appendChild(renderer.domElement);


var cube_colors = [0x0000ff, 0xff0000, 0xffffff, 0x00ff00, 0xff5c00, 0xffff00];

var generate_cube = function(size){
    
    var cubie_size = 1;
    var cubie_color = 0x111111;

    var middle = Math.floor(size/2);
    var spacing = 0.02;

    if(size % 2 == 0){middle -= 0.5;};
    var margin = 0.13;
    var tile_height = 0.07;
    
    var cubies = [];
    var tiles = [];
    var colors = [];
    
    var cubies_group = new THREE.Group();
    var tiles_group = new THREE.Group();

    for(var i = 0; i<size; i++){
        var cubies2 = [];
        var tiles2 = [];
        var r2 = [];
        for(var j = 0; j<size; j++){
            var cubies1 = [];
            var tiles1 = [];
            var r1 = [];
            for(var k = 0; k<size; k++){
                var cubie = new THREE.Mesh(new THREE.BoxGeometry(cubie_size, cubie_size, cubie_size), new THREE.MeshPhongMaterial({color: cubie_color}));

                cubie.castShadow = true;
                cubie.receiveShadow = true;

                cubie.position.x = (spacing + 1) * (i - middle);
                cubie.position.y = (spacing + 1) * (j - middle);
                cubie.position.z = (spacing + 1) * (k - middle);
                cubies_group.add(cubie);
                
                var between = function(value, min, max){return value > min && value < max;};
                
                var r = [1, 2, 3, 4, 5, 6];
                //INSIDE
                if( between(i, 0, size - 1) && between(j, 0, size - 1) && between(k, 0, size - 1)){
                    r = [0, 0, 0, 0, 0, 0];
                //CORNERS
                //up
                
                }else if( i == 0 && j == 0 && k == 0){
                    [r[2], r[3], r[4]] = [0, 0, 0];
                }else if( i == 0 && j == 0 && k == size - 1){
                    [r[0], r[2], r[4]] = [0, 0, 0];
                }else if( i == 0 && j == size - 1 && k == 0){
                    [r[1], r[2], r[3]] = [0, 0, 0];
                }else if( i == 0 && j == size - 1 && k == size - 1){
                    [r[0], r[1], r[2]] = [0, 0, 0];
                //down
                }else if( i == size - 1 && j == 0 && k == 0){
                    [r[3], r[4], r[5]] = [0, 0, 0];
                }else if( i == size - 1 && j == 0 && k == size - 1){
                    [r[0], r[4], r[5]] = [0, 0, 0];
                }else if( i == size - 1 && j == size - 1 && k == 0){
                    [r[1], r[3], r[5]] = [0, 0, 0];
                }else if( i == size - 1 && j == size - 1 && k == size - 1){
                    [r[0], r[1], r[5]] = [0, 0, 0];
                //EDGES
                //up
                }else if( i == 0 && j == 0 && between(k, 0, size - 1)){
                    [r[0], r[2], r[3], r[4]] = [0, 0, 0, 0];
                }else if( i == 0 && j == size - 1 && between(k, 0, size - 1)){
                    [r[0], r[1], r[2], r[3]] = [0, 0, 0, 0];
                }else if( i == 0 && between(j, 0, size - 1) && k == 0){
                    [r[1], r[2], r[3], r[4]] = [0, 0, 0, 0];
                }else if( i == 0 && between(j, 0, size - 1) && k == size - 1){
                    [r[0], r[1], r[2], r[4]] = [0, 0, 0, 0];
                //middle
                }else if( between(i, 0, size - 1) && j == 0 && k == 0){
                    [r[2], r[3], r[4], r[5]] = [0, 0, 0, 0];
                }else if( between(i, 0, size - 1) && j == 0 && k == size - 1){
                    [r[0], r[2], r[4], r[5]] = [0, 0, 0, 0];
                }else if( between(i, 0, size - 1) && j == size - 1 && k == 0){
                    [r[1], r[2], r[3], r[5]] = [0, 0, 0, 0];
                }else if( between(i, 0, size - 1) && j == size - 1 && k == size - 1){
                    [r[0], r[1], r[2], r[5]] = [0, 0, 0, 0];
                //down
                }else if( i == size - 1 && j == 0 && between(k, 0, size - 1)){
                    [r[0], r[3], r[4], r[5]] = [0, 0, 0, 0];
                }else if( i == size - 1 && j == size - 1 && between(k, 0, size - 1)){
                    [r[0], r[1], r[3], r[5]] = [0, 0, 0, 0];
                }else if( i == size - 1 && between(j, 0, size - 1) && k == 0){
                    [r[1], r[3], r[4], r[5]] = [0, 0, 0, 0];
                }else if( i == size - 1 && between(j, 0, size - 1) && k == size - 1){
                    [r[0], r[1], r[4], r[5]] = [0, 0, 0, 0];
                //CENTERS
                //up
                }else if( i == 0 && between(j, 0, size - 1) && between(k, 0, size - 1)){
                    [r[0], r[1], r[2], r[3], r[4]] = [0, 0, 0, 0, 0];
                //middle
                }else if( between(i, 0, size - 1) && between(j, 0, size - 1) && k == 0){
                    [r[1], r[2], r[3], r[4], r[5]] = [0, 0, 0, 0, 0];
                }else if( between(i, 0, size - 1) && between(j, 0, size - 1) && k == size - 1){
                    [r[0], r[1], r[2], r[4], r[5]] = [0, 0, 0, 0, 0];
                }else if( between(i, 0, size - 1) && j == 0 && between(k, 0, size - 1)){
                    [r[0], r[2], r[3], r[4], r[5]] = [0, 0, 0, 0, 0];
                }else if( between(i, 0, size - 1) && j == size - 1 && between(k, 0, size - 1)){
                    [r[0], r[1], r[2], r[3], r[5]] = [0, 0, 0, 0, 0];
                // down
                }else if( i == size - 1 && between(j, 0, size - 1) && between(k, 0, size - 1)){
                    [r[0], r[1], r[3], r[4], r[5]] = [0, 0, 0, 0, 0];
                }
                var t = []
                for(var l = 0; l < r.length; l++){
                    
                    if(r[l] != 0){
                        
                        var position = null;
                        var tile_size = null;
                        color = cube_colors[l];
                        
                        if(r[l] == 1){
                            position = [(spacing + 1) * (i - middle), (spacing + 1) * (j - middle), -(spacing * (middle) + size/2)];
                            tile_size = [cubie_size - margin, cubie_size - margin, tile_height];

                        }
                        else if(r[l] == 2){
                            position = [-(spacing * (middle) + size/2), (spacing + 1) * (i - middle), (spacing + 1) * (k - middle)];
                            tile_size = [ tile_height, cubie_size - margin, cubie_size - margin];

                        }
                        else if(r[l] == 3){
                            position = [(spacing + 1) * (j - middle), -(spacing * (middle) + size/2), (spacing + 1) * (k - middle)];
                            tile_size = [ cubie_size - margin, tile_height, cubie_size - margin];
  
                        }
  
                        else if(r[l] == 4){
                            position = [(spacing + 1) * (i - middle), (spacing + 1) * (j - middle), (spacing * (middle) + size/2)];
                            tile_size = [cubie_size - margin, cubie_size - margin, tile_height];
   
                        }
                        else if(r[l] == 5){
                            position = [(spacing * (middle) + size/2), (spacing + 1) * (i - middle), (spacing + 1) * (k - middle)];
                            tile_size = [ tile_height, cubie_size - margin, cubie_size - margin];

                        }
                        else if(r[l] == 6){
                            position = [(spacing + 1) * (j - middle), (spacing * (middle) + size/2), (spacing + 1) * (k - middle)];
                            tile_size = [ cubie_size - margin, tile_height, cubie_size - margin];
  
                        }

                        var tile = new THREE.Mesh(new THREE.BoxGeometry(tile_size[0], tile_size[1], tile_size[2]), new THREE.MeshPhongMaterial({color: color}));
                        tile.position.set(position[0], position[1], position[2]);
                        tile.castShadow = true;
                        tile.receiveShadow = true;
                        tiles_group.add(tile);
                        t.push(tile);

                        
                    }else{
                        t.push(null);
                    }

                }
                cubies1.push(cubie);
                tiles1.push(t);
                r1.push(r);
//                arr1.push([cubie, tiles, r]);
            }
            cubies2.push(cubies1);
            tiles2.push(tiles1);
            r2.push(r1);
        }
        cubies.push(cubies2);
        tiles.push(tiles2);
        colors.push(r2);
    }
    scene.add(cubies_group);
    scene.add(tiles_group);
    return [cubies, tiles, cubies_group, tiles_group, colors];
};

var move = function(cube, axis, layer, direction, qty=1){
    var colors = cube[4];

    for(var i = 0; i < qty; i++){
            var buffer = [];
        for(var i = 0; i < colors.length; i++){
            var cp2 = []
            for(var j = 0; j < colors[i].length; j++){
                var cp1 = []
                for(var k = 0; k < colors[i][j].length; k++){
                    cp1.push(colors[i][j][k].slice());
                }
                cp2.push(cp1);

            }
            buffer.push(cp2);
        }
        if(axis == 'Y'){
            for(var j = 0; j<buffer[layer].length; j++){
                for(var k = 0; k < buffer[layer][j].length; k++){
                    var e = buffer[layer][j][k];
                    if(direction == 0){
                        [e[0], e[1], e[3], e[4]] = [e[4], e[0], e[1], e[3]]
                        cube[4][layer][k][buffer.length - 1 - j] = e
                    }

                    else if(direction == 1){
                        [e[4], e[0], e[1], e[3]] = [e[0], e[1], e[3], e[4]]
                        cube[4][layer][buffer.length - 1 - k][j] = e  

                    }
                }
            }
        }
        else if(axis == 'X'){
            for(var j = 0; j<buffer.length; j++){
                for(var k = 0; k < buffer[j].length; k++){
                    var e = buffer[j][k][layer];
                    if(direction == 0){
                        [e[1], e[2], e[4], e[5]] = [e[2], e[4], e[5], e[1]]
                        cube[4][k][buffer.length - 1 - j][layer] = e
                    }

                    else if(direction == 1){
                        [[e[2], e[4], e[5], e[1]] = [e[1], e[2], e[4], e[5]]]
                        cube[4][buffer.length - 1 - k][j][layer] = e 

                    }
                }
            }
        }
        else if(axis == 'Z'){
            for(var j = 0; j<buffer.length; j++){
                for(var k = 0; k < buffer[j][layer].length; k++){
                    var e = buffer[j][layer][k];
                    if(direction == 0){
                        [e[0], e[2], e[3], e[5]] = [e[2], e[3], e[5], e[0]]
                        cube[4][k][layer][buffer.length - 1 - j] = e
                    }

                    else if(direction == 1){
                        [e[2], e[3], e[5], e[0]] = [e[0], e[2], e[3], e[5]]
                        cube[4][buffer.length - 1 - k][layer][j] = e  

                    }
                }
            }
        }
    }

};
var adjust_tiles = function(cube){
    
    var tiles = cube[1];
    var colors = cube[4];
    
    var left_colors = [];
    var front_colors = [];
    var down_colors = [];
    var right_colors = [];
    var up_colors = [];
    var back_colors = [];
    
    var left_tiles = [];
    var front_tiles = [];
    var down_tiles = [];
    var right_tiles = [];
    var up_tiles = [];
    var back_tiles = [];
    
    var left_tiles_positions = [];
    var front_tiles_positions = [];
    var down_tiles_positions = [];
    var right_tiles_positions = [];
    var up_tiles_positions = [];
    var back_tiles_positions = [];
    
    for(var i = 0; i < colors.length; i++){
        var right_colors_row = []
        var right_tiles_row = []
        var right_tiles_positions_row = []
        for(var j = 0; j < colors[i].length; j++){
            right_colors_row.push(colors[i][j][0][0]);
            right_tiles_row.push(tiles[i][j][0][0]);
            right_tiles_positions_row.push({...tiles[i][j][0][0].position});
        }
        right_colors.push(right_colors_row)
        right_tiles.push(right_tiles_row)
        right_tiles_positions.push(right_tiles_positions_row)
    }
    
    for(var i = 0; i < colors.length; i++){
        var left_colors_row = []
        var left_tiles_row = []
        var left_tiles_positions_row = []
        for(var j = 0; j < colors[i].length; j++){
            left_colors_row.push(colors[i][j][colors.length - 1][3]);
            left_tiles_row.push(tiles[i][j][colors.length - 1][3]);
            left_tiles_positions_row.push({...tiles[i][j][colors.length - 1][3].position});
        }
        left_colors.push(left_colors_row)
        left_tiles.push(left_tiles_row)
        left_tiles_positions.push(left_tiles_positions_row)
    }

    for(var i = 0; i < colors.length; i++){
        var front_colors_row = []
        var front_tiles_row = []
        var front_tiles_positions_row = []
        for(var j = 0; j < colors[i][0].length; j++){
            front_colors_row.push(colors[i][0][j][1]);
            front_tiles_row.push(tiles[i][0][j][1]);
            front_tiles_positions_row.push({...tiles[i][0][j][1].position});
        }
        front_colors.push(front_colors_row)
        front_tiles.push(front_tiles_row)
        front_tiles_positions.push(front_tiles_positions_row)
    }
    
   for(var i = 0; i < colors.length; i++){
        var back_colors_row = []
        var back_tiles_row = []
        var back_tiles_positions_row = []
        for(var j = 0; j < colors[i][colors.length - 1].length; j++){
            back_colors_row.push(colors[i][colors.length - 1][j][4]);
            back_tiles_row.push(tiles[i][colors.length - 1][j][4]);
            back_tiles_positions_row.push({...tiles[i][colors.length - 1][j][4].position});
        }
        back_colors.push(back_colors_row)
        back_tiles.push(back_tiles_row)
        back_tiles_positions.push(back_tiles_positions_row)
    }
    
    for(var i = 0; i < colors[0].length; i++){
        var up_colors_row = []
        var up_tiles_row = []
        var up_tiles_positions_row = []
        for(var j = 0; j < colors[i].length; j++){
            up_colors_row.push(colors[0][i][j][5]);
            up_tiles_row.push(tiles[0][i][j][5]);
            up_tiles_positions_row.push({...tiles[0][i][j][5].position});
        }
        up_colors.push(up_colors_row)
        up_tiles.push(up_tiles_row)
        up_tiles_positions.push(up_tiles_positions_row)
    }
    
    for(var i = 0; i < colors[colors.length - 1].length; i++){
        var down_colors_row = []
        var down_tiles_row = []
        var down_tiles_positions_row = []
        for(var j = 0; j < colors[i].length; j++){
            down_colors_row.push(colors[colors.length - 1][i][j][2]);
            down_tiles_row.push(tiles[colors.length - 1][i][j][2]);
            down_tiles_positions_row.push({...tiles[colors.length - 1][i][j][2].position});
        }
        down_colors.push(down_colors_row)
        down_tiles.push(down_tiles_row)
        down_tiles_positions.push(down_tiles_positions_row)
    }
    
    for(var i = 0; i < left_tiles.length; i++){
        for(var j = 0; j < left_tiles[i].length; j++){
            left_tiles[left_tiles.length - 1 - i][j].position.x = left_tiles_positions[j][i]['x'];
            left_tiles[left_tiles.length - 1 - i][j].position.y = left_tiles_positions[j][i]['y'];
        }
    }
    for(var i = 0; i < right_tiles.length; i++){
        for(var j = 0; j < right_tiles[i].length; j++){
            right_tiles[right_tiles.length - 1 - i][j].position.x = right_tiles_positions[j][i]['x'];
            right_tiles[right_tiles.length - 1 - i][j].position.y = right_tiles_positions[j][i]['y'];
        }
    }
    for(var i = 0; i < front_tiles.length; i++){
        for(var j = 0; j < front_tiles[i].length; j++){
            front_tiles[i][j].position.z = front_tiles_positions[front_tiles.length - 1- i][j]['z'];
            front_tiles[i][j].position.y = front_tiles_positions[front_tiles.length - 1- i][j]['y'];
        }
    }
    for(var i = 0; i < back_tiles.length; i++){
        for(var j = 0; j < back_tiles[i].length; j++){
            back_tiles[i][j].position.z = back_tiles_positions[front_tiles.length - 1- i][j]['z'];
            back_tiles[i][j].position.y = back_tiles_positions[front_tiles.length - 1- i][j]['y'];
        }
    }

};
var cube_size = 3;
var cube = generate_cube(cube_size);
adjust_tiles(cube);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.enablePan = false;
controls.minDistance = 1.5*cube_size;
controls.maxDistance = 3*cube_size;
controls.enableDamping = true;

//move(cube, 'Y', 0, 0);



camera.position.z = 2*cube_size;


var color = 0xffffff;

var lights = []

var power1 = 0.3;
var power2 = 0.18;


var lights_properties = [[15, 15, 15, power1], [-15, -15, -15, power1], [-15, 15, 15, power1], [15, -15, 15, power1], [15, 15, -15, power1], [-15, -15, 15, power1], [15, -15, -15, power1], [-15, 15, -15, power1], [15, 0, 0, power2], [0, 15, 0, power2], [0, 0, 15, power2], [-15, 0, 0, power2], [0, -15, 0, power2], [0, 0, -15, power2]];

for(var i = 0; i < lights_properties.length - 1; i++){
//    console.log(lights_properties[i]);
    var light = new THREE.DirectionalLight(color, lights_properties[i][3]);
    lights.push(light);
    light.position.set(lights_properties[i][0], lights_properties[i][1], lights_properties[i][2]);
    light.target.position.set(0, 0, 0);
    light.castShadow = true;
    light.receiveShadow = false;
    scene.add(light);
//    var helper = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({color: 0x000000}));
//    helper.position.set(lights_properties[i][0], lights_properties[i][1], lights_properties[i][2]);
//    scene.add(helper);
//    var helper = new THREE.CameraHelper( light.shadow.camera );
//    scene.add( helper );
}

window.addEventListener('resize', function(){
    
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width/height;
    camera.updateProjectionMatrix();
    
});

var mouse = new THREE.Vector2();
var raycaster = new THREE.Raycaster();

window.addEventListener('mousemove', function(event){
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    
    
    
}, false);

var selectedCubie = null;
var mouseDown = null;

window.addEventListener('mousedown', function(event){

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);
//    const intersects2 = raycaster.intersectObjects(cube[2].children);
    const intersects2 = raycaster.intersectObjects(cube[3].children);
    if(intersects.length > 0 && intersects2.length > 0){
        if(intersects[0].object != intersects2[0].object){return;}
//        if(intersects[0]){}
        controls.enableRotate = false;
        selectedCubie = intersects[0].object;
        mouseDown = {...mouse}
    }
    else{
        controls.enableRotate = true;

    }
    
});

window.addEventListener('mouseup', function(event){
    if(selectedCubie != null){
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children);
    //    const intersects2 = raycaster.intersectObjects(cube[3].children);
        if(intersects.length > 0){
            controls.enableRotate = false;
            selectedCubie = intersects[0].object;
        }

        deltax = mouseDown.x - mouse.x;
        deltay = mouseDown.y - mouse.y;
        if(Math.abs(deltax) > Math.abs(deltay)){

            if(mouseDown.x > mouse.x){
                move(cube, 'Y', 0, 0);
            }else if(mouseDown.x < mouse.x){
                move(cube, 'Y', 0, 1);
            }
        }
        else{

            if(mouseDown.y > mouse.y){
                move(cube, 'X', 0, 0);
            }else if(mouseDown.y < mouse.y){
                move(cube, 'X', 0, 1);
            }
        
    }
}

    
    mouseDown = null;
    selectedCubie = null;
    controls.enableRotate = true;

    
});

function resetMaterials(){
    for(var i = 0; i < cube[0].length; i++){
        for(var j = 0; j < cube[0][i].length; j++){
            for(var k = 0; k < cube[0][i][j].length; k++){
//                cube[0][i][j][k].material.transparent = false;
            }    
        }    
    }    
    
    for(var i = 0; i < cube[1].length; i++){
        for(var j = 0; j < cube[1][i].length; j++){
            for(var k = 0; k < cube[1][i][j].length; k++){
                for(var l = 0; l < cube[1][i][j][k].length; l++){
                    if(cube[1][i][j][k][l] != null){
//                        cube[1][i][j][k][l].material.transparent = false;
//                        cube[1][i][j][k][l].material.opacity = 1;
                    }
                }    
            }    
        }    
    }   
}

function hover(){
    
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(cube[3].children);
    if(intersects.length > 0){
//        intersects[0].object.material.transparent = true;
//        intersects[0].object.material.opacity = 0.5;
    }
}


var update = function(){
//    console.log(camera.position);
    controls.update();
    resetMaterials();
    hover();

    for(var i = 0; i < cube[4].length; i++){
        for(var j = 0; j < cube[4][i].length; j++){
            for(var k = 0; k < cube[4][i][j].length; k++){
                var tiles = cube[1][i][j][k];
                var r = cube[4][i][j][k];
                
                for(var l = 0; l < r.length; l++){
                    if(r[l] != 0){
                        tiles[l].material.color.set(cube_colors[r[l] - 1]);
                    }
                }
            }   
        }        
    }
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