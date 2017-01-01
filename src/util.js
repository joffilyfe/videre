let launchFullscreen = (element) => {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
};

let goToWidth = (container, bar, callback = function(pos) { return pos; }) => {
  let mouse = {
    down: false,
    move: false,
    stop: false
  };

  container.addEventListener('mousedown', () => mouse.down = true, false);
  container.addEventListener('mouseup', () => mouse.down = false, false);
  container.addEventListener('click', changeStyle);
  container.addEventListener('mousemove', changeStyle);

  function changeStyle(event) {
    if (!!mouse.down || event.type === 'click') {
      let pos = ((event.offsetX * 100) / container.offsetWidth);
      bar.style.width = pos + '%';
      callback(pos);
    }
  }
};

export {
  launchFullscreen as launchFullscreen,
  goToWidth as goToWidth,
};


