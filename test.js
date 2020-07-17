// test코드를 다시 원본으로 복귀
// 샘플말고 진짜 사용
// 좀 더 수정할 것이 있는지 확인
var startPauseButton = document.querySelector("#startPause");
var nextButton = document.querySelector("#next");
var previousButton = document.querySelector("#previous");
var songAlbumCover = document.querySelector("#songImg img");
var songTitle = document.querySelector("#songTitle");

var startButton = "img/playButton.svg"
var pauseButton = "img/pauseButton.svg"
var songs = [
    {"title": "눈", "albumSrc": "img/Aren'tYouAlbumCover.jpg", "audioSrc": "mp3/sample1.mp3"},
    {"title": "Cilla", "albumSrc": "img/CillaAlbumCover.jpg", "audioSrc": "mp3/sample2.mp3"},
    {"title": "Dry Flower", "albumSrc": "img/IKnowAlbumCover.jpg", "audioSrc": "mp3/sample3.mp3"}
]
var song = new Audio();
var max = songs.length;
var currentSong = 0;
var songCurrentTime = 0;

function playSong(index){
    song.src = songs[index]["audioSrc"];
    songTitle.innerHTML = songs[index]["title"];
    songAlbumCover.src = songs[index]["albumSrc"];
    console.log(songAlbumCover);
    song.currentTime = songCurrentTime;
    song.play();
}

function pauseSong(index){
    songCurrentTime = song.currentTime;
    song.pause();
}

function playerState(){
    var currentPath = startPauseButton.src.substr(startPauseButton.src.lastIndexOf('img'));
    if(currentPath === startButton){
        return true; //스탑된 상태
    } else {
        return false; //플레이 중
    } 
}

function playBeforeSong(event){
    state = playerState();
    if (state){ //스탑된 상태이면 
        songCurrentTime = song.currentTime;
        if (songCurrentTime < 1.5){ //곡의 길이가 1.5도 안되면
            currentSong--;
            songCurrentTime = 0;
            if (currentSong == -1){ //인덱스가 0을 벗어나면  
                currentSong = max-1;
            }
        } else{ //1.5초가 넘어간 상태면 
            songCurrentTime = 0;
        }
    } else{ //플레이 중이면
        songCurrentTime = song.currentTime;
        if (songCurrentTime < 1.5){ //곡의 길이가 1.5도 안되면
            currentSong--;
            songCurrentTime = 0;
            if (currentSong == -1){ //인덱스가 0을 벗어나면
                currentSong = max-1;
                playSong(currentSong);
            } else{ 
                playSong(currentSong);
            }
        } else{ //1.5초가 넘어간 상태면 
            songCurrentTime = 0;
            playSong(currentSong);
        }
    } 
}

function playNextSong(event){
    state = playerState();
    if (state){ 
        currentSong++;
        songCurrentTime = 0;
        if (currentSong == max){
            currentSong = 0;
        }
    } else{
        currentSong++;
        songCurrentTime = 0;
        if (currentSong == max){
            currentSong = 0;
            playSong(currentSong);
        }
        else{
            playSong(currentSong);
        }
    }
}

function startPause(event){
    state = playerState();
    if(state){
        startPauseButton.src = pauseButton;
        playSong(currentSong);
    } else {
        startPauseButton.src = startButton;
        pauseSong(currentSong);
    } 
}

function init(){
    startPauseButton.addEventListener("click", startPause);
    nextButton.addEventListener("click", playNextSong);
    song.addEventListener("ended", playNextSong);
    previousButton.addEventListener("click", playBeforeSong);
}

init();