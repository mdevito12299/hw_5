function setup() {
  createCanvas(400, 400);
  
  
}

function draw() {
  background(255);
   noFill(); 
  strokeWeight(20);
 
  // horizontal in the square
  for (var h = 10; h <=280 ; h =h+60){
   line (0,h,width,h);
  }
  for (var i = 10; i <= 390; i = i + 50) {
    line(i, 250, i, height);
  }


}
