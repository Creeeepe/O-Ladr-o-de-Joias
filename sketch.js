var ladrão = createSprite(25,375,15,15);
ladrão.shapeColor = "yellow";
var laser = createSprite(300,350,200,5);
laser.shapeColor = "red";
laser.velocityY = 2;
var laser1 = createSprite(100,5,200,5);
laser1.shapeColor = "red";
laser1.velocityY = 2;
var joia = createSprite(375,25,20,20);
joia.scale = "0.1";
joia.setAnimation("diamante");

var gameState = "play";

function draw() {
background("grey");
createEdgeSprites();

if(gameState == "play"){
  
  joia.visible = true;
  ladrão.visible = true;
  if(laser.isTouching(ladrão)||laser1.isTouching(ladrão)){
    gameState = "loser"; 
  
}

if(ladrão.isTouching(joia)){
    gameState = "victory";
}
}

if(gameState == "loser"){
  
  stroke("red");
  fill("black");
  textSize(24);
  text("Ladrão capturado", 120,200);
  laser.setVelocity(0,0);
  laser1.setVelocity(0,0);
  ladrão.visible = false;
  joia.visible = true;
  
}

if(gameState == "victory"){
  
  stroke("#63C5DA");
  fill("white");
  textSize(24);
  text("Diamante capturado", 120,200);
  laser.setVelocity(0,0);
  laser1.setVelocity(0,0);
  ladrão.visible = false;
  joia.visible = false;
  
}


if (keyDown(RIGHT_ARROW)){
  ladrão.velocityX = 2;
  ladrão.velocityY = 0;
}

if (keyDown(LEFT_ARROW)){
  ladrão.velocityX = -2;
  ladrão.velocityY = 0;
}

if (keyDown(UP_ARROW)){
  ladrão.velocityX = 0;
  ladrão.velocityY = -2;
}

if (keyDown(DOWN_ARROW)){
  ladrão.velocityX = 0;
  ladrão.velocityY = 2;
}

laser.bounceOff(edges);
laser1.bounceOff(edges);
ladrão.bounceOff(edges);



drawSprites()
}
