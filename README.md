# Final Defense
[Live site][fd]
[fd]: https://github.com/piggy168/finaldefense/settings
Final Defense is a real-time strategy game where players can collect resources to produce army and defeat enemy with the army produced.
There are several different military units in the game including melee units, ranged units, tanks and towers.

## features

- [ ] Landing page with clear instruction and game play rules
- [ ] 4 types of units with different stats
- [ ] Game result screen
- [ ] Mute button


* Landing Screen
![landing](http://res.cloudinary.com/dlszpthqv/image/upload/v1473931047/loading_screen01_cckoko_c3dsvd.png)
* Gameplay
![gameplay](http://res.cloudinary.com/dlszpthqv/image/upload/v1473964153/Screen_Shot_2016-09-15_at_11.27.30_AM_ohkfjn.png)
* Victory
![victory](http://res.cloudinary.com/dlszpthqv/image/upload/v1473964154/Screen_Shot_2016-09-15_at_11.28.32_AM_bzdtg6.png)


## Technology
- [ ] JavaScript ES6
- [ ] Canvas(2D)
 * OOP - define classes and stats for units to keep code DRY
 ```JaveScript

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

 ```
