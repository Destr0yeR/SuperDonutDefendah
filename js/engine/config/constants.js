var Constants = (function() {

	this._game = null;
	this.window = null;
	this.dimension = 32;

	return {
		typeRender: function() { 
			return Phaser.AUTO; 
		},
		game: function() {
			return this._game;
		},
		setGame: function(game) {
			this._game = game;
		},
		getWindow: function() {
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