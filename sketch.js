var minStroke = 5;
var maxStroke = 30;
var permanence;
let slider1;
let slider1Label;
let slider2;
let slider2Label;
let slider3;
let slider3Label;

function setup() {
  createCanvas(windowWidth - 200, windowHeight);
  //noCanvas();
  background(240);
  cursor(CROSS);
  strokeCap(ROUND);

  // GUI

  var button1 = createButton('Toggle Colour');
  button1.mousePressed(setCol); 
  button1.position(width + 20, 20);

  var button2 = createButton('Clear');
  button2.mousePressed(clearCanvas); 
  button2.position(width + 20, 50);

  slider1 = createSlider(10, 60, 30, 10);
  slider1.position(width + 20, 110);

  slider1Label = createElement('h5', 'Smoothness');
  slider1Label.position(width + 20, 60);
  slider1Label.style('font', 'caption');

  slider2 = createSlider(15, 255, 200, 10);
  slider2.position(width + 20, 170);

  slider2Label = createElement('h5', 'Permanence');
  slider2Label.position(width + 20, 120);
  slider2Label.style('font', 'caption');

  slider3 = createSlider(1, 2, 1, 1);
  slider3.position(width + 20, 230);

  slider3Label = createElement('h5', 'Form');
  slider3Label.position(width + 20, 180);
  slider3Label.style('font', 'caption');
  
}

function setCol(){
  permanence = slider2.value();
  background(random(255), random(255), random(255), 255 - permanence);
  stroke(random(255),random(255),random(255));
  strokeWeight(random(20));
}

function clearCanvas(){
  clear();
  background(240);
  strokeWeight(random(20));
  stroke(10);
}

function draw() {
  var smoothness = slider1.value();
  frameRate(smoothness);

  var wAmt = 100;
  var wave1 = sin(radians(frameCount)) * wAmt;
  var wave2 = cos(radians(frameCount)) * wAmt;

  if (slider3.value() === 1){
  if (mouseIsPressed === true){
    line(mouseX,mouseY,pmouseX, pmouseY);
  }
} else {
  if (mouseIsPressed === true){
  noFill();
  strokeWeight(2);
  circle(mouseX, mouseY, wave1, wave2);
  }
}
}

