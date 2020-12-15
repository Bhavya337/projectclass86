var Canvas=new fabric.Canvas('myCanvas');

player_x=10;
player_y=10;

block_height=30;
block_width =30;

var player_object="";
var block_object="";

function player_update(){
fabric.Image.fromURL("ADV C86 2.JPG",function (Img){ player_object=Img;
     player_object.scaleToWidth(150); 
     player_object.scaleToHeight(150); 
     player_object.set({ top:player_y,left:player_x});
    Canvas.add(player_object);
    }
    );
}

function new_image(get_Image){
    fabric.Image.fromURL(get_Image,function (Img){ block_object=Img;
      block_object.scaleToWidth(block_width); 
        block_object.scaleToHeight(block_height); 
      block_object.set({ top:player_y,left:player_x});
       Canvas.add(block_object);
       }
       );

}


window.addEventListener("keydown",key_move);
function key_move(e){
  var key_presseed=e.keyCode;
  console.log(key_presseed);


if( e.shiftKey == true && key_presseed=="80" )
{
  console.log("p+shif preseed");
block_height=block_height+10;
block_width=block_width+10;
document.getElementById("current_width").innerHTML=block_width;
document.getElementById("current_height").innerHTML=block_height;
}

if( e.shiftKey && key_presseed=="77" )
{
  console.log("m+shif preseed");
block_height=block_height-10;
block_width=block_width-10;
document.getElementById("current_width").innerHTML=block_width;
document.getElementById("current_height").innerHTML=block_height;
}

if (key_presseed =="38" )
{
  up();
  console.log("up key presed");
}
if (key_presseed =="40" )
{
  down();
  console.log("down key presed");
}
if (key_presseed =="37" )
{
  left();
  console.log("left key presed");
}
if (key_presseed =="39" )
{
  right();
  console.log("right key presed");
}

if (key_presseed =="70" )
{
  new_image("thor_face.png");
  console.log("thor face ");
}

if (key_presseed =="66" )
{
  new_image("spiderman_body.png");
  console.log("spider man body  ");
}

if (key_presseed =="76" )
{
  new_image("ironman_legs.png");
  console.log("iron man legs");
}

if (key_presseed =="72" )
{
  new_image("captain_america_left_hand.png");
  console.log("americaleft hand  ");
}
if (key_presseed =="82" )
{
  new_image("hulk_right_hand.png");
  console.log("hulk right hand");
}
}

function up()
{   if ( player_y>=0){
  player_y = player_y-block_height;
  console.log(block_height+ "block height");
  console.log(player_y+ " when up is presed player y");
  console.log( player_x + "when up is presend player x " );
  Canvas.remove(player_object);
  player_update();
}
}



function down()
{   if ( player_y<=500){
  player_y = player_y+block_height;
  console.log(block_height+ "block height");
  console.log(player_y + " when down is presed player y");
  console.log( player_x + "when down is presend player x " );
  Canvas.remove(player_object);
  player_update();
}
}

function left()
{   if ( player_x>=0){
  player_x = player_x-block_width;
  console.log(block_width + "block width");
  console.log(player_y+ " when left is presed player y");
  console.log( player_x + "when left is presend player x " );
  Canvas.remove(player_object);
  player_update();
}
}


function right()
{   if ( player_x<=850){
  player_x = player_x+block_width;
  console.log(block_width + "block width");
  console.log(player_y+ " when right is presed player y");
  console.log( player_x + "when right is presend player x " );
  Canvas.remove(player_object);
  player_update();
}
}


