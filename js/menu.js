var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update});
var buttons;
var cursors;
function preload() {
    game.load.image('menu_title', 'assets/menu/menu_game_title.png');
    game.load.image('menu_arrow', 'assets/menu/menu_arrow.png');
    game.load.image('menu_button1', 'assets/menu/menu_button.png');
    game.load.image('menu_button2', 'assets/menu/menu_button2.png');
    game.load.image('menu_button3', 'assets/menu/menu_button3.png');
}

function create() {
	this.cursors = game.input.keyboard.createCursorKeys();
	this.gameTitle = game.add.image(game.world.centerX,game.world.centerY-150,'menu_title');
	this.gameTitle.anchor.setTo(0.5,0.5);
	
	draw();

}

function draw() {
	this.button1 = game.add.button(game.world.centerX,game.world.centerY-50 ,'menu_button1',this.playState);
	this.button1.anchor.setTo(0.5,0.5);

	this.button2 = game.add.button(game.world.centerX,game.world.centerY+50 ,'menu_button2',this.playState);
	this.button2.anchor.setTo(0.5,0.5);

	this.button3 = game.add.button(game.world.centerX,game.world.centerY+150 ,'menu_button3',this.playState);
	this.button3.anchor.setTo(0.5,0.5);

	this.arrow = game.add.image(game.world.centerX-100,game.world.centerY-50,'menu_arrow');
	this.arrow.anchor.setTo(0.5,0.5);

	this.arrow.moveDelay = 200;

	this.arrow.canMove = true;

	this.arrow.currentButton = 1;

	game.add.tween(this.arrow).to({
		x: this.arrow.x - 10
		},700,Phaser.Easing.Quadratic.Out)
		.to({
		x: this.arrow.x 	
		},400,Phaser.Easing.Quadratic.In)
		.loop().start();	
}


function move(cursors , buttons){
	if (cursors.down.isDown && this.arrow.canMove) {
            //This stops the arrow from traveling way too fast
            this.arrow.canMove = false;
            
            //Which is reset to true after a 255ms delay
            this.allowMovement();
            
            if (this.arrow.currentButton === 1) {
                //I made a custom tween function for this
                this.tween(buttons, 2);
            } else if (this.arrow.currentButton === 2) {
                this.tween(buttons, 3);
            } else {
                this.tween(buttons, 1);
            }
        }

        if (cursors.up.isDown && this.arrow.canMove) {
            this.arrow.canMove = false;
            this.allowMovement();
            if (this.arrow.currentButton === 1) {
                this.tween(buttons, 3);
            } else if (this.arrow.currentButton === 2) {
                this.tween(buttons, 1);
            } else {
                this.tween(buttons, 2);
            }
        }

        if (game.input.keyboard.isDown(Phaser.Keyboard.ENTER)) {
            //This will activate the button that the pointer is at
            this.activateButton(buttons, this.arrow.currentButton);
        }
}

function tween(buttons,buttonNum){
	game.add.tween(this.arrow)
            .to({
                y: game.world.centerY + buttons.pos[buttonNum - 1]
            }, this.arrow.moveDelay, Phaser.Easing.Quadratic.In)
            .start();
        this.arrow.currentButton = buttonNum;
}

function allowMovement(){
	game.time.events.add(255, (function () {
            this.arrow.canMove = true;
        }), this);
}

function activateButton(buttons , currentButton){
	buttons[buttons.callbacks[currentButton - 1]]();
}

function update(){
	move(this.cursors,this.buttons);
}