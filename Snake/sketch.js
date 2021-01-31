let next = 0;
let start = false;
let start_pos;
let snake;
let eat = false;
let grid = new Array(10);
let dir = 1;
let prev_dir = 1;
let food_pos;
let inp_q = [];
let pace = 250;
let food_on_screen = false;


function setup() {
  createCanvas(400, 400);
  start_pos = createVector(4, 4);
  food_pos = createVector(3, 3);
  snake = new Snake(start_pos);
  for (let x = 0; x < 10; x++) {
    grid[x] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }
}

function draw() {
  if (!snake.alive) {
    // background(255, 0, 0);
    pace = 0;
    // system.exit(0);
    // return;
  }
  background(70, 255, 100);

  line(0, 0, 400, 0)
  for (let x = 0; x < 10; x++) {
    line(0, x * 40, 400, x * 40);
    line(x * 40, 0, x * 40, 400);
  }
  fill(255, 0, 0)
  ellipse(food_pos.x * 40 + 20, food_pos.y * 40 + 20, 40, 40);

  if (millis() > next && start) {
    if (snake.alive) {

      if (snake.bits[0].pos.y === food_pos.y && snake.bits[0].pos.x === food_pos.x) {
        eat = true;
        food_pos = random_pos();
        stroke(10);
        fill(244, 100, 100);
        ellipse(food_pos.x * 40, food_pos.y * 40, 10, 10);

      }
      if(inp_q.length > 0){
        dir = inp_q.shift()
      }
      snake.update(dir, eat);
      
      snake_in_snake();
      if (!snake.alive) {
        return;
      }

      eat = false;
      snake.display();

      next = millis() + pace
    }
  }

  snake.display();


}

function snake_in_snake() {
  for (let x = 0; x < snake.length; x++) {
    for (let z = 0; z < snake.length; z++) {
      if (x !== z) {
        if (snake.bits[x].pos.y == snake.bits[z].pos.y && snake.bits[x].pos.x == snake.bits[z].pos.x) {
          snake.alive = false;
        }
      }
    }
  }
}

function mousePressed() {
  start = true;
}

document.onkeydown = checkKey;

function checkKey(e) {

  e = e || window.event;
  console.log(inp_q)

  if (e.keyCode == '38' && prev_dir != 0) {
    if (inp_q.length === 2) {
      inp_q.pop();
    }
    prev_dir = 2;
    inp_q.push(2);
  } else if (e.keyCode == '40' && prev_dir != 2) {
    if (inp_q.length === 2) {
      inp_q.pop();
    }
    prev_dir = 0;
    inp_q.push(0);
  } else if (e.keyCode == '37' && prev_dir != 1) {
    if (inp_q.length === 2) {
      inp_q.pop();
    }
    prev_dir = 3;
    inp_q.push(3);
  } else if (e.keyCode == '39' && prev_dir != 3) {
    if (inp_q.length === 2) {
      inp_q.pop();
    }
    prev_dir = 1;
    inp_q.push(1);
  }
}

function random_pos() {

  food_pos.x = Math.floor(Math.random() * 10);
  food_pos.y = Math.floor(Math.random() * 10);
  for (let x = 0; x < snake.length; x++) {
    if (food_pos.y === snake.bits[x].pos.y && food_pos.x === snake.bits[x].pos.x) {
      console.log("finn ny")
      return random_pos();
    }
  }
  return food_pos;
}


class Snake {
  constructor(start) {
    this.color = 'rgb(' + 255 + ', ' + 0 + ', ' + 255 + ')';
    this.length = 1;
    this.bits = [];
    this.prev_last = start;
    this.alive = true
    this.bits.push(new Bit(start));
    this.last = createVector(0, 0);
  }

  update(dir, eat) {
    this.last = createVector(this.bits[this.bits.length-1].pos.x, this.bits[this.bits.length-1].pos.y)
    for (let x = this.length - 1; x > 0; x--) {
      this.bits[x].pos = createVector(this.bits[x - 1].pos.x, this.bits[x - 1].pos.y)
    }
    
    switch (dir) {
      case 0:
        this.bits[0].pos.y = this.bits[0].pos.y + 1;
        if (this.bits[0].pos.y > 9) {

          this.alive = false
        }
        break;
      case 1:
        this.bits[0].pos.x = this.bits[0].pos.x + 1;
        if (this.bits[0].pos.x > 9) {

          this.alive = false
        }
        break;
      case 2:
        this.bits[0].pos.y = this.bits[0].pos.y - 1;
        if (this.bits[0].pos.y < 0) {

          this.alive = false
        }
        break;
      case 3:
        this.bits[0].pos.x = this.bits[0].pos.x - 1;
        if (this.bits[0].pos.x < 0) {

          this.alive = false
        }
        break;
      default:
        console.log("yikes");
    }

    if (eat) {
      this.length++;
      this.bits.push(new Bit(this.prev_last))

    }

    this.prev_last = createVector(this.bits[this.bits.length - 1].pos.x, this.bits[this.bits.length - 1].pos.y)
    // this.prev_last.y = this.bits[this.length-1].pos.y;

  }

  display() {
    for (let x = 0; x < this.length; x++) {
      this.bits[x].display(this.color);
    }
    if(this.alive === false){
      const last_bit = new Bit(this.last);
      last_bit.display(this.color);
    }
  }
}


class Bit {
  constructor(pos) {
    this.pos = pos;
  }
  display(color) {
    stroke(10);
    fill(color);
    ellipse(this.pos.x * 40 + 20, this.pos.y * 40 + 20, 40, 40);
  }
}