//Create variables here
var dog,saddog ,happydog, database;
var foodStock;
var feed,add;

function preload(){
 saddog=loadImage("images/dog.png");
 happydog=loadImage("images/doghappy.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  foodobj = new Food();
  foodStock=database.ref('food');
  foodStock.on("value",function(data){
    foodStock=data.val();
    foodobj.updatefoodstock(foodStock);
  })
 var  dog=createSprite(800,200,150,150);
  dog.addImage(saddog);
  dog.scale = 0.15;
  feed = createButton("FEED THE DOG");
  feed.position(700,95);
  feed.mousePressed();
}


function draw() {  
  background("darkgreen");
  dog = image(saddog,800,200,150,150);
  foodobj.display();
  drawSprites();
}




