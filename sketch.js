var jerry ,jerryImg;
var tom, tomImg, gameover;
var  floorImg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var cheeseImg, cheeseImg1;
var cheese, cheese2;
var tomG, cheeseGroup, cheeseG;
var score = 0;

function preload(){
  jerryImg = loadAnimation("jerry1.png","jerry.png");
tomImg = loadImage("tom.png");
  floorImg = loadImage("floor.png");
  gameover = loadAnimation("gameOver.png");
  cheeseImg = loadImage("cheese.png"); 
  cheeseImg1 = loadImage("cheese1.png");
  
}

function setup() {
  createCanvas(1000,500);
  
 jerry = createSprite(150,250);
 jerry.addAnimation("jerryRunning",jerryImg);
 jerry.scale = 0.2;
  //jerry.debug = true
  jerry.setCollider("rectangle",0,0,350,350);
  
  
  cheeseG = new Group();
   cheeseGroup = new Group();
   tomG = new Group();
  
  
}

function draw() {
 if(gameState===PLAY){
  background("white");
   background.scale = 2;
   background.velocityX = -(4 + 3 * score / 100);
   if(background.x<100){
    background.x = 250;
   }
   
   
   
  jerry.y = World.mouseY;
  
  edges= createEdgeSprites();
  jerry.collide(edges);
  
  
    createCheese();
    createCheese2();
    createTom();

    if (cheeseG.isTouching(jerry)) {
      cheeseG.destroyEach();
      score = score + 70;
      
    }else if(cheeseGroup.isTouching(jerry)) {
      cheeseGroup.destroyEach();
      score = score + 140;
      
    }else{
      if(tomG.isTouching(jerry)) {
        gameState=END;
        
        jerry.addAnimation("jerryRunning",gameover);
        jerry.x=250;
        jerry.y=250;
      jerry.scale = 1;
        
        
        
        cheeseG.destroyEach();
        tomG.destroyEach();
        cheeseGroup.destroyEach();
        
        cheeseG.setVelocityYEach(0);
       cheeseGroup.setVelocityYEach(0);
        tomG.setVelocityYEach(0);
        
      
      
    }
  }
  
  drawSprites();
  textSize(20);
  fill("black");
  text("Score : "+ score,150,30);
  }

}



function createCheese() {
  if (World.frameCount % 200 == 0) {
  cheese = createSprite(400,Math.round(random(50, 350), 10, 10));
  cheese.addImage(cheeseImg);
  cheese.scale=0.09;
  cheese.velocityX = -(3 + 3 * score / 100);
  cheese.lifetime = 150;
  cheeseG.add(cheese);
  }
}

function createCheese2() {
  if (World.frameCount % 320 == 0) {
  cheese2 = createSprite(400,Math.round(random(50, 350), 10, 10));
  cheese2.addImage(cheeseImg1);
  cheese2.scale=0.13;
  cheese2.velocityX = -(3 + 3 * score / 100);
  cheese2.lifetime = 300;
  cheeseGroup.add(cheese2);
}
}

function createTom() {
  if (World.frameCount % 410 == 0) {
  tom = createSprite(400,Math.round(random(50, 350), 10, 10));
  tom.addImage(tomImg);
  tom.scale=0.12;
  tom.velocityX = -(3 + 3 * score / 100);
  tom.lifetime = 300;
  tomG.add(tom);
  }
}