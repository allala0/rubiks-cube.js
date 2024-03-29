import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';

class RubiksCube extends THREE.Group{
    constructor(size=3, camera=null, domElement=null, controls=null){
        super();
        this.opacity = 1;
        this.color = 0xffffff;
        this.select_color = 0xcccccc;
        
        this.color = 0x000000;
        this.select_color = 0xeeeeee;
        
        this.size = size;
        this.colors = [0x0000ff, 0xffffff, 0xff5c00, 0x00ff00, 0xffff00, 0xff0000];
        this.cube = this.generate();
        this.model = this.generate_model();
        this.move_queue = [];
        this.current_move = null;
        this.current_layer_tiles = null;
        this.current_layer_cubies = null;
        this.step = null;
        this.moves_executed = [];
        this.isSolved = true;
        this.move_speed = 0.075;

        this.index = null;
        this.ray = null;
        this.side = null;

        this.intersects = false;

        this.raycaster = new THREE.Raycaster();

        this.mouse = new THREE.Vector2(1, 1);

        this.camera = camera;
        this.domElement = domElement;
        this.controls = controls;
        this.controlsLastEnabled = null;

        if(this.camera !== null && this.domElement !== null){
            this.domElement.addEventListener('mousedown', () => {
                this.handleMouseDown();
                this.controlsLastEnabled = this.controls?.enableRotate;
                if(this.controls !== null) this.controls.enableRotate = !this.intersects;
            });
            
            this.domElement.addEventListener('mouseup', () => {
                this.handleMouseUp();
                if(this.controls !== null && this.controlsLastEnabled !== null) this.controls.enableRotate = this.controlsLastEnabled;
            });

            this.domElement.addEventListener('mousemove', event => {
                this.mouse.x = ((event.clientX - this.domElement.getBoundingClientRect().left) / this.domElement.clientWidth) * 2 - 1;
                this.mouse.y = - ((event.clientY - this.domElement.getBoundingClientRect().top) / this.domElement.clientHeight) * 2 + 1;
            });
        }
    }
    
