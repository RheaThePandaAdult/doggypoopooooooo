var obstaclesGroup;
var groundimg, ground, dog, gameState=0;
var d1, d2, d3, start, score=0, pointsGroup;
function preload(){
    groundimg=loadImage("ground.png");
    d1=loadAnimation("dog1.png","dog2.png","dog3.png");
}

function setup(){
createCanvas(600,600);
dog=createSprite(50,580,20,50);
dog.addAnimation("d1",d1);
dog.scale=0.1;
ground=createSprite(300,695,600,20);
ground.addImage("grnd",groundimg);
ground.scale=3.5;
ground.x=ground.width/2;
ground.velocityX=-5;
obstaclesGroup=new Group ();
pointsGroup=new Group ();
start=createButton("start game");
start.position(170,190);
}

 function draw(){
     background("lightblue");
     drawSprites();
     if(gameState===0){
         textSize(50);
         fill("red");
         text('welcome',140,100);
        ground.visible=false;
        dog.visible=false;
        start.mousePressed(()=>{
            gameState=1
        })
        }

     if(gameState===1){
        ground.visible=true;
        dog.visible=true;
start.hide()
     if(ground.x<0){
         ground.x=ground.width/2;
     }
     if(keyDown("space")&&dog.y>=505){
         dog.velocityY=-40;
         dog.velocityX=10;
     }
     dog.velocityX=0;
     console.log(dog.y);

     dog.velocityY=dog.velocityY+2;
     dog.collide(ground);
text("score:"+score,20,20);
     obstacles()
     coins()
     if(pointsGroup.collide(dog)){

pointsGroup.destroyEach();
score=score+1;


     }
     if(obstaclesGroup.collide(dog))
     {
         gameState=0
         start.show()
         obstaclesGroup.destroyEach();
  pointsGroup.destroyEach();     
     }
    }
 }
 function obstacles(){
     if(frameCount%100===0){
         var hurdle=createSprite(600,510,40,40);
         hurdle.velocityX=-3;
        obstaclesGroup.add(hurdle);
     }
 }

 function coins(){
    if(frameCount%150===0){
        var points=createSprite(600,random(300,400),20,20);
        points.velocityX=-5;
       pointsGroup.add(points);
    }
 }