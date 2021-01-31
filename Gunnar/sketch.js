let move = 0
let player;


document.onkeydown = function(event){
 
  switch(event.keyCode){
    case 37:
      if(move > -8){
        move = move - 2;
      }
      break;
    case 65:
      if(move > -8){
        move = move - 2;
      }
      break;
    case 39:
      if(move < 8){
        move = move + 2;
      }
      break;
    case 68:
      if(move < 8){
        move = move + 2;
      }
      break;
      
  }
}


document.onkeyup = function(event){
 
  switch(event.keyCode){
    case 37:
      move = 0;
      break;
    case 65:
      move = 0;
      break;
    case 39:
      move = 0;
      break;
    case 68:
      move = 0;
      break;
      
  }
}


function setup() {
  createCanvas(400, 400);
  player = new Player(createVector(180, 300))
}

function draw() {
  background(50, 200, 20);
    player.update(move)
    
  
  player.display()
}


class Player{
  constructor(pos){
    this.pos = createVector(pos.x, pos.y)
  }
  
  update(add){
    this.pos = createVector(this.pos.x + add, this.pos.y)
  }
  
  display(){
    stroke(10)
    color(255)
    rect(this.pos.x, this.pos.y, 40, 40)
  }
}