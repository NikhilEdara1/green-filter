NoseX="";
NoseY="";

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poser=ml5.poseNet(video,modelloaded);
    poser.on('pose',gotposes);
}

function modelloaded(){
    console.log("modelloaded");
}

function gotposes(result){
if(result.length>0){console.log(result)
NoseX=result[0].pose.nose.x;
NoseY=result[0].pose.nose.y;
}
}

 function draw(){
     image(video,0,0,300,300);
    fill("green");
    stroke("green");
    circle(NoseX,NoseY,20);
}

function snap(){
    save("download.png");
}