class bob {
    constructor(x, y,r) {
      var options = {
          'restitution':1.0,
          'friction':0.0,
          'density':1.0
      }
      this.x = x;
      this.y = y;
      this.r = r
      this.body = Bodies.circle(this.x, this.y, this.r, options)                                                                                             
      
      World.add(world, this.body);       
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      push()
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      strokeWeight(4);
      stroke("red");
      fill("red");
      ellipse(0, 0, this.r*2, this.r*2);
      pop();
    }
  };