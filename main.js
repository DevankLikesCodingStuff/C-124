noseX=0;
noseY=0;
difference=0;
rightWristX = 0;
leftWristX = 0;

function setup(){ 
video = createCapture(VIDEO); //Create capture will turn on the webcam view
video.size(550,550);

canvas = createCanvas(555, 555);
canvas.position(580,250); //Canvas.position will give margin left and margin top    

poseNet = ml5.poseNet(video, modelLoaded); //The poseNet model is initialized
poseNet.on('pose', gotPoses);//The poseNet model will turn on
}

function modelLoaded(){
    console.log('PoseNet has **Started**!')
}

function draw()
{
    r=random(255);
    g=random(255);
    b=random(255);
    background('#6c33f0');
    document.getElementById("square_size").innerHTML = "Width and Height of the Square is = " +difference+" px";
    fill(r,g,b);
    stroke(r,g,b);
    square(noseX, noseY, difference);
}
function gotPoses(results)
{
    if(results.length > 0)//If a person is in front of the webcam then only results.length would be greater than 0
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = "+ noseX + " noseY = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + " difference = " + difference);
    }
}