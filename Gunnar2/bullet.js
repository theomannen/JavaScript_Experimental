class bullet{
  constructor(pos, dir){
    this.pos = createVector(pos.x, pos.y)
    this.dir = createVector(dir.x, dir.y)
    this.lifespan = 500
    this.alive = true
  }
  
  update(){
    this.pos.x += this.dir.x * 5
    this.pos.y += this.dir.y * 5
    this.lifespan -= 1
    if(this.lifespan < 0){
      this.alive = false
    }
  }
  
  bounceWall(){
    this.dir.x = this.dir.x * -1
    this.lifespan += 50
    this.update()
  }
  bounceHeight(){
    this.dir.y = this.dir.y * -1
    this.lifespan += 50
    this.update()
  }
  
  display(){
    stroke(10)
    fill(51)
    ellipse(this.pos.x, this.pos.y, 20)
  }
}