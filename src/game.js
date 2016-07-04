HV.Game = function(game) {
  this.game = game;
};

HV.Game.prototype = {
  init: function() {

  },

  create: function() {
    this.game.add.tileSprite(0, 0, 1000, 1000, 'grass');
    this.game.world.setBounds(0, 0, 1000, 1000);
    this.game.physics.startSystem(Phaser.Physics.P2JS);

    player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player');
    player.animations.add('walk', [0, 1, 2, 3], 10, true);
    this.game.physics.p2.enable(player);

    cursors = this.game.input.keyboard.createCursorKeys();

    this.game.camera.follow(player);
  },

  update: function() {
    moving = false;
    rotaion = 0;
    player.body.setZeroVelocity();

    if (cursors.up.isDown) {
      moving = true;
      player.body.moveUp(100);
    } else if (cursors.down.isDown) {
      moving = true;
      player.body.moveDown(100);
      rotaion = 180;
    }

    if (cursors.left.isDown) {
      moving = true;
      player.body.velocity.x = -100;
      rotaion = 270;
    } else if (cursors.right.isDown) {
      moving = true;
      player.body.moveRight(100);
      rotaion = 90;
    }

    if (moving)
      player.animations.play('walk');
    else {
      player.animations.stop();
    }

    player.body.angle = rotaion;
  },
};
