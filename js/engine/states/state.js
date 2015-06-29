var State = (function (game) {
	this.game = game
	ths.addState = addState;

	return {
		add : 	add,
		load : 	load
	}

	function add(name, class) {
		this.game.state.add(name, class);
	};

	function load(name){
		this.game.state.start(name);
	}
});