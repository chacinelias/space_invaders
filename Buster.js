function Buster(){
    this.xpos = myShip.xpos - 8;
    this.ypos = myShip.shipHeight;
    this.r = 8;
    this.speed = 30;

    this.show = function(){
        fill(210, 210, 60);
        noStroke();
        ellipse(this.xpos, this.ypos, this.r * 2);
    }

    this.move = function(){
        this.ypos = this.ypos - this.speed;
    }

    this.hit = function(alien){
        let d = dist(this.xpos, this.ypos, alien.xpos, alien.ypos);

        if(d < this.r + alien.r){
            return true;
        }else{
            return false;
        }
    }
}