    generate(){
        let cube = [];
        for(let i = 0; i<this.size; i++){
            let layer = [];
            for(let j = 0; j<this.size; j++){
                let row = [];
                for(let k = 0; k<this.size; k++){

                    let between = function(value, min, max){
                        return value > min && value < max;
                    };
                
                    let cubie = [0, 1, 2, 3, 4, 5];
                
                    if( between(i, 0, this.size - 1) && between(j, 0, this.size - 1) && between(k, 0, this.size - 1)){
                        cubie = [null, null, null, null, null, null];
                
                
                    }
                    else if( i == 0 && j == 0 && k == 0){
                        [cubie[2], cubie[3], cubie[4]] = [null, null, null];
                    }
                    else if( i == 0 && j == 0 && k == this.size - 1){
                        [cubie[0], cubie[2], cubie[4]] = [null, null, null];
                    }
                    else if( i == 0 && j == this.size - 1 && k == 0){
                        [cubie[1], cubie[2], cubie[3]] = [null, null, null];
                    }
                    else if( i == 0 && j == this.size - 1 && k == this.size - 1){
                        [cubie[0], cubie[1], cubie[2]] = [null, null, null];
                
                    }
                    else if( i == this.size - 1 && j == 0 && k == 0){
                        [cubie[3], cubie[4], cubie[5]] = [null, null, null];
                    }
                    else if( i == this.size - 1 && j == 0 && k == this.size - 1){
                        [cubie[0], cubie[4], cubie[5]] = [null, null, null];
                    }
                    else if( i == this.size - 1 && j == this.size - 1 && k == 0){
                        [cubie[1], cubie[3], cubie[5]] = [null, null, null];
                    }
                    else if( i == this.size - 1 && j == this.size - 1 && k == this.size - 1){
                        [cubie[0], cubie[1], cubie[5]] = [null, null, null];
                
                
                    }
                    else if( i == 0 && j == 0 && between(k, 0, this.size - 1)){
                        [cubie[0], cubie[2], cubie[3], cubie[4]] = [null, null, null, null];
                    }
                    else if( i == 0 && j == this.size - 1 && between(k, 0, this.size - 1)){
                        [cubie[0], cubie[1], cubie[2], cubie[3]] = [null, null, null, null];
                    }
                    else if( i == 0 && between(j, 0, this.size - 1) && k == 0){
                        [cubie[1], cubie[2], cubie[3], cubie[4]] = [null, null, null, null];
                    }
                    else if( i == 0 && between(j, 0, this.size - 1) && k == this.size - 1){
                        [cubie[0], cubie[1], cubie[2], cubie[4]] = [null, null, null, null];
                
                    }
                    else if( between(i, 0, this.size - 1) && j == 0 && k == 0){
                        [cubie[2], cubie[3], cubie[4], cubie[5]] = [null, null, null, null];
                    }
                    else if( between(i, 0, this.size - 1) && j == 0 && k == this.size - 1){
                        [cubie[0], cubie[2], cubie[4], cubie[5]] = [null, null, null, null];
                    }
                    else if( between(i, 0, this.size - 1) && j == this.size - 1 && k == 0){
                        [cubie[1], cubie[2], cubie[3], cubie[5]] = [null, null, null, null];
                    }
                    else if( between(i, 0, this.size - 1) && j == this.size - 1 && k == this.size - 1){
                        [cubie[0], cubie[1], cubie[2], cubie[5]] = [null, null, null, null];
                
                    }
                    else if( i == this.size - 1 && j == 0 && between(k, 0, this.size - 1)){
                        [cubie[0], cubie[3], cubie[4], cubie[5]] = [null, null, null, null];
                    }
                    else if( i == this.size - 1 && j == this.size - 1 && between(k, 0, this.size - 1)){
                        [cubie[0], cubie[1], cubie[3], cubie[5]] = [null, null, null, null];
                    }
                    else if( i == this.size - 1 && between(j, 0, this.size - 1) && k == 0){
                        [cubie[1], cubie[3], cubie[4], cubie[5]] = [null, null, null, null];
                    }
                    else if( i == this.size - 1 && between(j, 0, this.size - 1) && k == this.size - 1){
                        [cubie[0], cubie[1], cubie[4], cubie[5]] = [null, null, null, null];
                
                
                    }
                    else if( i == 0 && between(j, 0, this.size - 1) && between(k, 0, this.size - 1)){
                        [cubie[0], cubie[1], cubie[2], cubie[3], cubie[4]] = [null, null, null, null, null];
                
                    }
                    else if( between(i, 0, this.size - 1) && between(j, 0, this.size - 1) && k == 0){
                        [cubie[1], cubie[2], cubie[3], cubie[4], cubie[5]] = [null, null, null, null, null];
                    }
                    else if( between(i, 0, this.size - 1) && between(j, 0, this.size - 1) && k == this.size - 1){
                        [cubie[0], cubie[1], cubie[2], cubie[4], cubie[5]] = [null, null, null, null, null];
                    }
                    else if( between(i, 0, this.size - 1) && j == 0 && between(k, 0, this.size - 1)){
                        [cubie[0], cubie[2], cubie[3], cubie[4], cubie[5]] = [null, null, null, null, null];
                    }
                    else if( between(i, 0, this.size - 1) && j == this.size - 1 && between(k, 0, this.size - 1)){
                        [cubie[0], cubie[1], cubie[2], cubie[3], cubie[5]] = [null, null, null, null, null];
                
                    }
                    else if( i == this.size - 1 && between(j, 0, this.size - 1) && between(k, 0, this.size - 1)){
                        [cubie[0], cubie[1], cubie[3], cubie[4], cubie[5]] = [null, null, null, null, null];
                    }

                    row.push(cubie);
                }
                layer.push(row);
            }
            cube.push(layer);
        }
        return cube;
    }
    
