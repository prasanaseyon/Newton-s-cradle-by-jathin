const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ground1, platform1;
var backgroundImg;
var bird1;
var slingshot1;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
};

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(600,height + 495,1200,1000);
    bird1 = new Bird(200, 300, 40);
    slingshot1 = new SlingShot(bird1.body, {x:200, y:100});
    bird2 = new Bird(250, 300, 40);
    slingshot2 = new SlingShot(bird2.body, {x:250, y:100});
    bird3 = new Bird(300, 300, 40);
    slingshot3 = new SlingShot(bird3.body, {x:300, y:100});
    bird4 = new Bird(350, 300, 40);
    slingshot4 = new SlingShot(bird4.body, {x:350, y:100});
    bird5 = new Bird(400, 300, 40);
    slingshot5 = new SlingShot(bird5.body, {x:400, y:100});
    platform1 = new Ground(300, -1415, 30000, 3000);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    ground1.display();
    slingshot1.display();
    slingshot2.display();
    slingshot3.display();
    slingshot4.display();
    slingshot5.display();
    bird3.display();
    bird2.display();
    bird1.display();
    bird4.display();
    bird5.display();
    platform1.display();
}
function mouseReleased(){
    Matter.Body.setPosition(bird1.body, {x: 100 , y: 100});
}
function keyPressed() {
    if (keyCode == 32) {
        Matter.Body.setPosition(bird1.body, {x: 200, y: 200});
        Matter.Body.setPosition(bird2.body, {x: 250, y: 200});
        Matter.Body.setPosition(bird3.body, {x: 300, y: 200});
        Matter.Body.setPosition(bird4.body, {x: 350, y: 200});
        Matter.Body.setPosition(bird5.body, {x: 400, y: 200});
    }
}