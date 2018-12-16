//setup variables
var myShip;
var clip = [];
var horde = [];
var horde_size = 12;
var starsx = [];
var starsy = [];
var starStroke = [];

//game variables
var kills;
var stage;
var score;
var delay_counter;
var delay = 20;
var stage_clear_flag;
var fail_flag;
var fail_sound_flag;
var stage_clear_sound_flag;

//sound variables
var fire;
var hit;
var win;
var lose_life;


function preload(){
    fire = loadSound('./sounds/laser_weapon_fire.mp3');
    hit = loadSound('./sounds/Hit.mp3');
    win = loadSound('./sounds/Jingle_Win.mp3');
    lose_life = loadSound('./sounds/lose_life.mp3');
}

function setup(){
    createCanvas(1200, 600);
    myShip = new Ship();
    kills = 0;
    stage = 1;
    delay_counter = 0;
    fail_flag = false;
    stage_clear_flag = false;
    stage_clear_sound_flag = false;
    fail_sound_flag = false;

    for(let i=0; i<horde_size; i++){
        let alien = new Alien((i * 100) + 100);
        horde.push(alien);
    }

    for(let i=0; i<250; i++){
        starsx[i] = random(1200);
        starsy[i] = random(600);
        starStroke[i] = random(3);
    }
}

function draw(){
    background(0);
    myShip.show();
    delay_counter++;

    textSize(32);
    textAlign(LEFT, TOP);
    text('KILLS: ' + kills, 0, 0);

    textSize(24);
    textAlign(RIGHT, TOP);
    text('STAGE ' + stage, width, 0);


    //display stars
    for(let i=0; i<starsx.length; i++){
        strokeWeight(starStroke[i]);
        stroke(255);
        point(starsx[i], starsy[i]);
    }

    //check if stage cleared
    if(kills >= horde.length || stage_clear_flag){
        stage_clear_flag = true;
        display_alert('c');
    }

    //display alien horde and check for invation
    for(let i=0; i<horde.length; i++){
        horde[i].show();

        if(!fail_flag){
            horde[i].move();
        }
        
        if(horde[i].invade() || fail_flag){
            myShip.explode();
            myShip.die();
            fail_flag = true;
            display_alert('f');
        }
    }

    //display busters and check for hits
    for(let i=0; i<clip.length; i++){
        clip[i].show();
        clip[i].move();
        for(let j=0; j<horde.length; j++){
            if(clip[i].hit(horde[j])){
                horde[j].die();
                horde[j].explode();
                kills++;
                hit.play();
                delay_counter = delay;
            }
        }
    }

    //ship movement events
    if(keyIsDown(LEFT_ARROW)){
        myShip.move('l');
    }

    if(keyIsDown(RIGHT_ARROW)){
        myShip.move('r');
    }
}

//trigger
function keyPressed(){
    
    if(keyCode === UP_ARROW){
        if(delay_counter >= delay){
            let buster = new Buster();
            clip.push(buster);
            fire.play();
            delay_counter = 0;
        }
    }
}

function display_alert(alert){
    textSize(32);
    textAlign(CENTER);

    if(alert === 'c'){
        text('Stage ' + stage + ' Clear!', width/2, height/2);
        if(!stage_clear_sound_flag){
            win.play();
            stage_clear_sound_flag = true;
        }
    }else if(alert === 'f'){
        text('YOU LOSE!', width/2, height/2);
        if(!fail_sound_flag){
            lose_life.play();
            fail_sound_flag = true;
        }
    }
}