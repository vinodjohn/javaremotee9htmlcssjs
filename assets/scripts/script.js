//alert("Hello world!");
console.log('I am getting the script done!');

var fullName = 'Vinod John';
var locationCity = "Tallinn";

console.log(fullName.length);
console.log(locationCity.length);

var a = '5';
var b = 5;

if(a != b) {
  console.log("A is same value as B");
} else if(a !== b) {
  console.log("A is same value and type as B");
}

var arrayFruit = ["Apple", "Orange", "Mango"];
console.log(arrayFruit);

//Remove last fruit
arrayFruit.pop();
console.log(arrayFruit);

//Add new fruit
arrayFruit.push("Banana");
console.log(arrayFruit);

//JSON
var student = {
  "name": "Vinod John",
  "age": 20,
  "address": {
    "street": "Liivalaia 29",
    "city": "Tallinn",
    "zipcode": "15050"
  },
  "joinDate": "2021-12-17",
  "active": true,
  "grade": 4.5
};
console.log(student);
console.log(student.name);
console.log(student.active);
console.log(student['grade']); // alternative way

//Array of JSON or JSON array
var students = [
  {
    "name": "Vinod John",
    "age": 20,
    "address": {
      "street": "Liivalaia 29",
      "city": "Tallinn",
      "zipcode": "15050"
    },
    "joinDate": "2021-12-17",
    "active": true,
    "grade": 4.5
  },
  {
    "name": "Tony stark",
    "age": 29,
    "address": {
      "street": "Mustamae tee 37",
      "city": "Tallinn",
      "zipcode": "10250"
    },
    "joinDate": "2021-05-15",
    "active": false,
    "grade": 2.0
  }
];
console.log(students);
console.log(students[1].name);

console.log(Object.keys(student));

//FUNCTIONS
function isStudentPassed(student) {
  return student.grade > 3.5;
}

let studentPassResult = isStudentPassed(student);
console.log(student.name + " result: " + studentPassResult);

students.forEach(value => {
  let studentPassResult = isStudentPassed(value);
  console.log(value.name + " result: " + studentPassResult);
});

//Accessing HTMLs
let image = document.getElementById("firstImg");
console.log(image);


//Events
let thirdImage = document.getElementById("thirdImg");

function clikedThirdImage(){
  alert("Third image clicked");
}

const WINTER_MONTH_START = "January";

// Arrow functions
const isStudentPassed = (student)  => {
  return student.grade > 3.5;
};