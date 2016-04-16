LD35.Game = function (game) {
  this.game = game;
};

LD35.Game.prototype = {
  init: function() {

  },

  create: function () {
    // Add physics
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    //this.game.physics.arcade.setBounds(0, 0, this.game.width, this.game.height);
  },

  update: function () {
  },
};
