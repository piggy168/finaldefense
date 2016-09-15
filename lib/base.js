import Util from "./util";
var baseImg = new Image();
baseImg.src = 'http://res.cloudinary.com/hjsqizwtu/image/upload/v1473928897/base_fr3xle.png';
var ebaseImg = new Image();
ebaseImg.src = 'http://res.cloudinary.com/hjsqizwtu/image/upload/v1473928897/ebase_mq5qh6.png';

class Base {
  constructor(options) {
    this.pos = options.pos;
    this.width = options.width;
    this.length = options.length;
    this.color = options.color;
    this.game = options.game;
    this.range = options.range;
    this.side = options.side;
    this.hp = options.hp;
  }

  collideWith(otherObject) {
    // default do nothing
  }

  draw(ctx) {
    // ctx.fillStyle = this.color;
    // ctx.fillRect(this.pos[0]-this.width/2,this.pos[1]-this.length/2,this.width,this.length);
    if (this.side === 'player'){
      ctx.fillStyle = "#c90";
      ctx.fillRect(5, 494,this.hp/5000*374,10);
      ctx.font = "10px Comic Sans MS";
      ctx.fillStyle = "#804";
      ctx.textAlign = "center";
      ctx.fillText(Math.floor(this.hp)+"  /  5000", 40, 503);
    ctx.drawImage(baseImg, this.pos[0]-this.width/2, this.pos[1]-this.length/2-20);
  } else {
    ctx.fillStyle = "#c90";
    ctx.fillRect(5, 5,this.hp/5000*374,10);
    ctx.drawImage(ebaseImg, this.pos[0]-this.width/2, this.pos[1]-this.length/2);
    ctx.font = "10px Comic Sans MS";
    ctx.fillStyle = "#804";
    ctx.textAlign = "center";
    ctx.fillText(Math.floor(this.hp)+"  /  5000", 40, 14);
  }

  }
  inEnemyRange(unit){
    var distX = Math.abs(unit.pos[0] - this.pos[0]);
    var distY = Math.abs(unit.pos[1] - this.pos[1]);
    if (distX > (this.width/2 + unit.range)) { return false; }
    if (distY > (this.length/2 + unit.range)) { return false; }

    if (distX <= (this.width/2) + unit.range) { return true; }
    if (distY <= (this.length/2) + unit.range) { return true; }

    var dx=distX-this.width/2;
    var dy=distY-this.length/2;
    return (dx*dx+dy*dy<=(unit.range*unit.range));
}

  isCollidedWith(otherObject) {
    const centerDist = Util.dist(this.pos, otherObject.pos);
    return centerDist < (this.radius + otherObject.radius);
  }

  move(){

  }

  remove() {
    this.game.remove(this);
  }
}

const NORMAL_FRAME_TIME_DELTA = 1000/60;

export default Base;
