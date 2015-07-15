var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.image('space', 'assets/deep-space.jpg');
    game.load.image('bullet', 'assets/bullets.png');
    game.load.image('ship', 'assets/ship.png');
    game.load.image('crosshair','assets/green_Crosshair.png');

}

var sprite;
var cursors;

var bullet;
var bullets;
var bulletTime = 0;

var crosshair;

var movingRight=0;
var movingUp=0;

var teleportActivated=false;

var formerMouse=-1;

function create() {

    //  This will run in Canvas mode, so let's gain a little speed and display
    game.renderer.clearBeforeRender = false;
    game.renderer.roundPixels = true;

    //  We need arcade physics
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  A spacey background
    game.add.tileSprite(0, 0, game.width, game.height, 'space');

    //  Our ships bullets
    bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;

    //  All 40 of them
    bullets.createMultiple(50, 'bullet');
    bullets.setAll('anchor.x', 0.5);
    bullets.setAll('anchor.y', 0.5);

    //  Our player ship
    sprite = game.add.sprite(400, 300, 'ship');
    sprite.anchor.set(0.5);

    //  and its physics settings
    game.physics.enable(sprite, Phaser.Physics.ARCADE);

    sprite.body.drag.set(300);
    sprite.body.maxVelocity.set(150);
    sprite.body.collideWorldBounds = true;

    //  Game input
    cursors = game.input.keyboard.createCursorsKeys();
    game.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);
    game.input.keyboard.addKeyCapture([ Phaser.Keyboard.W ]);
    game.input.keyboard.addKeyCapture([ Phaser.Keyboard.A ]);
    game.input.keyboard.addKeyCapture([ Phaser.Keyboard.S ]);
    game.input.keyboard.addKeyCapture([ Phaser.Keyboard.D ]);
    game.input.keyboard.addKeyCapture([ Pahser.Keyboard.Q ]);
    
    game.canvas.oncontextmenu = function (e) { e.preventDefault(); }

}

function update() {
    
    if (game.input.keyboard.isDown(Phaser.Keyboard.W))
    {
        sprite.body.velocity.y = -150;
        sprite.angle = -90;
        movingUp=1;
    }
    else
    {
        if(game.input.keyboard.isDown(Phaser.Keyboard.S))
        {
            sprite.body.velocity.y = 150;
            sprite.angle = 90;
            movingUp=-1;
        }
        else
        {
            movingUp=0;
        }
    }

    if(game.input.keyboard.isDown(Phaser.Keyboard.A))
    {
        sprite.body.velocity.x = -150;
        sprite.angle = -180;
        movingRight=-1;

    }
    else
    {
        if(game.input.keyboard.isDown(Phaser.Keyboard.D))
        {
            sprite.body.velocity.x = 150;
            sprite.angle = 0;
            movingRight=1;
        }
        else
        {
            movingRight=0;
        }   
    }

    if(movingUp==1)
    {
        if (movingRight==1)
        {
            sprite.angle=-45;
        }
        else
        {
            if(movingRight==-1)
            {
                sprite.angle=-135
            }
            else
            {
                sprite.angle=-90;
            }
        }
    }
    if(movingUp==-1)
    {
        if (movingRight==1)
        {
            sprite.angle=45;
        }
        else
        {
            if(movingRight==-1)
            {
                sprite.angle=135
            }
            else
            {
                sprite.angle=90;
            }
        }
    }

    //sprite.rotation = game.physics.arcade.angleToPointer(sprite);

    /*if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
    {
        fireBullet();
    }

    if(game.input.keyboard.isDown(Phaser.Keyboard.Q)){
        if(!teleportActivated)
        {            
            activateCrosshair();
        }else
        {
            executeTeleport();
        }
    }
    */
    
    verifyMouseInputs();
    if(teleportActivated)
    {
        moveCrosshair();
    }
}

function activateCrosshair()
{
    crosshair = game.add.sprite(game.input.mousePointer.x, game.input.mousePointer.y, 'crosshair');
    crosshair.anchor.set(0.5);
     teleportActivated=true;
}
function moveCrosshair()
{
    crosshair.x=game.input.mousePointer.x;
    crosshair.y=game.input.mousePointer.y;
}
function executeTeleport()
{
    sprite.x=crosshair.x;
    sprite.y=crosshair.y;
    crosshair.destroy();
    teleportActivated=false;
}

function fireBullet () {

    if (game.time.now > bulletTime)
    {
        
        bullet = bullets.getFirstExists(false);

        if (bullet)
        {
            bullet.reset(sprite.body.x + 16, sprite.body.y + 16);
            bullet.lifespan = 4000;
            bullet.rotation = sprite.rotation;
            game.physics.arcade.velocityFromRotation(sprite.rotation, 400, bullet.body.velocity);
            bulletTime = game.time.now + 250;
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
function verifyMouseInputs()
{
     if (game.input.mouse.button==2){
         if (this.formerMouse!=2) {
          if(!teleportActivated)
            {            
                activateCrosshair();
            }else
            {
                executeTeleport();
            }
        }
     }
     else
    {
       if (game.input.mouse.button==0)
       {
         if (this.formerMouse!=-1) 
         {
           fireBullet();
         }
       }
    }
     
    this.formerMouse=game.input.mouse.button;
}

function render() {
}