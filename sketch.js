var bullet,wall;
var speed,weight,deformation,thickness;
function setup() 
{
  createCanvas(1600,400);

  speed = random(23,32);
  weight = random(30,52);

  bullet = createSprite(100, 380, 20, 10);
  bullet.shapeColor = "blue";
  wall = createSprite(1200, thickness, 100, 800);
  wall.shapeColor = 80,80,80;

  bullet.velocityX = speed;
}

function draw()
 {
  background(255,255,255);  
  drawSprites();

  thickness = random(22,83);

  deformation = (0.5 * weight * speed * speed)/thickness * thickness * thickness;

  if((bullet.x - wall.x <= bullet.width/2 + wall.width/2) &&
    (wall.x - bullet.x <= bullet.width/2 + wall.width/2) &&
    (bullet.y - wall.y <= bullet.height/2 + wall.height/2) &&
    (wall.y - bullet.y <= bullet.height/2 + wall.height/2))
  {
    bullet.velocityX = 0;
    bullet.x = wall.x - wall.width/2
    if(deformation < 10)
    {
      wall.shapeColor = "lime"
    }
    else if(deformation > 10)
    {
      wall.shapeColor = "red"
    }
  }
}