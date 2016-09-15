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
    this.fireTime = 0;
    this.fireSpeed = options.fireSpeed;
    this.image = options.image;
    this.bullet = options.bullet;
    this.sound = options.sound;
  }

  fireBullet(pos) {
    const newTime = Date.now();
    if (newTime-this.fireTime>this.fireSpeed){
      this.fireTime = newTime;
    const norm = Util.dir([pos[0]-this.pos[0],pos[1]-this.pos[1]]);

    const bulletVel = Util.scale(
      norm,
      this.bullet.speed
    );

    const bullet = new Bullet({
      pos: this.pos,
      vel: bulletVel,
      color: this.color,
      game: this.game,
      damage: this.bullet.damage,
      side: this.side,
      image: this.bullet.image
    });

    this.game.add(bullet);
    if (this.game.sound){
      new Audio('sound/bulletTank.mp3').play();
    }
    }
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

    draw(ctx) {

        //drawing of the test image - img1

            //draw background image
            ctx.drawImage(this.image, this.pos[0]-this.radius, this.pos[1]-this.radius);
            //draw a box over the top




    }

}
export default Unit;
