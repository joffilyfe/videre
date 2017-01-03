import { video, div } from '../base/elements.js';
import HTMLObject from '../base/html_object.js';
import * as Selector from '../base/selector.js';

export default class Video extends HTMLObject {
  constructor() {
    super();
    this.el = this.el ? this.el : video();
  }

  bindEvents() {
    this.listen('click', Selector.PLAYBACK_BUTTON, () => this.toggle());
    this.listen('click', Selector.PROGRESS_CONTAINER, (event) => this.playTime(event));
  }

  play() {
    return this.el.paused && this.el.play();
  }

  pause() {
    return !this.el.paused && this.el.pause();
  }

  toggle() {
    this.play() || this.pause();
  }

  playTime(event) {
    let position = ((event.offsetX * 100) / event.target.offsetWidth);
    let time = (this.el.duration * position) / 100;
    this.el.currentTime = time;
  }

  template() {
    return div({'className': 'player-video'}, this.element);
  }

  set source(source) {
    this.el.src = source;
  }

  set poster(url) {
    this.el.poster = url;
  }
}
