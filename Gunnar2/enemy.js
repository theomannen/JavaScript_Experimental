/*
* @class enemy
* @extends {units}
*/
class enemy extends units{
  
  constructor(health, vect, image_path){
    super(health, vect)
    this.img = loadImage(image_path)
  }
  
  say(){
    console.log('i am enemy');
  }
  
  display(){
    image(this.img, this.pos.x, this.pos.y)
  }
}