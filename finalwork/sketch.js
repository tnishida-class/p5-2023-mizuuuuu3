// 最終課題を制作しよう
//ボールxyの定義
let x1, y1,x2,y2;
 // 単位を加えていく
 let taniA = [];
 taniA.push(8) //基礎教養
 taniA.push(8) //総合教養
 taniA.push(6) //外語
 taniA.push(2) //情報科目
 taniA.push(2) //健スポ
 taniA.push(24) //学部専門
 taniA.push(6) //GSP
 taniA.push(12) //学科専門

let taniB = [];
 taniB.push(8) //基礎教養
 taniB.push(8) //総合教養
 taniB.push(6) //外語
 taniB.push(2) //情報科目
 taniB.push(2) //健スポ
 taniB.push(10) //学部専門
 taniB.push(0) //GSP
 taniB.push(6) //学科専門

// それぞれの配列の合計を計算しておく
let totalA = 0;
for(let i = 0; i < taniA.length; i++){ totalA += taniA[i]; }
let totalB = 0;
for(let j = 0; j < taniB.length; j++){totalB += taniB[j];}

function setup(){
  createCanvas(windowWidth, windowHeight);
  x1 = width / 20;
  y1 = height / 4;
  x2 = width / 20;
  y2 = height / 1.5;
  //ボールのx,yの初期配置
}
 
 //ボールの描写とキーボード操作
  function draw(){
    background(160, 192, 255);
    fill(0,252,0);
    ellipse(x1, y1, 70);
    fill(252,0,0);
    ellipse(x2, y2, 70);
    if(keyIsDown("D".charCodeAt(0))){ x1 += 5; }
    if(keyIsDown("L".charCodeAt(0))){ x2 += 5; }
    if(keyIsDown("A".charCodeAt(0))){ x1+= totalA / 10; } // Aボールの加速
    if(keyIsDown("J".charCodeAt(0))){ x2+= totalB / 10; } // Bボールの加速
    drawText();//drawtext関数の呼び出し
//文字の描写
function drawText(){
  fill(132,89,4);
  textSize(64);
  text("!!!単位とってるやつが勝つゲーム!!!", width / 10, height/10 );
  text("DとLで移動。AとJで加速。",width /10,height);

 }
}

