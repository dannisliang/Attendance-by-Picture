var vid = document.getElementById("videoElement");
var can = document.getElementById("canvas");
var ctx = can.getContext("2d");

var CANVAS_WIDTH = can.width;
var CANVAS_HEIGHT = can.height;

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.oGetUserMedia;

if (navigator.getUserMedia) {
    navigator.getUserMedia({video:true}, handleVideo, videoError);
}

function handleVideo(stream) {
    vid.src = window.URL.createObjectURL(stream);
}

function videoError(e) {
    console.error("No user media detected.");
}

function capture() {
    ctx.drawImage(vid, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}