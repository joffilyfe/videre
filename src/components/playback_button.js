import { div, button } from '../base/elements.js';
import HTMLObject from '../base/html_object.js';

export default class PlaybackButton extends HTMLObject   {
  constructor() {
    super();
    this.el = this.el ? this.el : button({'className': 'player-button -play icon-play'});
  }

  bindEvents() {
    this.listen('play',  'video', (event) => this.changeButtonIcon(event));
    this.listen('pause',  'video', (event) => this.changeButtonIcon(event));
  }

  changeButtonIcon(event) {
    if (event.target.paused) {
      this.el.classList.add('icon-play');
      this.el.classList.remove('icon-pause');
    } else {
      this.el.classList.add('icon-pause');
      this.el.classList.remove('icon-play');
    }
  }

  template() {
    return div({'id': 'btn'}, this.el);
  }
}
