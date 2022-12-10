import Player from '@vimeo/player';
// const throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';
const iframeRef = document.querySelector('iframe');
const player = new Player(iframeRef);
const LOCALSTORAGE_CURRENT_TIME = 'videoplayer-current-time';

const getTimeLocalStorage = key => {
  const time = localStorage.getItem(key);
  return time === null ? 0 : time;
};

const currentTime = getTimeLocalStorage(LOCALSTORAGE_CURRENT_TIME);

player.setCurrentTime(currentTime);

const setTimeToLocalStorage = ({ seconds }) => {
  localStorage.setItem(LOCALSTORAGE_CURRENT_TIME, seconds);
};

player.on('timeupdate', throttle(setTimeToLocalStorage, 1000));
