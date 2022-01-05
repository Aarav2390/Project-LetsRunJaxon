var boy,boy_running
var drink,bomb,coin
var path,power,invisPath
var drinkImage,bombImage,coinImage,pathImage,powerImage

function preload(){
  boy_running = loadAnimation("Runner-1.png","Runner-2.png");
  drinkImage = loadImage("energyDrink.png")
  bombImage = loadImage("bomb.png");
  coinImage = loadImage("coin.png");
  pathImage = loadImage("path.png");
  powerImage = loadImage("power.png");
}

function setup(){
  createCanvas(400,400);
  
  path = createSprite(200,200,200,400); 
  drink = createSprite(255,250);
  bomb = createSprite(150,200);
  coin = createSprite(200,100); 
  
  boy = createSprite(200,300,20,20);
  boy.addAnimation("running",boy_running);

 

  drink.scale = 0.15;
  bomb.scale = 0.08;
  coin.scale = 0.25;
  boy.scale = 0.05;
  path.scale = 0.55;
  
  path.addImage("path",pathImage);
  path.velocityY = 4;
  drink.velocityY = 4;
  bomb.velocityY = 4;
  coin.velocityY = 4;
  



  drink.addImage("drink",drinkImage);
  bomb.addImage("bomb",bombImage);
  coin.addImage("coin",coinImage);
}

function draw() {
  background(0);
 
  
if (path.y > 250){
  path.y = 120;
}

if (coin.y > 400){
  coin.y = 0
}

if (bomb.y > 400){
  bomb.y = 0
}

if(drink.y > 400){
  drink.y = 0
}
   

  drawSprites();


}
