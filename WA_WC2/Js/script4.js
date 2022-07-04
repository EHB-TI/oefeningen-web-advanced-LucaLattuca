'use strict'

// We maken op onze html pagina een knop met de naam: Create Student
// We voegen een eventlistener toe. We luisteren naar het event click.
// Wanneer we klikken op de knop, vragen we alle data op met behulp van de prompts. Net zoals in de vorige versie van de oefening.
// Op het einde van de bevraging, maken we een nieuw studentenobject aan. Ditmaal gebruiken we een constructor functie. Het object slagen we op in een lijst van studenten. 
// We kunnen op de knop van Create student nogmaals klikken voor het process te herstarten. 
// We voegen een knop toe aan onze html pagina met de naam: Show students. Wanneer we hierop klikken printen we de huidige lijst met studenten af op de html pagina. 

document.getElementById('create').addEventListener('click', createStudent);
document.getElementById('show').addEventListener('click', showStudent);

let liststudents = [];

function Student(name, age, degree){
    
    this.name  = name;
    this.age = age;
    this.degree = degree;
    this.courses = [];
    this.setPersonalDetails = function(details){
        [ this.name, this.age , this.degree] = details;
    }; //example of using the rest operator: amount of arguments is not fixed
    this.addCourse = function(...list){
        this.courses = [...this.courses, ...list];// catches arguments and bundles them into array
    };
    this.showStudent = function(){
        let txt = `Mijn naam is ${this.name}. Ik ben ${this.age} jaar oud en volg ${this.degree} aan EhB. 
        Mijn vakken zijn: ${this.courses.join(" , ")}.`;
       return txt;
    };

}


function createStudent(){

    let data = [];
    //Using an array, we are storing all the answers as new elements of that array.
    data.push(prompt('Name?'));
    data.push(prompt('Age?'));
    data.push(prompt('Degree?'));
    
    let student = new Student();
    student.setPersonalDetails(data);

    while (true){
        let d = prompt('Courses?')
        if(d){
            student.addCourse(d);
        }else{
            break;
        }
    }

    liststudents.push(student);

    //let student2 = new Student('Quandale', 40, 'TI');

    console.log(liststudents);
    
}

function showStudent(){

    for(let s of liststudents){

        let p = document.createElement('p');

        p.innerHTML = s.showStudent();


        document.getElementById('content').appendChild(p);
    }


}






