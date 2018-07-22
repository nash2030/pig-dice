var player1;
var player2;

function Players(roll,turn,score){
	this.roll=roll;
	this.turn= turn;
	this.score= score;
}
var turns=[];
var roll=0;
var turn=0;
var total= 0;
var score1= 0;

var turnsSecond=[];
var rollSecond=0;
var turnSecond=0;
var totalSecond= 0;
var score1Second= 0;

Players.prototype.rollOne= function(){
