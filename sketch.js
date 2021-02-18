
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8 ;
var ball,chain,ground;

function preload() {
   // backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(900,600);
    engine = Engine.create();
    world = engine.world;

box1 =new Box (600,545,50,50);
box2 =new Box (600,500,50,50);
box3 =new Box (600,450,50,50);
box4 =new Box (600,400,50,50);
box5 =new Box (600,350,50,50);
box6 =new Box (600,300,50,50);
box7 =new Box (600,250,50,50); 
box8 =new Box (600,200,50,50); 

ground =new Ground(400,580,900,20)

ball = new Ball (380,500,50)

chain1 = new Slingshot(ball.body,{x:380,y:100});

}

function draw(){
    background("white");
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    ground.display();
    chain1.display();
    ball.display();
   
}

function mouseDragged(){
   Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
