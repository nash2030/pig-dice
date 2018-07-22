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
