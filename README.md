# Videre Player

This project is about a mininum and modular HTML5 Player.

It is under development and should not used at production.

# How Use
You will need that dist folder with fonts, javascript and css files, so first clone this project or download via zip.

```bash
git clone https://github.com/joffilyfe/videre.git
```
Now in your html page your should import files.

```html
<script src="assets/js/videre.min.js"></script>
<link rel="stylesheet" href="assets/css/videre.min.css">
```
Now you need to inicialize the player
```javascript
  var player = new Videre.Player({containerId: '#container', src: 'path/link/video.mp4'});
````

You will see something like this

[![Captura de Tela 2017-01-04 ?s 12.41.11.png](https://s24.postimg.org/4ad3bqgrp/Captura_de_Tela_2017_01_04_s_12_41_11.png)](https://postimg.org/image/d5dxm95k1/)

## TO DO
- [ ] Display buffer progress
- [ ] Do a better way to show and hide controls
- [ ] Add a button to fullscreen display
- [ ] Volume controllers
- [ ] Add tests
