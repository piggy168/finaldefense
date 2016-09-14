import Util from "./util";

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
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos[0]-this.width/2,this.pos[1]-this.length/2,this.width,this.length);


  }
  inEnemyRange(unit){
    var distX = Math.abs(unit.pos[0] - this.pos[0]-this.width/2);
    var distY = Math.abs(unit.pos[1] - this.pos[1]-this.length/2);
    if (distX > (this.width/2 + unit.range)) { return false; }
    if (distY > (this.length/2 + unit.range)) { return false; }

    if (distX <= (this.width/2)) { return true; }
    if (distY <= (this.length/2)) { return true; }

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
