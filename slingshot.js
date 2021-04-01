class slingshot{
   constructor(bodyA,pointB){
       var Options={
           bodyA:bodyA,
           pointB:pointB,
           stiffness:0.05,
           length:10
       }
       this.slingshot=Constraint.create(Options);
       World.add(world,this.slingshot);
   }
   attach(body){
    this.slingshot.bodyA = body;
}
   fly(){
    this.slingshot.bodyA=null;

}
display(){
  if(this.slingshot.bodyA){

  
strokeWeight(4)
line(this.slingshot.bodyA.position.x,this.slingshot.bodyA.position.y,this.slingshot.pointB.x,this.slingshot.pointB.y)
  }

}
}