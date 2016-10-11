import Game from "./game";
import GameView from "./game_view";
import * as stats from "./stats.js";


document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y;
  const game = new Game();
  const ctx = canvasEl.getContext("2d");
  new GameView(game, ctx).start();
  document.getElementById("addunit1").addEventListener("click",  addUnit1);
  function addUnit1() {
   game.addUnit(stats.tank1);
  }
  $('#addunit1').hover(
    function(){
      $('.scout').show();
      $('.tank').hide();
      $('.sniper').hide();
      $('.fighter').hide();
    }
  );
  document.getElementById("addunit2").addEventListener("click", addUnit2);
  function addUnit2() {
   game.addUnit(stats.tank);
  }
  $('#addunit2').hover(
    function(){
      $('.scout').hide();
      $('.tank').show();
      $('.sniper').hide();
      $('.fighter').hide();
    }
  );
  document.getElementById("addunit3").addEventListener("click", addUnit3);
  function addUnit3() {
   game.addUnit(stats.tank2);
  }
  $('#addunit3').hover(
    function(){
      $('.sniper').show();
      $('.scout').hide();
      $('.tank').hide();
      $('.fighter').hide();
    }
  );
  document.getElementById("addunit4").addEventListener("click", addUnit4);
  function addUnit4() {
   game.addUnit(stats.tank3);
  }
  $('#addunit4').hover(
    function(){
      $('.fighter').show();
      $('.scout').hide();
      $('.tank').hide();
      $('.sniper').hide();
    }
  );
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
  $('.mute').click(
    function(){
      game.mute();
      $(this).hide();
      $(".unmute").show();
    }
  );
  $('.unmute').click(
    function(){
      game.unmute();
      $(this).hide();
      $(".mute").show();
    }
  );
  $('button[id=start]').click(
    function()
    {
      $(this).hide();
      game.begin();
      $('button[class=ui]').show();
    }
  );



});
