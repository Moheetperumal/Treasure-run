var PLAY = 1;
var END = 0;
var gameState = 1;
var end,endImg;
var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;
var  score
var gameOver,gameOverImg
var restart,restartImg
function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
  gameOverImg = loadImage("tenor.gif");
  restartImg = loadImage("unnamed.png");
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;

  gameOver=createSprite(200,200)
  gameOver.addImage(gameOverImg)
  gameOver.scale=2
  
  restart=createSprite(200,270)
  restart.addImage(restartImg)
  restart.scale=0.5
  
  
  
//creating boy running
boy = createSprite(width/2,height-20,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

  score = 0
  
}

function draw() {

  background(0);
  boy.x = World.mouseX;
text("Score: "+ score, 500,50);  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  
 
  
  
 
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  if(gameState === PLAY){
     gameOver.visible=false
    restart.visible=false
    
    

    

  }
  if(gameState === END){
    boy .setVelocity=0
    path.setVelocity=0
    gameOver.visible=true
    cashG.setVelocityX=0
    diamondsG.setVelocityX=0
    jwelleryG.setVelocityX=0
    swordGroup.visible=false
    cashG.destroyEach();
    diamondsG.destroyEach();
    jwelleryG.destroyEach();
    swordGroup.destroyEach();
    
    restart.visible=true
    boy.visible=false
    
   
    if(keyDown("space")){
      
      gameState=PLAY
      
    }
    
  }
  
  if(swordGroup.isTouching(boy)){
    gameState = END
    path.velocityY=0
    gameOver.visible=true
    
    swordGroup.visible=false
    
  }
  
   
  if(cashG.isTouching(boy)){
    score = score+50
  }

      
      
  if(diamondsG.isTouching(boy)){
    score = score+50
  }
    
  
  if(jwelleryG.isTouching(boy)){
    score = score+50
  }
  
  
  
  

  
  
  
  createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      cashG.setVelocityX=0
       treaureCollection= treasureCollection +1;
      
    }
     if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      diamondsG.setVelocityX=0
  }
     if (jwelleryG.isTouching(boy)) {                          jwelleryG.destroyEach();
       jwelleryG.setVelocityX=0
   }
    
      if(swordGroup.isTouching(boy)) {
        swordGroup.destroyEach();
        swordGroup.setVelocityX=0
    }
  

  
  
 

  drawSprites();
  textSize(20);
  fill(255);
  text("Score: "+ score,150,30);
 
  
  
  



function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 80 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 80 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 150 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}
  
}