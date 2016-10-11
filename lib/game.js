import Unit from "./unit.js";
import Bullet from "./bullet.js";
import Util from "./util.js";
import Base from "./base.js";
import * as stats from "./stats.js";
import merge from "lodash/merge";

class Game {
  constructor() {
    this.base = [];
    this.bullets = [];
    this.units = [];
    this.enemy = [];
    this.addBase();
    this.addTurret();
    this.income=100;
    this.BGM = new Audio('sound/GamePlay.mp3');
    this.start = false;
    this.sound = true;
    this.time=0;
  }

  mute(){
    this.BGM.pause();
    this.sound = false;
  }

  unmute(){
    if (this.time !== 0){
      this.BGM.play();
    }
    this.sound = true;
  }
  begin(){
    this.start = true;
    this.time = Date.now();
    if (this.sound) {
    this.BGM.play();
  }
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
      pos: [192, 25],
      width: 150,
      length: 50,
      range: 100,
      color: "#C09",
      hp: 5000,
      game: this,
      side: "enemy"
    });

    this.add(enemybase);

    const playerbase = new Base({
      pos: [192, 565],
      width: 150,
      length: 50,
      range: 100,
      color: "#093",
      hp: 5000,
      game: this,
      side: "player"
    });
    this.add(playerbase);

  }

  addTurret(){
    const option = merge({},{pos: [50,100],
    game: this},stats.eturret);
    const unit = new Unit(option);

    this.add(unit);
    const option1 = merge({},{pos: [334,100],
    game: this},stats.eturret);
    const unit1 = new Unit(option1);

    this.add(unit1);
    const option2 = merge({},{pos: [192,200],
    game: this},stats.eturret);
    const unit2 = new Unit(option2);

    this.add(unit2);
    return unit;
  }

  addEnemy(){
    const option1 = merge({},{pos: [Game.DIM_X * Math.random()*0.7+60,0],
      game: this},stats.etank);
    const option2 = merge({},{pos: [Game.DIM_X * Math.random()*0.7+60,0],
      game: this},stats.etank1);
    const option3 = merge({},{pos: [Game.DIM_X * Math.random()*0.7+60,0],
      game: this},stats.etank2);
    const option4 = merge({},{pos: [Game.DIM_X * Math.random()*0.7+60,0],
      game: this},stats.etank3);
    let time = Date.now() - this.time;
    if (2000 < time && time < 20000){
      if (time % 6000 < 17){
        for (var i = 0; i < Math.floor(Math.random() * 2); i++) {
          const unit = new Unit(option2);
          this.add(unit);
        }
      }
      if (time % 12000 < 17){
        for ( i = 0; i < Math.floor(Math.random() * 1); i++) {
          const unit = new Unit(option3);
          this.add(unit);
        }
      }
    }
    if (20000 < time && time < 40000){
      if (time % 6000 < 17){
        for ( i = 0; i < Math.floor(Math.random() * 3); i++) {
          const unit = new Unit(option2);
          this.add(unit);
        }
      }
      if (time % 12000 < 17){
        for ( i = 0; i < Math.floor(Math.random() * 2); i++) {
          const unit = new Unit(option3);
          this.add(unit);
        }
      }
      if (time % 14000 < 17){
        for ( i = 0; i < Math.floor(Math.random() * 1); i++) {
          const unit = new Unit(option1);
          this.add(unit);
        }
      }
    }
    if (40000 < time ){
      if (time % 8000 < 17){
        for ( i = 0; i < Math.floor(Math.random() * 3); i++) {
          const unit = new Unit(option2);
          this.add(unit);
        }
      }
      if (time % 14000 < 17){
        for ( i = 0; i < Math.floor(Math.random() * 2); i++) {
          const unit = new Unit(option3);
          this.add(unit);
        }
      }
      if (time % 16000 < 17){
        for ( i = 0; i < Math.floor(Math.random() * 2); i++) {
          const unit = new Unit(option1);
          this.add(unit);
        }
      }
      if (time % 18000 < 17){
        for ( i = 0; i < Math.floor(Math.random() * 1); i++) {
          const unit = new Unit(option4);
          this.add(unit);
        }
      }
    }
  }

  addUnit(type) {

    if (this.income > type.cost){
      if (this.sound){
        new Audio('./sound/build.wav').play();
      }
    this.income -= type.cost;
    const option = merge({},{pos: [Game.DIM_X * Math.random()*0.7+60,628],
    game: this},type);
    const unit = new Unit(option);

    this.add(unit);

    return unit;
  }
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
        this.remove(this.bullets[i]);
        if (this.base[1].hp<1)
        {
        this.lose();
        }
      }
    }
    for (let i = 0; i < this.bullets.length; i++) {
      if (this.base[0].inEnemyRange(this.bullets[i]) && this.base[0].side !== this.bullets[i].side){
        this.base[0].hp -= this.bullets[i].damage;
        this.remove(this.bullets[i]);
        if (this.base[0].hp<1)
        {
        this.win();
        }
      }
    }
  }


  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = "green";
    ctx.fillRect(265,642,this.income/5*.95,10);
    ctx.font = "10px Comic Sans MS";
    ctx.fillStyle = "yellow";
    ctx.textAlign = "center";
    ctx.fillText(Math.floor(this.income), 310, 651);
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
      if (this.sound){
        new Audio('sound/SFX_ExplGround.wav').play();
      }
      this.units.splice(this.units.indexOf(object), 1);
    } else if (object instanceof Unit && object.side === "enemy") {
      if (this.sound){
        new Audio('sound/SFX_ExplGround.wav').play();
      }
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

  playerIncome(delta) {
    this.income += 4 / delta;
    if (this.income > 500) {
      this.income = 500;
    }
  }

  win(){
    this.BGM.pause();
    this.base = [];
    this.bullets = [];
    this.units = [];
    this.enemy = [];
    this.addBase();
    this.addTurret();
    this.income=100;
    this.BGM = new Audio('sound/GamePlay.mp3');
    this.start = false;
    $('.win').show();
  }

  lose(){
    this.BGM.pause();
    this.base = [];
    this.bullets = [];
    this.units = [];
    this.enemy = [];
    this.addBase();
    this.addTurret();
    this.income=100;
    this.BGM = new Audio('sound/GamePlay.mp3');
    this.start = false;
    $('.lose').show();

  }


  step(delta) {
    if (this.start) {
    this.addEnemy();
    this.playerIncome(delta);
    this.moveObjects(delta);
    this.checkBaseDamage();
    this.checkCollisions();
    this.objectGo();
    this.checkBaseInRange();
    this.checkInRange();
    }
  }

}

Game.BG_COLOR = "#000000";
Game.DIM_X = 384;
Game.DIM_Y = 683;


module.exports = Game;
