
	var RenderSystem = function(game) {
		this.game = game;
		this.dimenssion = 0;
	}
	RenderSystem.prototype.loadImage = function(name, url) {
		this.game = Constants.game();
		this.game.load.image(name, url, true);
	};

	RenderSystem.prototype.loadSheet = function(name, url) {
		this.game = Constants.game();
		this.dimenssion = Constants.dimenssion();
		this.game.load.spritesheet(name, url, this.dimenssion, this.dimenssion, true);
	};

	RenderSystem.prototype.putImage = function(key) {
		// body...
	};

	RenderSystem.prototype.putSprite = function(key) {
		// body...
	};

	RenderSystem.prototype.putTile = function(key, x, y, w, h) {
		this.game.add.tileSprite(x, y, w, h, key);
	};
