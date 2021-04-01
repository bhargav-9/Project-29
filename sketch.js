const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var gameState = "onSling";
function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    platform=new ground(600,500,500,20);
    b1=new box(460,475,30,40);
    b2 =new box(515,475,30,40)
    b3 =new box(515,370,30,40);
    b4 =new box(570,475,30,40)
    b5 =new box(570,370,30,40)
    b6 =new box(570,265,30,40)
    b7=new box(625,475,30,40)
    b8=new box(625,370,30,40)
    b9=new box(625,265,30,40)
    b10=new box(625,160,30,40)
    b11=new box(680,475,30,40)
    b12=new box(680,370,30,40)
    b13=new box(680,265,30,40)
    b14=new box(735,475,30,40)
    b15=new box(735,370,30,40)
    b16=new box(790,475,30,40)
   Ball=new polygon(200,300,50)
   chain=new slingshot(Ball.body,{x:200,y:200})
}

function draw(){
    background("white");
    Engine.update(engine);
   platform.display()
    b1.display();
    b2.display();

    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    Ball.display();
    chain.display();

    


    



}
function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(Ball.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    chain.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
         chain.attach(Ball.body);
    }
}