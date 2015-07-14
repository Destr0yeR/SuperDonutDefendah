	
	var GameSystem = function() {
		this.game 	= null;
		this.width 	= 0;
		this.height = 0;

		this.states = [];
		this.keys 	= [];
	}

	GameSystem.prototype.create = function(width, height) { 
		this.width = width;
		this.height = height;
		this.game = new Phaser.Game(width, height, Constants.typeRender(), 'game');
		Constants.setGame(this.game);
		Constants.setWindow({w: width, h: height});

		this.file 		= new FileSystem(this.game);
		this.render 	= new RenderSystem(this.game);
		this.factory 	= new ObjectFactory(this.game);
		this.state 		= new StateSystem(this.game);
	}

	GameSystem.prototype.addState = function(name, _class) {
		var state = this.state;
		if(this.states.indexOf(name) >= 0){
			return false;
		}
		this.state.add(name, _class);
		this.states.push(name);
		return true;
	}

	GameSystem.prototype.loadState = function(name) {
		var state = this.state;
		if(this.states.indexOf(name) >= 0){
			state.load(name);
			return true;
		}
		return false;
	}

	GameSystem.prototype.loadImage = function(name, url) {
		var render = this.render;
		if(this.keys.indexOf(name) >= 0) {
			return false;
		}
		this.keys.push(name);
		render.loadImage(name, url);
		return true;
	}

	GameSystem.prototype.loadSheet = function(name, url) {
		var render = this.render;
		if(this.keys.indexOf(name) >= 0) {
			return false;
		}
		this.keys.push(name);
		render.loadSheet(name, url);

		return true;
	}

	GameSystem.prototype.createObject = function(name, x, y) {
		var factory = this.factory;
		if(this.keys.indexOf(name) >= 0) {
			factory.create(name, x, y);
		}
	}
	GameSystem.prototype.loadScript = function(name) {
		this.file.load(name);
	}
