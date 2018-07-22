
var player1 = "";
var player2 = "";

var rollDie = function() {
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
    alert("Ooops!! " + this.playerName + " you rolled a one.Turn for the next player")

  } else {
    this.myscore += this.roll;
  }
}
Player.prototype.hold = function() {
  this.totalscore += this.myscore;
  this.myscore = 0;
  alert(this.playerName + " your turn is over hand over the mouse!");
}

Player.prototype.findWinner = function() {
  if (this.totalscore >= 100) {
    alert(this.playerName + " you are the winner!");
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
	    $(".home-page").hide();

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

							$("button#player1-roll").click(function(event) {
							    player1.roll = rollDie();
							    $("#die-roll-1").text(player1.roll);
							    player1.rollone();
							    $("#round-total-1").text(player1.myscore);
							  });

								$("button#player2-roll").click(function(event) {
								    player2.roll = rollDie();
								    $("#die-roll-2").text(player2.roll);
								    player2.rollone();
								    $("#round-total-2").text(player2.myscore);
								  });

									$("button#player1-hold").click(function(event) {
									    player1.hold();
									    $("#total-score-1").text(player1.totalscore);
									    $("#round-total-1").empty();
									    $("#die-roll-1").empty();
									    player1.findWinner();
									  });

										$("button#player2-hold").click(function(event) {
    										player2.hold();
    										$("#total-score-2").text(player2.totalscore);
    										$("#round-total-2").empty();
    										$("#die-roll-2").empty();
    										player2.findWinner();
  										});

});
