//import { RoundedBoxGeometry } from 'data:RoundedBoxGeometry.js';


class Cube{
    constructor(size=3){
        
        this.opacity = 1;
        
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
        this.last_solved = true;
        this.move_speed = 0.1337;
//        this.move_speed = 1;
    }
    
    generate(){
    var cube = [];
    for(var i = 0; i<this.size; i++){
        var layer = []
        for(var j = 0; j<this.size; j++){
            var row = [];
            for(var k = 0; k<this.size; k++){

                var between = function(value, min, max){return value > min && value < max;};
                
                var cubie = [0, 1, 2, 3, 4, 5];
                //INSIDE
                if( between(i, 0, this.size - 1) && between(j, 0, this.size - 1) && between(k, 0, this.size - 1)){
                    cubie = [null, null, null, null, null, null];
                //CORNERS
                //up
                }else if( i == 0 && j == 0 && k == 0){
                    [cubie[2], cubie[3], cubie[4]] = [null, null, null];
                }else if( i == 0 && j == 0 && k == this.size - 1){
                    [cubie[0], cubie[2], cubie[4]] = [null, null, null];
                }else if( i == 0 && j == this.size - 1 && k == 0){
                    [cubie[1], cubie[2], cubie[3]] = [null, null, null];
                }else if( i == 0 && j == this.size - 1 && k == this.size - 1){
                    [cubie[0], cubie[1], cubie[2]] = [null, null, null];
                //down
                }else if( i == this.size - 1 && j == 0 && k == 0){
                    [cubie[3], cubie[4], cubie[5]] = [null, null, null];
                }else if( i == this.size - 1 && j == 0 && k == this.size - 1){
                    [cubie[0], cubie[4], cubie[5]] = [null, null, null];
                }else if( i == this.size - 1 && j == this.size - 1 && k == 0){
                    [cubie[1], cubie[3], cubie[5]] = [null, null, null];
                }else if( i == this.size - 1 && j == this.size - 1 && k == this.size - 1){
                    [cubie[0], cubie[1], cubie[5]] = [null, null, null];
                //EDGES
                //up
                }else if( i == 0 && j == 0 && between(k, 0, this.size - 1)){
                    [cubie[0], cubie[2], cubie[3], cubie[4]] = [null, null, null, null];
                }else if( i == 0 && j == this.size - 1 && between(k, 0, this.size - 1)){
                    [cubie[0], cubie[1], cubie[2], cubie[3]] = [null, null, null, null];
                }else if( i == 0 && between(j, 0, this.size - 1) && k == 0){
                    [cubie[1], cubie[2], cubie[3], cubie[4]] = [null, null, null, null];
                }else if( i == 0 && between(j, 0, this.size - 1) && k == this.size - 1){
                    [cubie[0], cubie[1], cubie[2], cubie[4]] = [null, null, null, null];
                //middle
                }else if( between(i, 0, this.size - 1) && j == 0 && k == 0){
                    [cubie[2], cubie[3], cubie[4], cubie[5]] = [null, null, null, null];
                }else if( between(i, 0, this.size - 1) && j == 0 && k == this.size - 1){
                    [cubie[0], cubie[2], cubie[4], cubie[5]] = [null, null, null, null];
                }else if( between(i, 0, this.size - 1) && j == this.size - 1 && k == 0){
                    [cubie[1], cubie[2], cubie[3], cubie[5]] = [null, null, null, null];
                }else if( between(i, 0, this.size - 1) && j == this.size - 1 && k == this.size - 1){
                    [cubie[0], cubie[1], cubie[2], cubie[5]] = [null, null, null, null];
                //down
                }else if( i == this.size - 1 && j == 0 && between(k, 0, this.size - 1)){
                    [cubie[0], cubie[3], cubie[4], cubie[5]] = [null, null, null, null];
                }else if( i == this.size - 1 && j == this.size - 1 && between(k, 0, this.size - 1)){
                    [cubie[0], cubie[1], cubie[3], cubie[5]] = [null, null, null, null];
                }else if( i == this.size - 1 && between(j, 0, this.size - 1) && k == 0){
                    [cubie[1], cubie[3], cubie[4], cubie[5]] = [null, null, null, null];
                }else if( i == this.size - 1 && between(j, 0, this.size - 1) && k == this.size - 1){
                    [cubie[0], cubie[1], cubie[4], cubie[5]] = [null, null, null, null];
                //CENTERS
                //up
                }else if( i == 0 && between(j, 0, this.size - 1) && between(k, 0, this.size - 1)){
                    [cubie[0], cubie[1], cubie[2], cubie[3], cubie[4]] = [null, null, null, null, null];
                //middle
                }else if( between(i, 0, this.size - 1) && between(j, 0, this.size - 1) && k == 0){
                    [cubie[1], cubie[2], cubie[3], cubie[4], cubie[5]] = [null, null, null, null, null];
                }else if( between(i, 0, this.size - 1) && between(j, 0, this.size - 1) && k == this.size - 1){
                    [cubie[0], cubie[1], cubie[2], cubie[4], cubie[5]] = [null, null, null, null, null];
                }else if( between(i, 0, this.size - 1) && j == 0 && between(k, 0, this.size - 1)){
                    [cubie[0], cubie[2], cubie[3], cubie[4], cubie[5]] = [null, null, null, null, null];
                }else if( between(i, 0, this.size - 1) && j == this.size - 1 && between(k, 0, this.size - 1)){
                    [cubie[0], cubie[1], cubie[2], cubie[3], cubie[5]] = [null, null, null, null, null];
                // down
                }else if( i == this.size - 1 && between(j, 0, this.size - 1) && between(k, 0, this.size - 1)){
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

        for(var counter = 0; counter < qty; counter++){
            
            var buffer = [];
            
            for(var i = 0; i < this.cube.length; i++){
                var layer_copy = []
                for(var j = 0; j < this.cube[i].length; j++){
                    var row_copy = []
                    for(var k = 0; k < this.cube[i][j].length; k++){
                        row_copy.push(this.cube[i][j][k].slice());
                    }
                    layer_copy.push(row_copy);

                }
                buffer.push(layer_copy);
            }
            if(axis == 'Y'){
                for(var j = 0; j<buffer[layer].length; j++){
                    for(var k = 0; k < buffer[layer][j].length; k++){
                        var e = buffer[layer][j][k];
                        if(direction == 1){
                            [e[0], e[1], e[3], e[4]] = [e[4], e[0], e[1], e[3]]
                            this.cube[layer][k][buffer.length - 1 - j] = e
                        }

                        else if(direction == 0){
                            [e[4], e[0], e[1], e[3]] = [e[0], e[1], e[3], e[4]]
                            this.cube[layer][buffer.length - 1 - k][j] = e  

                        }
                    }
                }
            }
            else if(axis == 'Z'){
                for(var j = 0; j<buffer.length; j++){
                    for(var k = 0; k < buffer[j].length; k++){
                        var e = buffer[j][k][layer];
                        if(direction == 1){
                            [e[1], e[2], e[4], e[5]] = [e[2], e[4], e[5], e[1]]
                            this.cube[k][buffer.length - 1 - j][layer] = e
                        }

                        else if(direction == 0){
                            [[e[2], e[4], e[5], e[1]] = [e[1], e[2], e[4], e[5]]]
                            this.cube[buffer.length - 1 - k][j][layer] = e 

                        }
                    }
                }
            }
            else if(axis == 'X'){
                for(var j = 0; j<buffer.length; j++){
                    for(var k = 0; k < buffer[j][layer].length; k++){
                        var e = buffer[j][layer][k];
                        if(direction == 0){
                            [e[0], e[2], e[3], e[5]] = [e[2], e[3], e[5], e[0]]
                            this.cube[k][layer][buffer.length - 1 - j] = e
                        }

                        else if(direction == 1){
                            [e[2], e[3], e[5], e[0]] = [e[0], e[2], e[3], e[5]]
                            this.cube[buffer.length - 1 - k][layer][j] = e  

                        }
                    }
                }
            }
        }

    }

    generate_model(){
        
        var cubie_size = 1;
        var cubie_color = 0x111111;

        this.middle = Math.floor(this.size/2);
        var spacing = 0.00;

        if(this.size % 2 == 0){this.middle -= 0.5;};
        var margin = 0.15;
        var tile_height = 0.05;
        
         this.tiles = [];
         this.cubies = [];
        
        this.tiles_group = new THREE.Group();
        this.cubies_group = new THREE.Group();
            
            for(var i = 0; i < this.cube.length; i++){
                var tiles_layer = []
                var cubies_layer = []
                
                for(var j = 0; j < this.cube[i].length; j++){
                    var tiles_row = []
                    var cubies_row = []
                    for(var k = 0; k < this.cube[i][j].length; k++){
                        
                        
                        var tiles_cubie = [];

                        for(var l = 0; l < this.cube[i][j][k].length; l++){
                            var tile = null;
                            var position = null;
                            var tile_size = null;
                            if(this.cube[i][j][k][l] == null){
                                
                            }
                            else if(l == 0){
                                position = [(spacing + 1) * (i - this.middle), (spacing + 1) * (j - this.middle), -(spacing * (this.middle) + this.size/2)];
                                tile_size = [cubie_size - margin, cubie_size - margin, tile_height];
                            }
                            else if(l == 1){
                                position = [(spacing + 1) * (i - this.middle), -(spacing * (this.middle) + this.size/2), (spacing + 1) * (k - this.middle)]
                                tile_size = [ cubie_size - margin, tile_height, cubie_size - margin];
                            }
                            else if(l == 2){
                                position = [(spacing * (this.middle) + this.size/2), (spacing + 1) * (j - this.middle), (spacing + 1) * (k - this.middle)];
                                tile_size = [ tile_height, cubie_size - margin, cubie_size - margin];
                            }
                            else if(l == 3){
                                position = [(spacing + 1) * (i - this.middle), (spacing + 1) * (j - this.middle), (spacing * (this.middle) + this.size/2)];
                                tile_size = [cubie_size - margin, cubie_size - margin, tile_height];
                            }
                            else if(l == 4){
                                position = [(spacing + 1) * (i - this.middle), (spacing * (this.middle) + this.size/2), (spacing + 1) * (k - this.middle)];
                                tile_size = [ cubie_size - margin, tile_height, cubie_size - margin];
                            }
                            else if(l == 5){
                                position = [-(spacing * (this.middle) + this.size/2), (spacing + 1) * (j - this.middle), (spacing + 1) * (k - this.middle)];
                                tile_size = [ tile_height, cubie_size - margin, cubie_size - margin];
                            }
                                    
                            if(this.cube[i][j][k][l] != null){
//                                position = [i, j, k];
                                tile = new THREE.Mesh(new RoundedBoxGeometry(tile_size[0], tile_size[1], tile_size[2], 2, 1), new THREE.MeshPhongMaterial({color: this.colors[this.cube[i][j][k][l]], transparent: true, opacity: this.opacity}));
//                                tile = new THREE.Mesh(new THREE.BoxGeometry(tile_size[0], tile_size[1], tile_size[2]), new THREE.MeshPhongMaterial({color: c}));
                                tile.position.set(position[0], position[1], position[2]);
                      
                                tile.castShadow = true;
                                tile.receiveShadow = true;
                                this.tiles_group.add(tile);
                            }                            
                            
                            tiles_cubie.push(tile);
                            
//                            cubies_cubie.push(tile);
                        }
                        var cubies_cubie = null;
                        var all_null = true;
                        
                        for(var m=0; m<tiles_cubie.length; m++){
                            if(tiles_cubie[m] != null){
                                all_null = false;
                            }
                        }
                        if(!all_null){
                            cubies_cubie = new THREE.Mesh(new RoundedBoxGeometry(cubie_size, cubie_size, cubie_size, 1, 0.05), new THREE.MeshPhongMaterial({color: 0x000000, transparent: true, opacity: this.opacity}));
//                          var cubies_cubie = new THREE.Mesh(new THREE.BoxGeometry(cubie_size, cubie_size, cubie_size), new THREE.MeshPhongMaterial({color: c, transparent: true, opacity: 1}));
                            cubies_cubie.position.set((spacing + 1) * (i - this.middle), (spacing + 1) * (j - this.middle), (spacing + 1) * (k - this.middle));
                            this.cubies_group.add(cubies_cubie);

                        }
                        
                        tiles_row.push(tiles_cubie);
                        cubies_row.push(cubies_cubie);
                    }
                    tiles_layer.push(tiles_row);
                    cubies_layer.push(cubies_row);

                }
                this.tiles.push(tiles_layer);
                this.cubies.push(cubies_layer);
            }
    scene.add(this.tiles_group);
    scene.add(this.cubies_group);
        
    this.inner_cubies_group = new THREE.Group();
    this.inner_cubies = [];
        
    for(var i=0; i<(size-2)*(size-2); i++){
        var inner_cubie = new THREE.Mesh(new THREE.BoxGeometry(cubie_size, cubie_size, cubie_size), new THREE.MeshPhongMaterial({color: 0x000000}));
        inner_cubie.position.set(0, 0, 0);
        this.inner_cubies_group.add(inner_cubie);
        this.inner_cubies.push(inner_cubie);

    }
     scene.add(this.inner_cubies_group);      
    }
    
    get_layer(axis, layer){
        var tiles_group = new THREE.Group();
        var cubies_group = new THREE.Group();
        
        var inner_cubie_index = 0;
        
        if(axis == 'Y'){
            for(var j = 0; j<this.cube[layer].length; j++){
                for(var k = 0; k < this.cube[layer][j].length; k++){
                    var f = this.cubies[layer][j][k];
                    if(f != null){cubies_group.add(f);}
                    else{this.inner_cubies[inner_cubie_index].position.set(layer - this.middle, j - this.middle, k - this.middle);cubies_group.add(this.inner_cubies[inner_cubie_index]);inner_cubie_index += 1;}
                    var e = this.tiles[layer][j][k];
                    for(var l=0; l<e.length; l++){
                        if(e[l] != null){tiles_group.add(e[l]);}
                    }
                }
            }
        }
        else if(axis == 'Z'){
            for(var j = 0; j<this.cube.length; j++){
                for(var k = 0; k < this.cube[j].length; k++){
                    var f = this.cubies[j][k][layer];
                    if(f != null){cubies_group.add(f);}
                    else{this.inner_cubies[inner_cubie_index].position.set(j - this.middle, k - this.middle, layer - this.middle);cubies_group.add(this.inner_cubies[inner_cubie_index]);inner_cubie_index += 1;}
                    var e = this.tiles[j][k][layer];
                    for(var l=0; l<e.length; l++){
                        if(e[l] != null){tiles_group.add(e[l]);}
                    }   
                }
            }
        }
        else if(axis == 'X'){
            for(var j = 0; j<this.cube.length; j++){
                for(var k = 0; k < this.cube[j][layer].length; k++){
                    var f = this.cubies[j][layer][k];
                    if(f != null){cubies_group.add(f);}
                    else{this.inner_cubies[inner_cubie_index].position.set(j - this.middle, layer - this.middle, k - this.middle);cubies_group.add(this.inner_cubies[inner_cubie_index]);inner_cubie_index += 1;}
                    var e = this.tiles[j][layer][k];
                    for(var l=0; l<e.length; l++){
                        if(e[l] != null){tiles_group.add(e[l]);}
                    }
                }
            }
        }
        scene.add(tiles_group);
        scene.add(cubies_group);
        return [tiles_group, cubies_group];
    }
    
    solved(){
        var grid = [null, null, null, null, null, null];
        for(var i=0; i<this.cube.length; i++){
            for(var j=0; j<this.cube[i].length; j++){
                for(var k=0; k<this.cube[i][j].length; k++){
                    for(var l=0; l<this.cube[i][j][k].length; l++){
                        if(this.cube[i][j][k][l] != null){
                            if(grid[l] == null){
                                grid[l] = this.cube[i][j][k][l]
                            }
                            else if(grid[l] != this.cube[i][j][k][l]){return false;}
                        }
                    }
                }
            }
        }
        return true;  
    }
    
    update(){
        if (this.solved() && !this.last_solved){console.log('Congratulations, you solved the cube!');}
        this.last_solved = this.solved();
        
        if(this.current_layer_tiles && this.current_layer_cubies != null && this.current_move != null){
            if(this.current_move[0] == 'Y'){
                this.current_layer_tiles.rotation.x += this.step; 
                this.current_layer_cubies.rotation.x += this.step; 
                if(Math.abs(this.current_layer_tiles.rotation.x) >= Math.abs(this.destination_angle)){
                    
                    var qty = 1;
                    if(this.current_move.length > 3){qty = this.current_move[3];}
                    this.move(this.current_move[0], this.current_move[1], this.current_move[2], qty);
                    
                    this.current_layer_tiles.rotation.x = 0;
                    this.current_layer_cubies.rotation.x = 0;
                    
                    while(this.current_layer_cubies.children.length > 0){
                        this.cubies_group.add(this.current_layer_cubies.children[0])
                    }
                    while(this.current_layer_tiles.children.length > 0){
                        this.tiles_group.add(this.current_layer_tiles.children[0])
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
                    
                    var qty = 1;
                    if(this.current_move.length > 3){qty = this.current_move[3];}
                    this.move(this.current_move[0], this.current_move[1], this.current_move[2], qty);
                    
                    this.current_layer_tiles.rotation.y = 0;
                    this.current_layer_cubies.rotation.y = 0;
                    
                    while(this.current_layer_cubies.children.length > 0){
                        this.cubies_group.add(this.current_layer_cubies.children[0])
                    }
                    while(this.current_layer_tiles.children.length > 0){
                        this.tiles_group.add(this.current_layer_tiles.children[0])
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
                    
                    var qty = 1;
                    if(this.current_move.length > 3){qty = this.current_move[3];}
                    this.move(this.current_move[0], this.current_move[1], this.current_move[2], qty);
                    
                    this.current_layer_tiles.rotation.z = 0;
                    this.current_layer_cubies.rotation.z = 0;
                    
                    while(this.current_layer_cubies.children.length > 0){
                        this.cubies_group.add(this.current_layer_cubies.children[0])
                    }
                    while(this.current_layer_tiles.children.length > 0){
                        this.tiles_group.add(this.current_layer_tiles.children[0])
                    }
                    
                this.moves_executed.push(this.current_move);
                this.current_layer_tiles = null; 
                this.current_layer_cubies = null; 
                this.current_move = null; 
                this.destination_angle = null; 
                this.step = null; 
                }
            }
            
//            this.moves_executed.push(this.current_move);
            


        }
        
        if(this.move_queue.length > 0 && this.current_move == null && this.current_layer == null){
            if(this.move_queue[0] == 'clear'){
                this.moves_executed = [];
                this.move_queue.shift();
            }
            else{
                this.current_move = cube.move_queue.shift();
                var layer = this.get_layer(this.current_move[0], this.current_move[1]);
                this.current_layer_tiles = layer[0];
                this.current_layer_cubies = layer[1];
                var multiplier = 1;
                if(this.current_move[2] == 1){multiplier = -1;}
                if(this.current_move.length > 3){multiplier = multiplier * this.current_move[3];}
                this.destination_angle = Math.PI / 2 * multiplier;
                this.step = this.destination_angle * this.move_speed;
            }
        }
    }
    
    random_moves(num){
        var moves = [];
        for(var i=0; i<num; i++){
            var axis = ['X', 'Y', 'Z'];
            var index = Math.floor(Math.random() * 3);
            var layer = Math.floor(Math.random() * this.size);
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
            var direction = 0;
            if(this.current_move[2] == 0){direction = 1;}
            var qty = 1;
            if(this.current_move.length > 3){qty = this.current_move[3];}
            this.move_queue.push([this.current_move[0], this.current_move[1], direction, qty]);
        }
        for(var i=this.moves_executed.length - 1; i>=0; i--){
            var direction = 0;
            if(this.moves_executed[i][2] == 0){direction = 1;}
            var qty = 1;
            if(this.moves_executed[i].length > 3){qty =this.moves_executed[i][3];}
            this.move_queue.push([this.moves_executed[i][0], this.moves_executed[i][1], direction, qty]);
        }
//        for(var i=this.move_queue.length - 1; i>=0; i--){
//            var direction = 0;
//            if(this.move_queue[i][2] == 0){direction = 1;}
//            this.move_queue.push([this.move_queue[i][0], this.move_queue[i][1], direction, this.move_queue[i][3]]);
//        }
        this.move_queue.push('clear');
    }
    
    scramble(){
        this.move_queue = this.random_moves(this.size*6);        
    }
    
}
    
var scene = new THREE.Scene();
//var size = prompt('What size of cube? ( 2 or more )');
var size = 10;
var cube = new Cube(size);
//cube.move('Y', 0, 0);

var camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();

renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.shadowMap.enabled = false;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x99ccff);

document.body.appendChild(renderer.domElement);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.enablePan = false;
controls.minDistance = 1.5 * cube.size;
controls.maxDistance = 3 * cube.size;
//controls.enableDamping = true;

camera.position.x = - 2 * cube.size;
camera.position.y = 1 * cube.size;


//var axis_group = show_axis();

var lights = []

var power1 = 0.3;
var power2 = 0.18;
//var power1 = 0.55;
//var power2 = 0.18;
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
//    var helper = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({color: 0x00ff000}));
//    helper.position.set(lights_properties[i][0], lights_properties[i][1], lights_properties[i][2]);
//    scene.add(helper);
}
   
function show_axis(){
    
    
    var x_axis = new THREE.Mesh(new THREE.BoxGeometry(10, 0.1, 0.1), new THREE.MeshPhongMaterial({color: 0xff0000, transparent: true, opacity: 1}));
    var y_axis = new THREE.Mesh(new THREE.BoxGeometry(0.1, 10, 0.1), new THREE.MeshPhongMaterial({color: 0x00ff00, transparent: true, opacity: 1}));
    var z_axis = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 10), new THREE.MeshPhongMaterial({color: 0x0000ff, transparent: true, opacity: 1}));

    var x_axis_cone = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.5, 8), new THREE.MeshPhongMaterial({color: 0xff0000, transparent: true, opacity: 1}));
    var y_axis_cone = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.5, 8), new THREE.MeshPhongMaterial({color: 0x00ff00, transparent: true, opacity: 1}));
    var z_axis_cone = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.5, 8), new THREE.MeshPhongMaterial({color: 0x0000ff, transparent: true, opacity: 1}));

    var group = new THREE.Group();
    
    x_axis_cone.position.x = 5;
    x_axis_cone.rotation.z = -Math.PI / 2;

    y_axis_cone.position.y = 5;

    z_axis_cone.position.z = 5;
    z_axis_cone.rotation.x = Math.PI / 2;

    group.add(x_axis);
    group.add(y_axis);
    group.add(z_axis);

    group.add(x_axis_cone);
    group.add(y_axis_cone);
    group.add(z_axis_cone);
    
    scene.add(group);
    
    return group;
    
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
var index = null;
var ray = null;
var side = null;

