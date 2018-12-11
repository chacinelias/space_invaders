function Ship(){
    this.xpos = width/2;
    this.shipWidth = 15;
    this.shipHeight = 30;


    this.show = function(){
        fill(255);
        rect(this.xpos, height - this.shipHeight - 3, this.shipWidth, this.shipHeight);
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