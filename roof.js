class Roof {
    constructor(xPos, yPos, w,h){
        this.body =Bodies.rectangle(xPos, yPos, w, h, {isStatic:true});
        this.height = h;
        this.width = w;
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        push();
        fill("silver");
        rect(this.body.position.x, this.body.position.y,this.width ,this.height  );
        pop();
    }
}