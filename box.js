class box{
    constructor(x, y, width, height,){
        var Options={
            isStatic:false,
            restitution:0.5,
            friction:2,
            density:1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, Options);
        this.width = width;
        this.height = height;
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
      }
      display(){;
    var angle=this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle)
    strokeWeight(4);
    stroke(0)
    fill(this.color)
    rectMode(CENTER)
    rect(0,0,50,50);
    pop() 
      }
}
