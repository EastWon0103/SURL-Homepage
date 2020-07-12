// 1. 샘플음악 필요 (10초 내지의 음악)
// 2. 자동으로 다음곡으로 넘어가는 것 구현(setInterval로 구현할 것)
// 2.1 자동으로 다음곡 play상태일때만 적용되는 것을 확인할 것





var audioFile1 = new Audio("mp3/눈.mp3");
var audioFile2 = new Audio("mp3/Cilla.mp3");
var audioFile3 = new Audio("mp3/Dry Flower.mp3");
var audioFile4 = new Audio("mp3/Ferris Wheel.mp3");
var audioFile5 = new Audio("mp3/The Lights Behind You.mp3");
var startPauseButton = document.querySelector("#startPause");
var startButton = "img/playButton.svg"
var pauseButton = "img/pauseButton.svg"

var songList = [];
var snowAudio = {"title": "눈", "album": "aren't you", "file": audioFile1};
var cillaAudio = {"title": "Cilla", "album": "Cilla", "file": audioFile2};
var dryFlowerAudio = {"title": "Dry Flower", "album": "Dry flower", "file": audioFile3};
var ferrisWheelAudio = {"title": "Ferris Wheel", "album": "Ferris Wheel", "file": audioFile4};
var theLightsBehindYouAudio = {"title": "The Lights Behind You", "album": "aren't you", "file": audioFile5};
songList.push(snowAudio);
songList.push(cillaAudio);
songList.push(dryFlowerAudio);
songList.push(ferrisWheelAudio);
songList.push(theLightsBehindYouAudio);

var nextButton = document.querySelector("#next");

var trackNumber = 0;

function currentSong(){
    return songList[trackNumber]["file"];
}

function autoNextSong(){
    setInterval
}

function startPause(event){
    var currentPath = startPauseButton.src.substr(startPauseButton.src.lastIndexOf('img'));
    if(currentPath === startButton){
        startPauseButton.src = pauseButton;
        currentSong().play();
    } else {
        startPauseButton.src = startButton;
        currentSong().pause();
    } 
}

function init(){
    startPauseButton.addEventListener("click", startPause);
    nextButton.addEventListener("click", nextSong);
    while (true){
        
    }
}
init();