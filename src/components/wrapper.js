import { div } from '../base/elements.js';
import HTMLObject from '../base/html_object.js';

export default class Wrapper extends HTMLObject {
  constructor() {
    super();
    this.el = this.el ? this.el : div({'className': 'player-wrapper', 'id': 'videre'});
  }

  add(element) {
    this.el.appendChild(element);
  }

  set width(value) {
    this.el.style.width = value;
  }

  set height(value) {
    this.el.style.height = value;
  }
}
