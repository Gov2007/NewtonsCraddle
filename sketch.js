
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bob1, bob2, bob3, bob4, bob5;
var roof, rope1, rope2, rope3, rope4, rope5;
var bob1Diameter = 50;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	bob1 = new bob(500, 500, 25);
	bob2 = new bob(550, 500, 25);
	bob3 = new bob(600, 500, 25);
	bob4 = new bob(650, 500, 25);
	bob5 = new bob(700, 500, 25);

	roof = new Roof(600, 200, 300, 20);

	rope1 = new rope(bob1.body, roof.body, -bob1Diameter*2, 0);
	rope2 = new rope(bob2.body, roof.body, -bob1Diameter, 0);
	rope3 = new rope(bob3.body, roof.body, 0, 0);
	rope4 = new rope(bob4.body, roof.body, bob1Diameter, 0);
	rope5 = new rope(bob5.body, roof.body, bob1Diameter*2, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  display();
  drawSprites();
 
}

function display(){
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	roof.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
}

function keyPressed() {
	if (keyCode ===32) {
	 Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-150,y:-100}); 
	} 
}





  