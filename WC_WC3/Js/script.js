'use strict';
window.onload = function(){
    //code executes when page is done loading.
    //Get the buttons and add eventlisteners
    document.getElementById('register').addEventListener('click', createStudent);
    // document.getElementById('show').addEventListener('click', showStudents);

    let listStudents = [];//List of students

    //Student object constructor
    function Student(name, age, degree){
        this.name = name;
        this.age = age;
        this.degree = degree;
        this.courses = [];
        this.setPersonalDetails = function(details){
            [this.name,this.age,this.degree] = details;
        };
        this.addCourses = function(...list){
            this.courses = [...this.courses, ...list];
        };
        this.addCourse = function(course){
            this.courses.push(course);
        };
        this.showStudent = function(){
            let txt = `Studentname: ${this.name}, ${this.age} years and studying ${this.degree} at EhB. 
Courses are: ${this.courses.join(', ')}.`;

            return txt;
        }

    }

    function createStudent(){
        //ask for details
        let name = document.getElementById('inputName').value;
        let age = document.getElementById('inputAge').value;
        let degree = document.querySelector('input[type=radio]:checked').value;
        let courses = document.querySelectorAll('input[type=checkbox]');


        // let name = document.getElementById('inputName').value;

        let student = new Student(name, age, degree);
        //add courses
        for(let c of courses){
            student.addCourse(c.value);
        }
           console.log(student);

        //object created
        //empty fields
        document.getElementById('inputName').value = '';
        document.getElementById('inputAge').value = '';
        
        listStudents.push(student);
        
        //persist link local storage
        localStorage.setItem('list',JSON.stringify(listStudents));
       
        addAlert(true, 'Student object created succesfully');

     
        
    }

    function showStudents(){
        let div = document.getElementById('content');
        for(let s of listStudents){
            let p = document.createElement('p');
            p.innerHTML = s.showStudent();
            div.appendChild(p);
        }
    }

    function addAlert(status, message){
        let content = '';
        if(status){ //true = succes
            content = `<div class="alert alert-success" role="alert">
            ${message}
          </div>`
          
        }else{ //false = error
            content = `<div class="alert alert-success" role="alert">
            ${message}
          </div>`;
        }

        document.getElementById('messages').innerHTML = content;
    }   
};
