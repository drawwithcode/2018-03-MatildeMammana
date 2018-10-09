function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  background(245, 245, 245)
}

function draw() {

  if(random()<0.1)
  {
   fill(255, 87, 51, 100);
  } else {
   fill(249, 231, 159);
  }
      for(var y = 0 ; y < windowHeight; y+=50)
      {
        noStroke();
        ellipse(random()* width, y, 70, 90);
      }

  if(random()<0.1)
{
   fill(192, 57, 43);
} else
{
   fill(127, 179, 213, 100);
}

  for(var x = 0 ; x < windowWidth ; x+= 50)
  {
    noStroke();
    ellipse(x, random()* height, 70, 90);
}
  }
