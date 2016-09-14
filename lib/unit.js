import MovingObject from "./moving_object";
import Bullet from "./bullet";
import Util from "./util";

function randomColor() {
  const hexDigits = "0123456789ABCDEF";

  let color = "#";
  for (let i = 0; i < 3; i ++) {
    color += hexDigits[Math.floor((Math.random() * 16))];
  }

  return color;
}

class Unit extends MovingObject {
  constructor(options) {
    options.radius = 10;
    options.vel = options.vel || [0, 1];
    options.range = options.range || 100;
    options.color = options.color || randomColor();
    super(options);
    this.hp = options.hp;
  }

  fireBullet(pos) {

    const norm = Util.dir([pos[0]-this.pos[0],pos[1]-this.pos[1]]);

    const bulletVel = Util.scale(
      norm,
      Bullet.SPEED
    );

    const bullet = new Bullet({
      pos: this.pos,
      vel: bulletVel,
      color: this.color,
      game: this.game,
      damage: 20,
      side: this.side,
    });

    this.game.add(bullet);

  }

  enemyInRange(otherObject) {
    const centerDist = Util.dist(this.pos, otherObject.pos);
    return centerDist < (this.range);
  }

  stop() {
    this.vel=[0,0];
  }

  go(){
    this.vel=this.initialvel;
  }

  collideWith(otherObject) {
      if (otherObject.side !== this.side) {
        this.hp -= otherObject.damage;
        otherObject.remove();
        if (this.hp < 0) {
          this.remove();
        }
        }
    }


}
export default Unit;
