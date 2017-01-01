import Video from '../components/video.js';
import ProgressBar from '../components/progress_bar.js';
import PlaybackButton from '../components/playback_button.js';

export default class Elements {
  constructor(containerId) {
    this.containerId = containerId;
  }

  /*
  * get container of player, if containerId not found
  * it will bind the body tag.
  */
  getContainer() {
    if (!!this.containerId && !this.container) {
      this.container = document.querySelector(this.containerId) ||
      document.getElementsByTagName('body')[0];
    }

    if (!this.container || !this.containerId) {
      this.container = document.getElementsByTagName('body')[0];
    }

    return this.container;
  }

  /*
  * get player wrapper container
  */
  getPlayerWrapper() {
    if (!this.playerwrapper) {
      this.playerwrapper = document.querySelector('.player-wrapper');
    }
    return this.playerwrapper;
  }

  /*
  * get video element without attributes
  * return HTML Element Video
  */
  getVideo() {
    if (!this.video) {
      this.video = new Video(document.querySelector('video'));
    }
    return this.video;
  }

  /*
  * method getPlayBackButton
  */
  getPlaybackButton() {
    if (!this.playBackButton) {
      this.playBackButton = new PlaybackButton(document.getElementById('btn-playback'));
    }
    return this.playBackButton;
  }

  getProgressContainer() {
    if (!this.progressContainer) {
      this.progressContainer = document.querySelector('#progress-container');
    }
    return this.progressContainer;
  }

  getProgressBar() {
    if (!this.progressBar) {
      this.progressBar = new ProgressBar(document.querySelector('#progress-bar'));
    }

    return this.progressBar;
  }

  getFullscreenButton() {
    if (!this.fullscreenbutton) {
      this.fullscreenbutton = document.querySelector('#btn-fullscreen');
    }
    return this.fullscreenbutton;
  }

  setVideoSource(source) {
    this.video.src = source;
  }
}
