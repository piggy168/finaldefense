import MovingObject from "./moving_object";

class Bullet extends MovingObject {
  constructor(options) {
    options.radius = Bullet.RADIUS;

    super(options);
    this.isWrappable = false;
    this.damage=options.damage;
    this.range = Bullet.RADIUS;
  }
}

Bullet.RADIUS = 2;
Bullet.SPEED = 15;

export default Bullet;
