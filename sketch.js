var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,580,190,20);
    surface1.shapeColor = "blue";
    surface2 = createSprite(300,580,190,20);
    surface2.shapeColor = "orange";
    surface3 = createSprite(500,580,190,20);
    surface3.shapeColor = "purple";
    surface4 = createSprite(700,580,190,20);
    surface4.shapeColor = "green";

    //create box sprite and give velocity
    box = createSprite(200,20,20,20);
    box.x = Math.round(random(20,750));
    box.shapeColor = "white";

    box.velocityX = 2;
    box.velocityY = 5;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(box.isTouching(surface1) && box.bounceOff(surface1)){
        // changing color
        box.shapeColor = "blue"; 
        music.play();
    }
    if(box.isTouching(surface2) && box.bounceOff(surface2)){
        // changing color
        box.shapeColor = "orange"; 
        music.play();
    }
    if(box.isTouching(surface3) && box.bounceOff(surface3)){
        // changing color
        box.shapeColor = "purple"; 
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }
    if(box.isTouching(surface4) && box.bounceOff(surface4)){
        // changing color
        box.shapeColor = "green"; 
        music.play();
    }


    drawSprites();
}
