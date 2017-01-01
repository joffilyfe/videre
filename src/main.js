import Player from './core/player.js';

let player = (options) => {
  return new Player(options);
};

export {
  player as Player
};
