
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
