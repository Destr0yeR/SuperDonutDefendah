	
	var Input = function(pad, _class){
		var pad = pad;
		var _class = _class;

		var Xbox = {};

		Xbox.button = {};
		Xbox.DPad = {};
		Xbox.STICK = {};

		var buttonSPACE = null;

		function onDownXboxA (button, value) {
		    console.log('Phaser.Gamepad.XBOX360_A down');
		};

		function onDownXboxB (button, value) {
		    console.log('Phaser.Gamepad.XBOX360_B down');
		};

		function onDownXboxX (button, value) {
		    console.log('Phaser.Gamepad.XBOX360_X down');
		};

		function onDownXboxY (button, value) {
		    console.log('Phaser.Gamepad.XBOX360_Y down');
		};

		function onUp (button, value) {
			if (button.buttonCode === Phaser.Gamepad.XBOX360_A)
		    {
		        console.log('Phaser.Gamepad.XBOX360_A down');
		    }
		};

		//DPAD

		function checkDown(button){
			if(pad.isDown(button.code)){
				button.callbackDown();
			}
		}

		function checkUp(button){
			if(pad.isDown(button.code)){
				button.callbackUp();
			}
		}

		function onDownXboxDpadLeft(){
			console.log('Phaser.Gamepad.XBOX360_DPAD_LEFT down');
		}

		function onUpXboxDpadLeft(){
			console.log('Phaser.Gamepad.XBOX360_DPAD_LEFT up');
		}

		function onDownXboxDpadRight(){
			console.log('Phaser.Gamepad.XBOX360_DPAD_RIGHT down');
		}

		function onUpXboxDpadRight(){
			console.log('Phaser.Gamepad.XBOX360_DPAD_RIGHT up');
		}

		function onDownXboxDpadUp(){
			console.log('Phaser.Gamepad.XBOX360_DPAD_UP down');
		}

		function onUpXboxDpadUp(){
			console.log('Phaser.Gamepad.XBOX360_DPAD_UP up');
		}

		function onDownXboxDpadDown(){
			console.log('Phaser.Gamepad.XBOX360_DPAD_DOWN down');
		}

		function onUpXboxDpadDown(){
			console.log('Phaser.Gamepad.XBOX360_DPAD_DOWN up');
			console.log(pad._rawPad);
		}

		this.setXboxKeys = function() {
			Xbox.button.A = this.getButton(Phaser.Gamepad.XBOX360_A);
		    Xbox.button.B = this.getButton(Phaser.Gamepad.XBOX360_B);
		    Xbox.button.X = this.getButton(Phaser.Gamepad.XBOX360_X);
		    Xbox.button.Y = this.getButton(Phaser.Gamepad.XBOX360_Y);
		    
		    Xbox.button.A.onDown.add(onDownXboxA, _class);
		    Xbox.button.B.onDown.add(onDownXboxB, _class);
		    Xbox.button.X.onDown.add(onDownXboxX, _class);
		    Xbox.button.Y.onDown.add(onDownXboxY, _class);

		    Xbox.button.A.onUp.add(onUp, _class);
		    Xbox.button.B.onUp.add(onUp, _class);
		    Xbox.button.X.onUp.add(onUp, _class);
		    Xbox.button.Y.onUp.add(onUp, _class);


		    Xbox.DPad.Left 	= this.getButton(Phaser.Gamepad.XBOX360_DPAD_LEFT);
		    Xbox.DPad.Right = this.getButton(Phaser.Gamepad.XBOX360_DPAD_RIGHT);
		    Xbox.DPad.Up 	= this.getButton(Phaser.Gamepad.XBOX360_DPAD_UP);
		    Xbox.DPad.Down 	= this.getButton(Phaser.Gamepad.XBOX360_DPAD_DOWN);

			Xbox.DPad.Left.onDown.add(onDownXboxDpadLeft, this);
		    Xbox.DPad.Right.onDown.add(onDownXboxDpadRight, this);
		    Xbox.DPad.Up.onDown.add(onDownXboxDpadUp, this);
		    Xbox.DPad.Down.onDown.add(onDownXboxDpadDown, this);

		    Xbox.DPad.Left.onUp.add(onUpXboxDpadLeft, this);
		    Xbox.DPad.Right.onUp.add(onUpXboxDpadRight, this);
		    Xbox.DPad.Up.onUp.add(onUpXboxDpadUp, this);
		    Xbox.DPad.Down.onUp.add(onUpXboxDpadDown, this);
		};

		this.updateXbox = function() {
			
		}
	}