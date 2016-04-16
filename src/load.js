LD35.Load = function (game) {
  this.game = game
  LD35.WIDTH = 800;
  LD35.HEIGHT = 400;
};

LD35.Load.prototype = {

  preload: function () {
    // set background color and preload image
    this.game.stage.backgroundColor = '#000000';
    this._preloadBar = this.game.add.sprite((LD35.WIDTH - 311) / 2, (LD35.HEIGHT - 27) / 2, 'preloaderBar');

    this.game.load.setPreloadSprite(this._preloadBar);

    // load images
    //this.game.load.image('TNSlogo', 'assets/TNS_logo.png');

    // load sprite sheets
    //this.game.load.spritesheet('ship', 'assets/ship.png', 32, 32, 13);

    // load audio
    //this.game.load.audio('basic_weapon', 'assets/audio/basic_gun.wav');
  },

  create: function () {
    // start the MainMenu state
    this.game.state.start('Menu');
  }
};
