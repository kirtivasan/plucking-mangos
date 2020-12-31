class Rock extends Tree{
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("Images/stone.png");
      this.trajectory= [];
    }
    

    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
  
      super.display();
      if(this.body.velocity.x>10 && this.body.position.x>200){
      var position = [this.body.position.x,this.body.position.y];
      this.trajectory.push(position);
      }
      
    }
  }
  