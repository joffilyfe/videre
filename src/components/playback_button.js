export default class PlaybackButton {
  constructor(element) {
    this.element = element;
  }

  update(paused) {
    if (paused) {
      this.element.classList.add('icon-play');
      this.element.classList.remove('icon-pause');
    } else {
      this.element.classList.add('icon-pause');
      this.element.classList.remove('icon-play');
    }
  }
}
