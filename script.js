var songs = [
    {
        songName: "queen of broken hearts", url: "./assets/QueenOfBrokenHearts.mp3", cover: "./assets/blackbear.jpg", artist: "blackbear", length: '2:51'
    },
    {
        songName: "2WORLDS",
        url: "./assets/2WORLDS.mp3",
        cover: "./assets/2WORLDS.jpg",
        artist: "Madge, VALORANT",
        length: '2:29'
    },
    {
        songName: "Feels Like Summer",
        url: "./assets/Feels Like Summer.mp3",
        cover: "./assets/PublicOrder.jpg",
        artist: "Public Order",
        length: '2:45'
    },
    {
        songName: "Genghis Khan",
        url: "./assets/GenghisKhan.mp3",
        cover: "./assets/MiikeSnow.jpg",
        artist: "Miike Snow",
        length: '3:32'
    },
    {
        songName: "Watermelon Sugar",
        url: "./assets/Watermelon Sugar.mp3",
        cover: "./assets/HarryStyles.jpg",
        artist: "Harry Styles",
        length: '2:54'
    },
    {
        songName: "Photograph",
        url: "./assets/Photograph.mp3",
        cover: "./assets/EdSheeran.jpg",
        artist: "Ed Sheeran",
        length: '4:33'
    },
    {
        songName: "Until I Found You",
        url: "./assets/UntilIFoundYou.mp3",
        cover: "./assets/StephenSanchez.jpeg",
        artist: "Stephen Sanchez",
        length: '2:57'
    },
    {
        songName: "Fool For You",
        url: "./assets/FoolForYou.mp3",
        cover: "./assets/KamPrada.jpeg",
        artist: "Kam Prada",
        length: '2:45'
    },
    
]

let timer;
timer = setInterval(range_slider ,1000);

var number_of_songs = songs.length
var audio = new Audio();

// let selectedAlbum = 0;
let selectedSong = 0;

// var albumList = document.querySelector('.albums');

var songList = document.querySelector(".songs-list");
var cover = document.querySelector(".song-display-image");
var displayInfo = document.querySelector(".song-display-info");

var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");

let volume_slider = document.querySelector('#volume-slider');
let volume_show = document.querySelector('#volume_level');

var songDisplaySmall = document.querySelector(".song-display-small");

var currentTimeDisplayArea = document.querySelector('.song-current-time');
var songLengthDisplay = document.querySelector('.song-length-display');
var slider = document.querySelector('#duration_slider');

var shuffleButton = document.querySelector('.ri-shuffle-line');
var loopButton = document.querySelector('.ri-loop-left-line');

var autoPlay = true;
var loop = false;
var shuffle = false;

shuffleButton.addEventListener('click', function(){
    if (shuffle == false) {
        shuffle = true;
        shuffleButton.style.color = "rgb(78, 163, 241)";
    }
    else {
        shuffle = false;
        shuffleButton.style.color = "white";
    }
})

loopButton.addEventListener('click', function(){
    if (loop == false) {
        loop = true;
        loopButton.style.color = "rgb(78, 163, 241)";
    }
    else {
        loop = false;
        loopButton.style.color = "white";
    }
})

function mainFunction(){
    // var songList = document.querySelector(".songs-list");
    var clutter = "";

    songs.forEach(function(elem, index){
        clutter += `
        <div class="song-card" id="${index}">
        <div class="song-image">
            <img src="${elem.cover}" alt="" srcset="">
        </div>
        <div class="song-box">
            <div class="song-info">
                <div class="song-name">
                    <h4>${elem.songName}</h4>
                </div>
                <div class="song-artist">
                    <h5>${elem.artist}</h5>
                </div>
            </div>
            <div class="song-length">
                <h5>${elem.length}</h5>
            </div>
        </div>
    </div>`
    })

    songList.innerHTML = clutter;
    audio.src = songs[selectedSong].url;
    cover.style.backgroundImage = `url(${songs[selectedSong].cover})`;
    displayInfo.innerHTML = `
        <h2>${songs[selectedSong].songName}</h2>
        <h3 id="artist">${songs[selectedSong].artist}</h3>`;
    
    songDisplaySmall.innerHTML = `
    <div class="song-cover-small">
    <img src="${songs[selectedSong].cover}" alt="" srcset="">
    </div>
    <div class="song-info-small">
        <h4 id="song-name-small">${songs[selectedSong].songName}</h4>
        <h4 id="artist-small">${songs[selectedSong].artist}</h4>
    </div>`;

    songLengthDisplay.innerHTML = `${songs[selectedSong].length}`

    // if (autoPlay == true) {
    //     if (audio.currentTime == audio.duration) {
    //         goForward();
    //     }
    // }
}


