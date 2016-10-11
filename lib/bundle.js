/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _game = __webpack_require__(1);
	
	var _game2 = _interopRequireDefault(_game);
	
	var _game_view = __webpack_require__(121);
	
	var _game_view2 = _interopRequireDefault(_game_view);
	
	var _stats = __webpack_require__(7);
	
	var stats = _interopRequireWildcard(_stats);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.addEventListener("DOMContentLoaded", function () {
	  var canvasEl = document.getElementsByTagName("canvas")[0];
	  canvasEl.width = _game2.default.DIM_X;
	  canvasEl.height = _game2.default.DIM_Y;
	  var game = new _game2.default();
	  var ctx = canvasEl.getContext("2d");
	  new _game_view2.default(game, ctx).start();
	  document.getElementById("addunit1").addEventListener("click", addUnit1);
	  function addUnit1() {
	    game.addUnit(stats.tank1);
	  }
	  $('#addunit1').hover(function () {
	    $('.scout').show();
	    $('.tank').hide();
	    $('.sniper').hide();
	    $('.fighter').hide();
	  });
	  document.getElementById("addunit2").addEventListener("click", addUnit2);
	  function addUnit2() {
	    game.addUnit(stats.tank);
	  }
	  $('#addunit2').hover(function () {
	    $('.scout').hide();
	    $('.tank').show();
	    $('.sniper').hide();
	    $('.fighter').hide();
	  });
	  document.getElementById("addunit3").addEventListener("click", addUnit3);
	  function addUnit3() {
	    game.addUnit(stats.tank2);
	  }
	  $('#addunit3').hover(function () {
	    $('.sniper').show();
	    $('.scout').hide();
	    $('.tank').hide();
	    $('.fighter').hide();
	  });
	  document.getElementById("addunit4").addEventListener("click", addUnit4);
	  function addUnit4() {
	    game.addUnit(stats.tank3);
	  }
	  $('#addunit4').hover(function () {
	    $('.fighter').show();
	    $('.scout').hide();
	    $('.tank').hide();
	    $('.sniper').hide();
	  });
	  document.getElementById("win").addEventListener("click", restart);
	  function restart() {
	    $('button[id=start]').show();
	    $(this).hide();
	    $('button[class=ui]').hide();
	  }
	  document.getElementById("lose").addEventListener("click", restart1);
	  function restart1() {
	    $('button[id=start]').show();
	    $(this).hide();
	    $('button[class=ui]').hide();
	  }
	  $('.mute').click(function () {
	    game.mute();
	    $(this).hide();
	    $(".unmute").show();
	  });
	  $('.unmute').click(function () {
	    game.unmute();
	    $(this).hide();
	    $(".mute").show();
	  });
	  $('button[id=start]').click(function () {
	    $(this).hide();
	    game.begin();
	    $('button[class=ui]').show();
	  });
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _unit9 = __webpack_require__(2);
	
	var _unit10 = _interopRequireDefault(_unit9);
	
	var _bullet = __webpack_require__(5);
	
	var _bullet2 = _interopRequireDefault(_bullet);
	
	var _util = __webpack_require__(4);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _base = __webpack_require__(6);
	
	var _base2 = _interopRequireDefault(_base);
	
	var _stats = __webpack_require__(7);
	
	var stats = _interopRequireWildcard(_stats);
	
	var _merge = __webpack_require__(8);
	
	var _merge2 = _interopRequireDefault(_merge);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Game = function () {
	  function Game() {
	    _classCallCheck(this, Game);
	
	    this.base = [];
	    this.bullets = [];
	    this.units = [];
	    this.enemy = [];
	    this.addBase();
	    this.addTurret();
	    this.income = 100;
	    this.BGM = new Audio('sound/GamePlay.mp3');
	    this.start = false;
	    this.sound = true;
	    this.time = 0;
	  }
	
	  _createClass(Game, [{
	    key: "mute",
	    value: function mute() {
	      this.BGM.pause();
	      this.sound = false;
	    }
	  }, {
	    key: "unmute",
	    value: function unmute() {
	      if (this.time !== 0) {
	        this.BGM.play();
	      }
	      this.sound = true;
	    }
	  }, {
	    key: "begin",
	    value: function begin() {
	      this.start = true;
	      this.time = Date.now();
	      if (this.sound) {
	        this.BGM.play();
	      }
	    }
	  }, {
	    key: "add",
	    value: function add(object) {
	      if (object instanceof _bullet2.default) {
	        this.bullets.push(object);
	      } else if (object instanceof _unit10.default) {
	        if (object.side === "enemy") {
	          this.enemy.push(object);
	        } else {
	          this.units.push(object);
	        }
	      } else {
	        this.base.push(object);
	      }
	    }
	  }, {
	    key: "addBase",
	    value: function addBase() {
	      var enemybase = new _base2.default({
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
	
	      var playerbase = new _base2.default({
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
	  }, {
	    key: "addTurret",
	    value: function addTurret() {
	      var option = (0, _merge2.default)({}, { pos: [50, 100],
	        game: this }, stats.eturret);
	      var unit = new _unit10.default(option);
	
	      this.add(unit);
	      var option1 = (0, _merge2.default)({}, { pos: [334, 100],
	        game: this }, stats.eturret);
	      var unit1 = new _unit10.default(option1);
	
	      this.add(unit1);
	      var option2 = (0, _merge2.default)({}, { pos: [192, 200],
	        game: this }, stats.eturret);
	      var unit2 = new _unit10.default(option2);
	
	      this.add(unit2);
	      return unit;
	    }
	  }, {
	    key: "addEnemy",
	    value: function addEnemy() {
	      var option1 = (0, _merge2.default)({}, { pos: [Game.DIM_X * Math.random() * 0.7 + 60, 0],
	        game: this }, stats.etank);
	      var option2 = (0, _merge2.default)({}, { pos: [Game.DIM_X * Math.random() * 0.7 + 60, 0],
	        game: this }, stats.etank1);
	      var option3 = (0, _merge2.default)({}, { pos: [Game.DIM_X * Math.random() * 0.7 + 60, 0],
	        game: this }, stats.etank2);
	      var option4 = (0, _merge2.default)({}, { pos: [Game.DIM_X * Math.random() * 0.7 + 60, 0],
	        game: this }, stats.etank3);
	      var time = Date.now() - this.time;
	      if (2000 < time && time < 20000) {
	        if (time % 6000 < 17) {
	          for (var i = 0; i < Math.floor(Math.random() * 2); i++) {
	            var unit = new _unit10.default(option2);
	            this.add(unit);
	          }
	        }
	        if (time % 12000 < 17) {
	          for (i = 0; i < Math.floor(Math.random() * 1); i++) {
	            var _unit = new _unit10.default(option3);
	            this.add(_unit);
	          }
	        }
	      }
	      if (20000 < time && time < 40000) {
	        if (time % 6000 < 17) {
	          for (i = 0; i < Math.floor(Math.random() * 3); i++) {
	            var _unit2 = new _unit10.default(option2);
	            this.add(_unit2);
	          }
	        }
	        if (time % 12000 < 17) {
	          for (i = 0; i < Math.floor(Math.random() * 2); i++) {
	            var _unit3 = new _unit10.default(option3);
	            this.add(_unit3);
	          }
	        }
	        if (time % 14000 < 17) {
	          for (i = 0; i < Math.floor(Math.random() * 1); i++) {
	            var _unit4 = new _unit10.default(option1);
	            this.add(_unit4);
	          }
	        }
	      }
	      if (40000 < time) {
	        if (time % 8000 < 17) {
	          for (i = 0; i < Math.floor(Math.random() * 3); i++) {
	            var _unit5 = new _unit10.default(option2);
	            this.add(_unit5);
	          }
	        }
	        if (time % 14000 < 17) {
	          for (i = 0; i < Math.floor(Math.random() * 2); i++) {
	            var _unit6 = new _unit10.default(option3);
	            this.add(_unit6);
	          }
	        }
	        if (time % 16000 < 17) {
	          for (i = 0; i < Math.floor(Math.random() * 2); i++) {
	            var _unit7 = new _unit10.default(option1);
	            this.add(_unit7);
	          }
	        }
	        if (time % 18000 < 17) {
	          for (i = 0; i < Math.floor(Math.random() * 1); i++) {
	            var _unit8 = new _unit10.default(option4);
	            this.add(_unit8);
	          }
	        }
	      }
	    }
	  }, {
	    key: "addUnit",
	    value: function addUnit(type) {
	
	      if (this.income > type.cost) {
	        if (this.sound) {
	          new Audio('./sound/build.wav').play();
	        }
	        this.income -= type.cost;
	        var option = (0, _merge2.default)({}, { pos: [Game.DIM_X * Math.random() * 0.7 + 60, 628],
	          game: this }, type);
	        var unit = new _unit10.default(option);
	
	        this.add(unit);
	
	        return unit;
	      }
	    }
	  }, {
	    key: "allObjects",
	    value: function allObjects() {
	      return [].concat(this.units, this.bullets, this.enemy, this.base);
	    }
	  }, {
	    key: "checkCollisions",
	    value: function checkCollisions() {
	      var allUnit = [].concat(this.units, this.enemy);
	      for (var i = 0; i < allUnit.length; i++) {
	        for (var j = 0; j < this.bullets.length; j++) {
	          var obj1 = allUnit[i];
	          var obj2 = this.bullets[j];
	
	          if (obj1.isCollidedWith(obj2)) {
	            obj1.collideWith(obj2);
	          }
	        }
	      }
	    }
	  }, {
	    key: "checkInRange",
	    value: function checkInRange() {
	      for (var i = 0; i < this.enemy.length; i++) {
	        for (var j = 0; j < this.units.length; j++) {
	          var obj1 = this.enemy[i];
	          var obj2 = this.units[j];
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
	  }, {
	    key: "checkBaseInRange",
	    value: function checkBaseInRange() {
	      for (var i = 0; i < this.enemy.length; i++) {
	        if (this.base[1].inEnemyRange(this.enemy[i])) {
	          this.enemy[i].stop();
	          this.enemy[i].fireBullet(this.base[1].pos);
	        }
	      }
	      for (var j = 0; j < this.units.length; j++) {
	        if (this.base[0].inEnemyRange(this.units[j])) {
	          this.units[j].stop();
	          this.units[j].fireBullet(this.base[0].pos);
	        }
	      }
	    }
	  }, {
	    key: "checkBaseDamage",
	    value: function checkBaseDamage() {
	      for (var i = 0; i < this.bullets.length; i++) {
	        if (this.base[1].inEnemyRange(this.bullets[i]) && this.base[1].side !== this.bullets[i].side) {
	          this.base[1].hp -= this.bullets[i].damage;
	          this.remove(this.bullets[i]);
	          if (this.base[1].hp < 1) {
	            this.lose();
	          }
	        }
	      }
	      for (var _i = 0; _i < this.bullets.length; _i++) {
	        if (this.base[0].inEnemyRange(this.bullets[_i]) && this.base[0].side !== this.bullets[_i].side) {
	          this.base[0].hp -= this.bullets[_i].damage;
	          this.remove(this.bullets[_i]);
	          if (this.base[0].hp < 1) {
	            this.win();
	          }
	        }
	      }
	    }
	  }, {
	    key: "draw",
	    value: function draw(ctx) {
	      ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
	      ctx.fillStyle = Game.BG_COLOR;
	      ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
	      ctx.fillStyle = "green";
	      ctx.fillRect(265, 642, this.income / 5 * .95, 10);
	      ctx.font = "10px Comic Sans MS";
	      ctx.fillStyle = "yellow";
	      ctx.textAlign = "center";
	      ctx.fillText(Math.floor(this.income), 310, 651);
	      this.allObjects().forEach(function (object) {
	        object.draw(ctx);
	      });
	    }
	  }, {
	    key: "isOutOfBounds",
	    value: function isOutOfBounds(pos) {
	      return pos[0] < 0 || pos[1] < 0 || pos[0] > Game.DIM_X || pos[1] > Game.DIM_Y;
	    }
	  }, {
	    key: "moveObjects",
	    value: function moveObjects(delta) {
	      this.allObjects().forEach(function (object) {
	        object.move(delta);
	      });
	    }
	  }, {
	    key: "randomPosition",
	    value: function randomPosition() {
	      return [Game.DIM_X * Math.random(), Game.DIM_Y * Math.random()];
	    }
	  }, {
	    key: "remove",
	    value: function remove(object) {
	      if (object instanceof _bullet2.default) {
	        this.bullets.splice(this.bullets.indexOf(object), 1);
	      } else if (object instanceof _unit10.default && object.side === "player") {
	        if (this.sound) {
	          new Audio('sound/SFX_ExplGround.wav').play();
	        }
	        this.units.splice(this.units.indexOf(object), 1);
	      } else if (object instanceof _unit10.default && object.side === "enemy") {
	        if (this.sound) {
	          new Audio('sound/SFX_ExplGround.wav').play();
	        }
	        this.enemy.splice(this.enemy.indexOf(object), 1);
	      } else if (object instanceof _base2.default) {
	        this.base.splice(this.base.indexOf(object), 1);
	      }
	    }
	  }, {
	    key: "objectGo",
	    value: function objectGo() {
	      var allUnit = [].concat(this.units, this.enemy);
	      for (var i = 0; i < allUnit.length; i++) {
	        allUnit[i].go();
	      }
	    }
	  }, {
	    key: "playerIncome",
	    value: function playerIncome(delta) {
	      this.income += 4 / delta;
	      if (this.income > 500) {
	        this.income = 500;
	      }
	    }
	  }, {
	    key: "win",
	    value: function win() {
	      this.BGM.pause();
	      this.base = [];
	      this.bullets = [];
	      this.units = [];
	      this.enemy = [];
	      this.addBase();
	      this.addTurret();
	      this.income = 100;
	      this.BGM = new Audio('sound/GamePlay.mp3');
	      this.start = false;
	      $('.win').show();
	    }
	  }, {
	    key: "lose",
	    value: function lose() {
	      this.BGM.pause();
	      this.base = [];
	      this.bullets = [];
	      this.units = [];
	      this.enemy = [];
	      this.addBase();
	      this.addTurret();
	      this.income = 100;
	      this.BGM = new Audio('sound/GamePlay.mp3');
	      this.start = false;
	      $('.lose').show();
	    }
	  }, {
	    key: "step",
	    value: function step(delta) {
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
	  }]);
	
	  return Game;
	}();
	
	Game.BG_COLOR = "#000000";
	Game.DIM_X = 384;
	Game.DIM_Y = 683;
	
	module.exports = Game;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _moving_object = __webpack_require__(3);
	
	var _moving_object2 = _interopRequireDefault(_moving_object);
	
	var _bullet = __webpack_require__(5);
	
	var _bullet2 = _interopRequireDefault(_bullet);
	
	var _util = __webpack_require__(4);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function randomColor() {
	  var hexDigits = "0123456789ABCDEF";
	
	  var color = "#";
	  for (var i = 0; i < 3; i++) {
	    color += hexDigits[Math.floor(Math.random() * 16)];
	  }
	
	  return color;
	}
	
	var Unit = function (_MovingObject) {
	  _inherits(Unit, _MovingObject);
	
	  function Unit(options) {
	    _classCallCheck(this, Unit);
	
	    options.radius = 10;
	    options.vel = options.vel || [0, 1];
	    options.range = options.range || 100;
	    options.color = options.color || randomColor();
	
	    var _this = _possibleConstructorReturn(this, (Unit.__proto__ || Object.getPrototypeOf(Unit)).call(this, options));
	
	    _this.hp = options.hp;
	    _this.fireTime = 0;
	    _this.fireSpeed = options.fireSpeed;
	    _this.image = options.image;
	    _this.bullet = options.bullet;
	    _this.sound = options.sound;
	    return _this;
	  }
	
	  _createClass(Unit, [{
	    key: "fireBullet",
	    value: function fireBullet(pos) {
	      var newTime = Date.now();
	      if (newTime - this.fireTime > this.fireSpeed) {
	        this.fireTime = newTime;
	        var norm = _util2.default.dir([pos[0] - this.pos[0], pos[1] - this.pos[1]]);
	
	        var bulletVel = _util2.default.scale(norm, this.bullet.speed);
	
	        var bullet = new _bullet2.default({
	          pos: this.pos,
	          vel: bulletVel,
	          color: this.color,
	          game: this.game,
	          damage: this.bullet.damage,
	          side: this.side,
	          image: this.bullet.image
	        });
	
	        this.game.add(bullet);
	        if (this.game.sound) {
	          new Audio('sound/bulletTank.mp3').play();
	        }
	      }
	    }
	  }, {
	    key: "enemyInRange",
	    value: function enemyInRange(otherObject) {
	      var centerDist = _util2.default.dist(this.pos, otherObject.pos);
	      return centerDist < this.range;
	    }
	  }, {
	    key: "stop",
	    value: function stop() {
	      this.vel = [0, 0];
	    }
	  }, {
	    key: "go",
	    value: function go() {
	      this.vel = this.initialvel;
	    }
	  }, {
	    key: "collideWith",
	    value: function collideWith(otherObject) {
	      if (otherObject.side !== this.side) {
	        this.hp -= otherObject.damage;
	        otherObject.remove();
	        if (this.hp < 0) {
	          this.remove();
	        }
	      }
	    }
	  }, {
	    key: "draw",
	    value: function draw(ctx) {
	
	      //drawing of the test image - img1
	
	      //draw background image
	      ctx.drawImage(this.image, this.pos[0] - this.radius, this.pos[1] - this.radius);
	      //draw a box over the top
	
	    }
	  }]);
	
	  return Unit;
	}(_moving_object2.default);
	
	exports.default = Unit;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _util = __webpack_require__(4);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MovingObject = function () {
	  function MovingObject(options) {
	    _classCallCheck(this, MovingObject);
	
	    this.pos = options.pos;
	    this.initialvel = options.vel;
	    this.vel = options.vel;
	    this.radius = options.radius;
	    this.color = options.color;
	    this.game = options.game;
	    this.range = options.range;
	    this.side = options.side;
	    this.isWrappable = false;
	  }
	
	  _createClass(MovingObject, [{
	    key: "collideWith",
	    value: function collideWith(otherObject) {
	      // default do nothing
	    }
	  }, {
	    key: "draw",
	    value: function draw(ctx) {
	      ctx.fillStyle = this.color;
	
	      ctx.beginPath();
	      ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
	      ctx.fill();
	    }
	  }, {
	    key: "isCollidedWith",
	    value: function isCollidedWith(otherObject) {
	      var centerDist = _util2.default.dist(this.pos, otherObject.pos);
	      return centerDist < this.radius + otherObject.radius;
	    }
	  }, {
	    key: "move",
	    value: function move(timeDelta) {
	      //timeDelta is number of milliseconds since last move
	      //if the computer is busy the time delta will be larger
	      //in this case the MovingObject should move farther in this frame
	      //velocity of object is how far it should move in 1/60th of a second
	      var velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
	          offsetX = this.vel[0] * velocityScale,
	          offsetY = this.vel[1] * velocityScale;
	
	      this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
	
	      if (this.game.isOutOfBounds(this.pos)) {
	        if (this.isWrappable) {
	          this.pos = this.game.wrap(this.pos);
	        } else {
	          this.remove();
	        }
	      }
	    }
	  }, {
	    key: "remove",
	    value: function remove() {
	      this.game.remove(this);
	    }
	  }]);
	
	  return MovingObject;
	}();
	
	var NORMAL_FRAME_TIME_DELTA = 1000 / 60;
	
	exports.default = MovingObject;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Util = {
	  // Normalize the length of the vector to 1, maintaining direction.
	  dir: function dir(vec) {
	    var norm = Util.norm(vec);
	    return Util.scale(vec, 1 / norm);
	  },
	
	  // Find distance between two points.
	  dist: function dist(pos1, pos2) {
	    return Math.sqrt(Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2));
	  },
	
	  // Find the length of the vector.
	  norm: function norm(vec) {
	    return Util.dist([0, 0], vec);
	  },
	
	  // Return a randomly oriented vector with the given length.
	  randomVec: function randomVec(length) {
	    var deg = 2 * Math.PI * Math.random();
	    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
	  },
	
	  // Scale the length of a vector by the given amount.
	  scale: function scale(vec, m) {
	    return [vec[0] * m, vec[1] * m];
	  },
	  wrap: function wrap(coord, max) {
	    if (coord < 0) {
	      return max - coord % max;
	    } else if (coord > max) {
	      return coord % max;
	    } else {
	      return coord;
	    }
	  }
	};
	
	exports.default = Util;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _moving_object = __webpack_require__(3);
	
	var _moving_object2 = _interopRequireDefault(_moving_object);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Bullet = function (_MovingObject) {
	  _inherits(Bullet, _MovingObject);
	
	  function Bullet(options) {
	    _classCallCheck(this, Bullet);
	
	    options.radius = Bullet.RADIUS;
	
	    var _this = _possibleConstructorReturn(this, (Bullet.__proto__ || Object.getPrototypeOf(Bullet)).call(this, options));
	
	    _this.isWrappable = false;
	    _this.damage = options.damage;
	    _this.range = Bullet.RADIUS;
	    _this.image = options.image;
	    return _this;
	  }
	
	  _createClass(Bullet, [{
	    key: "draw",
	    value: function draw(ctx) {
	      ctx.drawImage(this.image, this.pos[0] - this.radius - 3, this.pos[1] - this.radius);
	    }
	  }]);
	
	  return Bullet;
	}(_moving_object2.default);
	
	Bullet.RADIUS = 2;
	Bullet.SPEED = 15;
	
	exports.default = Bullet;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _util = __webpack_require__(4);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var baseImg = new Image();
	baseImg.src = 'https://res.cloudinary.com/hjsqizwtu/image/upload/v1473928897/base_fr3xle.png';
	var ebaseImg = new Image();
	ebaseImg.src = 'https://res.cloudinary.com/hjsqizwtu/image/upload/v1473928897/ebase_mq5qh6.png';
	
	var Base = function () {
	  function Base(options) {
	    _classCallCheck(this, Base);
	
	    this.pos = options.pos;
	    this.width = options.width;
	    this.length = options.length;
	    this.color = options.color;
	    this.game = options.game;
	    this.range = options.range;
	    this.side = options.side;
	    this.hp = options.hp;
	  }
	
	  _createClass(Base, [{
	    key: 'collideWith',
	    value: function collideWith(otherObject) {
	      // default do nothing
	    }
	  }, {
	    key: 'draw',
	    value: function draw(ctx) {
	      // ctx.fillStyle = this.color;
	      // ctx.fillRect(this.pos[0]-this.width/2,this.pos[1]-this.length/2,this.width,this.length);
	      if (this.side === 'player') {
	        ctx.fillStyle = "#c90";
	        ctx.fillRect(5, 609, this.hp / 5000 * 374, 10);
	        ctx.font = "10px Comic Sans MS";
	        ctx.fillStyle = "#804";
	        ctx.textAlign = "center";
	        ctx.fillText(Math.floor(this.hp) + "  /  5000", 40, 618);
	        ctx.drawImage(baseImg, this.pos[0] - this.width / 2, this.pos[1] - this.length / 2 - 20);
	      } else {
	        ctx.fillStyle = "#c90";
	        ctx.fillRect(5, 5, this.hp / 5000 * 374, 10);
	        ctx.drawImage(ebaseImg, this.pos[0] - this.width / 2, this.pos[1] - this.length / 2);
	        ctx.font = "10px Comic Sans MS";
	        ctx.fillStyle = "#804";
	        ctx.textAlign = "center";
	        ctx.fillText(Math.floor(this.hp) + "  /  5000", 40, 14);
	      }
	    }
	  }, {
	    key: 'inEnemyRange',
	    value: function inEnemyRange(unit) {
	      var distX = Math.abs(unit.pos[0] - this.pos[0]);
	      var distY = Math.abs(unit.pos[1] - this.pos[1]);
	      if (distX > this.width / 2 + unit.range) {
	        return false;
	      }
	      if (distY > this.length / 2 + unit.range) {
	        return false;
	      }
	
	      if (distX <= this.width / 2 + unit.range) {
	        return true;
	      }
	      if (distY <= this.length / 2 + unit.range) {
	        return true;
	      }
	
	      var dx = distX - this.width / 2;
	      var dy = distY - this.length / 2;
	      return dx * dx + dy * dy <= unit.range * unit.range;
	    }
	  }, {
	    key: 'isCollidedWith',
	    value: function isCollidedWith(otherObject) {
	      var centerDist = _util2.default.dist(this.pos, otherObject.pos);
	      return centerDist < this.radius + otherObject.radius;
	    }
	  }, {
	    key: 'move',
	    value: function move() {}
	  }, {
	    key: 'remove',
	    value: function remove() {
	      this.game.remove(this);
	    }
	  }]);
	
	  return Base;
	}();
	
	var NORMAL_FRAME_TIME_DELTA = 1000 / 60;
	
	exports.default = Base;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var tankImg = new Image();
	tankImg.src = 'https://res.cloudinary.com/hjsqizwtu/image/upload/v1473928898/tank_lj799j.png';
	var tank1Img = new Image();
	tank1Img.src = 'https://res.cloudinary.com/hjsqizwtu/image/upload/v1473928897/tank1_y8mvtq.png';
	var tank2Img = new Image();
	tank2Img.src = 'https://res.cloudinary.com/hjsqizwtu/image/upload/v1473928898/tank2_jzwqnz.png';
	var tank3Img = new Image();
	tank3Img.src = 'https://res.cloudinary.com/hjsqizwtu/image/upload/v1473928898/tank3_hwwsea.png';
	var eTankImg = new Image();
	eTankImg.src = 'https://res.cloudinary.com/hjsqizwtu/image/upload/v1473928897/etank_qiqxeq.png';
	var eTank1Img = new Image();
	eTank1Img.src = 'https://res.cloudinary.com/hjsqizwtu/image/upload/v1473928897/etank1_nlqzij.png';
	var eTank2Img = new Image();
	eTank2Img.src = 'https://res.cloudinary.com/hjsqizwtu/image/upload/v1473928898/etank2_osyl9n.png';
	var eTank3Img = new Image();
	eTank3Img.src = 'https://res.cloudinary.com/hjsqizwtu/image/upload/v1473928898/etank3_xmtgtr.png';
	var eTurretImg = new Image();
	eTurretImg.src = 'https://res.cloudinary.com/hjsqizwtu/image/upload/v1473928898/eturret_aviiwx.png';
	var bulletTankImg = new Image();
	bulletTankImg.src = 'http://res.cloudinary.com/dlszpthqv/image/upload/v1475189332/green_ntzpt7.png';
	var bulletEnemy = new Image();
	bulletEnemy.src = 'http://res.cloudinary.com/dlszpthqv/image/upload/v1475189332/yellow_vxbn32.png';
	
	var bulletTank = {
	  damage: 5,
	  speed: 10,
	  image: bulletTankImg
	};
	
	var tank = exports.tank = {
	  cost: 60,
	  side: "player",
	  range: 20,
	  vel: [0, -.5],
	  hp: 800,
	  fireSpeed: 500,
	  image: tankImg,
	  bullet: bulletTank
	};
	
	var bulletTank1 = {
	  damage: 10,
	  speed: 10,
	  image: bulletTankImg
	};
	
	var tank1 = exports.tank1 = {
	  cost: 50,
	  side: "player",
	  range: 50,
	  vel: [0, -2],
	  hp: 200,
	  fireSpeed: 250,
	  image: tank1Img,
	  bullet: bulletTank1
	};
	
	var bulletTank2 = {
	  damage: 20,
	  speed: 20,
	  image: bulletTankImg
	};
	
	var tank2 = exports.tank2 = {
	  cost: 80,
	  side: "player",
	  range: 100,
	  vel: [0, -1],
	  hp: 150,
	  fireSpeed: 400,
	  image: tank2Img,
	  bullet: bulletTank2
	};
	
	var bulletTank3 = {
	  damage: 30,
	  speed: 10,
	  image: bulletTankImg
	};
	
	var tank3 = exports.tank3 = {
	  cost: 100,
	  side: "player",
	  range: 80,
	  vel: [0, -1],
	  hp: 250,
	  fireSpeed: 300,
	  image: tank3Img,
	  bullet: bulletTank3
	};
	
	var bulletTurret = {
	  damage: 10,
	  speed: 10,
	  image: bulletEnemy
	};
	
	var eturret = exports.eturret = {
	  cost: 100,
	  side: "enemy",
	  range: 200,
	  vel: [0, 0],
	  hp: 600,
	  fireSpeed: 500,
	  image: eTurretImg,
	  bullet: bulletTurret
	};
	
	var bulleteTank = {
	  damage: 5,
	  speed: 10,
	  image: bulletEnemy
	};
	
	var etank = exports.etank = {
	  cost: 60,
	  side: "enemy",
	  range: 50,
	  vel: [0, 0.6],
	  hp: 1000,
	  fireSpeed: 800,
	  image: eTankImg,
	  bullet: bulleteTank
	};
	
	var bulleteTank1 = {
	  damage: 10,
	  speed: 20,
	  image: bulletEnemy
	};
	
	var etank1 = exports.etank1 = {
	  cost: 80,
	  side: "enemy",
	  range: 100,
	  vel: [0, 2],
	  hp: 75,
	  fireSpeed: 300,
	  image: eTank1Img,
	  bullet: bulleteTank1
	};
	var bulleteTank2 = {
	  damage: 40,
	  speed: 7,
	  image: bulletEnemy
	};
	
	var etank2 = exports.etank2 = {
	  cost: 100,
	  side: "enemy",
	  range: 150,
	  vel: [0, 0.7],
	  hp: 200,
	  fireSpeed: 1000,
	  image: eTank2Img,
	  bullet: bulleteTank2
	};
	var bulleteTank3 = {
	  damage: 30,
	  speed: 15,
	  image: bulletEnemy
	};
	
	var etank3 = exports.etank3 = {
	  cost: 100,
	  side: "enemy",
	  range: 150,
	  vel: [0, 1],
	  hp: 400,
	  fireSpeed: 700,
	  image: eTank3Img,
	  bullet: bulleteTank3
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var baseMerge = __webpack_require__(9),
	    createAssigner = __webpack_require__(117);
	
	/**
	 * This method is like `_.assign` except that it recursively merges own and
	 * inherited enumerable string keyed properties of source objects into the
	 * destination object. Source properties that resolve to `undefined` are
	 * skipped if a destination value exists. Array and plain object properties
	 * are merged recursively. Other objects and value types are overridden by
	 * assignment. Source objects are applied from left to right. Subsequent
	 * sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.5.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = {
	 *   'a': [{ 'b': 2 }, { 'd': 4 }]
	 * };
	 *
	 * var other = {
	 *   'a': [{ 'c': 3 }, { 'e': 5 }]
	 * };
	 *
	 * _.merge(object, other);
	 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
	 */
	var merge = createAssigner(function(object, source, srcIndex) {
	  baseMerge(object, source, srcIndex);
	});
	
	module.exports = merge;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(10),
	    arrayEach = __webpack_require__(51),
	    assignMergeValue = __webpack_require__(52),
	    baseKeysIn = __webpack_require__(53),
	    baseMergeDeep = __webpack_require__(56),
	    isArray = __webpack_require__(69),
	    isObject = __webpack_require__(28),
	    isTypedArray = __webpack_require__(111);
	
	/**
	 * The base implementation of `_.merge` without support for multiple sources.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMerge(object, source, srcIndex, customizer, stack) {
	  if (object === source) {
	    return;
	  }
	  if (!(isArray(source) || isTypedArray(source))) {
	    var props = baseKeysIn(source);
	  }
	  arrayEach(props || source, function(srcValue, key) {
	    if (props) {
	      key = srcValue;
	      srcValue = source[key];
	    }
	    if (isObject(srcValue)) {
	      stack || (stack = new Stack);
	      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	    }
	    else {
	      var newValue = customizer
	        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
	        : undefined;
	
	      if (newValue === undefined) {
	        newValue = srcValue;
	      }
	      assignMergeValue(object, key, newValue);
	    }
	  });
	}
	
	module.exports = baseMerge;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(11),
	    stackClear = __webpack_require__(19),
	    stackDelete = __webpack_require__(20),
	    stackGet = __webpack_require__(21),
	    stackHas = __webpack_require__(22),
	    stackSet = __webpack_require__(23);
	
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}
	
	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	
	module.exports = Stack;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(12),
	    listCacheDelete = __webpack_require__(13),
	    listCacheGet = __webpack_require__(16),
	    listCacheHas = __webpack_require__(17),
	    listCacheSet = __webpack_require__(18);
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	module.exports = ListCache;


/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}
	
	module.exports = listCacheClear;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(14);
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype;
	
	/** Built-in value references. */
	var splice = arrayProto.splice;
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}
	
	module.exports = listCacheDelete;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(15);
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	module.exports = assocIndexOf;


/***/ },
/* 15 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	module.exports = eq;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(14);
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	module.exports = listCacheGet;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(14);
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	module.exports = listCacheHas;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(14);
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	module.exports = listCacheSet;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(11);
	
	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	}
	
	module.exports = stackClear;


/***/ },
/* 20 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}
	
	module.exports = stackDelete;


/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}
	
	module.exports = stackGet;


/***/ },
/* 22 */
/***/ function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}
	
	module.exports = stackHas;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(11),
	    Map = __webpack_require__(24),
	    MapCache = __webpack_require__(36);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache) {
	    var pairs = cache.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      return this;
	    }
	    cache = this.__data__ = new MapCache(pairs);
	  }
	  cache.set(key, value);
	  return this;
	}
	
	module.exports = stackSet;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(25),
	    root = __webpack_require__(32);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(26),
	    getValue = __webpack_require__(35);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(27),
	    isHostObject = __webpack_require__(29),
	    isMasked = __webpack_require__(30),
	    isObject = __webpack_require__(28),
	    toSource = __webpack_require__(34);
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	module.exports = baseIsNative;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(28);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 28 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 29 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	module.exports = isHostObject;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(31);
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	module.exports = isMasked;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(32);
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	module.exports = coreJsData;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(33);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ },
/* 33 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 34 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	module.exports = toSource;


/***/ },
/* 35 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	module.exports = getValue;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(37),
	    mapCacheDelete = __webpack_require__(45),
	    mapCacheGet = __webpack_require__(48),
	    mapCacheHas = __webpack_require__(49),
	    mapCacheSet = __webpack_require__(50);
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	module.exports = MapCache;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(38),
	    ListCache = __webpack_require__(11),
	    Map = __webpack_require__(24);
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	module.exports = mapCacheClear;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(39),
	    hashDelete = __webpack_require__(41),
	    hashGet = __webpack_require__(42),
	    hashHas = __webpack_require__(43),
	    hashSet = __webpack_require__(44);
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	module.exports = Hash;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(40);
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}
	
	module.exports = hashClear;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(25);
	
	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');
	
	module.exports = nativeCreate;


/***/ },
/* 41 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}
	
	module.exports = hashDelete;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(40);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	module.exports = hashGet;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(40);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}
	
	module.exports = hashHas;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(40);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	module.exports = hashSet;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(46);
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}
	
	module.exports = mapCacheDelete;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(47);
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	module.exports = getMapData;


/***/ },
/* 47 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	module.exports = isKeyable;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(46);
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	module.exports = mapCacheGet;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(46);
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	module.exports = mapCacheHas;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(46);
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}
	
	module.exports = mapCacheSet;


/***/ },
/* 51 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0;
	
	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}
	
	module.exports = arrayEach;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(15);
	
	/**
	 * This function is like `assignValue` except that it doesn't assign
	 * `undefined` values.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignMergeValue(object, key, value) {
	  if ((value !== undefined && !eq(object[key], value)) ||
	      (typeof key == 'number' && value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}
	
	module.exports = assignMergeValue;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(28),
	    isPrototype = __webpack_require__(54),
	    nativeKeysIn = __webpack_require__(55);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];
	
	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeysIn;


/***/ },
/* 54 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	module.exports = isPrototype;


/***/ },
/* 55 */
/***/ function(module, exports) {

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = nativeKeysIn;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var assignMergeValue = __webpack_require__(52),
	    baseClone = __webpack_require__(57),
	    copyArray = __webpack_require__(75),
	    isArguments = __webpack_require__(64),
	    isArray = __webpack_require__(69),
	    isArrayLikeObject = __webpack_require__(65),
	    isFunction = __webpack_require__(27),
	    isObject = __webpack_require__(28),
	    isPlainObject = __webpack_require__(110),
	    isTypedArray = __webpack_require__(111),
	    toPlainObject = __webpack_require__(115);
	
	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	  var objValue = object[key],
	      srcValue = source[key],
	      stacked = stack.get(srcValue);
	
	  if (stacked) {
	    assignMergeValue(object, key, stacked);
	    return;
	  }
	  var newValue = customizer
	    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	    : undefined;
	
	  var isCommon = newValue === undefined;
	
	  if (isCommon) {
	    newValue = srcValue;
	    if (isArray(srcValue) || isTypedArray(srcValue)) {
	      if (isArray(objValue)) {
	        newValue = objValue;
	      }
	      else if (isArrayLikeObject(objValue)) {
	        newValue = copyArray(objValue);
	      }
	      else {
	        isCommon = false;
	        newValue = baseClone(srcValue, true);
	      }
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      if (isArguments(objValue)) {
	        newValue = toPlainObject(objValue);
	      }
	      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
	        isCommon = false;
	        newValue = baseClone(srcValue, true);
	      }
	      else {
	        newValue = objValue;
	      }
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    stack.set(srcValue, newValue);
	    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	    stack['delete'](srcValue);
	  }
	  assignMergeValue(object, key, newValue);
	}
	
	module.exports = baseMergeDeep;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(10),
	    arrayEach = __webpack_require__(51),
	    assignValue = __webpack_require__(58),
	    baseAssign = __webpack_require__(59),
	    cloneBuffer = __webpack_require__(74),
	    copyArray = __webpack_require__(75),
	    copySymbols = __webpack_require__(76),
	    getAllKeys = __webpack_require__(79),
	    getTag = __webpack_require__(82),
	    initCloneArray = __webpack_require__(88),
	    initCloneByTag = __webpack_require__(89),
	    initCloneObject = __webpack_require__(104),
	    isArray = __webpack_require__(69),
	    isBuffer = __webpack_require__(107),
	    isHostObject = __webpack_require__(29),
	    isObject = __webpack_require__(28),
	    keys = __webpack_require__(61);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;
	
	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {boolean} [isFull] Specify a clone including symbols.
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
	  var result;
	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;
	
	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      if (isHostObject(value)) {
	        return object ? value : {};
	      }
	      result = initCloneObject(isFunc ? {} : value);
	      if (!isDeep) {
	        return copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, baseClone, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);
	
	  if (!isArr) {
	    var props = isFull ? getAllKeys(value) : keys(value);
	  }
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
	  });
	  return result;
	}
	
	module.exports = baseClone;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(15);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}
	
	module.exports = assignValue;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(60),
	    keys = __webpack_require__(61);
	
	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}
	
	module.exports = baseAssign;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(58);
	
	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	
	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;
	
	    assignValue(object, key, newValue === undefined ? source[key] : newValue);
	  }
	  return object;
	}
	
	module.exports = copyObject;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(62),
	    baseKeys = __webpack_require__(71),
	    isArrayLike = __webpack_require__(66);
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	module.exports = keys;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(63),
	    isArguments = __webpack_require__(64),
	    isArray = __webpack_require__(69),
	    isIndex = __webpack_require__(70);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];
	
	  var length = result.length,
	      skipIndexes = !!length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = arrayLikeKeys;


