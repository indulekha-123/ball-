
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3,ball,ground
;

function preload()
{
}
function setup() {
	var ball_options={
		restitution: 1.0
	   }
	var box1_options ={
        isStatic: true
	}
	var box2_options ={
        isStatic: true
	}
	var box3_options ={
       isStatic: true
	}
	var ground_options ={
      isStatic: false
	}
	
	box1 = Bodies.rectangle(500,550,10,3);
	
	box2 = Bodies.rectangle(200,550,10,3);
	
	box3 = Bodies.rectangle(350,655,20,200);
	

  
	createCanvas(800, 700);
var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2
}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ball=Bodies.circle(200,100,20,ball_options);
	ground=new Ground(200,690,1200,20);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("pink");
  rect(box1.position.x,box1.position.y,10,200);
  fill("pink");
  rect(box2.position.x,box2.position.y,10,200);
  rect(box3.position.x,box3.position.y,320,30);
  fill("pink");
  

  rectMode(CENTER);
  
  fill("orange");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  
  
  //rect(ground.position.x,ground.position.y,1200,30);
//  fill("pink");
ground.display();

	
}
 

function keyPresssed(){
	if(keyCode===UP_Arrow){
		Mtter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}


