
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy , tree,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,stone,ground,slingshot,treeimg
function preload()
{
	boy = loadImage("boy.png");
	treeimg = loadImage("tree.png")
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;
	stone = new Stone(235,530,30);
	m1 = new Mango(1100,100,30);
	
	tree = new Tree(1050,480,250,500);
	ground = new Ground(width/2,700,width,20);
	slingshot = new SlingShot(stone.body,{x:235,y:530});
	//Create the Bodies Here.



	Engine.run(engine);
  
}


function draw() {
  
  background(0);
 stone.display()
 tree.display()
 
 ground.display();
 slingshot.display(); 
 drawSprites();
 imageMode (CENTER)
 image(boy,300,500,200,300);
 image(treeimg,1050,300,500,700); 
 m1.display(); 
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
//function 

