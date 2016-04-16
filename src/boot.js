var LD35 = {};
LD35.Boot = function(game) {
  this.game = game;
};
LD35.Boot.prototype = {

  preload: function () {
    this.game.load.image('preloaderBar', 'assets/Loading_bar.png');
  },

  create: function() {
    this.game.input.maxPointers = 1;
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.setScreenSize(true);
    this.game.stage.smoothed = false;
    this.game.state.start('Load');
  }
};
