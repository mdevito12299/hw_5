function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(300,280,200);
noFill();
  stroke(0); 
rect(30,30,340,340); 
  stroke(300,0,0);
  line(270,200,30,200);
  
  for (var i = 200; i < 800; i = i+1) {
  if (mouseIsPressed) {
     var x= random(width); 
     var y =random(height); 
    line(x,y,300,500);
  } else {
  line(270,200,30,200);
  }
  }
}
