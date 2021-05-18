class Bird {
  constructor(x, y, density){
    var options = {
      'restitution':1.3,
      'friction': 0,
      'density': density
    }
    this.body = Bodies.circle(x, y, 22, options);
    this.density = density;
    this.image = loadImage("sprites/bird.png");
    World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
  goto(xcoor, ycoor) {
    this.body.position.x = xcoor;
    this.body.position.y = ycoor;
  }

}
