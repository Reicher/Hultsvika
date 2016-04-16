LD35.Menu = function(game){

};

LD35.Menu.prototype = {
	create: function(){

		var text = "LD35 II";
		var style = { font: "30px Arial", fill: "#FFFFFF", align: "center" };
		var startText = this.game.add.text(LD35.WIDTH/2, 195, text, style);
		startText.anchor.setTo(0.5, 0);

		this.game.input.onDown.add(this.startGame, this);
		this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(this.startGame, this);
	},

	startGame: function() {
		// start the Game state
		this.state.start('Game');
	}
};
