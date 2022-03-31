let playerx = 150
let playery = 300
let scene = -1

function setup() {
  createCanvas(300, 400);
  x = random(200);
  y =random(200);
  rectMode(CENTER)
}

function draw() {
  if (scene == -1) {
    menu()
  }
  if (scene == 1) {
    game()
  }
}

function keyPressed() {
  if (keyCode == 82) {
   scene *= -1
  }
}

function menu() {
  background(100)
  text('menu', 10, 15)
  circle( 100, 100, 75)
}

function game() {
  background(200)
  text('Game', 10, 15)
  rect(playerx, playery, 60)

  if (playerx <= -30) {
    playerx = 330;
  }
  if (playerx >= 330) {
    playerx = -30;
  }

  if (keyIsDown(68)) {
    playerx += 5;
  }
  if (keyIsDown(65)) {
    playerx -= 5;
  }
}
