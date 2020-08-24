const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var engine, world;

var backgroundImg,platform;
var ball;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ball = new Ball(230,420,30);
   
    slingshot = new SlingShot(ball.body,{x:200, y:420});
}

function draw(){
    background(255);
    Engine.update(engine);
    strokeWeight(4);
    ball.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


