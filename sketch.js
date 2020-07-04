const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,Platform;
var ball;
var backgroundImage;

var score = 0;
var bi;

function preload() {
    getTime();
}

function setup(){
    createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(250,height,1200,30);
    Platform = new Ground(850,350,400,15);
    
   
    box1 = new Box(850,349,30,50);
    box2 = new Box(880,349,30,50);
    box3 = new Box(820,349,30,50);
    box4 = new Box(833,249,30,50);
    box5 = new Box(867,249,30,50);
    box6 = new Box(850,200,30,50);
    
    box7 = new Box(500,450,30,50);
    box8 = new Box(530,450,30,50);
    box9 = new Box(470,450,30,50);
    box10 = new Box(560,450,30,50);
    box11 = new Box(440,450,30,50);
    box12 = new Box(590,450,30,50);

    box13 = new Box(500,399,30,50);
    box14 = new Box(530,399,30,50);
    box15 = new Box(470,399,30,50);
    box16 = new Box(560,399,30,50);
    
    box17 = new Box(500,348,30,50);
    box18 = new Box(530,348,30,50);
    
    box19 = new Box(515,230,30,50);
   
    ball = new Ball(200,200,30,50);
    
   
    slingShot = new SlingShot( ball.body,{x:193 ,y:320 });
    
}

function draw(){
    if (backgroundImage){
    background(backgroundImage);
    }  
     textSize(30);
     fill("red");;
     text(score,1100,30);



     Engine.update(engine);

     

    ground.display();
    Platform.display();
    box1.display();
    box1.score();
    box2.display();
    box2.score();
    box3.display();
    box3.score();
    box4.display();
    box4.score();
    box5.display();
    box5.score();
    box6.display();
    box6.score();
    box7.display();
    box7.score();
    box8.display();
    box8.score();
    box9.display();
    box9.score();
    box10.display();
    box10.score();
    box11.display();
    box11.score();
    box12.display();
    box12.score();
    box13.display();
    box13.score();
    box14.display();
    box14.score();
    box15.display();
    box15.score();
    box16.display();
    box16.score();
    box17.display();

    box17.score();
    box18.display();
    box18.score();
    box19.display();  
    box19.score();
    ball.display();

    slingShot.display();
    
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(ball.body);
    }

}


async function getTime(){
  var testAPI  = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var testJSON = await testAPI.json();
  var datetime = testJSON.datetime;
  var hour  = datetime.slice(11,13);
  if (hour< 18 && hour > 6 ){
      bi = "Day.jpg";
  } else {
      bi = "Night.jpg";
  }
  backgroundImage = loadImage(bi)
}