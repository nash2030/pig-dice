var player1;
var player2;

var dribble = function() {
  return Math.floor(Math.random() * 6) + 1;
}

function Player(turn) {
  this.roll = 0;
  this.myscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName;
}
Player.prototype.rollone = function() {
  if (this.roll === 1) {
    this.myscore = 0;
    alert("Ooops!! " + this.playerName + ", you rolled a one")

  } else {
    this.myscore += this.roll;
  }
}
Player.prototype.hold = function() {
  this.totalscore += this.myscore;
  this.myscore = 0;
  alert(this.playerName + ", your turn is over, hand over the mouse!");
}

Player.prototype.findWinner = function() {
  if (this.totalscore >= 100) {
    alert(this.playerName + " You are the winner!");
  }
}

Player.prototype.reset = function() {
  this.roll = 0;
  this.myscore = 0;
  this.totalscore = 0;
  this.playerName = "";
}
$(document).ready(function() {
	$("button#play").click(function(event) {
	    player1 = new Player(true);
	    player2 = new Player(false);
	    $(".game-changer").show();
	    $(".start-menu").hide();

			var player1Name = $(".player1Name").val();
			    $("#player1Name").text(player1Name);

					var player2Name = $(".player2Name").val();
					    $("#player2Name").text(player2Name);

					    player1.playerName = player1Name;
					    player2.playerName = player2Name;

					  });

						$("button#play-game").click(function(event) {
						    $(".game-changer").hide();
						    clearValues();
						    player1.reset();
						    player2.reset();
						    $("#round-total-1").empty();
						    $("#total-score-1").empty();
						    $("#die-roll-1").empty();
						    $("#round-total-2").empty();
						    $("#total-score-2").empty();
						    $("#die-roll-2").empty();

						    $(".home-page").show();
						  });
