function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

song = ["music 1.mp3", "music 2.mp3"];  

function preload() {
    song = loadSound("music.mp3");
}

function play() {
    song.play();
}