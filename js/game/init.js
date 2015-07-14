	var SDD = {};

	SDD.Init = function (game) {
		this.game = game;
		this.gameSystem = SDD.gameSystem;
	}

	SDD.Init.prototype.preload = function() {
		this.gameSystem.loadImage('space', 'assets/deep-space.jpg');
		this.gameSystem.loadImage('bullet', 'assets/bullets.png');
		this.gameSystem.loadImage('ship', 'assets/ship.png');
		this.gameSystem.loadImage('crosshair', 'assets/green_Crosshair.png');
	};

	SDD.Init.prototype.create = function() {
		this.gameSystem.loadState('Game');
	};

	SDD.Init.prototype.update = function() {
		
	};