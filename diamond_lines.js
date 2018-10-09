function setup() {
  createCanvas(1000, 1000);

}

function draw() {
  background(220);
 
  var i = 360;
  var k= 360; 
  for (j=50; j <=110; j=j+10) {
    line (i,j,k,j); 
    i=i+10;
    k=k-10; 
  }
  for (j = 120; j <=190; j=j+10){
    line(i,j,k,j);
    i=i-10;
    k=k+10; 
  }
  
}
