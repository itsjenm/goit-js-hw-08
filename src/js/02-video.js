import Player from '@vimeo/player';
const iFrame = document.querySelector('#vimeo-player');
const player = new Player(iFrame);
const LOCALSTORAGE_KEY = "videoplayer-current-time";
const throttle = require("lodash.throttle");



// When video plays, retrieve video time in seconds
player.on('timeupdate', throttle((function(data) {
    // save playback time to local Storage as a string
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data.seconds))

}), 1000));




const savedSettings = localStorage.getItem(LOCALSTORAGE_KEY);
// Parse to read local storage value
const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings)

// Set currentTime to parsed local storage value 
// When browser is refreshed, the video will play where it was paused 
player.setCurrentTime(parsedSettings).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError' :

            break;
        default:
            break;
    }
});

