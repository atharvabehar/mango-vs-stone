class Mango {
    constructor(x,y,r) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x,y,r,options);
        this.image = loadImage("mango.png");
        this.r = r;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r,this.r);
        pop();
      }
  }
  