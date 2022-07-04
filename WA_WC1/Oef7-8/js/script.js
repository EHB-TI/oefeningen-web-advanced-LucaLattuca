'use strict'

let name = "luca lattuca";
let name1 = "tom peter";
let name2 = "quandale Dingle";


function cap(x){
    console.log(x.slice(0,1).toUpperCase() + x.substr(1));
}


cap(name);
cap(name1);
cap(name2);


function newCap(x){
    x = x.trim();
    let xn = x.split(" ");

    for(let i = 0; i < xn.length; i++){
       xn[i] = xn[i].slice(0,1).toUpperCase() + xn[i].substr(1);
    }
    console.log(xn.join(" "));

}

let name3 = "luca lattuca";
let name4 = "tom the peterson";
let name5 = "quandale dingelus the fourth";


newCap(name3);
newCap(name4);
newCap(name5);
