var myShip;
var clip = [];
var horde = [];
var horde_size = 5;

function setup(){
    createCanvas(600, 600);
    myShip = new Ship();

    for(let i=0; i<horde_size; i++){
        let alien = new Alien((i * 100) + 100);
        horde.push(alien);
    }
}

function draw(){
    background(51);
    myShip.show();
    
    for(let i=0; i<horde_size; i++){
        horde[i].show();
        horde[i].move();
    }

    for(let i=0; i<clip.length; i++){
        clip[i].show();
        clip[i].move();
    }

    if(keyIsDown(LEFT_ARROW)){
        myShip.move('l');
    }

    if(keyIsDown(RIGHT_ARROW)){
        myShip.move('r');
    }
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        let missile = new Missile();
        clip.push(missile);
    }
    console.log(clip);
}