/***/ },
/* 63 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	module.exports = baseTimes;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(65);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	module.exports = isArguments;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(66),
	    isObjectLike = __webpack_require__(68);
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	module.exports = isArrayLikeObject;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(27),
	    isLength = __webpack_require__(67);
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	module.exports = isArrayLike;


/***/ },
/* 67 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 68 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 69 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ },
/* 70 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}
	
	module.exports = isIndex;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(54),
	    nativeKeys = __webpack_require__(72);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeys;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(73);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;


/***/ },
/* 73 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ },
/* 74 */
/***/ function(module, exports) {

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var result = new buffer.constructor(buffer.length);
	  buffer.copy(result);
	  return result;
	}
	
	module.exports = cloneBuffer;


/***/ },
/* 75 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;
	
	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}
	
	module.exports = copyArray;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(60),
	    getSymbols = __webpack_require__(77);
	
	/**
	 * Copies own symbol properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}
	
	module.exports = copySymbols;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(73),
	    stubArray = __webpack_require__(78);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;
	
	/**
	 * Creates an array of the own enumerable symbol properties of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
	
	module.exports = getSymbols;


/***/ },
/* 78 */
/***/ function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}
	
	module.exports = stubArray;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(80),
	    getSymbols = __webpack_require__(77),
	    keys = __webpack_require__(61);
	
	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}
	
	module.exports = getAllKeys;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(81),
	    isArray = __webpack_require__(69);
	
	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}
	
	module.exports = baseGetAllKeys;


