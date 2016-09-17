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
bulletTankImg.src = 'https://res.cloudinary.com/hjsqizwtu/image/upload/v1473928897/bulletTank_xay5em.png';
var bulletEnemy = new Image();
bulletEnemy.src = 'https://res.cloudinary.com/hjsqizwtu/image/upload/v1473928897/ebullet_drskxf.png';



const bulletTank = {
  damage: 5,
  speed: 10,
  image: bulletTankImg,
};

export const tank = {
  cost: 60,
  side: "player",
  range: 20,
  vel: [0, -.5],
  hp: 800,
  fireSpeed: 500,
  image: tankImg,
  bullet: bulletTank,
};

const bulletTank1 = {
  damage: 10,
  speed: 10,
  image: bulletTankImg,
};

export const tank1 = {
  cost: 50,
  side: "player",
  range: 50,
  vel: [0, -2],
  hp: 200,
  fireSpeed: 250,
  image: tank1Img,
  bullet: bulletTank1,
};

const bulletTank2 = {
  damage: 20,
  speed: 20,
  image: bulletTankImg,
};

export const tank2 = {
  cost: 80,
  side: "player",
  range: 100,
  vel: [0, -1],
  hp: 150,
  fireSpeed: 400,
  image: tank2Img,
  bullet: bulletTank2,
};

const bulletTank3 = {
  damage: 30,
  speed: 10,
  image: bulletTankImg,
};

export const tank3 = {
  cost: 100,
  side: "player",
  range: 80,
  vel: [0, -1],
  hp: 250,
  fireSpeed: 300,
  image: tank3Img,
  bullet: bulletTank3,
};

const bulletTurret = {
  damage: 10,
  speed: 10,
  image: bulletEnemy,
};

export const eturret = {
  cost: 100,
  side: "enemy",
  range: 200,
  vel: [0, 0],
  hp: 600,
  fireSpeed: 500,
  image: eTurretImg,
  bullet: bulletTurret,
};

const bulleteTank = {
  damage: 5,
  speed: 10,
  image: bulletEnemy,
};

export const etank = {
  cost: 60,
  side: "enemy",
  range: 50,
  vel: [0, 0.6],
  hp: 1000,
  fireSpeed: 800,
  image: eTankImg,
  bullet: bulleteTank,
};

const bulleteTank1 = {
  damage: 10,
  speed: 20,
  image: bulletEnemy,
};

export const etank1 = {
  cost: 80,
  side: "enemy",
  range: 100,
  vel: [0, 2],
  hp: 75,
  fireSpeed: 300,
  image: eTank1Img,
  bullet: bulleteTank1,
};
const bulleteTank2 = {
  damage: 40,
  speed: 7,
  image: bulletEnemy,
};

export const etank2 = {
  cost: 100,
  side: "enemy",
  range: 150,
  vel: [0, 0.7],
  hp: 200,
  fireSpeed: 1000,
  image: eTank2Img,
  bullet: bulleteTank2,
};
const bulleteTank3 = {
  damage: 30,
  speed: 15,
  image: bulletEnemy,
};

export const etank3 = {
  cost: 100,
  side: "enemy",
  range: 150,
  vel: [0, 1],
  hp: 400,
  fireSpeed: 700,
  image: eTank3Img,
  bullet: bulleteTank3,
};
