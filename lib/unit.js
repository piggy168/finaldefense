import MovingObject from"./moving_object";
import Bullet from"./bullet";
import Util from"./util";

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
    options.size = 60;
    options.vel = options.vel || [0, 0];
    options.range = options.range || 100;
    options.color = options.color || randomColor();
    super(options);
  }

  fireBullet() {
    const norm = Util.norm(this.vel);

    const relVel = Util.scale(
      Util.dir(this.vel),
      Bullet.SPEED
    );

    const bulletVel = [
      relVel[0] + this.vel[0], relVel[1] + this.vel[1]
    ];

    const bullet = new Bullet({
      pos: this.pos,
      vel: bulletVel,
      color: this.color,
      game: this.game
    });

    this.game.add(bullet);
  }

  power(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  }

  relocate() {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  }
}


export default Unit;
