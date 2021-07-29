var ship
var sea;


function preload(){
  ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  seaImage = loadImage("sea.png")
}


function setup(){
  createCanvas(400,400);

  sea = createSprite(200,200,400,200);
  sea.addImage("sea",seaImage);
  sea.x = sea.width/2
  

  ship = createSprite(70,305,50,50)
  ship.addAnimation("running", ship_running);

  ship.scale = 0.15

}


function draw(){  
  background("blue");
  sea.velocityX = -2
  if(sea.x<0){
    sea.x = sea.width/2
  }
  drawSprites();
}