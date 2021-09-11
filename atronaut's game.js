var astronaut;
var bg,bgImg;
var sleep,sleepImg,sleeping;
var brush,brushImg,brushing;
var gym,gymImg;
var eat,eatImg;
var drink,drinkImg;




function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  astronaut=createSprite(300,230);
  astronaut.addanimation("sleeping",sleep);
  astronaut.scale=0.1;

  if(keyDown("up_arrow")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY-0;
  }


}

function preload() {
bg=loadImage("images/iss.png");
sleep=loadAnimation("images/sleep.png");
brush=loadAnimation("images/brush.png");
gym=loadAnimation("images/gym21.png","images/gym22.png");
eat =loadAnimation("images/eat1.png","images/eat2.png");
drink=loadAnimation("images/drink1..png","images/drink2.png");
move=loadAnimation("images/move.png","images/move1.png");



}

function draw() {
  background(255,255,255);  
  drawSprites();
}