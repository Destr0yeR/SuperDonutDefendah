
	SDD.Game = function (game) {
		this.game = game;
		this.gameSystem = gameSystem;
	}

	SDD.Game.prototype.preload = function() {
		this.gameSystem.loadImage('space', 'assets/deep-space.jpg');
		this.gameSystem.loadImage('bullet', 'assets/bullets.png');
		this.gameSystem.loadImage('ship', 'assets/ship.png');
		this.gameSystem.loadImage('crosshair', 'assets/green_Crosshair.png');
	};

	SDD.Game.prototype.create = function() {
		this.gameSystem.putTile('space',0, 0, this.game.width, this.game.height);
	};

	SDD.Game.prototype.update = function() {
		
	};