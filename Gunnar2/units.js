class units {

  constructor(health, vect) {
    if (this.constructor == units) {
      throw new Error("Abstract classes can't be instantiated.");
    }
    this.health = health;
    this.pos = createVector(vect.x, vect.y)
    this.alive = true
    this.dir = createVector(1, 0)
    this.rotateSpeed = 0.05
  }

  say() {
    throw new Error("Method 'say()' must be implemented.");
  }
  
  rotate(bool){
    if(bool){
      if(this.dir.x < 0 && this.dir.y <= 0){
        
        this.dir.x = Math.round((this.dir.x + this.rotateSpeed) * 100) / 100
        this.dir.y = Math.round((this.dir.y - this.rotateSpeed) * 100) / 100
        
        
      }
      else if(this.dir.x >= 0 && this.dir.y < 0){
        
        this.dir.x = Math.round((this.dir.x + this.rotateSpeed) * 100) / 100
        this.dir.y = Math.round((this.dir.y + this.rotateSpeed) * 100) / 100
        
        
      }
      else if(this.dir.x > 0 && this.dir.y >= 0){
        
        this.dir.x = Math.round((this.dir.x - this.rotateSpeed) * 100) / 100
        this.dir.y = Math.round((this.dir.y + this.rotateSpeed) * 100) / 100
        
        
      }
      else if(this.dir.x <= 0 && this.dir.y >= 0){
        this.dir.x = Math.round((this.dir.x - this.rotateSpeed) * 100) / 100
        this.dir.y = Math.round((this.dir.y - this.rotateSpeed) * 100) / 100
        
      }
    }
    else{
      if(this.dir.x <= 0 && this.dir.y < 0){
        this.dir.x = Math.round((this.dir.x - this.rotateSpeed) * 100) / 100
        this.dir.y = Math.round((this.dir.y + this.rotateSpeed) * 100) / 100
      }
      
      else if(this.dir.x > 0 && this.dir.y <= 0){
        
        this.dir.x = Math.round((this.dir.x - this.rotateSpeed) * 100) / 100
        this.dir.y = Math.round((this.dir.y - this.rotateSpeed) * 100) / 100
        
      }
      else if(this.dir.x >= 0 && this.dir.y >= 0){
        this.dir.x = Math.round((this.dir.x + this.rotateSpeed) * 100) / 100
        this.dir.y = Math.round((this.dir.y - this.rotateSpeed) * 100) / 100
      }
      else if(this.dir.x < 0 && this.dir.y >= 0){
        this.dir.x = Math.round((this.dir.x + this.rotateSpeed) * 100) / 100
        this.dir.y = Math.round((this.dir.y + this.rotateSpeed) * 100) / 100
      }
    }
  }
  
  update(){
    if (this.health <= 0){
      this.alive = false
    }
  }
  
  
}