class Ball {
  

    constructor(x, y, radius){
    var option = {
      'restitution':0,
            'friction':1.2,
            'density':9.0
        
    }
    this.x = x
    this.y = y
    this.radius = radius
    
    this.image = loadImage("Images/stone.png");
  this.body = Bodies.circle(this.x,this.y,this.radius,option)
  }
  display(){
  var pos = this.body.position
  push()
  imageMode(CENTER)
translate(pos.x,pos.y)
image(this.image,0,0,this.radius,this.radius)
pop()
  }
};