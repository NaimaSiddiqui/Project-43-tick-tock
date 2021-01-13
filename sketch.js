var hr,min,sec;


function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);

}

function draw() {
  background(0);
  translate(300,300)
  rotate(-90)
  hr=hour()%12;
  min=minute();
  sec=second();
  console.log("time: "+hr+":"+ min+": "+ sec );

  secAngle=map(sec,0,60,0,360)
  minAngle=map(min,0,60,0,360)
  hrAngle=map(hr%12,0,12,0,360)


  push()
  rotate(secAngle)
  stroke("red")
  strokeWeight(4);
  line(0,0,150,0);
  pop();
  
  push()
  rotate(minAngle)
  stroke("yellow")
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push()
  rotate(hrAngle)
  stroke("green")
  strokeWeight(7);
  line(0,0,100,0);
  pop();

   


  for(var i=0;i<=12;i++){
    textSize(20);
    stroke("white")
    text(i,300,150)
  }
  noFill();
  stroke("red")
  strokeWeight(10)
  arc(0,0,350,350,0,secAngle);

  stroke("yellow")
  strokeWeight(10)
  arc(0,0,370,370,0,minAngle);

  stroke("green")
  strokeWeight(10)
  arc(0,0,390,390,0,hrAngle);

  drawSprites();
}