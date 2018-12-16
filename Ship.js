function Ship(){
    this.xpos = width/2;
    this.shipHeight = height - 30;
    this.shipWidth = 30;
    this.speed = 18;

    this.show = function(){
        fill(0, 80, 255);
        triangle(this.xpos - 15, height, this.xpos, this.shipHeight, this.xpos - 15  + this.shipWidth, height);
    }

    this.move = function(d){
        if(d === 'l'){
            if(this.xpos <= 15){
                this.xpos = 15;
            }else{
                this.xpos = this.xpos - this.speed;
            }
        }else if(d === 'r'){
            if(this.xpos + 15 >= width){
                this.xpos = width - this.shipWidth + 15;
            }else{
                this.xpos = this.xpos + this.speed;
            }        
        }
    }

    this.die = function(){
        this.shipHeight = 0;
    }

    this.explode = function(){
        stroke(255, 200, 0);
        strokeWeight(5);
        line(this.xpos - 30, this.shipHeight - 30, this.xpos + 30, this.shipHeight + 30);
        line(this.xpos + 30, this.shipHeight - 30, this.xpos - 30, this.shipHeight + 30);
        strokeWeight(2);
        line(this.xpos, this.shipHeight - 20, this.xpos, this.shipHeight + 20);
        line(this.xpos - 20, this.shipHeight, this.xpos + 20, this.shipHeight);
        this.xpos = -50;
    }
}