// foreach

const numbers = [4, 5, 6, 7, 8, 9, 10];
let students = [
  { name: "John", age: 25, grade: "A" },
  { name: "Alice", age: 21, grade: "B" },
  { name: "Bob", age: 21, grade: "C" },
];
function myfunc(number, index) {
  console.log(number, index);
}
const myfunc = function (number) {
  console.log(number);
};
const myfunc = (number) => console.log(number);
const myfunc = (student) => console.log(student.name);
number.forEach(myfunc);
students.forEach(myfunc);

// map method

const squre = function (number) {
  return number * index;
};
const squrenumber = number.map((num) => num * num);
console.log(squrenumber);

// filter method

const iseven = function (number) {
  return number % 2 === 0;
};

const neweven = numbers.filter(iseven);
console.log(neweven);

// reduce method

const sum = numbers.reduce((accum, curr) => {
  return accum + curr;
}, 100);
const sum1 = students.reduce((accum, curr) => {
  return accum + curr.age;
}, 0);

console.log(sum);

// sort method

const newschool = students.slice(0).sort((a, b) => {
  a - b;
});

console.log(newschool);

// find method

function age21(user) {
  return user.age === 21;
}

const ans = students.find(age21);
console.log(ans);

const ans1 = numbers.every((numbers) => numbers % 2 === 0);

console.log(ans);

// fill method

numbers.fill(0, 1, 2);
console.log(numbers);
