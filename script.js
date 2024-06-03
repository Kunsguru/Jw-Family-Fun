document.getElementById('startMusicButton').addEventListener('click', startMusic);

const songs = [
    
    '/AUD-20231109-WA0072.mp3',
    '/AUD-20231109-WA0069.mp3',
    '/AUD-20231109-WA0070.mp3', 
    '/AUD-20231109-WA0068.mp3',
    '/AUD-20231109-WA0067.mp3',
    '/AUD-20231109-WA0075.mp3',
    '/AUD-20240109-WA0135.opus',
    '/AUD-20231109-WA0071.mp3',
    '/osg_E_007.mp3',
    '/AUD-20240115-WA0180.aac'

// Add paths to your songs here
];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function startMusic() {
    const audioPlayer = document.getElementById('audioPlayer');
    const randomSong = songs[getRandomInt(0, songs.length)];
    const randomStopTime = getRandomInt(195000, 265000, 395000); // Stop between  and  seconds

    audioPlayer.src = randomSong;
    audioPlayer.play();

    setTimeout(() => {
        audioPlayer.pause();
        alert('Music Stopped!');
    }, randomStopTime);
}
