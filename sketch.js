var bullet,wall;
var thickness,speed,weight;

function setup (){
 createCanvas(1600,400);
 speed=random(50,60);
 weight=random(25,30); 

bullet=createSprite(500,200,50,15);
bullet.velocityX=speed;
bullet.shapeColor="white";
wall=createSprite(1200,200,thickness,height/4);

thickness=random(22,83);

}

function draw(){
background("black");


if(hascolllided(bullet,wall)){

bullet.velocityX=0;
var damage=0.5 * weight * speed*speed/(thickness *thickness *thickness);

if(damage>10){


  wall.shapeColor="red";

}
if(damage<10){
  

  wall.shapeColor="green";

}


}


drawSprites();

}


function hascolllided(lbullet,lwall){

bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){

return true;
}

return false;


}