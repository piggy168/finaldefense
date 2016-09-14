import Game from "./game";
import GameView from "./game_view";


document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y;

  $('button[id=start]').click(
    function()
    {
      new Audio('sound/GamePlay.mp3').play();
      $(this).hide();
      const ctx = canvasEl.getContext("2d");
      console.log(ctx);
      const game = new Game();
      new GameView(game, ctx).start();
      $('button[class=ui]').show();
      document.getElementById("addunit1").addEventListener("click",  addUnit1);

      function addUnit1() {
       game.addUnit();
      }
      document.getElementById("addunit2").addEventListener("click", addUnit2);

      function addUnit2() {
       game.addEnemy();
      }
    }
  );


});
