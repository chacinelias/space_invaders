function Alien(x){
    this.xpos = x;
    this.ypos = 60;
    this.w = floor(random(10, 30) * 2);
    this.color1 = floor(random(100, 255));
    this.color2 = floor(random(100, 255));
    this.color3 = floor(random(100, 255));

    this.speed = 14;

    this.move = function(){
        if(this.xpos >= width || this.xpos <= 0){
            this.speed = -this.speed;
            this.ypos = this.ypos + 30;
        }
        this.xpos = this.xpos + this.speed;
    }

    this.show = function(){
        noStroke();
        fill(this.color1, this.color2, this.color3);
        ellipse(this.xpos, this.ypos, this.w, 16);
    }

    this.invade = function(){
        let d = dist(this.xpos, this.ypos, myShip.xpos, myShip.shipHeight + 15);

        if(d < (this.w/2) + (myShip.shipWidth/2)){
            return true;
        }else{
            return false;
        }
    }

    this.die = function(){
        this.w = 0;
    }

    this.explode = function(){
        stroke(255);
        strokeWeight(5);
        line(this.xpos - 15, this.ypos - 15, this.xpos + 15, this.ypos + 15);
        line(this.xpos + 15, this.ypos - 15, this.xpos - 15, this.ypos + 15);
        strokeWeight(2);
        line(this.xpos, this.ypos - 10, this.xpos, this.ypos + 10);
        line(this.xpos - 10, this.ypos, this.xpos + 10, this.ypos);
        this.xpos = -50;
    }
}