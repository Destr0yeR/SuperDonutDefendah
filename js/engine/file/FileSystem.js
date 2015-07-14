
	var FileSystem = function(game) {
		this.game = game;
		this.loader = new Phaser.Loader(game);
	}

	FileSystem.prototype.load = function(name, url) {
		var game = this.game;
		this.loader.script(name, url);
	};
