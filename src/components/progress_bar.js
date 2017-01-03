import { div } from '../base/elements.js';
import HTMLObject from '../base/html_object.js';

export default class ProgressBar extends HTMLObject {
  constructor() {
    super();
    this.el = this.el ? this.el : div({'id': 'progress-bar'});
    this.container = div({'id': 'progress-container'}, this.el);
  }

  bindEvents() {
    this.listen('timeupdate', 'video', (event) => this.updateWidth(event));
  }

  updateWidth(event) {
    let video = event.target;
    let currentTime = ((video.currentTime * 100) / video.duration);
    this.element.style.width = currentTime + '%';
  }

  template() {
    return this.container;
  }
}
