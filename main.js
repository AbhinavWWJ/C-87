var canvas= new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;

block_image_width=30;
block_image_height=30;

var player_object="";
var block_image_object="";
function player_update(){
    fabric.Image.fromURL("player.png", function(img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y, 
            left:player_x
        });
        canvas.add(player_object);
    });

}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);

        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y, 
            left:player_x
        });
        canvas.add(block_image_object);
    });

}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypress=e.keyCode;
    console.log(keypress);
    if(e.shiftKey==true && keypress=='80'){
        console.log("p & shiftKey pressed together");
        block_image_width=block_image_width+10 
        block_image_height=block_image_height+10;
 document.getElementById("current_width").innerHTML=block_image_width;
 document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.shiftKey==true && keypress=='77'){
        console.log("m & shiftKey pressed together");
        block_image_width=block_image_width-10 
        block_image_height=block_image_height-10;
 document.getElementById("current_width").innerHTML=block_image_width;
 document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(keypress=='38'){
        up();
        console.log("up");
    }
    if(keypress=='40'){
        down();
        console.log("down");
    }
    if(keypress=='37'){
        left();
        console.log("left");
    }
    if(keypress=='39'){
        right();
        console.log("right");
    }
    if(keypress=='87'){
        new_image('wall.jpg');
        console.log("w");
    }
    if(keypress=='71'){
        new_image('ground.png');
        console.log("g");
    }
    if(keypress=='76'){
        new_image('light_green.png');
        console.log("l");
    }
    if(keypress=='84'){
        new_image('trunk.jpg');
        console.log("t");
    }
    if(keypress=='82'){
        new_image('roof.jpg');
        console.log("r");
    }
    if(keypress=='89'){
        new_image('yellow_wall.png');
        console.log("y");
    }
    if(keypress=='68'){
        new_image('dark_green.png');
        console.log("d");
    }
    if(keypress=='85'){
        new_image('unique.png');
        console.log("u");
    }
    if(keypress=='67'){
        new_image('cloud.jpg');
        console.log("c");
    }
    
}