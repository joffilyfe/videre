/* eslint-disable no-alert, no-console */
export default class HTMLObject {
  constructor(el) {
    this.el = el;
  }

  template() {
    return this.el;
  }

  get element() {
    return this.el;
  }

  set element(element) {
    this.el = element;
  }

  bindEvents() {}

  listen(type, target, callback, dom = document) {
    const el = dom.querySelector(target);
    if (el) {
      el.addEventListener(type, (event) => callback(event), false);
    } else {
      console.error(`${type} event for ${target} fail.`); // eslint-disable-line
    }
  }
}
/* eslint-enable no-alert, no-console */
