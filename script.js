document.getElementById('startGameButton').addEventListener('click', startGame);

const songs = [
    
'/storage/emulated/0/Music/Whatsapp/AUD-20231109-WA0072.mp3',
    '/storage/emulated/0/Music/Whatsapp/AUD-20231109-WA0069.mp3',
    '/storage/emulated/0/Music/Whatsapp/AUD-20231109-WA0070.mp3', 

'/storage/emulated/0/Music/Whatsapp/AUD-20231109-WA0068.mp3',
    '/storage/emulated/0/Music/Whatsapp/AUD-20231109-WA0067.mp3',
    '/storage/emulated/0/Music/Whatsapp/AUD-20231109-WA0075.mp3',
    '/storage/emulated/0/Music/WhatsApp/AUD-20240109-WA0135.opus',
    '/storage/emulated/0/Music/WhatsApp/AUD-20240115-WA0180.aac'

// Add paths to your songs here
];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function startGame() {
    const audioPlayer = document.getElementById('audioPlayer');
    const randomSong = songs[getRandomInt(0, songs.length)];
    const randomStopTime = getRandomInt(45000, 65000, 95000); // Stop between 5 and 15 seconds

    audioPlayer.src = randomSong;
    audioPlayer.play();

    setTimeout(() => {
        audioPlayer.pause();
        alert('Music Stopped!');
    }, randomStopTime);
}
