var audioFile1 = new Audio("mp3/눈.mp3");
var audioFile2 = new Audio("mp3/Cilla.mp3");
var audioFile3 = new Audio("mp3/Dry Flower.mp3");
var audioFile4 = new Audio("mp3/Ferris Wheel.mp3");
var audioFile5 = new Audio("mp3/The Lights Behind You.mp3");
var startPauseButton = document.querySelector("#startPause");
var startButton = "img/playButton.svg"
var pauseButton = "img/pauseButton.svg"

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
}
init();
