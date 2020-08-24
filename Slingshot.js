class SlingShot{
    constructor(body,anchor) {
        var options = {
          bodyA:body,stiffness:0.04,length:1,
          pointB:anchor
        }
        this.bodyA = body
        this.pointB = anchor
        this.SlingShot = Constraint.create(options)
        World.add(world, this.SlingShot);
      }
      attach(body){
        this.SlingShot.bodyA = body

      }
      fly(){
        this.SlingShot.bodyA = null
      }
      display(){
        if (this.SlingShot.bodyA){
          var pointA = this.bodyA.position
          var pointB = this.pointB
          line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
      }
}