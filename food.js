class Food{
    constructor(){
this.image=loadImage("Milk.png")


    }
     display(){
         imageMode(CENTER)
         image(this.image,0,0,50,50)
     }
}