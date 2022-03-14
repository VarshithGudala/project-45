var zombie;
var family,man;
var come;
var madmana;
var madman;
var det;
var music;
var game;
var gameState =1;
var life = 3;


function preload() {
 zombian = loadImage("zombiesgroup.png");
 man = loadImage("familyimage.png");
 come = loadImage("hauntedhouse.png");
 madmana = loadImage("zombiesgroup2.png");
 detman = loadImage("zombiesgroup3.png");
 music = loadSound("bg.mp3");
 games = loadImage("gameover.png");
}



function setup() {
 createCanvas(1300,600)
 music.play();

 family = createSprite(600,300,20,50);
 family.addImage(man);
 family.scale = 1.2;
 
 
 zombies = new Group();
 madmans = new Group();
 dets = new Group();



}

 


function draw() {
background(come);


if (gameState === 1) {
  background(come);
  family.x = World.mouseX;
  family.y = World.mouseY;
 
  edges = createEdgeSprites();
  family.collide(edges);
  
  //code to reset the background
  if (background.x > 400) {
    background.x = height / 2;
    }

  createdetsImage();
  createmadmansImage();
  createzombiesImage();



  if (zombies.isTouching(family)) {
    for (var i = 0; i < zombies.length; i++) {
      if (zombies[i].isTouching(family)) {
        family.destroy();
        life -=1
        gameState = 2;
      }
    }
  }

  if (madmans.isTouching(family)) {
    for (var i = 0; i < madmans.length; i++) {
      if (madmans[i].isTouching(family)) {
        family.destroy();
        life -=1
        gameState = 2;}
    }
  }

  if (dets.isTouching(family)) {
    for (var i = 0; i < dets.length; i++) {
      if (dets[i].isTouching(family))
       {console.log(i)
        family.destroy();
        life -=1
        gameState = 2;
      }
    }
  }

}

  
  if (gameState == 2) {

    game = createSprite(width/2, height/2);
    game.addImage(games);
    game.scale = 1.5;
    
    console.log("good");

    family.destroy()

    zombies.destroyEach();  
    zombies.setVelocityYEach(0);
 
    madmans.destroyEach();  
    madmans.setVelocityYEach(0);

    dets.destroyEach();  
    dets.setVelocityYEach(0);
  }


drawSprites();
}
function createzombiesImage() {
  if (World.frameCount % 100 == 0) {
    var zombie = createSprite(Math.round(random(50, width - 50), 40, 10, 10));
    zombie.addImage(zombian);
    zombie.scale = 0.80;
    zombie.velocityY = 3;
    zombie.lifetime = windowHeight;
    zombies.add(zombie);
  }
}
function createdetsImage() {
  if (World.frameCount % 100 == 0) {
    var det = createSprite(Math.round(50, 50, 10, random(10, width - 10)));
    det.addImage(detman);
    det.scale = 0.80;
    det.velocityX = 3;
    det.velocityY = 2;
    det.lifetime = windowHeight;
    dets.add(det);
  }

}
function createmadmansImage() {
  if (frameCount % 100 == 0) {  
    var madman = createSprite(Math.round(900, 50, random(10, width - 10),10));
    madman.addImage(madmana);
    madman.scale = 0.80;
    madman.velocityX = -3;
    madman.velocityY = 2;
    madman.lifetime = windowHeight;
    madmans.add(madman);
  }
}

