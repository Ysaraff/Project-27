class Bob {
    constructor(x,y){
var options ={
	isStatic: true,
	'restitution': 0.3,
	'friction': 0.5,
    'density': 1.2
}
this.body = Bodies.circle(x,y,21,options);
World.add(world, this.body);
}
display(){
	rectMode(CENTER);
	circle(this.body.position.x,this.body.position.y,50);
	}
};