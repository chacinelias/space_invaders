function Alien(x){
    this.xpos = x;
    this.ypos = 100;
    this.speed = 2;

    this.move = function(){
        if(this.xpos >= width || this.xpos <= 0){
            this.speed = -this.speed;
        }
        this.xpos = this.xpos + this.speed;
    }

    this.show = function(){
        noStroke();
        fill(0, 100, 255);
        ellipse(this.xpos, this.ypos, 30, 16);
    }

    this.die = function(){
    }
}