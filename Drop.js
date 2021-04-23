class Drops{
    constructor(x,y){
        var options = {
            restitution: 0.1,
            friction: 0.5,
            isStatic:false
        }
        this.rain= Bodies.circle(x,y,5,options)
        this.r=4;
    }

    update(){
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain,{x:random(0,400), y:random(0,400)})
        }
    }

    display(){
    var posi = this.rain.position;
    var angle = this.rain.angle;

    push();
    translate(posi.x, posi.y);
    rotate(angle);
    imageMode(CENTER);
    noStroke();
    fill("blue");
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();
    }
}