'use strict'

// alert("Hello World!");

let lijst = ["belgie", "england", "USA", "france", "Madagascar"];

function geefLangste(x){
    let langstenr = 0;
    let langste = x[0];
    for(let i = 0; i< x.length;i++){
        if(x[i].length > langstenr)
        langste = x[i];    
    }

    return langste;
}

console.log(geefLangste(lijst));


