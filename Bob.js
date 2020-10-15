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
    this.r = radius/2;
    
    World.add(world, this.body);
}

display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y)
    ellipseMode(RADIUS)
    ellipseMode(CENTER)    
    ellipse(0,0,this.r,this.r);
    fill("purple");
    pop();
}
};