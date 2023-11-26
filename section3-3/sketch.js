// テキスト「キーボード操作に反応する」
let x, y, t;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  t = 0
  
}

function draw(){
  background(160, 192, 255);
  fill(252);
  rect(0,0,windowWidth,(windowHeight / 2) + 25);
  fill(0);
  ellipse(x, y, 50);
  t=0
   if (keyIsDown(" ".charCodeAt(0))){ t = 5}
  if(keyIsDown(LEFT_ARROW)){ x -= 5 + t; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5 + t; }
  //if(keyIsDown(UP_ARROW)){ y -= 5; }
  //if(keyIsDown(DOWN_ARROW)){ y += 5; }
  //if(keyIsDown("A".charCodeAt(0))){ x+= 10; }
  //if(keyIsDown(" ".charCodeAt(0))){ x-= 10; }
 
  
}

// イベントハンドラを使用するパターン
// function keyPressed(){
//   if(keyCode == LEFT_ARROW){ x -= 5; }
//   else if(keyCode == RIGHT_ARROW){ x+= 5; }
//   else if(keyCode == DOWN_ARROW){ y += 5; }
//   else if(keyCode == UP_ARROW){ y -= 5; }
//   else if(key == "A"){ x += 10; }
// }

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
