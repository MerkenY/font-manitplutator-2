function setup(){

canvas = createCanvas(500,500);
canvas.center();
canvas.size(500,500);

video = createCapture(VIDEO);
video.size(500,500);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', GotPoses);
}

function modelLoaded(){

console.log("poseNet is loaded")

}

function GotPoses(results){

if(results.length > 0)
{

}


}