    move(axis, layer, direction, qty=1){

        for(let counter = 0; counter < qty; counter++){
            
            let buffer = [];
            
            for(let i = 0; i < this.cube.length; i++){
                let layer_copy = [];
                for(let j = 0; j < this.cube[i].length; j++){
                    let row_copy = [];
                    for(let k = 0; k < this.cube[i][j].length; k++){
                        row_copy.push(this.cube[i][j][k].slice());
                    }
                    layer_copy.push(row_copy);

                }
                buffer.push(layer_copy);
            }
            if(axis == 'Y'){
                for(let j = 0; j<buffer[layer].length; j++){
                    for(let k = 0; k < buffer[layer][j].length; k++){
                        let e = buffer[layer][j][k];
                        if(direction == 1){
                            [e[0], e[1], e[3], e[4]] = [e[4], e[0], e[1], e[3]];
                            this.cube[layer][k][buffer.length - 1 - j] = e;
                        }

                        else if(direction == 0){
                            [e[4], e[0], e[1], e[3]] = [e[0], e[1], e[3], e[4]];
                            this.cube[layer][buffer.length - 1 - k][j] = e;  

                        }
                    }
                }
            }
            else if(axis == 'Z'){
                for(let j = 0; j<buffer.length; j++){
                    for(let k = 0; k < buffer[j].length; k++){
                        let e = buffer[j][k][layer];
                        if(direction == 1){
                            [e[1], e[2], e[4], e[5]] = [e[2], e[4], e[5], e[1]];
                            this.cube[k][buffer.length - 1 - j][layer] = e;
                        }

                        else if(direction == 0){
                            [[e[2], e[4], e[5], e[1]] = [e[1], e[2], e[4], e[5]]];
                            this.cube[buffer.length - 1 - k][j][layer] = e; 

                        }
                    }
                }
            }
            else if(axis == 'X'){
                for(let j = 0; j<buffer.length; j++){
                    for(let k = 0; k < buffer[j][layer].length; k++){
                        let e = buffer[j][layer][k];
                        if(direction == 0){
                            [e[0], e[2], e[3], e[5]] = [e[2], e[3], e[5], e[0]];
                            this.cube[k][layer][buffer.length - 1 - j] = e;
                        }

                        else if(direction == 1){
                            [e[2], e[3], e[5], e[0]] = [e[0], e[2], e[3], e[5]];
                            this.cube[buffer.length - 1 - k][layer][j] = e;  

                        }
                    }
                }
            }
        }

    }

