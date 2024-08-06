console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('C:\\Users\\janha\\OneDrive\\Desktop\\Project\\songs\\1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Evocative", filePath: "C:\\Users\\janha\\OneDrive\\Desktop\\Project\\songs\\1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Mysterious", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Mirage", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Zenith", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Solstice", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Enigma", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Midnight's Embrace", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Scarls Serenade", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Velvet Darkness", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana ", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
];

songItems.forEach((element, i) => { 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
});

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

// Listen to Events
audioElement.addEventListener('timeupdate', () => { 
    // Update Seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100); 
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => { 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
    });
});