mainFunction();
// var playing = 0;

// albumList.addEventListener('click', function(dets){
//     selectedAlbum = dets.target.id;
//     console.log(selectedAlbum);
// })

songList.addEventListener('click', function(dets){
    selectedSong = dets.target.id;
    mainFunction();
    // console.log(selectedSong);
    audio.play();
    play.innerHTML = `<i class="ri-pause-large-fill"></i>`
    // playing = 1;
})


play.addEventListener('click', function(){
    if (audio.paused) {
        play.innerHTML = `<i class="ri-pause-large-fill"></i>`;
        // mainFunction();
        audio.play();
        // playing = 1;
    }
    else {
        play.innerHTML = `<i class="ri-play-large-fill"></i>`;
        // mainFunction();
        audio.pause();
        // playing = 0;
    }
})

backward.addEventListener('click', function(){
    goBackward();
})

forward.addEventListener('click', function(){
    goForward();
})
function goBackward() {
    if (selectedSong == 0) {selectedSong = number_of_songs - 1}
    else (selectedSong --)
    console.log(selectedSong);
    mainFunction();
    audio.play();
    play.innerHTML = `<i class="ri-pause-large-fill"></i>`;
}

function goForward() {
    if (selectedSong == number_of_songs - 1) {selectedSong = 0}
    else {selectedSong ++}
    console.log(selectedSong);
    mainFunction();
    audio.play()
    play.innerHTML = `<i class="ri-pause-large-fill"></i>`;
    // console.log(selectedSong);
}

function volume_change(){
	volume_level.innerHTML = volume_slider.value;
	audio.volume = volume_slider.value / 100;
    if (audio.volume == 0){
        document.querySelector('#volume-button-display').innerHTML = '<i class="ri-volume-mute-fill"></i>'
    }
    else {document.querySelector('#volume-button-display').innerHTML = '<i class="ri-volume-up-fill"></i>'}
    //volume value exists in the range 0-1 -> 50% = 0.5
}

let curTime;
audio.addEventListener("timeupdate", updateCurrentTime);

updateCurrentTime();

function updateCurrentTime() {
    curTime = audio.currentTime;
    const minutes = Math.floor(curTime / 60);
    const remainingSeconds = Math.floor(curTime % 60);
    currentTimeDisplayArea.innerHTML = `${minutes.toString().padStart(1, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function change_duration(){
	slider_position = audio.duration * (slider.value / 100);
	audio.currentTime = slider_position;
}

function range_slider() {
    let posi = 0;
    if(!isNaN(audio.duration)){
        posi = audio.currentTime * (100 / audio.duration);
        slider.value = posi;
    }

    if (loop == true) {
        if (audio.ended) {
            slider.value = 0;
            audio.play();
        }
    }

    if (shuffle == true) {
        if (audio.ended) {
            selectedSong = getRandomNumber(0,number_of_songs);
            mainFunction();
            audio.play()   
        }
    }

    if (autoPlay == true){
        if (audio.ended) {
            goForward();
        }
    }
    
}

function getRandomNumber(min, max) {
    const randomDecimal = Math.random();
    const randomNumber = min + (randomDecimal * (max - min + 1));
    return Math.floor(randomNumber);
}

// known bugs/problems:

// 1. song starting from start after pausing and playing
// solution: calling the mainFunction() before playing and pausing led to audio.src being reassigned again, and thus changing the audio.currentTime to 0

// 2. implementing audio slider (seek)
// soultion: plaigarism. two functions are used:
// change_duration() changes the currentTimeDisplay when the slider is moved.
// range_slider() updates the slider thumb according to the currentTime of the audio.
// the time variable makes the thumb update its position once every 1000 ms. 
// timer = setInterval(range_slider ,1000);

// 3. info not updating in the mini display in the player
// soultion: make the innerHTML update in the mainFunction(), as to update it as soon as the function is called. The mainFunction() is called everytime the song is changed, thus changing the mini display as well.

// features to implement in the future:
// - shuffle, loop [done]
// - auto play [done]
// - selectable albums (albums are pre-loaded)