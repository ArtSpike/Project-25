
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperSprite;
var paperBody,ground
var paperIMG
var Box1, Box1Body;
var Box2, Box2Body;
var Box3, Box3Body;
var binIMG
var Box3image


function preload()
{
	paperIMG=loadImage("paper.png");
	binIMG=loadImage("bin.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperSprite=createSprite(width/2, 80, 10,10);
	paperSprite.addImage(paperIMG);
	paperSprite.scale=0.3
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	Box1=createSprite(width/2-100, height-100,30,120);
	Box2=createSprite(width/2+100,height-100,30,120);
	Box3=createSprite(width/2,height-55,200,30);
	Box3image=createSprite(width/2,height-205,200,30);
	Box3image.addImage(binIMG);

	paperBody = Bodies.circle(width/2 , 200 , 20 , {restitution:0.4, isStatic:true});
	World.add(world, paperBody);
	Box1Body=Bodies.rectangle(width/2-100, height-100,30,120,{restitution:0.1,isStatic:false});
	Box2Body=Bodies.rectangle(width/2+100,height-100,30,120,{restitution:0.1,isStatic:false});
	Box3Body=Bodies.rectangle(width/2,height-55,200,30,{restitution:0.1,isStatic:false});
	World.add(world,Box1Body);
	World.add(world,Box2Body);
	World.add(world,Box3Body);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 Engine.run(engine);
  
}


function draw() {
  
  background(140);
  paperSprite.x= paperBody.position.x 
  paperSprite.y= paperBody.position.y 
  Box1.y=Box1Body.position.y
  Box2.y=Box2Body.position.y
  Box3.y=Box3Body.position.y
  Box1.x=Box1Body.position.x
  Box2.x=Box2Body.position.x
  Box3.x=Box3Body.position.x
  drawSprites();
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.setStatic(paperBody, false);
		Matter.Body.applyForce(paperBody.body,paperBody.body.position,{x:85,y:-85});

	}
}



