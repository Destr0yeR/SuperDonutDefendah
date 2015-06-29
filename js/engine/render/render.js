var Render = (function() {
	this.game = {};
	this.dimenssion = 0;

	return {
		loadImage: loadImage,
		loadSheet: loadSheet
	}

	function loadImage (name, url) {
		this.game = Constants.game();
		this.game.load.image(name, url);
	}

	function loadSheet (name, url) {
		this.game = Constants.game();
		this.dimenssion = Constants.dimenssion();
		this.game.load.spritesheet(name, url, this.dimenssion, this.dimenssion);
	}

})();