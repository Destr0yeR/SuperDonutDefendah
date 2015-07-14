	
	var InputHandler = function (game) {
		this.game = game;
		this.stateMachine = new StateMachine;

		this.button = {};
		this.buttons = null;

		this.initDefault();
	};

	InputHandler.prototype.getState = function() {
		this.stateMachine.getState();
	};

	InputHandler.prototype.update = function() {
		this.handleInput();
	};

	InputHandler.prototype.handleInput = function(){

	};

	InputHandler.prototype.bindInput = function(key, button_bind){
		this.button[button_bind] = key;
	};

	InputHandler.prototype.bindCommand = function(key, callback){
		if(this.buttons[key]){
			this.buttons[key] = null;
		}
		this.buttons[key] = new InputCommand(callback);
	};

	InputHandler.prototype.initDefault = function() {
		
	};