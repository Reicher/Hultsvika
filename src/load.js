HV.Load = function (game) {
  this.game = game
  HV.WIDTH = 800;
  HV.HEIGHT = 400;
};

HV.Load.prototype = {

  preload: function () {
    // set background color and preload image
    this.game.stage.backgroundColor = '#000000';
    this._preloadBar = this.game.add.sprite((HV.WIDTH - 311) / 2, (HV.HEIGHT - 27) / 2, 'preloaderBar');

    this.game.load.setPreloadSprite(this._preloadBar);

    // load images
    this.game.load.image('grass', 'assets/grass.png');
    this.game.load.spritesheet('player', 'assets/player.png', 32, 32);

    // load sprite sheets
    //this.game.load.spritesheet('ship', 'assets/ship.png', 32, 32, 13);

    // load audio
    //this.game.load.audio('basic_weapon', 'assets/audio/basic_gun.wav');
  },

  create: function () {
    // start the MainMenu state
    //this.game.state.start('Menu');
    this.game.state.start('Game');
  }
};
