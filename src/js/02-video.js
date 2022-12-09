import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframeRef = document.querySelector('iframe');
const player = new Player(iframeRef);

const LOCALSTORAGE_CURRENT_TIME = 'videoplayer-current-time';

const getTimeLocalStorage = JSON.parse(
  localStorage.getItem(LOCALSTORAGE_CURRENT_TIME)
);

const { seconds: currentTime } = getTimeLocalStorage;

player.setCurrentTime(currentTime);

const onPlay = function (data) {
  localStorage.setItem(LOCALSTORAGE_CURRENT_TIME, JSON.stringify(data));
};

player.on('timeupdate', throttle(onPlay, 1000));
