// COLLISION ALGORITHM
var fixedrect, movingrect

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(200, 200, 50, 50);
  fixedrect.shapeColor=" green"
  movingrect.shapeColor=" green"
  fixedrect.debug= true
  movingrect.debug=true

}

function draw() {
  background("orange");  
  movingrect.x= mouseX
  movingrect.y= mouseY

  if(movingrect.x-fixedrect.x < movingrect.width/2+ fixedrect.width/2&&
    fixedrect.x-movingrect.x < movingrect.width/2+ fixedrect.width/2 &&
    movingrect.y-fixedrect.y < movingrect.height/2+ fixedrect.height/2&&
    fixedrect.y-movingrect.y < movingrect.height/2+ fixedrect.height/2 )
  {
    fixedrect.shapeColor=" purple"
    movingrect.shapeColor=" purple"
  }
  else
  {
    fixedrect.shapeColor=" green"
  movingrect.shapeColor=" green"
  }

  drawSprites();
}