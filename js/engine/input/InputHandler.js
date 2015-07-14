
	var InputHandler = function (game) {
		this.game = game;
		this.pad = null;
	};

	InputHandler.prototype.init = function(_class){
		this.stateMachine = new StateMachine();
		this.game.input.gamepad.start();
		this.pad = this.game.input.gamepad.pad1;
		this._class = _class;

		this.input = new Input(this.pad, this._class);
		
		this.pad.addCallbacks(this.game, { onConnect: this.input.setXboxKeys });
		
		this.button = {};
		this.buttons = null;
		onDown = this.onDown;
		onUp = this.onUp;
		this.initDefault();
	}

	InputHandler.prototype.getState = function() {
		this.stateMachine.getState();
	};

	InputHandler.prototype.update = function() {
		this.handleInput();
	};

	InputHandler.prototype.handleInput = function(){
		this.input.updateXbox();
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