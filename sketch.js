
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(width/2,670, width, 20)
	paper = new Paper(100, 200, 20);
	r1 = new Dustbin(600, 650, 80, 10);
	r2 = new Dustbin(650, 620, 10, 80);
	r3 = new Dustbin(550, 620, 10, 80);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  r2.display();
  r1.display();
  r3.display();
  paper.display();
  ground.display();
  
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 100, y: 150});
	}
}

