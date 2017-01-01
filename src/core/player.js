import Elements from './elements.js';
import Control from './control.js';
import View from './view.js';

export default class Player {
  constructor(options = {}) {
    this.options = options;
    this.elements = new Elements(options.containerId);
    this.view = new View(this.elements);
    this.control = new Control(this.elements);
    this.setVideo();
  }

  setVideo() {
    this.elements.getVideo().source =this.options.src;
  }

  render() {
    let view = new View(this.elements);
    view.render();
  }
}
