const player = document.querySelector('.player');
const playBtn = document.querySelector('.play');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const audio = document.querySelector('audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress__container');
const cover = document.querySelector('.cover');
const title = document.querySelector('.title');
const imgSrc = document.querySelector('.img__src');
const wrapper = document.querySelector('.wrapper');
const song = document.querySelector('.song');
const author = document.querySelector('.author');
const all__duration = document.querySelector('.all__duration');
const current__time = document.querySelector('.current__time');
all__duration.innerHTML = "0";

//song names
let authors = ["Meadow", "Forest"];
let songs = ["Skylark", "Nightingale"];



//default song
songIndex = 0;

function loadSong(song) {
    title.innerHTML = authors[songIndex];
    author.innerHTML = song;

    console.log("Song " + song + " author " + authors[songIndex]);
    let curInd = songIndex + 1;

    audio.src = 'audio/song' + curInd + '.mp3';
    cover.src = "images/image" + curInd + ".png";
    let bkgrndurl = `images/image${curInd}.png`;
    // player.style.backgroundImage = "url(`img/image${curInd}.png`)";
    console.log(`url(${bkgrndurl})`);
    player.style.backgroundImage = `url(${bkgrndurl})`;
    wrapper.style.backgroundImage = `url(${bkgrndurl})`;
}

loadSong(songs[songIndex]);

//play
function playSong() {
    player.classList.add('play');
    imgSrc.src = "icons/pause.png";
    author.classList.add('active-song');

    audio.play();
}

function pauseSong() {
    player.classList.remove('play');
    imgSrc.src = "icons/play.png";
    author.classList.remove('active-song');
    audio.pause();
}

playBtn.addEventListener('click', () => {
    const isPlaying = player.classList.contains('play');
    console.log(player.classList);

    if (isPlaying) {
        pauseSong();
    }
    else {
        playSong();
    }
});


function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);
    playSong();
}

nextBtn.addEventListener('click', nextSong);
// playSong()

function prevSong() {
    songIndex--;
    console.log("SongsIndex " + songIndex);
    if (songIndex < 0) {
        console.log("song index <0> ");
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);
    playSong();
}

prevBtn.addEventListener('click', prevSong);

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    all__duration.innerHTML = `${(duration / 60).toFixed(0)}:${(duration % 60).toFixed(0)}`;
    current__time.innerHTML = `${(currentTime / 60).toFixed(0)}:${(currentTime % 60).toFixed(0)}`;


    progress.style.width = `${progressPercent}% `;;
    // `${ progressPercent }% `;

}
audio.addEventListener('timeupdate', updateProgress);

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

progressContainer.addEventListener('click', setProgress);

//autoplay

audio.addEventListener('ended', nextSong);