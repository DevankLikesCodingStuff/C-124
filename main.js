function setup(){ 
video = createCapture(VIDEO); //Create capture will turn on the webcam view
video.size(550,550);

canvas = createCanvas(555, 555);
canvas.position(580,250);

poseNet = ml5.poseNet(video, modelLoaded); //The poseNet model is initialized
poseNet.on('pose', gotPoses);//The poseNet model will turn on
}

function modelLoaded(){
    console.log('PoseNet has **Started**!')
}

function draw()
{
    background('#6c33f0');
}
function gotPoses(results)
{
    if(results.length > 0)//If a person is in front of the webcam then only results.length would be greater than 0
    {
        console.log(results);
    }
}