var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["45cefef5-4a0e-4832-ba9e-40781d64f9f5"],"propsByKey":{"45cefef5-4a0e-4832-ba9e-40781d64f9f5":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"hlJkE74zA2gNkj_.cCzj57jMe1Ycvpum","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/45cefef5-4a0e-4832-ba9e-40781d64f9f5.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var striker = createSprite(200, 200,10,10);
striker.shapeColor="white";

var playerMallet = createSprite(200, 50,50,10);
playerMallet.shapecoler="black";

var computerMallet = createSprite(200, 350,50,10);
computerMallet.shapeColor="black";

var goal1 = createSprite(200, 28,100,20);
goal1.shapeColor="yellow";

var goal2 = createSprite(200, 372,100,20);
goal2.shapeColor="yellow";















var gameState = "serve";
var playerscore = 0;
var computerscore = 0;









function serve () {
  striker.velocityX=3;
  striker.velocityY=4;
}

function reset () {
  striker.x=200;
  striker.y=200;
  striker.velocityY=0;
  striker.velocityX=0;
}





function draw() {
  background("green");
 
 if (gameState === "serve") {
    text("Press Space to strike",150,180);
 
 } 
  text(computerscore, 50, 230);
    text(playerscore,50,180);
 
 
   if (playerMallet === 5 || computerMallet === 5) {
    gameState="over";
    text("gameover", 150, 180);
    text("press r to start",150,220);
  }
  if (keyDown("r")&& gameState ==="end") {
    gameState="serve";
    computerMallet=0;
    playerMallet=0;
  }
 
  if (keyDown("LEFT")) {
    playerMallet.x=playerMallet.x-10;
  }
  if (keyDown("RIGHT")) {
   playerMallet.x = playerMallet.x+10;
  }
  
 
    
    
  
  
   computerMallet.x= striker.x;
  
  for (var i = 0; i < 400; i=i+20) {
    line(i, 200, i+10, 200);
    
  }
   if (gameState === "serve") {
    text("Press Space to Serve",150,180);
  }
 
 if (keyDown("space") && gameState === "serve") {
    serve();
    gameState = "play";
  }

  
   if(striker.isTouching(goal1) || striker.isTouching(goal2)) {
    if (striker.isTouching(goal1)) 
      computerscore=computerscore+1;
     
      
       }
    if (striker.x < 0) {
      playerscore=playerscore+1;
    
    
    reset();
    gameState = "serve";
    }
    
  if (playerMallet === 5 || computerMallet === 5) {
    gameState="over";
    text("gameover", 150, 180);
    text("press r to start",150,220);
  }
 
 if (keyDown("r")&& gameState ==="over") {
    gameState="serve";
    computerscore=0;
    playerscore=0;
    }   



createEdgeSprites();
striker.bounceOff(edges);
playerMallet.bounceOff(edges);
computerMallet.bounceOff(edges);
striker.bounceOff(goal1);
striker.bounceOff(playerMallet);
striker.bounceOff(computerMallet);


 drawSprites();


  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
