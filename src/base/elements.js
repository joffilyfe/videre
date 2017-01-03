/*
* David Gilberson Element maker
* https://gist.github.com/davidgilbertson/c9ff092236c695dfe8c57d23f7a1a0de#file-elements-js
*/
/* eslint-disable no-alert, no-console */
const DOM = document;

const attributeExceptions = [
  'role',
];

function appendText(el, text) {
  const textNode = DOM.createTextNode(text);
  el.appendChild(textNode);
}

function appendArray(el, children) {
  children.forEach((child) => {
    if (Array.isArray(child)) {
      appendArray(el, child);
    } else if (child instanceof window.Element) {
      el.appendChild(child);
    } else if (typeof child === 'string') {
      appendText(el, child);
    }
  });
}

function setStyles(el, styles) {
  if (!styles) {
    el.removeAttribute('styles');
    return;
  }

  Object.keys(styles).forEach((styleName) => {
    if (styleName in el.style) {
      el.style[styleName] = styles[styleName]; // eslint-disable-line no-param-reassign
    } else {
      console.warn('${styleName} is not a valid style for a <${el.tagName.toLowerCase()}>');
    }
  });
}

function makeElement(type, textOrPropsOrChild, ...otherChildren) {
  const el = DOM.createElement(type);

  if (Array.isArray(textOrPropsOrChild)) {
    appendArray(el, textOrPropsOrChild);
  } else if (textOrPropsOrChild instanceof window.Element) {
    el.appendChild(textOrPropsOrChild);
  } else if (typeof textOrPropsOrChild === 'string') {
    appendText(el, textOrPropsOrChild);
  } else if (typeof textOrPropsOrChild === 'object') {
    Object.keys(textOrPropsOrChild).forEach((propName) => {
      if (propName in el || attributeExceptions.includes(propName)) {
        const value = textOrPropsOrChild[propName];

        if (propName === 'style') {
          setStyles(el, value);
        } else if (value) {
          el[propName] = value;
        }
      } else {
        console.warn('${propName} is not a valid property of a <${type}>');
      }
    });
  }

  if (otherChildren) appendArray(el, otherChildren);

  return el;
}

const a = (...args) => makeElement('a', ...args);
const button = (...args) => makeElement('button', ...args);
const div = (...args) => makeElement('div', ...args);
const video = (...args) => makeElement('video', ...args);

export {
  a as a,
  button as button,
  div as div,
  video as video,
  DOM as DOM,
};
/* eslint-enable no-alert, no-console */
