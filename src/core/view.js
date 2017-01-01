export default class View {
  constructor(elements, options = {}) {
    this.elements = elements;
    this.options = options;
    this.render();
  }

  renderTemplate() {
    return `
      <div class="player-wrapper">
        <div class="player-video">
          <video></video>
        </div>
        <div class="player-overlay">
            <div id="progress-container">
              <div id="progress-bar"></div>
            </div>
            <div class="player-control">
              <button id="btn-playback" class="player-button -play icon-play"></button>
              <button id="btn-fullscreen" class="player-button -full-screen icon-resize-full"></button>
            </div>
          </div>
      </div>`;
  }

  render() {
    this.elements.getContainer().innerHTML = this.renderTemplate();
  }
}
