import MovingObject from "./moving_object";

class Bullet extends MovingObject {
  constructor(options) {
    options.radius = Bullet.RADIUS;

    super(options);
    this.isWrappable = false;
    this.damage = options.damage;
    this.range = Bullet.RADIUS;
    this.image = options.image;
  }

  draw(ctx) {    
          ctx.drawImage(this.image, this.pos[0]-this.radius-3, this.pos[1]-this.radius);
  }

}

Bullet.RADIUS = 2;
Bullet.SPEED = 15;

export default Bullet;
