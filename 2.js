img = "";
status = "";
objects=[];
function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status - Detecting the objects!";

}
function modelLoaded()
{
    console.log("Model is Loaded!");
    status = true;
    objectDetector.detect(img,gotResults);
}
function gotResults(error,results)
{
    if(error)
    {
        console.log(error);
    }
   
    console.log(results);
   objects = results;
}
function preload()
{
    img = loadImage("dog_cat.jpg");
}
//!= means not equal to
function draw()
{
    image(img,0,0,640,420);

    if(status!="")
{
    for(i=0; i<objects.length; i++)
    {
        document.getElementById("status").innerHTML="Status : Objects Detected!";

        fill("orangered");
        percent = floor(objects[i].confidence*100);
        text(objects[i].label + " : " + percent + "%", objects[i].x, objects[i].y);
        noFill();
        stroke("orangered");
        rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
    }
}
    
}
function back()
{
    window.open("index.html");
}