'use strict'
//alert("Hello World!");


    function controleerLeeftijd(event){
        event.preventDefault();
        let age = document.getElementById('inputAge').value;
        let name = document.getElementById('inputName').value;
        
        let scentence;
        if(age < 18)
        scentence = `${name} + 's age is ${age}.`;
        else
        scentence = `${name}'s acced denied. `;


        console.log(scentence);
    }


    let form = document.getElementById('form');
    form.addEventListener('submit', controleerLeeftijd);










