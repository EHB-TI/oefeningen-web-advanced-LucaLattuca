'use strict'
// alert("Hello World!");


const date = new Date();

//12 February 2019
let output  = `${date.getDate()} ${date.toLocaleDateString(undefined, {month: 'long'})} ${date.getFullYear()} ${date.getSeconds()} ${date.getMilliseconds()}`


// setTimeout(function(){
//     window.location.reload();
//  }, 1000);


document.getElementById("date").innerHTML = output;