/*
 * @class friend
 * @extends {units}
 */
class friend extends units {
  constructor(health, vect, image_path){
    super(health, vect)
    this.img = loadImage(image_path)
  }
  
  say() {
    console.log('i am friend');
  }
  
  move(bool){
    if(bool){
      if(!(this.pos.x < 32 && this.dir.x < 0) && !(this.pos.x > width - 32 && this.dir.x > 0)){
        this.pos.x += this.dir.x * 3
      }
      if(!(this.pos.y < 32 && this.dir.y > 0) && !(this.pos.y > height - 32 && this.dir.y < 0)){
        this.pos.y += this.dir.y * -3
      }
      
    }
    else{
      if(!(this.pos.x < 32 && this.dir.x > 0) && !(this.pos.x > width - 32 && this.dir.x < 0)){
        this.pos.x -= this.dir.x * 3
      }
      if(!(this.pos.y < 32 && this.dir.y < 0) && !(this.pos.y > height - 32 && this.dir.y > 0)){
        this.pos.y -= this.dir.y * -3
      }
      
    }
    
  }
  
  display() {
    let a = atan2(this.dir.x, this.dir.y)
    
    let cos_a = cos(a);
    let sin_a = sin(a);
    imageMode(CENTER)
    applyMatrix(cos_a, sin_a, -sin_a, cos_a, this.pos.x, this.pos.y)
    image(this.img, 0, 0)
    resetMatrix()
    
    
  }
}