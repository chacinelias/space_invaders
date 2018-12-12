var myShip;
var clip = [];
var horde = [];
var horde_size = 12;


function setup(){
    createCanvas(1200, 600);
    myShip = new Ship();

    for(let i=0; i<horde_size; i++){
        let alien = new Alien((i * 100) + 100);
        horde.push(alien);
    }
}

function draw(){

    background(51);
    fill(255);
    myShip.show();
    for(let i=0; i<horde.length; i++){
        horde[i].show();
        horde[i].move();
    }

    for(let i=0; i<clip.length; i++){
        clip[i].show();
        clip[i].move();
        for(let j=0; j<horde.length; j++){
            if(clip[i].hit(horde[j])){
                horde[j].die();
                horde[j].explode();
                horde.pop();
                console.log(horde);
            }
        }
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
        let buster = new Buster();
        clip.push(buster);
    }
}