/***/ },
/* 81 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	module.exports = arrayPush;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(83),
	    Map = __webpack_require__(24),
	    Promise = __webpack_require__(84),
	    Set = __webpack_require__(85),
	    WeakMap = __webpack_require__(86),
	    baseGetTag = __webpack_require__(87),
	    toSource = __webpack_require__(34);
	
	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';
	
	var dataViewTag = '[object DataView]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;
	
	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge < 14, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;
	
	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}
	
	module.exports = getTag;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(25),
	    root = __webpack_require__(32);
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');
	
	module.exports = DataView;


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(25),
	    root = __webpack_require__(32);
	
	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');
	
	module.exports = Promise;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(25),
	    root = __webpack_require__(32);
	
	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');
	
	module.exports = Set;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(25),
	    root = __webpack_require__(32);
	
	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');
	
	module.exports = WeakMap;


/***/ },
/* 87 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}
	
	module.exports = baseGetTag;


/***/ },
/* 88 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = array.constructor(length);
	
	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}
	
	module.exports = initCloneArray;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(90),
	    cloneDataView = __webpack_require__(92),
	    cloneMap = __webpack_require__(93),
	    cloneRegExp = __webpack_require__(97),
	    cloneSet = __webpack_require__(98),
	    cloneSymbol = __webpack_require__(101),
	    cloneTypedArray = __webpack_require__(103);
	
	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, cloneFunc, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneArrayBuffer(object);
	
	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);
	
	    case dataViewTag:
	      return cloneDataView(object, isDeep);
	
	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      return cloneTypedArray(object, isDeep);
	
	    case mapTag:
	      return cloneMap(object, isDeep, cloneFunc);
	
	    case numberTag:
	    case stringTag:
	      return new Ctor(object);
	
	    case regexpTag:
	      return cloneRegExp(object);
	
	    case setTag:
	      return cloneSet(object, isDeep, cloneFunc);
	
	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}
	
	module.exports = initCloneByTag;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var Uint8Array = __webpack_require__(91);
	
	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}
	
	module.exports = cloneArrayBuffer;


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(32);
	
	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;
	
	module.exports = Uint8Array;


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(90);
	
	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}
	
	module.exports = cloneDataView;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var addMapEntry = __webpack_require__(94),
	    arrayReduce = __webpack_require__(95),
	    mapToArray = __webpack_require__(96);
	
	/**
	 * Creates a clone of `map`.
	 *
	 * @private
	 * @param {Object} map The map to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned map.
	 */
	function cloneMap(map, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
	  return arrayReduce(array, addMapEntry, new map.constructor);
	}
	
	module.exports = cloneMap;


