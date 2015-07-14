
	SDD.Game = function (game) {
		this.game = game;
		this.gameSystem = gameSystem;
	}

	SDD.Game.prototype.prelaod = function() {
		var gameSystem = this.gameSystem;
	};

	SDD.Game.prototype.create = function() {
		this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'space');
	};

	SDD.Game.prototype.upadte = function() {
		
	};