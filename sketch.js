const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground,tree,stone;
var boyImage;
var slingshot;
var mango1,mango2,mango3,mango4,mango5;

function preload(){
	boyImage=loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1000,500);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500,495,1000,10);

	tree = new Tree();
	

	stone = new Stone(300,420,50,50);

	slingshot = new SlingShot(stone.body,{x:170,y:410})

	mango1 = new Mango(720,200,80);
	mango2 = new Mango(750,100,80);
	mango3 = new Mango(800,150,80);
	mango4 = new Mango(890,170,80);
	mango5 = new Mango(840,50,80);
	


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  imageMode(CENTER)
  image(boyImage,200,450,120,170);
  slingshot.display();
  stone.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  
  
  
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
   slingshot.fly();
}

function keyPressed(){
   if(keyCode === 32){
	   Matter.Body.setPosition(stone.body,{x:170,y:410});
	  slingshot.attach(stone.body);
   }
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}