    generate_model(){
        let cubie_size = 1;

        this.middle = Math.floor(this.size/2);
        let spacing = 0.00;

        if(this.size % 2 == 0){
            this.middle -= 0.5;
        }
        let margin = 0.15;
        let tile_height = 0.05;
        
        this.tiles_hitboxes = [];
        this.tiles = [];
        this.cubies = [];
        
        this.tiles_hitboxes_group = new THREE.Group();
        this.tiles_group = new THREE.Group();
        this.cubies_group = new THREE.Group();
            
        for(let i = 0; i < this.cube.length; i++){
            let tiles_hitboxes_layer = [];
            let tiles_layer = [];
            let cubies_layer = [];
                
            for(let j = 0; j < this.cube[i].length; j++){
                let tiles_hitboxes_row = [];
                let tiles_row = [];
                let cubies_row = [];
                for(let k = 0; k < this.cube[i][j].length; k++){
                        
                    let tiles_hitboxes_cubie = [];
                    let tiles_cubie = [];

                    for(let l = 0; l < this.cube[i][j][k].length; l++){
                        let tile = null;
                        let tile_hitbox = null;
                        let position = null;
                        let tile_size = null;
                        let hitbox_tile_size = null;
                        if(this.cube[i][j][k][l] !== null){ 
                            if(l == 0){
                                position = [(spacing + 1) * (i - this.middle), (spacing + 1) * (j - this.middle), -(spacing * (this.middle) + this.size/2)];
                                tile_size = [cubie_size - margin, cubie_size - margin, tile_height];
                                    
                                hitbox_tile_size = [cubie_size, cubie_size , tile_height ];
                            }
                            else if(l == 1){
                                position = [(spacing + 1) * (i - this.middle), -(spacing * (this.middle) + this.size/2), (spacing + 1) * (k - this.middle)];
                                tile_size = [ cubie_size - margin, tile_height, cubie_size - margin];
                                    
                                hitbox_tile_size = [ cubie_size, tile_height, cubie_size ];
                            }
                            else if(l == 2){
                                position = [(spacing * (this.middle) + this.size/2), (spacing + 1) * (j - this.middle), (spacing + 1) * (k - this.middle)];
                                tile_size = [ tile_height, cubie_size - margin, cubie_size - margin];
                                    
                                hitbox_tile_size = [ tile_height, cubie_size, cubie_size ];
                            }
                            else if(l == 3){
                                position = [(spacing + 1) * (i - this.middle), (spacing + 1) * (j - this.middle), (spacing * (this.middle) + this.size/2)];
                                tile_size = [cubie_size - margin, cubie_size - margin, tile_height];
                                    
                                hitbox_tile_size = [cubie_size, cubie_size, tile_height ];
                            }
                            else if(l == 4){
                                position = [(spacing + 1) * (i - this.middle), (spacing * (this.middle) + this.size/2), (spacing + 1) * (k - this.middle)];
                                tile_size = [ cubie_size - margin, tile_height, cubie_size - margin];
                                    
                                hitbox_tile_size = [ cubie_size, tile_height, cubie_size ];
                            }
                            else if(l == 5){
                                position = [-(spacing * (this.middle) + this.size/2), (spacing + 1) * (j - this.middle), (spacing + 1) * (k - this.middle)];
                                tile_size = [ tile_height, cubie_size - margin, cubie_size - margin];
                                    
                                hitbox_tile_size = [ tile_height, cubie_size, cubie_size ];
                            }
                        }
                                    
                        if(this.cube[i][j][k][l] != null){
                            tile = new THREE.Mesh(new RoundedBoxGeometry(tile_size[0], tile_size[1], tile_size[2], 2, 1), new THREE.MeshPhongMaterial({color: this.colors[this.cube[i][j][k][l]], transparent: true, opacity: this.opacity}));
                            tile_hitbox = new THREE.Mesh(new THREE.BoxGeometry(hitbox_tile_size[0], hitbox_tile_size[1], hitbox_tile_size[2]), new THREE.MeshPhongMaterial({}));
                            tile_hitbox.visible = false;
                            tile.position.set(position[0], position[1], position[2]);
                            tile_hitbox.position.set(position[0], position[1], position[2]);
                      
                            tile.castShadow = true;
                            tile.receiveShadow = true;
                            this.tiles_group.add(tile);
                            this.tiles_hitboxes_group.add(tile_hitbox);
                        }                            
                            
                        tiles_hitboxes_cubie.push(tile_hitbox);
                        tiles_cubie.push(tile);
                            

                    }
                    let cubies_cubie = null;
                    let all_null = true;
                        
                    for(let m=0; m<tiles_cubie.length; m++){
                        if(tiles_cubie[m] != null){
                            all_null = false;
                        }
                    }
                    if(!all_null){
                        cubies_cubie = new THREE.Mesh(new RoundedBoxGeometry(cubie_size, cubie_size, cubie_size, 1, 0.05), new THREE.MeshPhongMaterial({color: 0x000000, transparent: true, opacity: this.opacity}));

                        cubies_cubie.position.set((spacing + 1) * (i - this.middle), (spacing + 1) * (j - this.middle), (spacing + 1) * (k - this.middle));
                        this.cubies_group.add(cubies_cubie);

                    }
                        
                    tiles_hitboxes_row.push(tiles_hitboxes_cubie);
                    tiles_row.push(tiles_cubie);
                    cubies_row.push(cubies_cubie);
                }
                tiles_hitboxes_layer.push(tiles_hitboxes_row);
                tiles_layer.push(tiles_row);
                cubies_layer.push(cubies_row);

            }
            this.tiles_hitboxes.push(tiles_hitboxes_layer);
            this.tiles.push(tiles_layer);
            this.cubies.push(cubies_layer);
        }
        this.add(this.tiles_hitboxes_group);
        this.add(this.tiles_group);
        this.add(this.cubies_group);

        this.inner_cubies_group = new THREE.Group();
        this.inner_cubies = [];
        
        for(let i=0; i<(this.size-2)*(this.size-2); i++){
            let inner_cubie = new THREE.Mesh(new THREE.BoxGeometry(cubie_size, cubie_size, cubie_size), new THREE.MeshPhongMaterial({color: 0x000000}));
            inner_cubie.position.set(0, 0, 0);
            this.inner_cubies_group.add(inner_cubie);
            this.inner_cubies.push(inner_cubie);

        }
        this.add(this.inner_cubies_group);      
    }
    
