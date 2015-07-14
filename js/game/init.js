	var SDD = {};

	SDD.Init = function (game) {
		this.game = game;
		this.gameSystem = SDD.gameSystem;
	}

	SDD.Init.prototype.preload = function() {
	};

	SDD.Init.prototype.create = function() {
		console.log(this);
		this.gameSystem.init();
		this.gameSystem.initInput(this);
		this.gameSystem.loadState('Game');
	};

	SDD.Init.prototype.update = function() {
		
	};