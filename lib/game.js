import Unit from "./unit.js";
import Bullet from "./bullet.js";
import Util from "./util.js";
import Base from "./base.js";

class Game {
  constructor() {
    this.base = [];
    this.bullets = [];
    this.units = [];
    this.enemy = [];
    this.addBase();
    this.addUnit();


  }

  add(object) {
     if (object instanceof Bullet) {
      this.bullets.push(object);
    } else if (object instanceof Unit) {
      if (object.side === "enemy") {
      this.enemy.push(object);
      } else {
      this.units.push(object);
      }
    } else { this.base.push(object);

    }
  }

  addBase(){
    const enemybase = new Base({
      pos: [192, 50],
      width: 150,
      length: 100,
      range: 100,
      color: "#C09",
      hp: 5000,
      game: this,
      side: "enemy"
    });

    this.add(enemybase);

    const playerbase = new Base({
      pos: [192, 450],
      width: 150,
      length: 100,
      range: 100,
      color: "#093",
      hp: 5000,
      game: this,
      side: "player"
    });
    this.add(playerbase);

  }

  addEnemy(){
    const unit = new Unit({
      vel: [0,1],
      range: 200,
      side: "enemy",
      pos: [Game.DIM_X * Math.random(),0],
      game: this,
      hp: 20
    });

    this.add(unit);

    return unit;
  }

  addUnit() {
    const unit = new Unit({
      side: "player",
      range: 100,
      vel: [0, -1],
      pos: [Game.DIM_X * Math.random(),568],
      game: this,
      hp: 200
    });

    this.add(unit);

    return unit;
  }

  allObjects() {
    return [].concat(this.units, this.bullets, this.enemy, this.base);
  }

  checkCollisions() {
    const allUnit = [].concat(this.units, this.enemy);
    for (let i = 0; i < allUnit.length; i++) {
      for (let j = 0; j < this.bullets.length; j++) {
        const obj1 = allUnit[i];
        const obj2 = this.bullets[j];

        if (obj1.isCollidedWith(obj2)) {
          obj1.collideWith(obj2);
        }
      }
    }
  }

  checkInRange(){
    for (let i = 0; i < this.enemy.length; i++) {
      for (let j = 0; j < this.units.length; j++) {
        const obj1 = this.enemy[i];
        const obj2 = this.units[j];
        if (obj1.enemyInRange(obj2)) {
          obj1.stop();
          obj1.fireBullet(obj2.pos);
        }
        if (obj2.enemyInRange(obj1)) {
          obj2.stop();
          obj2.fireBullet(obj1.pos);
        }
      }
    }
  }

  checkBaseInRange(){
    for (let i = 0; i < this.enemy.length; i++) {
      if (this.base[1].inEnemyRange(this.enemy[i])){
        this.enemy[i].stop();
        this.enemy[i].fireBullet(this.base[1].pos);
      }
    }
    for (let j = 0; j < this.units.length; j++) {
      if (this.base[0].inEnemyRange(this.units[j])){
        this.units[j].stop();
        this.units[j].fireBullet(this.base[0].pos);
      }
  }
}

  checkBaseDamage(){
    for (let i = 0; i < this.bullets.length; i++) {
      if (this.base[1].inEnemyRange(this.bullets[i]) && this.base[1].side !== this.bullets[i].side){
        this.base[1].hp -= this.bullets[i].damage;
        console.log(this.base[1].hp);
        this.remove(this.bullets[i]);
        if (this.base[1].hp<0)
        {
        this.remove(this.base[1]);
        this.lose();
        }
      }
    }
    for (let i = 0; i < this.bullets.length; i++) {
      if (this.base[0].inEnemyRange(this.bullets[i]) && this.base[0].side !== this.bullets[i].side){
        this.base[0].hp -= this.bullets[i].damage;
        this.remove(this.bullets[i]);
        console.log(this.base[0].hp);
        if (this.base[0].hp<0)
        {
        this.remove(this.base[0]);
        this.win();
        }
      }
    }
  }


  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.allObjects().forEach((object) => {
      object.draw(ctx);
    });
  }

  isOutOfBounds(pos) {
    return (pos[0] < 0) || (pos[1] < 0) ||
      (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
  }

  moveObjects(delta) {
    this.allObjects().forEach((object) => {
      object.move(delta);
    });
  }

  randomPosition() {
    return [
      Game.DIM_X * Math.random(),
      Game.DIM_Y * Math.random()
    ];
  }

  remove(object) {
    if (object instanceof Bullet) {
      this.bullets.splice(this.bullets.indexOf(object), 1);
    } else if (object instanceof Unit && object.side === "player") {
      this.units.splice(this.units.indexOf(object), 1);
    } else if (object instanceof Unit && object.side === "enemy") {
      this.enemy.splice(this.enemy.indexOf(object), 1);
    } else if (object instanceof Base) {
      this.base.splice(this.base.indexOf(object), 1);
    }
  }

  objectGo(){
    const allUnit = [].concat(this.units, this.enemy);
    for (let i = 0; i < allUnit.length; i++) {
      allUnit[i].go();
    }
  }


  step(delta) {
    this.moveObjects(delta);
    this.checkBaseDamage();
    this.checkCollisions();
    this.objectGo();
    this.checkBaseInRange();
    this.checkInRange();
  }

  wrap(pos) {
    return [
      Util.wrap(pos[0], Game.DIM_X), Util.wrap(pos[1], Game.DIM_Y)
    ];
  }
}

Game.BG_COLOR = "#000000";
Game.DIM_X = 384;
Game.DIM_Y = 568;
Game.FPS = 32;

module.exports = Game;
