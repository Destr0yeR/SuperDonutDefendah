	var SDD = {};

	SDD.Init = function (game) {
		this.game = game;
		this.gameSystem = SDD.gameSystem;
	}

	SDD.Init.prototype.preload = function() {
		
	};

	SDD.Init.prototype.create = function() {
		this.gameSystem.loadState('Game');
	};

	SDD.Init.prototype.update = function() {
		
	};