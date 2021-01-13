
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(300,400,100);
	bob2 = new Bob(350,400,100);
	bob3 = new Bob(400,400,100);
	bob4 = new Bob(450,400,100);
	bob5 = new Bob(500,400,100);
  
	roof1 = new Roof(400,200,300,30);

	rope1 = new Rope(bob1.body, roof1.body,-100,0);
	rope2 = new Rope(bob2.body, roof1.body,-50,0);
	rope3 = new Rope(bob3.body, roof1.body,0,0);
	rope4 = new Rope(bob4.body, roof1.body,50,0);
	rope5 = new Rope(bob5.body, roof1.body,100,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(90,90,90);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof1.display();

  //keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:600});
	}
	}


