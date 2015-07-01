function Inputs (){

	function up ()
	{
		if (game.input.keyboard.isDown(Phaser.Keyboard.W)){
			return true;
		}else{
			return false;
		}
	}
	
	function down ()
	{
		if (game.input.keyboard.isDown(Phaser.Keyboard.S)){
			return true;
		}else{
			return false;
		}
	}

	function left ()
	{
		if (game.input.keyboard.isDown(Phaser.Keyboard.A)){
			return true;
		}else{
			return false;
		}
	}
	function right ()
	{
		if (game.input.keyboard.isDown(Phaser.Keyboard.D)){
			return true;
		}else{
			return false;
		}
	}
}