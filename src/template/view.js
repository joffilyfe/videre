import { div } from '../base/elements.js';
import Video from '../components/video.js';
import ProgressBar from '../components/progress_bar.js';
import PlaybackButton from '../components/playback_button.js';
import Wrapper from '../components/wrapper.js';

const wrapper = new Wrapper();
const video = new Video();
const playbackbtn = new PlaybackButton();
const progressbar = new ProgressBar();

const Overlay = div({'className': 'player-overlay'},
  div({'className': 'player-control'},
    [
      progressbar.template(),
      div({'className': 'control-container'},
        playbackbtn.template())
    ]
  )
);

wrapper.add(video.template());
wrapper.add(Overlay);

export default class View {
  constructor(options) {
    this.currentVideo = video;
    this.wrapper = wrapper;
    this.container = document.querySelector(options.containerId) ? document.querySelector(options.containerId) : document.querySelector('body');
  }

  get video() {
    return this.currentVideo;
  }

  render() {
    this.container.appendChild(wrapper.template());
  }

  bindEvents() {
    video.bindEvents();
    playbackbtn.bindEvents();
    progressbar.bindEvents();
  }
}
