var TILES = 10
var WIDTH = 640
var HEIGHT = 640
var playerSize = 40
var thicc = WIDTH / TILES
var higg = HEIGHT / TILES
let enemies = []
let bool = true
let bullets = [];
let button;
let player;
let rigth = false
let left = false
let forward = false
let backward = false

function setup() {
  createCanvas(WIDTH, HEIGHT);
  button = createButton('PLAY');
  button.style('width', '200px')
  button.style('font-size', '50px')
  button.id = 'btn'
  button.mouseReleased(start);
  button.mouseOver(highligth)
  button.mouseOut(normal)
  button.position(WIDTH / 2 - button.width / 2, HEIGHT / 2 - 50)
  textAlign(CENTER)
  textSize(50)
  startPos = createVector((TILES / 2) * thicc, 8 * higg)
  player = new friend(100, startPos, 'assets/shoot.png')

  for (let count = 0; count < 3;) {
    let helpBool = true
    startPos = createVector(Math.floor(Math.random() * 10) * (thicc), Math.floor(Math.random() * 4) * higg)
    if (!enemies[0]) {} else {

      for (let e = 0; e < enemies.length; e++) {
        if (enemies[e].pos.x === startPos.x && enemies[e].pos.y === startPos.y) {
          helpBool = false
        }

      }
    }
    if (helpBool) {
      enemies.push(new enemy(30, startPos, 'assets/dude.png'))
      count++
    }
  }

}



function highligth() {
  button.style('text-shadow: -2px 2px 4px #FFFF00;')
}

function normal() {
  button.style('text-shadow', 'none')
}

function draw() {
  background(50, 250, 70)
  if (bool) {
    drawMenu()
    return
  }
  if (rigth) {
    player.rotate(false)
  }
  if (left) {
    player.rotate(true)
  }
  if (forward) {
    player.move(true)
  }
  if (backward) {
    player.move(false)
  }
  translate(32, 32)
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].display()
  }
  translate(-32, -32)
  drawGrid()
  document.onkeydown = checkKey;

  player.display()

  for (let i = 0; i < bullets.length; i++) {
    if (bullets[i].pos.x <= 10 || bullets[i].pos.x >= WIDTH - 10) {
      bullets[i].bounceWall()

    }
    if (bullets[i].pos.y <= 10 || bullets[i].pos.y >= HEIGHT - 10) {
      bullets[i].bounceHeight()
    }
    bullets[i].update()

    bullets[i].display()
    if (!bullets[i].alive) {
      bullets.splice(i, 1)
    }
  }


}


function shoot() {
  let start = createVector(player.pos.x + playerSize * player.dir.x + (20 * player.dir.y), player.pos.y + playerSize * -player.dir.y + (20 * player.dir.x))
  let dir = createVector(player.dir.x, player.dir.y * -1)
  let b = new bullet(start, dir)
  bullets.push(b)
}

function keyReleased() {
  if (bool) {
    return
  }
  //left
  if (keyCode == '37') {
    left = false
  }
  //rigth
  else if (keyCode == '39') {
    rigth = false
  }
  //up
  if (keyCode == '38') {
    forward = false
  }
  //down
  else if (keyCode == '40') {
    backward = false
  }
  return false
}


function checkKey(e) {
  if (bool) {
    return
  }
  if (e.keyCode == '27') {
    bool = true
    button.show()
  } else if (e.keyCode == '32') {
    shoot()
  }
  //left
  else if (e.keyCode == '37') {
    left = true
  }
  //rigth
  else if (e.keyCode == '39') {
    rigth = true
  }
  //up
  else if (e.keyCode == '38') {
    forward = true
  }
  //down
  else if (e.keyCode == '40') {
    backward = true
  }
}

function drawRest() {
  background(50, 250, 70)
}

function drawGrid() {
  fill(0)
  stroke(10)
  for (let x = 0; x < TILES; x++) {
    line(0, x * higg, WIDTH, x * higg);
    line(x * thicc, 0, x * thicc, HEIGHT);
  }
}

function start() {
  bool = false;
  button.hide()
}

function drawMenu() {
  fill(20, 20, 20, 200)
  rect(0, 0, HEIGHT, WIDTH)
  fill(255)
}