/***/ },
/* 94 */
/***/ function(module, exports) {

	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */
	function addMapEntry(map, pair) {
	  // Don't return `map.set` because it's not chainable in IE 11.
	  map.set(pair[0], pair[1]);
	  return map;
	}
	
	module.exports = addMapEntry;


/***/ },
/* 95 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array ? array.length : 0;
	
	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}
	
	module.exports = arrayReduce;


/***/ },
/* 96 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	
	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}
	
	module.exports = mapToArray;


/***/ },
/* 97 */
/***/ function(module, exports) {

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;
	
	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}
	
	module.exports = cloneRegExp;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var addSetEntry = __webpack_require__(99),
	    arrayReduce = __webpack_require__(95),
	    setToArray = __webpack_require__(100);
	
	/**
	 * Creates a clone of `set`.
	 *
	 * @private
	 * @param {Object} set The set to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned set.
	 */
	function cloneSet(set, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
	  return arrayReduce(array, addSetEntry, new set.constructor);
	}
	
	module.exports = cloneSet;


/***/ },
/* 99 */
/***/ function(module, exports) {

	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */
	function addSetEntry(set, value) {
	  // Don't return `set.add` because it's not chainable in IE 11.
	  set.add(value);
	  return set;
	}
	
	module.exports = addSetEntry;


/***/ },
/* 100 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}
	
	module.exports = setToArray;


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(102);
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}
	
	module.exports = cloneSymbol;


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(32);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(90);
	
	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}
	
	module.exports = cloneTypedArray;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(105),
	    getPrototype = __webpack_require__(106),
	    isPrototype = __webpack_require__(54);
	
	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}
	
	module.exports = initCloneObject;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(28);
	
	/** Built-in value references. */
	var objectCreate = Object.create;
	
	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} prototype The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	function baseCreate(proto) {
	  return isObject(proto) ? objectCreate(proto) : {};
	}
	
	module.exports = baseCreate;


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(73);
	
	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	
	module.exports = getPrototype;


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(32),
	    stubFalse = __webpack_require__(109);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	
	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;
	
	module.exports = isBuffer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(108)(module)))

