
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree1;
var mango1,mango2,mango3,mango4,mango5,mango6;
var juno;
var rock;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  tree1 = new Tree(590,490,450,450);
  
  //rope1 = new SlingShot(Rock.body,{x:122,y:570});

	mango1 = new Fruit(500,420,60,60);
	mango2 = new Fruit(600,420,60,60);
	mango3 = new Fruit(560,360,60,60);
	mango4 = new Fruit(530,460,60,60);
	mango5 = new Fruit(700,450,60,60);
	mango6 = new Fruit(630,390,60,60);

	juno = new Boy(200,630,250,250);

	rock = new Rock(122,570);
 
  



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(244,244,244);
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  juno.display();
  rock.display();






  drawSprites();
 
}
function detectCollison(rock,mango){
var distance=dist(rock.body.position.x, rock.body.position.y,mango)
}
function mouseDragged(){
    
    Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
    
}





