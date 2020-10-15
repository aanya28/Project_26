var bobObj1, bobObj2, bobObj3, bobObj4, bobObj5, bobDiameter, roof;
var rope1, rope2, rope3, rope4, rope5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	bobDiameter=40;
	//Create the Bodies Here.
	roof = new Roof(400,100,600,50);
	bobObj1 = new Bob(300,300,100);
	bobObj2 = new Bob(350,300,100);
	bobObj3 = new Bob(400,300,100);
	bobObj4 = new Bob(450,300,100);
	bobObj5 = new Bob(500,300,100);

	rope1 = new Rope(bobObj1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bobObj2.body,roof.body,-bobDiameter*2,0);
	rope3 = new Rope(bobObj3.body,roof.body,-bobDiameter*2,0);
	rope4 = new Rope(bobObj4.body,roof.body,-bobDiameter*2,0);
	rope5 = new Rope(bobObj5.body,roof.body,-bobDiameter*2,0);





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}