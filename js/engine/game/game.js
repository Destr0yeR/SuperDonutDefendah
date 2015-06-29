var GameSystem = (function() {
	this.game = null;
	this.width = 0;
	this.height = 0;

	this.states = [];
	this.keys = [];

	return {
		create: create,
		addState: addState,
		loadState: loadState,
		loadImage: loadImage,
		loadSheet: loadSheet,
		createObject: createObject
	};

	function create(width, height) { 
		this.width = width;
		this.height = height;
		this.game = new Phaser.Game(width, height, Constants.typeRender(), 'game');
		Constants.setGame(this.game);
		Constants.setWindow({w: width, h: height});
	}

	function addState(name, class) {
		if(this.states.indexOf(name) >= 0){
			return false;
		}
		State.addState(name, class);
		this.states.push(name);
		return true;
	}

	function loadState(name) {
		if(this.states.indexOf(name) >= 0){
			State.load(name);
			return true;
		}
		return false;
	}

	function loadImage(name, url) {
		if(this.keys.indexOf(name) >= 0) {
			return false;
		}
		this.keys.push(name);
		Render.loadImage(name, url);
		return true;
	}

	function loadSheet(name, url) {
		if(this.keys.indexOf(name) >= 0) {
			return false;
		}
		this.keys.push(name);
		Render.loadSheet(name, url);

		return true;
	}

	function createObject(name) {
		if(this.keys.indexOf(name) >= 0) {
			ObjectFactory.create(name);
			return true;
		}
		return true;
	}
})();