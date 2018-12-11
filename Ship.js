function Ship(){
    this.xpos = width/2;
    this.shipHeight = height - 30;
    this.shipWidth = 30;

    this.show = function(){
        fill(255);
        triangle(this.xpos - 15, height, this.xpos, this.shipHeight, this.xpos - 15  + this.shipWidth, height);
    }

    this.move = function(d){
        if(d === 'l'){
            if(this.xpos <= 0){
                this.xpos = 0;
            }else{
                this.xpos = this.xpos - 10;
            }
        }else if(d === 'r'){
            if(this.xpos + this.shipWidth >= width){
                this.xpos = width - this.shipWidth;
            }else{
                this.xpos = this.xpos + 10;
            }        
        }
    }
}