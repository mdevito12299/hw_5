function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(300);
  
strokeWeight(20);
 
  //gray 
  //vertical lines 
  for (var i = 10; i<=190; i =i+30){
    stroke(140)
    line (i,200,i,0);
    
    
    //yellow
    // horizontal lines 
    for (var y = 40; y <= 160; y = y+30){
     stroke(255, 204, 0);
      line(200,y,390,y);
    }
    
    //red 
    //diagonal lines left side
    for (var r = 50; r <= 200; r = r+70){
      stroke(300,0,0);
    line(r, 200, r-160, 390); 
     line (200,270,90,400);
     line (200,340,150,400);
    }
    //blue
    // diagonal lines right side
    for (var b = 200; b <=370; b=b+70){
      stroke(0,160,360)
      line(b,200,b+170,400); 
      line(200,340,250,400);
      line (200,270,310,400);
    }
     
strokeWeight(20);
stroke(0);
      noFill();
  rect(5,5,390,390);
  line(0,200,400,200);
  line(200,400,200,10);
  }
}
