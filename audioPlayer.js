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

function nextSong(event){
   
}

class currentSong{
    
}

function startPause(event){
    var currentPath = startPauseButton.src.substr(startPauseButton.src.lastIndexOf('img'));
    if(currentPath === startButton){
        startPauseButton.src = pauseButton;
        audioFile1.play();
    } else {
        startPauseButton.src = startButton;
        audioFile1.pause();
    } 
}

function init(){
    startPauseButton.addEventListener("click", startPause);
    nextButton.addEventListener("click", nextSong);
    while (true){
        
    }
}
init();
