var game = new Phaser.Game(800, 600, Phaser.ARCADE, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.image('space', 'examples/assets/skies/sky1.png');
    game.load.image('bullet', 'examples/assets/misc/bullet0.png');
    game.load.image('ship', 'examples/assets/games/asteroids/ship.png');
    game.load.image('enemy', 'examples/assets/virtualjoystick/beball1.png');

}
function Enemy(_hit,_damage,_type){
	this.hit=_hit;
	this.damage=_damage;
	this.type=_type;
}

var player;
var cursors;
var wave;
var bullet;
var bullets;
var bulletTime = 0;

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
	game.add.sprite(0,0,'space');
	player = game.add.sprite(300, 300, 'ship');
    player.anchor.set(0.5);

    //  and its physics settings
    game.physics.enable(player, Phaser.Physics.ARCADE);

    player.body.drag.set(100);
    player.body.maxVelocity.set(100);
    player.body.collideWorldBounds=true;
    player.body.bounce.set(1);
    player.hit=5;
    

    bullets = game.add.group();
	bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;

    bullets.createMultiple(1000, 'bullet');
    bullets.setAll('anchor.x', 0.5);
    bullets.setAll('anchor.y', 0.5);

    enemigo=new Enemy(4,5,'enemy');

    grupo=game.add.group();
    grupo.enableBody=true;

    var en=grupo.create(400,400,'enemy')
    en.body.bounce.set(1);
    en.body.immovable=true;
    en.hit=5;
    en.damage=6;
    cursors=game.input.keyboard.createCursorKeys();
    game.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);
}

function update() {
	game.physics.arcade.collide(player,grupo,matarAvion,null,this);
	game.physics.arcade.collide(player,game);
	game.physics.arcade.collide(bullets,grupo,matarEnemigo,null,this);
	movimiento();
}
function matarAvion(player,enemy){
	player.hit--;
	if(player.hit==0){
		player.kill();
		alert("Game Over");
	}
}
function matarEnemigo(bullet,enemy){
	bullet.kill();
	if(enemy.body.touching.right){
		enemy.hit--;
		if(enemy.hit==0){
			enemy.kill();
		}
	}
	else if(enemy.body.touching.left || enemy.body.touching.up || enemy.body.touching.down){
		game.physics.arcade.accelerationFromRotation(bullet.rotation, 200, enemy.body.acceleration);
	}
}
function movimiento(){
	avanzar();
	rotar();
	if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
        fireBullet();
    }

}
function avanzar(){
	if(cursors.up.isDown){
		game.physics.arcade.accelerationFromRotation(player.rotation, 200, player.body.acceleration);
	}
	else if(cursors.down.isDown){
		game.physics.arcade.accelerationFromRotation(player.rotation, -200, player.body.acceleration);	
	}
	else{
		player.body.acceleration.set(0);
	}
}
function rotar(){
	if(cursors.left.isDown){
			player.angle-=6;
	}
	else if(cursors.right.isDown){
			player.angle+=6;
	}
	else{
		player.body.angularVelocity = 0;
	}
}
function fireBullet () {
	if(game.time.now > bulletTime){
		bullet = bullets.getFirstExists(false);
		if(bullet){
			bullet.reset(player.body.x + 16, player.body.y + 16);
			bullet.lifespan = 2000;
	        bullet.rotation = player.rotation;
	        game.physics.arcade.velocityFromRotation(player.rotation, 400, bullet.body.velocity);
	        bulletTime = game.time.now + 100;
		}
	}

}

function screenWrap (sprite) {

    if (sprite.x < 0)
    {
        sprite.x = game.width;
    }
    else if (sprite.x > game.width)
    {
        sprite.x = 0;
    }

    if (sprite.y < 0)
    {
        sprite.y = game.height;
    }
    else if (sprite.y > game.height)
    {
        sprite.y = 0;
    }

}

function render() {
}