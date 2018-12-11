function Alien(x){
    this.xpos = x;
    this.ypos = 60;
    this.r = 30
    this.speed = 20;

    this.move = function(){
        if(this.xpos >= width || this.xpos <= 0){
            this.speed = -this.speed;
            this.ypos = this.ypos + 30;
        }
        this.xpos = this.xpos + this.speed;
    }

    this.show = function(){
        noStroke();
        fill(0, 100, 255);
        ellipse(this.xpos, this.ypos, this.r, 16);
    }

    this.die = function(){
        this.r = this.r * 0;
    }

    this.explode = function(){
        noStroke();
        stroke(255);
        strokeWeight(5);
        line(this.xpos - 15, this.ypos - 15, this.xpos + 15, this.ypos + 15);
        line(this.xpos + 15, this.ypos - 15, this.xpos - 15, this.ypos + 15);
        strokeWeight(2);
        line(this.xpos, this.ypos - 10, this.xpos, this.ypos + 10);
        line(this.xpos - 10, this.ypos, this.xpos + 10, this.ypos);

    }
}