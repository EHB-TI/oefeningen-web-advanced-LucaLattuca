'use strict';

window.onload = () => {

    let promise = new Promise(function(resolve, reject){
        console.log('start of promise')
        
        setTimeout(() => resolve("i am done"), 2000);
        console.log('end of promise');
        // reject("its broken");
    });

    promise.then(
        result => console.log(result),
        error => console.log(error)
    ).finally(
        () => console.log('its done')
    );

    promise.catch(
        error => console.log('test')
    )
    }


// function loadscript(src){
    
//     //maak script element in html
//     let script = document.createElement('script');
//     // meegegeven script wordt erin gestoken
//     script.src = src;

//     // als loadscript afgelopen is 
//     script.onload = () => callback(script);

//     document.head.append(script);
// }


// function sum(a,b){
//     return a + b;
// }



// loadscript('math.js', (script) => {
//     console.log(`het script ${script} is geladen`);
//     console.log(`sum(20,30)`);
// });



// let promise = new Promise(function(resolve, reject){

// })
