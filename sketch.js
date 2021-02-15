var helicopterIMG, helicopterSprite, packageSprite,packageIMG, grassIMG;
var packageBody, ground, invisGround;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	grassIMG=loadImage("grass.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width-360, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.1;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.16;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.addImage(grassIMG);
	groundSprite.scale=1.5;

	invisGround = createSprite(400,620,width,20);
	invisGround.visible=false;


	engine = Engine.create();
	world = engine.world;

	var options = {
		'restitution':0.5,
		'isStatic':true,
	}

	packageBody = Bodies.circle(width/2 , 200 , 5 , options);
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	invisGround = Bodies.rectangle(400, 580, width, 20 , {isStatic:true} );
 	World.add(world, invisGround); 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false)
  }
}