window.addEventListener('mousedown', function(event){
    raycaster.setFromCamera(mouse, camera);
    ray = [{...raycaster.ray.direction}, {...raycaster.ray.origin}]
    
    const intersects_tiles = raycaster.intersectObjects(cube.tiles_group.children);
    const intersects_cubies = raycaster.intersectObjects(cube.cubies_group.children);
    
    
    if(intersects_tiles.length > 0){
//        console.log(intersects_cubies[0].faceIndex);
        
        var left_tiles = [];
        var front_tiles = [];
        var down_tiles = [];
        var right_tiles = [];
        var up_tiles = [];
        var back_tiles = [];

        for(var i = 0; i < cube.cube.length; i++){
            var left_tiles_row = []
            for(var j = 0; j < cube.cube[i].length; j++){
                left_tiles_row.push(cube.tiles[i][j][0][0]);
                if(cube.tiles[i][j][0][0] == intersects_tiles[0].object){
                    side = 'left';
                    intersects = true;
                }
            }
            left_tiles.push(left_tiles_row);
        }

        for(var i = 0; i < cube.cube.length; i++){
            var right_tiles_row = []
            for(var j = 0; j < cube.cube[i].length; j++){
                right_tiles_row.push(cube.tiles[i][j][cube.cube.length - 1][3]);
                if(cube.tiles[i][j][cube.cube.length - 1][3] == intersects_tiles[0].object){
                    side = 'right';
                    intersects = true;
                }
            }
            right_tiles.push(right_tiles_row);
        }

        for(var i = 0; i < cube.cube.length; i++){
            var down_tiles_row = []
            for(var j = 0; j < cube.cube[i][0].length; j++){
                down_tiles_row.push(cube.tiles[i][0][j][1]);
                if(cube.tiles[i][0][j][1] == intersects_tiles[0].object){
                    side = 'down';
                    intersects = true;
                }
            }
            down_tiles.push(down_tiles_row);
        }

       for(var i = 0; i < cube.cube.length; i++){
            var up_tiles_row = []
            for(var j = 0; j < cube.cube[i][cube.cube.length - 1].length; j++){
                up_tiles_row.push(cube.tiles[i][cube.cube.length - 1][j][4]);
                if(cube.tiles[i][cube.cube.length - 1][j][4] == intersects_tiles[0].object){
                    side = 'up';
                    intersects = true;
                }
            }
            up_tiles.push(up_tiles_row);
        }

        for(var i = 0; i < cube.cube[0].length; i++){
            var front_tiles_row = []
            for(var j = 0; j < cube.cube[i].length; j++){
                front_tiles_row.push(cube.tiles[0][i][j][5]);
                if(cube.tiles[0][i][j][5] == intersects_tiles[0].object){
                    side = 'front';
                    intersects = true;
                }
            }
            front_tiles.push(front_tiles_row);
        }

        for(var i = 0; i < cube.cube[cube.cube.length - 1].length; i++){
            var back_tiles_row = []
            for(var j = 0; j < cube.cube[i].length; j++){
                back_tiles_row.push(cube.tiles[cube.cube.length - 1][i][j][2]);
                if(cube.tiles[cube.cube.length - 1][i][j][2] == intersects_tiles[0].object){
                    side = 'back';
                    intersects = true;
                }
            }
            back_tiles.push(back_tiles_row);
        }

    }
    
//    console.log(ray[0].x + ' ' + ray[0].y + ' ' + ray[0].z);
//    console.log(camera.position);
//    console.log(camera.rotation);
//    console.log(camera);

    intersects = false;
    
    if(intersects_cubies.length > 0){
        
        for(var i=0; i<cube.cubies.length; i++){
            for(var j=0; j<cube.cubies[i].length; j++){
                for(var k=0; k<cube.cubies[i][j].length; k++){
                    if(cube.cubies[i][j][k] == intersects_cubies[0].object){
                        index = [i, j, k];
                        intersects = true;
                    }
                }
            }
        }
    }
    if(intersects_tiles.length > 0 && !intersects){
        
        for(var i=0; i<cube.tiles.length; i++){
            for(var j=0; j<cube.tiles[i].length; j++){
                for(var k=0; k<cube.tiles[i][j].length; k++){
                    for(var l=0; l<cube.tiles[i][j][k].length; l++){
                        if(cube.tiles[i][j][k][l] == intersects_tiles[0].object){
                            index = [i, j, k];
                            intersects = true;
                        }
                    }
                }
            }
        }
    }

    if(intersects){
        controls.enableRotate = false;
        mouseDown = {...mouse};
    }
    else{
        controls.enableRotate = true;

    }
    
});

