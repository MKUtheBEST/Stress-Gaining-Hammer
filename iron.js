class Stones {
    constructor(x, y) {
      var options = {
        'density':20,
        'friction': 3.0,
        'restitution': 0.0001,
      };
      this.body = Bodies.rectangle(x, y, 90, 70, options);
      this.width = 90;
      this.height = 70;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('brown')
      fill('white')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };