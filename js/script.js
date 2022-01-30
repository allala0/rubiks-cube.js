class Cube{
    constructor(size=3){
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

        var middle = Math.floor(this.size/2);
        var spacing = 0.00;

        if(this.size % 2 == 0){middle -= 0.5;};
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
                        
                        var c = Math.floor(Math.random()*16777215);
//                        c =  (i * this.size * this.size * this.size + j * this.size * this.size + k * this.size) / (this.size * this.size * this.size) * 16777215;
//                        if(i == this.size - 1 & j == this.size - 1 && k == this.size - 1){c = 0;}
                        
                        var tiles_cubie = [];
                        
                        var cubies_cubie = new THREE.Mesh(new THREE.BoxGeometry(cubie_size, cubie_size, cubie_size), new THREE.MeshPhongMaterial({color: 0x000000, transparent: true, opacity: 1}));
//                        var cubies_cubie = new THREE.Mesh(new THREE.BoxGeometry(cubie_size, cubie_size, cubie_size), new THREE.MeshPhongMaterial({color: c, transparent: true, opacity: 1}));
                        cubies_cubie.position.set((spacing + 1) * (i - middle), (spacing + 1) * (j - middle), (spacing + 1) * (k - middle));
                        this.cubies_group.add(cubies_cubie);

                        for(var l = 0; l < this.cube[i][j][k].length; l++){
                            var tile = null;
                            var position = null;
                            var tile_size = null;
                            if(this.cube[i][j][k][l] == null){
                                
                            }
                            else if(l == 0){
                                position = [(spacing + 1) * (i - middle), (spacing + 1) * (j - middle), -(spacing * (middle) + this.size/2)];
                                tile_size = [cubie_size - margin, cubie_size - margin, tile_height];
                            }
                            else if(l == 1){
                                position = [(spacing + 1) * (i - middle), -(spacing * (middle) + this.size/2), (spacing + 1) * (k - middle)]
                                tile_size = [ cubie_size - margin, tile_height, cubie_size - margin];
                            }
                            else if(l == 2){
                                position = [(spacing * (middle) + this.size/2), (spacing + 1) * (j - middle), (spacing + 1) * (k - middle)];
                                tile_size = [ tile_height, cubie_size - margin, cubie_size - margin];
                            }
                            else if(l == 3){
                                position = [(spacing + 1) * (i - middle), (spacing + 1) * (j - middle), (spacing * (middle) + this.size/2)];
                                tile_size = [cubie_size - margin, cubie_size - margin, tile_height];
                            }
                            else if(l == 4){
                                position = [(spacing + 1) * (i - middle), (spacing * (middle) + this.size/2), (spacing + 1) * (k - middle)];
                                tile_size = [ cubie_size - margin, tile_height, cubie_size - margin];
                            }
                            else if(l == 5){
                                position = [-(spacing * (middle) + this.size/2), (spacing + 1) * (j - middle), (spacing + 1) * (k - middle)];
                                tile_size = [ tile_height, cubie_size - margin, cubie_size - margin];
                            }
                                    
                            if(this.cube[i][j][k][l] != null){
//                                position = [i, j, k];
                                tile = new THREE.Mesh(new THREE.BoxGeometry(tile_size[0], tile_size[1], tile_size[2]), new THREE.MeshPhongMaterial({color: this.colors[this.cube[i][j][k][l]]}));
//                                tile = new THREE.Mesh(new THREE.BoxGeometry(tile_size[0], tile_size[1], tile_size[2]), new THREE.MeshPhongMaterial({color: c}));
                                tile.position.set(position[0], position[1], position[2]);
                      
                                tile.castShadow = true;
                                tile.receiveShadow = true;
                                this.tiles_group.add(tile);
                            }

                            
                            tiles_cubie.push(tile);
                            
//                            cubies_cubie.push(tile);
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
                
    }
    
    get_layer(axis, layer){
        
        var tiles_group = new THREE.Group();
        var cubies_group = new THREE.Group();
        
        if(axis == 'Y'){
            for(var j = 0; j<this.cube[layer].length; j++){
                for(var k = 0; k < this.cube[layer][j].length; k++){
                    var f = this.cubies[layer][j][k];
                    cubies_group.add(f);
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
                    cubies_group.add(f);
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
                    cubies_group.add(f);
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
    
    adjust_tiles(){
    
    
        for(var i=0; i<this.cubies.length; i++){
            for(var j=0; j<this.cubies[i].length; j++){
                for(var k=0; k<this.cubies[i][j].length; k++){

                }
            }
        }

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

        for(var i = 0; i < this.cube.length; i++){
            var right_colors_row = []
            var right_tiles_row = []
            var right_tiles_positions_row = []
            for(var j = 0; j < this.cube[i].length; j++){
                right_colors_row.push(this.cube[i][j][0][0]);
                right_tiles_row.push(this.tiles[i][j][0][0]);
                right_tiles_positions_row.push({...this.tiles[i][j][0][0].position});
            }
            right_colors.push(right_colors_row)
            right_tiles.push(right_tiles_row)
            right_tiles_positions.push(right_tiles_positions_row)
        }

        for(var i = 0; i < this.cube.length; i++){
            var left_colors_row = []
            var left_tiles_row = []
            var left_tiles_positions_row = []
            for(var j = 0; j < this.cube[i].length; j++){
                left_colors_row.push(this.cube[i][j][this.cube.length - 1][3]);
                left_tiles_row.push(this.tiles[i][j][this.cube.length - 1][3]);
                left_tiles_positions_row.push({...this.tiles[i][j][this.cube.length - 1][3].position});
            }
            left_colors.push(left_colors_row)
            left_tiles.push(left_tiles_row)
            left_tiles_positions.push(left_tiles_positions_row)
        }

        for(var i = 0; i < this.cube.length; i++){
            var front_colors_row = []
            var front_tiles_row = []
            var front_tiles_positions_row = []
            for(var j = 0; j < this.cube[i][0].length; j++){
                front_colors_row.push(this.cube[i][0][j][1]);
                front_tiles_row.push(this.tiles[i][0][j][1]);
                front_tiles_positions_row.push({...this.tiles[i][0][j][1].position});
            }
            front_colors.push(front_colors_row)
            front_tiles.push(front_tiles_row)
            front_tiles_positions.push(front_tiles_positions_row)
        }

       for(var i = 0; i < this.cube.length; i++){
            var back_colors_row = []
            var back_tiles_row = []
            var back_tiles_positions_row = []
            for(var j = 0; j < this.cube[i][this.cube.length - 1].length; j++){
                back_colors_row.push(this.cube[i][this.cube.length - 1][j][4]);
                back_tiles_row.push(this.tiles[i][this.cube.length - 1][j][4]);
                back_tiles_positions_row.push({...this.tiles[i][this.cube.length - 1][j][4].position});
            }
            back_colors.push(back_colors_row)
            back_tiles.push(back_tiles_row)
            back_tiles_positions.push(back_tiles_positions_row)
        }

        for(var i = 0; i < this.cube[0].length; i++){
            var up_colors_row = []
            var up_tiles_row = []
            var up_tiles_positions_row = []
            for(var j = 0; j < this.cube[i].length; j++){
                up_colors_row.push(this.cube[0][i][j][5]);
                up_tiles_row.push(this.tiles[0][i][j][5]);
                up_tiles_positions_row.push({...this.tiles[0][i][j][5].position});
            }
            up_colors.push(up_colors_row)
            up_tiles.push(up_tiles_row)
            up_tiles_positions.push(up_tiles_positions_row)
        }

        for(var i = 0; i < this.cube[this.cube.length - 1].length; i++){
            var down_colors_row = []
            var down_tiles_row = []
            var down_tiles_positions_row = []
            for(var j = 0; j < this.cube[i].length; j++){
                down_colors_row.push(this.cube[this.cube.length - 1][i][j][2]);
                down_tiles_row.push(this.tiles[this.cube.length - 1][i][j][2]);
                down_tiles_positions_row.push({...this.tiles[this.cube.length - 1][i][j][2].position});
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
            this.current_move = cube.move_queue.shift();
            var layer = this.get_layer(this.current_move[0], this.current_move[1]);
            this.current_layer_tiles = layer[0];
            this.current_layer_cubies = layer[1];
            var multiplier = 1;
            if(this.current_move[2] == 1){multiplier = -1;}
            if(this.current_move.length > 3){multiplier = multiplier * this.current_move[3];}
            this.destination_angle = Math.PI / 2 * multiplier;
            this.step = this.destination_angle / 10;
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
            this.move_queue.push([this.current_move[0], this.current_move[1], direction, this.current_move[3]]);
        }
        for(var i=this.moves_executed.length - 1; i>=0; i--){
            var direction = 0;
            if(this.moves_executed[i][2] == 0){direction = 1;}
            this.move_queue.push([this.moves_executed[i][0], this.moves_executed[i][1], direction, this.moves_executed[i][3]]);
        }
//        for(var i=this.move_queue.length - 1; i>=0; i--){
//            var direction = 0;
//            if(this.move_queue[i][2] == 0){direction = 1;}
//            this.move_queue.push([this.move_queue[i][0], this.move_queue[i][1], direction, this.move_queue[i][3]]);
//        }
    }
    
    scramble(){
        this.move_queue = this.random_moves(30);        
    }
    
}
    
var scene = new THREE.Scene();
//var size = prompt();
var cube = new Cube(3);
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
controls.enableDamping = true;

camera.position.x = -5;
camera.position.y = 2.5;


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

window.addEventListener('mousedown', function(event){
    raycaster.setFromCamera(mouse, camera);
    ray = [{...raycaster.ray.direction}, {...raycaster.ray.origin}]
//    console.log(camera.position);
//    console.log(camera.rotation);
//    console.log(camera);

    raycaster.setFromCamera(mouse, camera);
    const intersects_tiles = raycaster.intersectObjects(cube.tiles_group.children);
    const intersects_cubies = raycaster.intersectObjects(cube.cubies_group.children);
    
    var intersects = false;
    
    
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
        raycaster.setFromCamera(mouse, camera);
        var direction = raycaster.ray.direction;
        var origin = raycaster.ray.origin;
        
//        console.log(ray);
//        console.log([direction, origin]);
        
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
        
        if(max_index == 2){

            if(delta[max_index] - camera_delta[max_index] > 0){
                cube.move_queue.push(['X', index[1], 0])
            }else if(delta[max_index] - camera_delta[max_index] < 0){
                cube.move_queue.push(['X', index[1], 1])
            }
        }
        else if(max_index == 0){

            if(delta[max_index] - camera_delta[max_index] > 0){
                cube.move_queue.push(['Y', index[0], 1])
            }else if(delta[max_index] - camera_delta[max_index] < 0){
                cube.move_queue.push(['Y', index[0], 0])
            }
    }
        else if(max_index == 1){

            if(delta[max_index] - camera_delta[max_index] > 0){
                cube.move_queue.push(['Z', index[2], 0])
            }else if(delta[max_index] - camera_delta[max_index] < 0){
                cube.move_queue.push(['Z', index[2], 1])
            }
    }
    index = null;
}

    
    mouseDown = null;
    selectedCubie = null;
    controls.enableRotate = true;

    
});

var update = function(){
    
    
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
        cube.cubies_group.children[i].material.opacity = 1; 
        cube.cubies_group.children[i].material.color.setHex(0x000000);
    }
    for(var i=0; i<cube.tiles_group.children.length; i++){
        cube.tiles_group.children[i].material.opacity = 1; 
    }
}
function hover(){
    
    raycaster.setFromCamera(mouse, camera);
    const intersects_tiles = raycaster.intersectObjects(cube.tiles_group.children);
    const intersects_cubies = raycaster.intersectObjects(cube.cubies_group.children);
    if(intersects_tiles.length > 0){
//        intersects_tiles[0].object.material.transparent = true;
//        intersects_tiles[0].object.material.opacity = 0.5;
        
    for(var i=0; i<cube.tiles.length; i++){
        for(var j=0; j<cube.tiles[i].length; j++){
            for(var k=0; k<cube.tiles[i][j].length; k++){
                for(var l=0; l<cube.tiles[i][j][k].length; l++){
                    if(cube.tiles[i][j][k][l] == intersects_tiles[0].object){
                        cube.cubies[i][j][k].material.color.setHex(0xeeeeee);
                    }
                }
            }
        }
    }
        
    }
    if(intersects_cubies.length > 0){
        
        intersects_cubies[0].object.material.color.setHex(0xeeeeee);
        
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