class Tree {
  constructor() {
    
    this.image=loadImage("Plucking mangoes/tree.png");
    
   
  }

  display(){

   push();
   imageMode(CENTER);
   image(this.image,800,250,350,500);
   pop();
  }
}