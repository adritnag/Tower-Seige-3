class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visiblity = 255;
    World.add(world, this.body);
  }
  
  display()
  {
      if(this.body.speed < 10)
      {
          var pos = this.body.position;
          var angle = this.body.angle;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          fill(0, 255, 0);
          rect(0, 0, this.width, this.height);
          pop();
      }

      else
      {
          World.remove(world, this.body);
          push();
          this.visiblity = this.visiblity - 5;
          tint(255, this.visiblity);
          pop();
      }
      
      
       
      
  }

  score(){
    if (this.visiblity< 0 && this.visiblity > -1000){
      score++
    }
  }    


}
