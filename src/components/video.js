export default class Video {

  constructor(element) {
    this.element = element;
  }

  get source() {
    return this.element.src;
  }

  set source(value) {
    this.element.src = value;
  }

  get total() {
    return this.element.duration;
  }

  get time() {
    return this.element.currentTime;
  }

  set time(t) {
    this.element.currentTime = t;
  }

  toggle() {
    this.play() || this.pause();
  }

  play() {
    return this.element.paused && this.element.play();
  }

  pause() {
    return !this.element.paused && this.element.pause();
  }

  isPaused() {
    return this.element.paused;
  }

  event(type, callback) {
    for (var i = 0, len = type.length; i < len; i++) {
      this.element.addEventListener(type[i], () => callback(), false);
    }
  }
}
