var car, wall;
var weight, speed;
var deformation;
function setup() {
  createCanvas(800,400);
  car=createSprite(0, 200, 80, 80);
  wall=createSprite(600,200,70,100)
  speed=random(50,200);
  weight=random(400,1500);
  car.velocityX=speed;
}

function draw() {
  background(255,255,255);  

  if(car.x-wall.x<wall.width/2+car.width/2 
    && wall.x-car.x<wall.width/2+car.width/2
    && car.y-wall.y<wall.height/2+car.height/2
    && wall.y-car.y<wall.height/2+car.height/2){

    car.velocityX=0;
    deformation= 0.5*weight*speed*speed/22509;
    if(deformation<100){
    car.shapeColor=color(0,255,0);
   }

   if(deformation>180){
   car.shapeColor=color(255,0,0)
   }

   if(deformation<180 && deformation>100){
   car.shapeColor(230,230,0);
   }
    }
  drawSprites();
}