window.addEventListener('mouseup', function(event){
    if(index != null){

        var direction = raycaster.ray.direction;
        var origin = raycaster.ray.origin;
        
        var delta = [ray[0]['x'] - direction['x'], ray[0]['y'] - direction['y'], ray[0]['z'] - direction['z']];
//        console.log(side)
        if(side == 'left'){
            d1 = delta[0];          
            d2 = delta[1];  
            
            if(Math.abs(d1) > Math.abs(d2)){
                if(d1 > 0){
                    cube.move_queue.push(['X', index[1], 0]);
                }else{
                    cube.move_queue.push(['X', index[1], 1]);
                }
            }
            else if(Math.abs(d1) < Math.abs(d2)){
                if(d2 > 0){
                    cube.move_queue.push(['Y', index[0], 1]);
                }else{
                    cube.move_queue.push(['Y', index[0], 0]);
                }
            }
            
        }
        else if(side == 'right'){
            d1 = delta[0];          
            d2 = delta[1];  
            
            if(Math.abs(d1) > Math.abs(d2)){
                if(d1 > 0){
                    cube.move_queue.push(['X', index[1], 1]);
                }else{
                    cube.move_queue.push(['X', index[1], 0]);
                }
            }
            else if(Math.abs(d1) < Math.abs(d2)){
                if(d2 > 0){
                    cube.move_queue.push(['Y', index[0], 0]);
                }else{
                    cube.move_queue.push(['Y', index[0], 1]);
                }
            }
        }
        else if(side == 'down'){
            
            d1 = delta[0];          
            d2 = delta[2];  
            
            if(Math.abs(d1) > Math.abs(d2)){
                if(d1 > 0){
                    cube.move_queue.push(['Z', index[2], 1]);
                }else{
                    cube.move_queue.push(['Z', index[2], 0]);
                }
            }
            else if(Math.abs(d1) < Math.abs(d2)){
                if(d2 > 0){
                    cube.move_queue.push(['Y', index[0], 0]);
                }else{
                    cube.move_queue.push(['Y', index[0], 1]);
                }
            }
            
        }
        else if(side == 'up'){
            
            d1 = delta[0];          
            d2 = delta[2];  
            
            if(Math.abs(d1) > Math.abs(d2)){
                if(d1 > 0){
                    cube.move_queue.push(['Z', index[2], 0]);
                }else{
                    cube.move_queue.push(['Z', index[2], 1]);
                }
            }
            else if(Math.abs(d1) < Math.abs(d2)){
                if(d2 > 0){
                    cube.move_queue.push(['Y', index[0], 1]);
                }else{
                    cube.move_queue.push(['Y', index[0], 0]);
                }
            }
            
        }
        else if(side == 'front'){
            
            d1 = delta[1];          
            d2 = delta[2];  
            
            if(Math.abs(d1) > Math.abs(d2)){
                if(d1 > 0){
                    cube.move_queue.push(['Z', index[2], 0]);
                }else{
                    cube.move_queue.push(['Z', index[2], 1]);
                }
            }
            else if(Math.abs(d1) < Math.abs(d2)){
                if(d2 > 0){
                    cube.move_queue.push(['X', index[1], 1]);
                }else{
                    cube.move_queue.push(['X', index[1], 0]);
                }
            }
            
        }
        else if(side == 'back'){
            
            d1 = delta[1];          
            d2 = delta[2];  
            
            if(Math.abs(d1) > Math.abs(d2)){
                if(d1 > 0){
                    cube.move_queue.push(['Z', index[2], 1]);
                }else{
                    cube.move_queue.push(['Z', index[2], 0]);
                }
            }
            else if(Math.abs(d1) < Math.abs(d2)){
                if(d2 > 0){
                    cube.move_queue.push(['X', index[1], 0]);
                }else{
                    cube.move_queue.push(['X', index[1], 1]);
                }
            }
            
        }
        
        raycaster.setFromCamera(mouse, camera);
        

        
        var delta = [ray[0]['x'] - direction['x'], ray[0]['y'] - direction['y'], ray[0]['z'] - direction['z']];
        var camera_delta = [ray[1]['x'] - origin['x'], ray[1]['y'] - origin['y'], ray[1]['z'] - origin['z']];
        var max = 0;
        var max_index = 0;
        for(var i=0; i<delta.length; i++){
            if(Math.abs(delta[i]) > Math.abs(max)){max = delta[i]; max_index = i;}
        }

        cube.cubies[index[0]][index[1]][index[2]].material.color.setHex(0x000000);
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(cube.cubies_group.children);
    //    const intersects2 = raycaster.intersectObjects(cube[3].children);
        if(intersects.length > 0){
            controls.enableRotate = false;
        }
        
//        if(max_index == 2){
//
//            if(delta[max_index] - camera_delta[max_index] > 0){
//                cube.move_queue.push(['X', index[1], 0])
//            }else if(delta[max_index] - camera_delta[max_index] < 0){
//                cube.move_queue.push(['X', index[1], 1])
//            }
//        }
//        else if(max_index == 0){
//
//            if(delta[max_index] - camera_delta[max_index] > 0){
//                cube.move_queue.push(['Y', index[0], 1])
//            }else if(delta[max_index] - camera_delta[max_index] < 0){
//                cube.move_queue.push(['Y', index[0], 0])
//            }
//    }
//        else if(max_index == 1){
//
//            if(delta[max_index] - camera_delta[max_index] > 0){
//                cube.move_queue.push(['Z', index[2], 0])
//            }else if(delta[max_index] - camera_delta[max_index] < 0){
//                cube.move_queue.push(['Z', index[2], 1])
//            }
//    }
    index = null;
}

    
    mouseDown = null;
    selectedCubie = null;
    controls.enableRotate = true;

    
});

