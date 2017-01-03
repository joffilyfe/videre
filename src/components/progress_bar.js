import { div } from '../base/elements.js';
import HTMLObject from '../base/html_object.js';
import { PROGRESS_CONTAINER } from '../base/selector.js';

export default class ProgressBar extends HTMLObject {
  constructor() {
    super();
    this.el = this.el ? this.el : div({'id': 'progress-bar'});
    this.container = div({'id': 'progress-container'}, this.el);
  }

  bindEvents() {
    this.listen('timeupdate', 'video', (event) => this.updateWidth(event));
    this.listen('mousedown', PROGRESS_CONTAINER, (event) => this.isMouseDown(event));
    this.listen('mouseup', PROGRESS_CONTAINER, (event) => this.isMouseDown(event));
  }

  updateWidth(event) {
    let video = event.target;
    let currentTime = ((video.currentTime * 100) / video.duration);
    this.element.style.width = currentTime + '%';
  }

  isMouseDown(event) {
    if (event.type == 'mousedown') {
      event.target.setAttribute('data-click', 'true');
    } else {
      event.target.setAttribute('data-click', 'false');
    }
  }

  template() {
    return this.container;
  }
}
