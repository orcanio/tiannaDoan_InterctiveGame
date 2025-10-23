let bgImg;
let holeImg;
let portalImg;
let digSound;
let magicSound;
let pressed;
pressed = false;
let hole = 0;
const count = 20;
let gameState = "dig";
let opacity = 0;
let fadeIn = 13;

function preload() {
  soundFormats('mp3');
  
  bgImg = loadImage("grassbg.jpg");
  holeImg = loadImage("hole.png");
  portalImg = loadImage ("portalbg.jpg");
  digSound = loadSound ("digsound.mp3");
  magicSound = loadSound ("magicsound.mp3");
}

function setup() {
  createCanvas(800, 600);
  holeImg.resize(0, 350);
  portalImg.resize(800, 600);
  opacity = 0;
}

function draw() {
  if (gameState === "dig") {
    background(bgImg);
    tint(255, opacity);
    image(holeImg, 70, 120);
    
    if (hole >= count) {
      gameState = "win";
      magicSound.play ();
    }
  }

  else if (gameState === "win") {
    background(bgImg);
    image(portalImg, 0, 0);
    textAlign(CENTER);
    textSize(40);
    text("You found the portal!", width / 2, 100);
    fill ('white')
  }
} 

function mousePressed() {
  pressed = true;
  if (gameState === "dig"&& mouseX >= 100 && mouseX <= 900 && mouseY >= 200 && mouseY <= 600);
  hole++;
  digSound.play ();
  opacity += fadeIn;
  }

function mouseReleased() {
  pressed = false;

}