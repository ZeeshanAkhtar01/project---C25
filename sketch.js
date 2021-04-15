const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Ground;
var Paper;
var Dustbin;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    Ground = new ground(800,670,1600,20);
	Paper = new paper(200,370,40,40);
	Dustbin = new dustbin(1200,650);
	
	
	Engine.run(engine);
  
}


function draw() {
  background(255);
  rectMode(CENTER);
  //Engine.update();
  Ground.display();
  Paper.display();
  Dustbin.display();
 
}

function keyPressed() {
	if (keyCode === 38) {
		Matter.Body.applyForce(Paper.body, Paper.position, {x : 90, y:-90});
	}
}

