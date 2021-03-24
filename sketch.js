
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobobject1, bobobject2, bobobject3, bobobject4, bobobject5, roofobject;
var rope1, rope2, rope3, rope4, rope5;
var world;

function setup() {
	createCanvas(1600, 700);
rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	roofobject = new roof(width/2,height/4,width/7,20);
	bobDiameter = 40;
	startBobPositionX = width/2;
	startBobPositionY = height/4+500;
	bobobject1 = new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobobject2 = new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobobject3 = new bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobobject4 = new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobobject5 = new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	var render = Render.create({
element:document.body,
engine:engine,
options:{
	width:1200,
	height:700,
	wireframes:false

}
	}) 
rope1 = new rope(bobobject1.body, roofobject.body,-bobDiameter*2,0);
rope2 = new rope(bobobject2.body, roofobject.body,-bobDiameter*1,0)
rope3 = new rope(bobobject3.body, roofobject.body,0,0)
rope4 = new rope(bobobject4.body, roofobject.body,+bobDiameter*1,0)
rope5 = new rope(bobobject5.body, roofobject.body,+bobDiameter*2,0)











	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofobject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();
  
  

  
  drawSprites();
 
}



