'use strict'



'use strict'
console.log("script loaded");
let student = {
    name: 'default',
    age: 1,
    degree: 'TI',
    courses: [],
    setPersonalDetails(details){
        [ this.name = name, this.age = age, this.degree = degree] = details;
    },
    addCourse(...courses){ // catches arguments and bundles them into array
            this.courses = [...this.courses, ...courses];
    },
    showStudent(){     
        let sentence = `Mijn naam is ${this.name}. Ik ben ${this.age} jaar oud en volg ${this.degree} aan EhB. 
        Mijn vakken zijn: ${this.courses.join(" , ")}.`;
        console.log(sentence);
    }

}

let data = [];
//Using an array, we are storing all the answers as new elements of that array.
data.push(prompt('Name?'));
data.push(prompt('Age?'));
data.push(prompt('Degree?'));
student.setPersonalDetails(data);

//example of using the rest operator: amount of arguments is not fixed

student.addCourse('WE', 'WDA');
student.addCourse('Programming Essentials');
student.addCourse('Programming Advanced', 'Android', 'iOS', 'Design');


// let a = prompt('Name?');
// let b = prompt('Age?');
// let c = prompt('Degree?');
// while (true){
//     let d = prompt('Courses?')
//     if(d){
//         student.addCourse(d);
//     }else{
//         break;
//     }
// }
student.showStudent();




