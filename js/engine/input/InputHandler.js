	
	var InputHandler = function (game) {
		this.game = game;
		this.stateMachine = new StateMachine;
		this.pad = game.input.gamepad.pad1;

		this.button = {};
		this.buttons = null;

		this.setKeys();
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

	InputHandler.prototype.setKeys = function() {
		this.buttonA = this.pad.getButton(Phaser.Gamepad.XBOX360_A);
	    this.buttonB = this.pad.getButton(Phaser.Gamepad.XBOX360_B);
	    this.buttonX = this.pad.getButton(Phaser.Gamepad.XBOX360_X);
	    this.buttonY = this.pad.getButton(Phaser.Gamepad.XBOX360_Y);
	};