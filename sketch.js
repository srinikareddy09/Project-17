var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var survivalTime = 0;

function preload(){
 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
 
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  //creating monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
 
  //creating ground
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  bananaGroup = new Group()
  obstacleGroup = new Group()
}

function draw() {
  background(225);
 
  if(ground.x < 0) {
    ground.x = ground.width/2;
  }
 
  if(keyDown("space")) {
    monkey.velocityY = -12;
  }
 
  monkey.velocityY = monkey.velocityY + 0.8;
 
  monkey.collide(ground);
  
  createBananas()
  createObstacles()
 
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,100,50);
 
  drawSprites();
}

function createBananas() {
  if(frameCount % 80 === 0) {
    banana = createSprite(200,Math.round(random(120,200)),10,10);
    banana.addImage("banana", bananaImage);
    banana.velocityX = -4;
    banana.lifetime = 450;
    banana.scale = 0.1;
    bananaGroup.add(banana);
  }
}

function createObstacles() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600, 330, 10, 10);
    obstacle.addImage("obstacle", obstacleImage);
    obstacle.velocityX = -3
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
  }
}