    get_layer(axis, layer){
        let tiles_group = new THREE.Group();
        let cubies_group = new THREE.Group();
        
        let inner_cubie_index = 0;
        if(layer == -1){
            for(let j = 0; j<this.cubies; j++){
                for(let k = 0; k < this.cubies[j].length; k++){
                    for(let l = 0; l < this.cubies[j][k].length; l++){
                        if(this.cubies[j][k][l] != null){
                            cubies_group.add(this.cubies);
                        }
                        for(let m=0; m<this.tiles[j][k][l].length; m++){
                            if(this.tiles[j][k][l][m] != null){
                                tiles_group.add(this.tiles[j][k][l][m]);
                            }
                        }
                    
                    }
                }
            }
            for(let j = 0; j<this.inner_cubies; j++){
                cubies_group.add(this.inner_cubies[j]);
            }
        }
        else if(axis == 'Y'){
            for(let j = 0; j<this.cube[layer].length; j++){
                for(let k = 0; k < this.cube[layer][j].length; k++){
                    let f = this.cubies[layer][j][k];
                    if(f != null){
                        cubies_group.add(f);
                    }
                    else{
                        this.inner_cubies[inner_cubie_index].position.set(layer - this.middle, j - this.middle, k - this.middle);cubies_group.add(this.inner_cubies[inner_cubie_index]);inner_cubie_index += 1;
                    }
                    let e = this.tiles[layer][j][k];
                    for(let l=0; l<e.length; l++){
                        if(e[l] != null){
                            tiles_group.add(e[l]);
                        }
                    }
                }
            }
        }
        else if(axis == 'Z'){
            for(let j = 0; j<this.cube.length; j++){
                for(let k = 0; k < this.cube[j].length; k++){
                    let f = this.cubies[j][k][layer];
                    if(f != null){
                        cubies_group.add(f);
                    }
                    else{
                        this.inner_cubies[inner_cubie_index].position.set(j - this.middle, k - this.middle, layer - this.middle);cubies_group.add(this.inner_cubies[inner_cubie_index]);inner_cubie_index += 1;
                    }
                    let e = this.tiles[j][k][layer];
                    for(let l=0; l<e.length; l++){
                        if(e[l] != null){
                            tiles_group.add(e[l]);
                        }
                    }   
                }
            }
        }
        else if(axis == 'X'){
            for(let j = 0; j<this.cube.length; j++){
                for(let k = 0; k < this.cube[j][layer].length; k++){
                    let f = this.cubies[j][layer][k];
                    if(f != null){
                        cubies_group.add(f);
                    }
                    else{
                        this.inner_cubies[inner_cubie_index].position.set(j - this.middle, layer - this.middle, k - this.middle);cubies_group.add(this.inner_cubies[inner_cubie_index]);inner_cubie_index += 1;
                    }
                    let e = this.tiles[j][layer][k];
                    for(let l=0; l<e.length; l++){
                        if(e[l] != null){
                            tiles_group.add(e[l]);
                        }
                    }
                }
            }
        }
        this.add(tiles_group);
        this.add(cubies_group);
        return [tiles_group, cubies_group];
    }
    
    update(){
        if (this.solveCheck() && !this.isSolved){
            console.log('Congratulations, you solved the cube!');
        }
        this.isSolved = this.solveCheck();
        
        if(this.current_layer_tiles && this.current_layer_cubies != null && this.current_move != null){
            if(this.current_move[0] == 'Y'){
                this.current_layer_tiles.rotation.x += this.step; 
                this.current_layer_cubies.rotation.x += this.step; 
                if(Math.abs(this.current_layer_tiles.rotation.x) >= Math.abs(this.destination_angle)){
                    
                    let qty = 1;
                    if(this.current_move.length > 3){
                        qty = this.current_move[3];
                    }
                    this.move(this.current_move[0], this.current_move[1], this.current_move[2], qty);
                    
                    this.current_layer_tiles.rotation.x = 0;
                    this.current_layer_cubies.rotation.x = 0;
                    
                    while(this.current_layer_cubies.children.length > 0){
                        this.cubies_group.add(this.current_layer_cubies.children[0]);
                    }
                    while(this.current_layer_tiles.children.length > 0){
                        this.tiles_group.add(this.current_layer_tiles.children[0]);
                    }
                    
                    this.moves_executed.push(this.current_move);
                    this.current_layer_tiles = null; 
                    this.current_layer_cubies = null; 
                    this.current_move = null; 
                    this.destination_angle = null; 
                    this.step = null; 

                }
            }
            else if(this.current_move[0] == 'X'){
                this.current_layer_tiles.rotation.y += this.step; 
                this.current_layer_cubies.rotation.y += this.step; 
                if(Math.abs(this.current_layer_tiles.rotation.y) >= Math.abs(this.destination_angle)){
                    
                    let qty = 1;
                    if(this.current_move.length > 3){
                        qty = this.current_move[3];
                    }
                    this.move(this.current_move[0], this.current_move[1], this.current_move[2], qty);
                    
                    this.current_layer_tiles.rotation.y = 0;
                    this.current_layer_cubies.rotation.y = 0;
                    
                    while(this.current_layer_cubies.children.length > 0){
                        this.cubies_group.add(this.current_layer_cubies.children[0]);
                    }
                    while(this.current_layer_tiles.children.length > 0){
                        this.tiles_group.add(this.current_layer_tiles.children[0]);
                    }
                    
                    this.moves_executed.push(this.current_move);
                    this.current_layer_tiles = null; 
                    this.current_layer_cubies = null; 
                    this.current_move = null; 
                    this.destination_angle = null; 
                    this.step = null; 

                }
            }
            else if(this.current_move[0] == 'Z'){
                this.current_layer_tiles.rotation.z += this.step; 
                this.current_layer_cubies.rotation.z += this.step;                 
                if(Math.abs(this.current_layer_tiles.rotation.z) >= Math.abs(this.destination_angle)){
                    
                    let qty = 1;
                    if(this.current_move.length > 3){
                        qty = this.current_move[3];
                    }
                    this.move(this.current_move[0], this.current_move[1], this.current_move[2], qty);
                    
                    this.current_layer_tiles.rotation.z = 0;
                    this.current_layer_cubies.rotation.z = 0;
                    
                    while(this.current_layer_cubies.children.length > 0){
                        this.cubies_group.add(this.current_layer_cubies.children[0]);
                    }
                    while(this.current_layer_tiles.children.length > 0){
                        this.tiles_group.add(this.current_layer_tiles.children[0]);
                    }
                    
                    this.moves_executed.push(this.current_move);
                    this.current_layer_tiles = null; 
                    this.current_layer_cubies = null; 
                    this.current_move = null; 
                    this.destination_angle = null; 
                    this.step = null; 
                }
            }            
        }
        
        if(this.move_queue.length > 0 && this.current_move == null && this.current_layer == null){
            if(this.move_queue[0] == 'clear'){
                this.moves_executed = [];
                this.move_queue.shift();
            }
            else{
                this.current_move = this.move_queue.shift();
                let layer = this.get_layer(this.current_move[0], this.current_move[1]);
                this.current_layer_tiles = layer[0];
                this.current_layer_cubies = layer[1];
                let multiplier = 1;
                if(this.current_move[2] == 1){
                    multiplier = -1;
                }
                if(this.current_move.length > 3){
                    multiplier = multiplier * this.current_move[3];
                }
                this.destination_angle = Math.PI / 2 * multiplier;
                this.step = this.destination_angle * this.move_speed;
            }
        }

        this.resetMaterials();
        this.hover();
        this.solveCheck();

        if(this.intersects){
            document.body.style.cursor = 'pointer';
        }
        else{
            document.body.style.cursor = 'default';
    
        }
    }

