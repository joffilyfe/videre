import { goToWidth } from '../util.js';
import Event from '../core/event.js';

export default class Control {

  constructor(elements) {
    this.elements = elements;
    this.bindVideoEvents();
    this.bindPlaybackButtonEvents();
    this.bindProgressBarEvents();
  }

  /*
  * {bindVideoEvents}
  * Responsible to bind events relatives to video Element
  * events: {timeupdate, playing, pause}
  */
  bindVideoEvents() {
    let video = this.elements.getVideo();
    let bar = this.elements.getProgressBar();
    let button = this.elements.getPlaybackButton();

    // Update progress bar
    Event.listen(video.element, ['timeupdate'], () => {
      bar.updateWidth(video.time, video.total);
    });

    // Update icon of playback button
    Event.listen(video.element, ['playing', 'pause'], () => {
      button.update(video.isPaused());
    });
  }

  /*
  * {bindPlaybackButtonEvents}
  * Responsible to bind events relatives to Playback Button
  * events: {click}
  */
  bindPlaybackButtonEvents() {
    let button = this.elements.getPlaybackButton();
    let video = this.elements.getVideo();

    Event.listen(button.element, ['click'], () => {
      video.toggle();
    });
  }

  /*
  * {bindPlaybackButtonEvents}
  * Responsible to bind events relatives to Progress Bar
  * events: {click}
  */
  bindProgressBarEvents() {
    let bar = this.elements.getProgressBar();
    let video = this.elements.getVideo();
    var container = this.elements.getProgressContainer();

    goToWidth(container, bar.element, (position) => {
      video.time = (video.total * position) / 100;
    });
  }

}
