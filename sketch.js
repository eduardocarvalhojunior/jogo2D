function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  somDoJogo.loop();
  jogo = new Jogo ();
  jogo.setup();

}

//função do pulo//
function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
 jogo.draw();
}

