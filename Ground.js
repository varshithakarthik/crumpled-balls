class Ground {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true,
      'restitution':0.3,
      'friction':0.5,
      'density':1.2
    }
    this.body = Bodies.rectangle(x, y,1200,20, options); 
      
    World.add(world, this.ground);
    }
  display(){
    push();
    rectMode(CENTER);

    fill(255);

    rect(this.body.position.x, this.body.position.y, this.width, this. height);
                pop();
    }
  };
