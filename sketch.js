var player_running,bananaImage,obstacleImage,obstacleGroup,score,img,background,score;

function preload(){
  img=loadImage("jungle.jpg");
  
  player_running=
    loadAnimation("Monkey_01.png","Monkey_02.png",
"Monkey_03.png","Monkey_04.png,Monkey_05.png,Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
bananaImage=loadImage("banana.png");
obstacleImage=loadImage("stone.png");
  
}
function setup() {
  createCanvas(400, 400);
  
 background=createSprite(200,200,200,200);
 background.addImage("background",img);
  
var monkey =createSprite(40,300);
monkey.addAnimation("monkey",player_running);
monkey.scale=0.1;

var ground = createSprite(200,350,400,20);
ground.x=ground.width/2;
ground.visible=false;
  
var bananaGroup=new Group();

var obstacleGroup=new Group();
  
var score=0;

}

function draw() {
  background(220);
  
  if(gameState===play){
  
   ground.velocityX = -4;
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    //console.log(monkey.y);
    
    if(keyDown("space")){
      monkey.velocityY = -12 ;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
    
    switch(score){
      case 10:monkey.scale=0.12;
            break;
      case 20:monkey.scale=0.14;
            break;
      case 30:monkey.scale=0.16;
            break;
      case 40:monkey.scale=0.18;
            break;
     default:break;    
        
    }
    
    if(ObstaclesGroup.isTouching(monkey)){
      monkey.scale=0.1;
    }
    
    createBanana();
    createObstacles();
  
  if(monkey.isTouching(bananaGroup)){
      bananaGroup.destroyEach();
      score=score+2;
  }
     if(ObstaclesGroup.isTouching(trex)){
      gameState=end;
  }
      else if(gameState === END) {
        ground.velocityX = 0;
    trex.velocityY = 0;
    ObstaclesGroup.setVelocityXEach(0);
    CloudsGroup.setVelocityXEach(0);
    
    ObstaclesGroup.setLifetimeEach(-1);
    BananaGroup.setLifetimeEach(-1);
 }
  drawSprites();
}
}

function createBanana(){
 if(World.frameCount%80===0) {
     var fruit=createSprite(400,200,20,20);
     fruit.addAnimation("fruit",bananaImage);
     fruit.scale=0.05;
     fruit.y = Math.round(random(120,260));
     fruit.velocityX=-8;
     fruit.lifetime=100;
     bananaGroup.add(fruit);
   }

 }

function createObstacles(){
    if(World.frameCount % 200 === 0) {
    var obstacle = createSprite(400,300,10,40);
    obstacle.velocityX = -6;
    obstacle.addAnimation("obstacle",obstacleImage);
    obstacle.scale=1.5;
    obstacle.lifetime = 70;
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
}

}