    hover(){
        const mouse = this.mouse;
        const camera = this.camera;
        let intersects = false;
        this.raycaster.setFromCamera(mouse, camera);
        const intersects_tiles_hitboxes = this.raycaster.intersectObjects(this.tiles_hitboxes_group.children);
        
        if(intersects_tiles_hitboxes.length > 0 && !intersects){
            
            for(let i=0; i<this.tiles_hitboxes.length; i++){
                for(let j=0; j<this.tiles_hitboxes[i].length; j++){
                    for(let k=0; k<this.tiles_hitboxes[i][j].length; k++){
                        for(let l=0; l<this.tiles_hitboxes[i][j][k].length; l++){
                            if(this.tiles_hitboxes[i][j][k][l] == intersects_tiles_hitboxes[0].object){
                                this.cubies[i][j][k].material.color.setHex(this.select_color);
                                intersects = true;
                            }
                        }
                    }
                }
            }
        }
        this.intersects = intersects;
    }
    
    resetMaterials(){
        for(let i=0; i<this.cubies_group.children.length; i++){
            this.cubies_group.children[i].material.color.setHex(this.color);
        }
    }

    solveCheck(){
        for(let i = 0; i < this.cube.length; i++){
            for(let j = 0; j < this.cube[i].length; j++){
                for(let k = 0; k < this.cube[i][j].length; k++){
                    let tiles = this.tiles[i][j][k];
                    let r = this.cube[i][j][k];
                    
                    for(let l = 0; l < r.length; l++){
                        if(r[l] != null){
                            tiles[l].material.color.set(this.colors[r[l]]);
                        }
                    }
                }   
            }        
        }
    }
    
    random_moves(num){
        let moves = [];
        for(let i=0; i<num; i++){
            let axis = ['X', 'Y', 'Z'];
            let index = Math.floor(Math.random() * 3);
            let layer = Math.floor(Math.random() * this.size);
            if(i > 0){
                while(axis[index] == moves[moves.length - 1][0] && layer == moves[moves.length - 1][1]){
                    index = Math.floor(Math.random() * 3);
                    layer = Math.floor(Math.random() * this.size);
                }
            }
            moves.push([axis[index], layer, Math.floor(Math.random() * 2), Math.floor(Math.random() * 2) + 1]);
            
        }
        
        return moves;
    }
    
