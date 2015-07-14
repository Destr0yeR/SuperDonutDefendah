	
	var StateSystem = function (game) {
		this.game = game;
	}

	StateSystem.prototype.add = function(name, _class) {
		this.game.state.add(name, _class);
	};

	StateSystem.prototype.load = function(name) {
		this.game.state.start(name);
	};