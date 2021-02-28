const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var dground, tree, treeimg
var boy, boyimg;
var stones;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, attach; 

function preload(){
	treeimg=loadImage("tree.png");
	boyimg=loadImage("boy.png");
  }

function setup() {
	createCanvas(1000, 650);

	engine = Engine.create();
	world = engine.world;

	dground=new ground();
	stones=new Stone(1000,460,23);
	mango1=new mango(600,290,34);
	mango2=new mango(855,325,35);
	mango3=new mango(670,260,35);
	mango4=new mango(730,200,35);
	mango5=new mango(710,320,36);
	mango6=new mango(780,250,35);
	mango7=new mango(825,170,35);
	mango8=new mango(880,260,35);
	mango9=new mango(940,220,35);
	mango10=new mango(980,305,35);


    attach=new Throw(stones.body, {x:100,y:465})

    tree=createSprite(775,368);
	tree.addImage(treeimg)
    tree.scale=0.42;

    boy=createSprite(160,550);
	boy.addImage(boyimg)
	boy.scale=0.125;

	Engine.run(engine);

}

function draw() {
    rectMode(CENTER);
	background(255);

	fill("black");
	textSize(18);


    detectCollision(stones,mango1);
    detectCollision(stones,mango2);
    detectCollision(stones,mango3);
    detectCollision(stones,mango4);
    detectCollision(stones,mango5);
    detectCollision(stones,mango6);
    detectCollision(stones,mango7);
    detectCollision(stones,mango8);
	detectCollision(stones,mango9);
    detectCollision(stones,mango10);

	drawSprites();

	stones.display();
	dground.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();

}

function mouseDragged(){
	Matter.body.setPosition(stones.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}

function detectCollision(Istones, Imango){

	if(Istones.body.position.x- Imango.body.position.x <Imango.diametre + Istones.diametre
		&& Imango.body.position.x - Istones.body.position.x < Imango.diametre + Istones.diametre
		&& Istones.body.position.y -Imango.body.position.y < Imango.diametre + Istones.diametre
		&& Imango.body.position.y - Istones.body.position.y < Imango.diametre + Istones.diametre){
        Matter.body.setStatic(Imango.body,false);
		}
		function keyPressed(){
			if(keyCode===32){
				Matter.body.setPosition(stones.body,{x:100,y:465});
				attach.Launch(stones.body);
			}

		}
}
