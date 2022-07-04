'use strict'


let color = {
    nR: 0,
    nG: 0,
    nB: 0,
    showColor: function () {
        console.log(`rgb(${this.nR},${this.nG},${this.nB})`);
    },
    setColor: function(r,b,g){

        if(r >= 0 && r <= 255){
            console.log("correct");
            this.nR = r;
            this.nG = g;
            this.nB = b;
        }else{
            console.log("script failed");
        }
    },
    changeBackground: function(a,b,c){
        document.body.style.backgroundColor = 'rgb(' + [a,b,c].join(',') + ')';

    },
}

let red = prompt(" Red value");
let green = prompt(" Green value");
let blue = prompt(" Blue value");

color.setColor(red, green, blue);
color.showColor();
color.changeBackground(red, green, blue);
// color.changeBackground(gr(), gr(), gr());

function gr(){
    return Math.floor(Math.random() * 256);
}

// color.setColor(12,34,56);
// color.showColor();
// color.setColor(255,56);
// color.showColor();
// color.setColor(255,0,100);
// color.showColor();

