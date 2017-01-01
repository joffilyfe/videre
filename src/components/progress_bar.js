export default class ProgressBar {
  constructor(element) {
    this.element = element;
  }

  updateWidth(currentWidth, totalWidth) {
    let currentTime = ((currentWidth * 100) / totalWidth);
    this.element.style.width = currentTime + '%';
  }
}
