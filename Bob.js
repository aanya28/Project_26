class Bob {
    constructor(x,y,radius){
     var options ={
        isStatic: true,
        restitution: 0.3,
        friction:0.5,
        density:1.2
    }  
    this.body = Bodies.circle(x,y, 100, options);
    this.x = x;
    this.y = y;
    this.r = radius;
    
    World.add(world, this.body);
}

display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y)
    ellipseMode(RADIUS)
    ellipseMode(CENTER)    
    ellipse(this.x,this.y,this.r);
    fill("purple");
    pop();
}
};