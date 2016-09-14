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
	
	var _game_view = __webpack_require__(6);
	
	var _game_view2 = _interopRequireDefault(_game_view);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.addEventListener("DOMContentLoaded", function () {
	  var canvasEl = document.getElementsByTagName("canvas")[0];
	  canvasEl.width = _game2.default.DIM_X;
	  canvasEl.height = _game2.default.DIM_Y;
	
	  $('button[id=start]').click(function () {
	    $(this).hide();
	    var ctx = canvasEl.getContext("2d");
	    console.log(ctx);
	    var game = new _game2.default();
	    new _game_view2.default(game, ctx).start();
	    $('button[class=ui]').show();
	    document.getElementById("addunit1").addEventListener("click", myFunction);
	
	    function myFunction() {
	      game.addUnit();
	    }
	  });
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _unit = __webpack_require__(2);
	
	var _unit2 = _interopRequireDefault(_unit);
	
	var _bullet = __webpack_require__(5);
	
	var _bullet2 = _interopRequireDefault(_bullet);
	
	var _util = __webpack_require__(4);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _base = __webpack_require__(7);
	
	var _base2 = _interopRequireDefault(_base);
	
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
	    this.addUnit();
	  }
	
	  _createClass(Game, [{
	    key: "add",
	    value: function add(object) {
	      if (object instanceof _bullet2.default) {
	        this.bullets.push(object);
	      } else if (object instanceof _unit2.default) {
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
	
	      var playerbase = new _base2.default({
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
	  }, {
	    key: "addEnemy",
	    value: function addEnemy() {
	      var unit = new _unit2.default({
	        vel: [0, 1],
	        range: 200,
	        side: "enemy",
	        pos: [Game.DIM_X * Math.random(), 0],
	        game: this,
	        hp: 20
	      });
	
	      this.add(unit);
	
	      return unit;
	    }
	  }, {
	    key: "addUnit",
	    value: function addUnit() {
	      var unit = new _unit2.default({
	        side: "player",
	        range: 100,
	        vel: [0, -1],
	        pos: [Game.DIM_X * Math.random(), 568],
	        game: this,
	        hp: 200
	      });
	
	      this.add(unit);
	
	      return unit;
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
	          console.log(this.base[1].hp);
	          this.remove(this.bullets[i]);
	          if (this.base[1].hp < 0) {
	            this.remove(this.base[1]);
	            this.lose();
	          }
	        }
	      }
	      for (var _i = 0; _i < this.bullets.length; _i++) {
	        if (this.base[0].inEnemyRange(this.bullets[_i]) && this.base[0].side !== this.bullets[_i].side) {
	          this.base[0].hp -= this.bullets[_i].damage;
	          this.remove(this.bullets[_i]);
	          console.log(this.base[0].hp);
	          if (this.base[0].hp < 0) {
	            this.remove(this.base[0]);
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
	      } else if (object instanceof _unit2.default && object.side === "player") {
	        this.units.splice(this.units.indexOf(object), 1);
	      } else if (object instanceof _unit2.default && object.side === "enemy") {
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
	    key: "step",
	    value: function step(delta) {
	      this.moveObjects(delta);
	      this.checkBaseDamage();
	      this.checkCollisions();
	      this.objectGo();
	      this.checkBaseInRange();
	      this.checkInRange();
	    }
	  }, {
	    key: "wrap",
	    value: function wrap(pos) {
	      return [_util2.default.wrap(pos[0], Game.DIM_X), _util2.default.wrap(pos[1], Game.DIM_Y)];
	    }
	  }]);
	
	  return Game;
	}();
	
	Game.BG_COLOR = "#000000";
	Game.DIM_X = 384;
	Game.DIM_Y = 568;
	Game.FPS = 32;
	
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
	    return _this;
	  }
	
	  _createClass(Unit, [{
	    key: "fireBullet",
	    value: function fireBullet(pos) {
	
	      var norm = _util2.default.dir([pos[0] - this.pos[0], pos[1] - this.pos[1]]);
	
	      var bulletVel = _util2.default.scale(norm, _bullet2.default.SPEED);
	
	      var bullet = new _bullet2.default({
	        pos: this.pos,
	        vel: bulletVel,
	        color: this.color,
	        game: this.game,
	        damage: 20,
	        side: this.side
	      });
	
	      this.game.add(bullet);
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
	    return _this;
	  }
	
	  return Bullet;
	}(_moving_object2.default);
	
	Bullet.RADIUS = 2;
	Bullet.SPEED = 15;
	
	exports.default = Bullet;

/***/ },
/* 6 */
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
	    key: "bindKeyHandlers",
	    value: function bindKeyHandlers() {
	      var ship = this.ship;
	
	      Object.keys(GameView.MOVES).forEach(function (k) {
	        var move = GameView.MOVES[k];
	        key(k, function () {
	          ship.power(move);
	        });
	      });
	
	      key("space", function () {
	        ship.fireBullet();
	      });
	    }
	  }, {
	    key: "start",
	    value: function start() {
	      this.bindKeyHandlers();
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

/***/ },
/* 7 */
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
	    key: "collideWith",
	    value: function collideWith(otherObject) {
	      // default do nothing
	    }
	  }, {
	    key: "draw",
	    value: function draw(ctx) {
	      ctx.fillStyle = this.color;
	      ctx.fillRect(this.pos[0] - this.width / 2, this.pos[1] - this.length / 2, this.width, this.length);
	    }
	  }, {
	    key: "inEnemyRange",
	    value: function inEnemyRange(unit) {
	      var distX = Math.abs(unit.pos[0] - this.pos[0] - this.width / 2);
	      var distY = Math.abs(unit.pos[1] - this.pos[1] - this.length / 2);
	      if (distX > this.width / 2 + unit.range) {
	        return false;
	      }
	      if (distY > this.length / 2 + unit.range) {
	        return false;
	      }
	
	      if (distX <= this.width / 2) {
	        return true;
	      }
	      if (distY <= this.length / 2) {
	        return true;
	      }
	
	      var dx = distX - this.width / 2;
	      var dy = distY - this.length / 2;
	      return dx * dx + dy * dy <= unit.range * unit.range;
	    }
	  }, {
	    key: "isCollidedWith",
	    value: function isCollidedWith(otherObject) {
	      var centerDist = _util2.default.dist(this.pos, otherObject.pos);
	      return centerDist < this.radius + otherObject.radius;
	    }
	  }, {
	    key: "move",
	    value: function move() {}
	  }, {
	    key: "remove",
	    value: function remove() {
	      this.game.remove(this);
	    }
	  }]);
	
	  return Base;
	}();
	
	var NORMAL_FRAME_TIME_DELTA = 1000 / 60;
	
	exports.default = Base;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map