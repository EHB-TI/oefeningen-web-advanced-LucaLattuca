'use strict'
console.log("script loaded");
let student = {
    name: 'default',
    age: 1,
    degree: 'TI',
    courses: [],
    setPersonalDetails: function(name, age, degree){
        this.name = name;
        this.age = age;
        this.degree = degree;
    },
    addCourse: function(course){
            this.courses.push(course);
    },
    showStudent: function(){     
        let sentence = `Mijn naam is ${this.name}. Ik ben ${this.age} jaar oud en volg ${this.degree} aan EhB. 
        Mijn vakken zijn: ${this.courses.join(" , ")}.`;
        console.log(sentence);
    }

}

let a = prompt('Name?');
let b = prompt('Age?');
let c = prompt('Degree?');
while (true){
    let d = prompt('Courses?')
    if(d){
        student.addCourse(d);
    }else{
        break;
    }
}
student.showStudent();








