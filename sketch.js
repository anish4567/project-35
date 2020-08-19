//Create variables here
var dog
var dogImage
var happyDog
var database
var foods
var foodstock
function preload()
{
  //load images here
  dogImage=loadImage("Dog.png")
  happyDog=loadImage("happydog.png")
  MilkImage=loadImage("Milk.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,250,10,10)
  dog.addImage(dogImage)
  dog.scale=0.2;
  foodstock=database.ref("food")
  foodstock.on("value",readstock)
Milk=new Food()

}


function draw() {  
background("green")
button1=createButton("addFood")
button2=createButton("feedDog")
button2.position(200,150)
button2.mousePressed(function(){
writestock(foods)
dog.addImage(happyDog)
})
button1.position(200,100)
button1.mousePressed(function(){
  addFood(foods)
})

if(keyWentDown(UP_ARROW)){
writestock(foods)
dog.addImage(happyDog)


}
  var x=80
  var y=100
  imageMode(CENTER)
  image(MilkImage,720,220,70,70)
  if(foods!==0){
for(var i=0;i<foods;i++){
  if(i%10===0){
    x=80
    y=y+50
  }
  image(MilkImage,x,y,50,50)
  x=x+30
}
  }
drawSprites();
  stroke("black")
  text("food remaining"+foods,170,200)
text("press up arrow to feed dog",170,160)
  //add styles here

}
function readstock(data){
  foods=data.val()
}
function writestock(x){
  if(x<0){
x=0
  }else{
    x=x-1
  }

  database.ref("/").update({
    food:x
  })
}
function addFood(x){
x=x+10
database.ref("/").update({
  food:x
})

}
