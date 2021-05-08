class Slingshot{
    constructor(body1,point1){
    var  options={
      bodyA : body1,
      pointB :point1,
      stiffness : 0.05
     }
    this.slingshot = Constraint.create(options);
    World.add(world,this.slingshot);
  }
  display(){
      if(this.slingshot.bodyA){
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.slingshot.pointB;
        strokeWeight(3);
        line (pointA.x ,pointA.y ,pointB.x ,pointB.y);
      }

    }
    shoot(){
        this.slingshot.bodyA = null;
        
        }
}