    undo_moves(){
        this.move_queue = [];
        if(this.current_move != null){
            let direction = 0;
            if(this.current_move[2] == 0){
                direction = 1;
            }
            let qty = 1;
            if(this.current_move.length > 3){
                qty = this.current_move[3];
            }
            this.move_queue.push([this.current_move[0], this.current_move[1], direction, qty]);
        }
        for(let i=this.moves_executed.length - 1; i>=0; i--){
            let direction = 0;
            if(this.moves_executed[i][2] == 0){
                direction = 1;
            }
            let qty = 1;
            if(this.moves_executed[i].length > 3){
                qty =this.moves_executed[i][3];
            }
            this.move_queue.push([this.moves_executed[i][0], this.moves_executed[i][1], direction, qty]);
        }


        this.move_queue.push('clear');
    }
    
    scramble(){
        this.move_queue = this.random_moves(this.size*3);        
    }
    rotate(axis){
        
        this.current_layer_tiles = this.tiles_group;
        this.current_layer_cubies = this.cubies_group;
        this.move_queue.push([axis, ]);
        
    }

    handleMouseDown(){
        const mouse = this.mouse;
        const camera = this.camera;
        this.raycaster.setFromCamera(mouse, camera);
        this.ray = [{...this.raycaster.ray.direction}, {...this.raycaster.ray.origin}];
        
        const intersects_tiles = this.raycaster.intersectObjects(this.tiles_hitboxes_group.children);
    
        let intersects = false;
    
        if(intersects_tiles.length > 0){    
            for(let i = 0; i < this.cube.length; i++){
                for(let j = 0; j < this.cube[i].length; j++){
                    if(this.tiles_hitboxes[i][j][0][0] == intersects_tiles[0].object){
                        this.side = 'left';
                        intersects = true;
                        this.index = [i, j, 0];
    
                    }
                }
            }
    
            for(let i = 0; i < this.cube.length; i++){
                let right_tiles_row = [];
                for(let j = 0; j < this.cube[i].length; j++){
                    right_tiles_row.push(this.tiles[i][j][this.cube.length - 1][3]);
                    if(this.tiles_hitboxes[i][j][this.cube.length - 1][3] == intersects_tiles[0].object){
                        this.side = 'right';
                        intersects = true;
                        this.index = [i, j, this.cube.length - 1];
                    }
                }
            }
    
            for(let i = 0; i < this.cube.length; i++){
                let down_tiles_row = [];
                for(let j = 0; j < this.cube[i][0].length; j++){
                    down_tiles_row.push(this.tiles[i][0][j][1]);
                    if(this.tiles_hitboxes[i][0][j][1] == intersects_tiles[0].object){
                        this.side = 'down';
                        intersects = true;
                        this.index = [i, 0, j];
                    }
                }
            }
    
            for(let i = 0; i < this.cube.length; i++){
                let up_tiles_row = [];
                for(let j = 0; j < this.cube[i][this.cube.length - 1].length; j++){
                    up_tiles_row.push(this.tiles[i][this.cube.length - 1][j][4]);
                    if(this.tiles_hitboxes[i][this.cube.length - 1][j][4] == intersects_tiles[0].object){
                        this.side = 'up';
                        intersects = true;
                        this.index = [i, this.cube.length - 1, j];
                    }
                }
            }
    
            for(let i = 0; i < this.cube[0].length; i++){
                let front_tiles_row = [];
                for(let j = 0; j < this.cube[i].length; j++){
                    front_tiles_row.push(this.tiles[0][i][j][5]);
                    if(this.tiles_hitboxes[0][i][j][5] == intersects_tiles[0].object){
                        this.side = 'front';
                        intersects = true;
                        this.index = [0, i, j];
                    }
                }
            }
    
            for(let i = 0; i < this.cube[this.cube.length - 1].length; i++){
                let back_tiles_row = [];
                for(let j = 0; j < this.cube[i].length; j++){
                    back_tiles_row.push(this.tiles[this.cube.length - 1][i][j][2]);
                    if(this.tiles_hitboxes[this.cube.length - 1][i][j][2] == intersects_tiles[0].object){
                        this.side = 'back';
                        intersects = true;
                        this.index = [this.cube.length - 1, i, j];
                    }
                }
            }
    
        }
        this.intersects = intersects;
    }

