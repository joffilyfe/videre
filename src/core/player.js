import View from '../template/view.js';

export default class Player {
  constructor(options) {
    this.view = new View(options);
    this.video = this.view.video ? this.view.video : null;
    this.wrapper = this.view.wrapper ? this.view.wrapper : null;

    if (this.video) {
      this.video.source = options.src ? options.src : '';
      this.video.poster = options.poster ? options.poster : '';
    }

    if (this.wrapper) {
      this.wrapper.width = options.width ? options.width : 600;
      this.wrapper.height = options.height ? options.height : 400;
    }

    this.view.render();
    this.view.bindEvents();
  }
}


