import Game from "./game";
import GameView from "./game_view";


document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y;

  $('button[id=start]').click(
    function()
    {
      $(this).hide();
      const ctx = canvasEl.getContext("2d");
      console.log(ctx);
      const game = new Game();
      new GameView(game, ctx).start();
      $('button[class=ui]').show();
      document.getElementById("addunit1").addEventListener("click", myFunction);

      function myFunction() {
       game.addUnit();
      }
    }
  );


});