    handleMouseUp(){
        const mouse = this.mouse;
        const camera = this.camera;
        this.resetMaterials();
        if(this.index != null){
            this.raycaster.setFromCamera(mouse, camera);

            let direction = this.raycaster.ray.direction;

            let delta = [this.ray[0]['x'] - direction['x'], this.ray[0]['y'] - direction['y'], this.ray[0]['z'] - direction['z']];

            let d1, d2;

            if(this.side == 'left'){
                d1 = delta[0];          
                d2 = delta[1];  
            
                if(Math.abs(d1) > Math.abs(d2)){
                    if(d1 > 0){
                        this.move_queue.push(['X', this.index[1], 0]);
                    }
                    else{
                        this.move_queue.push(['X', this.index[1], 1]);
                    }
                }
                else if(Math.abs(d1) < Math.abs(d2)){
                    if(d2 > 0){
                        this.move_queue.push(['Y', this.index[0], 1]);
                    }
                    else{
                        this.move_queue.push(['Y', this.index[0], 0]);
                    }
                }
            
            }
            else if(this.side == 'right'){
                d1 = delta[0];          
                d2 = delta[1];  
            
                if(Math.abs(d1) > Math.abs(d2)){
                    if(d1 > 0){
                        this.move_queue.push(['X', this.index[1], 1]);
                    }
                    else{
                        this.move_queue.push(['X', this.index[1], 0]);
                    }
                }
                else if(Math.abs(d1) < Math.abs(d2)){
                    if(d2 > 0){
                        this.move_queue.push(['Y', this.index[0], 0]);
                    }
                    else{
                        this.move_queue.push(['Y', this.index[0], 1]);
                    }
                }
            }
            else if(this.side == 'down'){
            
                d1 = delta[0];          
                d2 = delta[2];  
            
                if(Math.abs(d1) > Math.abs(d2)){
                    if(d1 > 0){
                        this.move_queue.push(['Z', this.index[2], 1]);
                    }
                    else{
                        this.move_queue.push(['Z', this.index[2], 0]);
                    }
                }
                else if(Math.abs(d1) < Math.abs(d2)){
                    if(d2 > 0){
                        this.move_queue.push(['Y', this.index[0], 0]);
                    }
                    else{
                        this.move_queue.push(['Y', this.index[0], 1]);
                    }
                }
            
            }
            else if(this.side == 'up'){
            
                d1 = delta[0];          
                d2 = delta[2];  
            
                if(Math.abs(d1) > Math.abs(d2)){
                    if(d1 > 0){
                        this.move_queue.push(['Z', this.index[2], 0]);
                    }
                    else{
                        this.move_queue.push(['Z', this.index[2], 1]);
                    }
                }
                else if(Math.abs(d1) < Math.abs(d2)){
                    if(d2 > 0){
                        this.move_queue.push(['Y', this.index[0], 1]);
                    }
                    else{
                        this.move_queue.push(['Y', this.index[0], 0]);
                    }
                }
            
            }
            else if(this.side == 'front'){
            
                d1 = delta[1];          
                d2 = delta[2];  
            
                if(Math.abs(d1) > Math.abs(d2)){
                    if(d1 > 0){
                        this.move_queue.push(['Z', this.index[2], 0]);
                    }
                    else{
                        this.move_queue.push(['Z', this.index[2], 1]);
                    }
                }
                else if(Math.abs(d1) < Math.abs(d2)){
                    if(d2 > 0){
                        this.move_queue.push(['X', this.index[1], 1]);
                    }
                    else{
                        this.move_queue.push(['X', this.index[1], 0]);
                    }
                }
            
            }
            else if(this.side == 'back'){
            
                d1 = delta[1];          
                d2 = delta[2];  
            
                if(Math.abs(d1) > Math.abs(d2)){
                    if(d1 > 0){
                        this.move_queue.push(['Z', this.index[2], 1]);
                    }
                    else{
                        this.move_queue.push(['Z', this.index[2], 0]);
                    }
                }
                else if(Math.abs(d1) < Math.abs(d2)){
                    if(d2 > 0){
                        this.move_queue.push(['X', this.index[1], 0]);
                    }
                    else{
                        this.move_queue.push(['X', this.index[1], 1]);
                    }
                }
            
            }
         
            this.raycaster.setFromCamera(mouse, camera);

        
            delta = [this.ray[0]['x'] - direction['x'], this.ray[0]['y'] - direction['y'], this.ray[0]['z'] - direction['z']];

            this.cubies[this.index[0]][this.index[1]][this.index[2]].material.color.setHex(this.color);
            this.raycaster.setFromCamera(mouse, camera);
            const intersects = this.raycaster.intersectObjects(this.tiles_hitboxes_group.children);

            this.intersects = intersects;
            this.index = null;
        }
    }
}

export default RubiksCube;