/***/ },
/* 108 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 109 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = stubFalse;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(106),
	    isHostObject = __webpack_require__(29),
	    isObjectLike = __webpack_require__(68);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}
	
	module.exports = isPlainObject;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(112),
	    baseUnary = __webpack_require__(113),
	    nodeUtil = __webpack_require__(114);
	
	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
	module.exports = isTypedArray;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(67),
	    isObjectLike = __webpack_require__(68);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}
	
	module.exports = baseIsTypedArray;


/***/ },
/* 113 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	
	module.exports = baseUnary;


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(33);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	
	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}());
	
	module.exports = nodeUtil;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(108)(module)))

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(60),
	    keysIn = __webpack_require__(116);
	
	/**
	 * Converts `value` to a plain object flattening inherited enumerable string
	 * keyed properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return copyObject(value, keysIn(value));
	}
	
	module.exports = toPlainObject;


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(62),
	    baseKeysIn = __webpack_require__(53),
	    isArrayLike = __webpack_require__(66);
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}
	
	module.exports = keysIn;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(118),
	    isIterateeCall = __webpack_require__(120);
	
	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;
	
	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;
	
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}
	
	module.exports = createAssigner;


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(119);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);
	
	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}
	
	module.exports = baseRest;


/***/ },
/* 119 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}
	
	module.exports = apply;


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(15),
	    isArrayLike = __webpack_require__(66),
	    isIndex = __webpack_require__(70),
	    isObject = __webpack_require__(28);
	
	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}
	
	module.exports = isIterateeCall;


/***/ },
/* 121 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GameView = function () {
	  function GameView(game, ctx) {
	    _classCallCheck(this, GameView);
	
	    this.ctx = ctx;
	    this.game = game;
	  }
	
	  _createClass(GameView, [{
	    key: "start",
	    value: function start() {
	      this.lastTime = 0;
	      //start the animation
	      requestAnimationFrame(this.animate.bind(this));
	    }
	  }, {
	    key: "animate",
	    value: function animate(time) {
	      var timeDelta = time - this.lastTime;
	
	      this.game.step(timeDelta);
	      this.game.draw(this.ctx);
	      this.lastTime = time;
	
	      //every call to animate requests causes another call to animate
	      requestAnimationFrame(this.animate.bind(this));
	    }
	  }]);
	
	  return GameView;
	}();
	
	GameView.MOVES = {
	  "w": [0, -1],
	  "a": [-1, 0],
	  "s": [0, 1],
	  "d": [1, 0]
	};
	
	module.exports = GameView;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map