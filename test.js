// 앨범이랑 제목이 바뀌어야 함
// 토글로 if else 최소화 하기
var startPauseButton = document.querySelector("#startPause");
var nextButton = document.querySelector("#next");
var previousButton = document.querySelector("#previous");

var startButton = "img/playButton.svg"
var pauseButton = "img/pauseButton.svg"
var songs = [
    "mp3/sample1.mp3",
    "mp3/sample2.mp3",
    "mp3/sample3.mp3"
]
var song = new Audio();
var max = songs.length;
var currentSong = 0;
var songCurrentTime = 0;

function playSong(index){
    song.src = songs[index];
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


// const audioFile1 = new Audio("mp3/sample1.mp3");
// const audioFile2 = new Audio("mp3/sample2.mp3");
// const audioFile3 = new Audio("mp3/sample3.mp3");

// var songList = [];
// var sample1 = {"title": "눈", "album": "aren't you", "file": audioFile1};
// var sample2 = {"title": "Cilla", "album": "Cilla", "file": audioFile2};
// var sample3 = {"title": "Dry Flower", "album": "Dry flower", "file": audioFile3};
// songList.push(sample1);
// songList.push(sample2);
// songList.push(sample3);

// var startPauseButton = document.querySelector("#startPause");
// var nextButton = document.querySelector("#next");

// var startButton = "img/playButton.svg"
// var pauseButton = "img/pauseButton.svg"

// const trackNumber = 0;

// function currentSong(){
//     return songList[trackNumber]["file"];
// }

// function songEndCheck(){
//     state = currentSong().ended;
//     if (state){
//         console.log("end");
//         clearInterval(interval);
//     } else{
//         console.log("not end");
//     }
// }

// function startPause(event){
//     var currentPath = startPauseButton.src.substr(startPauseButton.src.lastIndexOf('img'));
//     if(currentPath === startButton){
//         startPauseButton.src = pauseButton;
//         // 여기에 재귀를 
//         currentSong().play();
//         var interval = setInterval(songEndCheck, 1000);
//     } else {
//         startPauseButton.src = startButton;
//         currentSong().pause();
//     } 
// }

// function init(){
//     startPauseButton.addEventListener("click", startPause);
//     // nextButton.addEventListener("click", nextSong);
// }
// init();