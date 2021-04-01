class polygon{
    constructor(x,y,r){
      var Options={
          isStatic:false,
          restitution:0.3,
          friction:1.2,
          density:1.5
      }
      this.r=r;
      this.body=Bodies.circle(x,y,r,Options)
      this.image = loadImage("polygon.png");
      World.add(world,this.body);
    }
    display(){
    ellipseMode(RADIUS);
   ellipse(this.body.position.x, this.body.position.y,);
   push()
   translate(this.body.position.x,this.body.position.y)
    imageMode(CENTER)
    image(this.image,0,0,140,140)
    pop()
    }
}