  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop

let nums = [1, 2, 3, 4, 5];
let result = [];
for (let num of nums) {
    result.push(num * 2);
}
console.log(result);

// Using map()
const multipleByTwo = function(num) {
    return num * 2;
}
const mapResults = nums.map(multipleByTwo);
console.log(mapResults);


// Simplified w/ map()
const simplified = nums.map(function(num) { return num * 2 });
console.log(simplified);


// Simplfied w/ map() + arrow function
const simplified2 = nums.map(num => num * 2);
console.log(simplified2);


// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentWithId = students.map(student => [student.name, student.id])
console.log(studentWithId);