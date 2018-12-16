function Buster(){
    this.xpos = myShip.xpos;
    this.ypos = myShip.shipHeight;
    this.w = 8;
    this.speed = 30;

    this.show = function(){
        fill(210, 210, 60);
        noStroke();
        ellipse(this.xpos, this.ypos, this.w);
    }

    this.move = function(){
        this.ypos = this.ypos - this.speed;
    }

    this.hit = function(alien){
        let d = dist(this.xpos, this.ypos, alien.xpos, alien.ypos);

        if(d < (this.w/2) + (alien.w/2)){
            this.w = 0;
            return true;
        }else{
            return false;
        }
    }
}