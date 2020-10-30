var wall, thickness;
var bullet,speed, weight;

function setup() {

  createCanvas(1600, 400);

  speed=random(220,320)
  weight=random(30,52)
  thickness=random(22,83)

  bullet=createSprite(50, 200, 50,5);  
  bullet.velocityX = speed;
  bullet.shapeColor=color("purple");

  wall=createSprite(1200, 200, thickness, height/2);  
  wall.shapeColor=color("white");

  //wall.shapeColor=color(80,80,80)
}


function draw() {

  background("black");  

  if (hasCollided(bullet, wall))
  {
  	bullet.velocityX = 0;
  	var damage = 0.5 * weight * speed* speed/(thickness *thickness *thickness);
    
    bullet.destroy();

	if (damage>10)
	{
    wall.shapeColor = color("green");
    text("This is quite strong wall",200,200);
	}
	if (damage<10)
	{
    wall.shapeColor=color("red");
    text("It has been damaged very badly",200,200);
	}
  }
 
  drawSprites();

 }


function hasCollided(lbullet, lwall)
{

	bulletRightEdge = lbullet.x +lbullet.width;
	wallLeftEdge = lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}