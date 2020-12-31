class Boy{
    constructor(x, y, width, height,) {
        var games = {
            restitution:0.8,
            friction:1.0,
            density:1.0,
            isStatic: true
            
               }
        this.body = Bodies.rectangle(x, y, width, height, games);
        this.width = width;
        this.height = height;
        this.image = loadImage("Images/boy.png");
        World.add(world, this.body);
       
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}