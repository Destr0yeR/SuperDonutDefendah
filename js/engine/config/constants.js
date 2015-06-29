var Constants = (function() {

	this.game = null;
	this.window = null;
	this.dimension = 32;

	return {
		typeRender: function() { 
			return Phaser.AUTO; 
		},
		game: function() {
			return this.game;
		},
		setGame: function(game) {
			this.game = game;
		},
		window: function() {
			return this.window;
		},
		setWindow: function(window) {
			this.window = window;
		},
		dimension: function() {
			return this.dimension;
		},
		typeCollision: function() {
			return Phaser.Physics.ARCADE;
		}
	};
})();