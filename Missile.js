function Missile(){
    this.xpos = myShip.xpos + (myShip.shipWidth/2) - 4;
    this.ypos = height - myShip.shipHeight - 15;
    this.mWidth = myShip.shipWidth/2;
    this.mHeight = myShip.shipHeight/2;


    this.show = function(){
        fill(210, 210, 60);
        noStroke();
        rect(this.xpos, this.ypos, this.mWidth, this.mHeight, 20);
    }

    this.move = function(){
        this.ypos = this.ypos - 15;
    }
}