//https://www.python2.net/questions-341703.htm 여기 사이트를 참고할 것
//전체적 수정 필요

const audioFile1 = new Audio("mp3/sample1.mp3");
const audioFile2 = new Audio("mp3/sample2.mp3");
const audioFile3 = new Audio("mp3/sample3.mp3");

var songList = [];
var sample1 = {"title": "눈", "album": "aren't you", "file": audioFile1};
var sample2 = {"title": "Cilla", "album": "Cilla", "file": audioFile2};
var sample3 = {"title": "Dry Flower", "album": "Dry flower", "file": audioFile3};
songList.push(sample1);
songList.push(sample2);
songList.push(sample3);

var startPauseButton = document.querySelector("#startPause");
var nextButton = document.querySelector("#next");

var startButton = "img/playButton.svg"
var pauseButton = "img/pauseButton.svg"

const trackNumber = 0;

function currentSong(){
    return songList[trackNumber]["file"];
}

function songEndCheck(){
    state = currentSong().ended;
    if (state){
        console.log("end");
        clearInterval(interval);
    } else{
        console.log("not end");
    }
}

function startPause(event){
    var currentPath = startPauseButton.src.substr(startPauseButton.src.lastIndexOf('img'));
    if(currentPath === startButton){
        startPauseButton.src = pauseButton;
        // 여기에 재귀를 
        currentSong().play();
        var interval = setInterval(songEndCheck, 1000);
    } else {
        startPauseButton.src = startButton;
        currentSong().pause();
    } 
}

function init(){
    startPauseButton.addEventListener("click", startPause);
    // nextButton.addEventListener("click", nextSong);
}
init();