let playerx = 150
let playery = 350
let scene = -1

let playerr = 255
let playerg = 255
let playerb = 255 

let rx = -50
let ry = 50
let rs = 50

let speed = 5
let score = 0
let menuVar = 0

let hitRadius = 45
let collision = false
let spawn = 2

function setup() {
  createCanvas(300, 400);
  rectMode(CENTER)

playerx = 150
playery = 350
scene = -1

playerr = 255
playerg = 255
playerb = 255 

rx = -50
ry = 50
rs = 50

speed = 5
score = 0
menuVar = 0

hitRadius = 45
collision = false
spawn = 2

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
  if (keyCode == 32) {
   scene *= -1
  }

  if (keyCode == 68) {
    playerx += 75;
  }

  if (keyCode == 65) {
    playerx -= 75;
  }

  if (keyCode == 82) {
    setup()
  }
}

function menu() {
  background(100)
  fill(0)
  text('Menu', 10, 15)

  if(menuVar == 0) {
    text('Press Space To Play', 100, 200)
  }

  if (menuVar == 1) {
    text('Press R to Restart', 100, 200)
    text('Press Space Continue', 90, 220)
  }

  if (menuVar == 2) {
    text('You Were Hit!', 100, 200)
    text('Press R to Restart', 90, 220)
  }

}

function game() {
  background(200)
  menuVar = 1
  text('Game', 10, 15 )
  text('Score = ' + score, 100, 15)
  text('Debug = ' + spawn, 200, 15)
  fill(0, 255, 0)
  rect(playerx, playery, 60)



  if (playerx < 75) {
    playerx = 75;
  }
  if (playerx > 225) {
    playerx = 225;
  }

  
  fill(255, 0, 0)
  circle(rx, ry, rs)

  if (ry < 425) {
    ry += speed;
  } else{
    ry = -25
    spawn = int(random(1,4))
    speed += 0.1
    score += 1
  }

  if (abs(playerx - rx) < hitRadius && abs(playery - ry) < hitRadius) {
    collision = true
  }

  if (collision == true) {
  menuVar = 2
    menu()
  }
}