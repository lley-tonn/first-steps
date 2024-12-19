//console.log(`hello`);
//window.alert(`error`);

document.getElementById("myh1").textContent = `Wasup`;
document.getElementById("myp").textContent = `Lleyton`;

let x;
x=100;
console.log(x);

let age = 25;
let price = 1000.99;
let gpa =2.1;

console.log(`you are ${age} years and the price is ${price} but your gpa is ${gpa} `);

let name = "Lleyton";


console.log(typeof name);
console.log( `my name is ${name}`);

let online = true;

console.log(typeof online);
console.log(`guy is ${online}`);


let fname = "Lleyton";
let fage = 22;
let student = true;


document.getElementById("p1").textContent = `my name is ${fname}`;
document.getElementById("p2").textContent = `my age is ${fage}`;
document.getElementById("p3").textContent = `i am a ${student}`;

let students = 30;
//students = students + 1;
//students = students - 2;
//students = students * 2;
//students = students / 2;
//students = students ** 2;
let extrastudents = students % 2;


students +=1;
students-=1;
console.log(students);
console.log(extrastudents);


let username;

//username = window.prompt("what is your username?");
console.log(username);



document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("mytext").value;
    document.getElementById("myh1").textContent = `Hello ${username}`;

    
}

/*5let years = window.prompt("how many years?");

years = Number(years);
years +=1;

console.log(years, typeof years);*/

const PI=3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius");
radius = Number(radius);

circumference = 2 * PI * radius;

console.log(circumference);