document.addEventListener('keypress', function(key){
    if(key.code == 'KeyQ'){
        cube.scramble();
    }
    else if(key.code == 'KeyW'){
        cube.undo_moves();
    }
    
});

var update = function(){
    
//    axis_group.rotation.x = camera.rotation.x;
//    axis_group.rotation.y = camera.rotation.y;
//    axis_group.rotation.z = camera.rotation.z;

    
//    console.log(camera.rotation.x + ' ' + camera.rotation.y + ' ' + camera.rotation.z);
    
    cube.update();
    resetMaterials();
    hover();
//    
    for(var i = 0; i < cube.cube.length; i++){
        for(var j = 0; j < cube.cube[i].length; j++){
            for(var k = 0; k < cube.cube[i][j].length; k++){
                var tiles = cube.tiles[i][j][k];
                var r = cube.cube[i][j][k];
                
                for(var l = 0; l < r.length; l++){
                    if(r[l] != null){
                        tiles[l].material.color.set(cube.colors[r[l]]);
                    }
                }
            }   
        }        
    }

    controls.update();
    

};
function resetMaterials(){
    for(var i=0; i<cube.cubies_group.children.length; i++){
//        cube.cubies_group.children[i].material.opacity = 1; 
        cube.cubies_group.children[i].material.color.setHex(0x000000);
    }
    for(var i=0; i<cube.tiles_group.children.length; i++){
//        cube.tiles_group.children[i].material.opacity = 1; 
    }
}
function hover(){
    var intersects = false;
    raycaster.setFromCamera(mouse, camera);
    const intersects_tiles = raycaster.intersectObjects(cube.tiles_group.children);
    const intersects_cubies = raycaster.intersectObjects(cube.cubies_group.children);
    if(intersects_cubies.length > 0){
        
        for(var i=0; i<cube.cubies.length; i++){
            for(var j=0; j<cube.cubies[i].length; j++){
                for(var k=0; k<cube.cubies[i][j].length; k++){
                    if(cube.cubies[i][j][k] == intersects_cubies[0].object){
                            cube.cubies[i][j][k].material.color.setHex(0xeeeeee);
                        intersects = true;
                    }
                }
            }
        }
    }
    if(intersects_tiles.length > 0 && !intersects){
        
        for(var i=0; i<cube.tiles.length; i++){
            for(var j=0; j<cube.tiles[i].length; j++){
                for(var k=0; k<cube.tiles[i][j].length; k++){
                    for(var l=0; l<cube.tiles[i][j][k].length; l++){
                        if(cube.tiles[i][j][k][l] == intersects_tiles[0].object){
                            cube.cubies[i][j][k].material.color.setHex(0xeeeeee);
                            intersects = true;
                        }
                    }
                }
            }
        }
    }
//    if(intersects_cubies.length > 0){
//        intersects_cubies[0].object.material.transparent = true;
//        intersects_cubies[0].object.material.opacity = 0.5;
//    }

}

var render = function(){
    
    renderer.render(scene, camera);
    
};

var GameLoop = function(){
        
    requestAnimationFrame(GameLoop);
    
    
    render();
    update();
    
};

GameLoop();