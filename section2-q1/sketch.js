// 小手調べ
function setup(){
  for(let i = 1; i < 6; i++){
    // BLANK[1]
    noFill();
    stroke(0,0,255);
    ellipse(50,50,i*10);
  }
   for(let j =6; j<11; j++){
    noFill();
    stroke(255,0,0);
    ellipse(50,50,j*10);

   }
   
}
