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
  alert(this.playerName + ", your turn is over, pass the mouse!");
}

Player.prototype.winnerCheck = function() {
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
