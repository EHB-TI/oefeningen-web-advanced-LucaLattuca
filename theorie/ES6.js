//*use strict keyword* 
'use strict' 
// - shows more errors, feedback on errors
// - removes bad coding practices

//*template literals*
// concatenating strings ("luca" + " " + "lattuca")
// newer method : `${variable} text ${variable}`

let firstname = "luca";
let lastname = "lattuca";
let age = 22;
let sentence = `${firstname} ${lastname} is ${age} jaar oud`;
console.log(sentence); 

// *variables*

let x1 = 1; // hoisting
var x2 = 2; // no hoisting
const x3 = 3; // hoisting (conatant variable)

// *array destructuring*

let studenten = ['Luca','Jan','Jos'];

// ES5
// let s1 = studenten[0];
// let s2 = studenten[1];
// let s3 = studenten[2];

// ES6 - destructuring

let [s1,,s3] = studenten;
// console.log(s3); --> Jos

// *object destructuring*

let course = {
    
    name: 'Web Advanced',
    year: '2022',
    focus: 'Javascript',
}

//ES5
// let name = course.name;
// let year = course.year;
// let focus = course.focus;


//ES6 destructuring
let {name, year, focus} = course;

// iterations

for(s of studenten){
console.log(s);
}

//spread operator - concatenate arrays
let buddies = ['pepe', 'datboy'];
let [b1,b2] = buddies;

//concatenate arrays
const personConcat = studenten.concat(buddies);
console.log(personConcat);
//spread operator
const people = [...studenten, ...buddies];
console.log(personSpread);



let [d1,d2,d3,d4,d5, ...goodStudents] = people;