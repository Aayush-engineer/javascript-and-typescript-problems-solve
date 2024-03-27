// given a string, reverse each word in the sentence
// let stri = "ayush";
// console.log(stri);

// var st = 0;
// var end = stri.length - 1;
// console.log(st, end);
// while (st < end) {
//   var temp = stri[end];
//   console.log(temp, stri[st]);

//   stri[end] = stri[st];
//   stri[st] = temp;
//   st++;
//   end--;
// }
// console.log(stri);
function outerFunction() {
  const outerVariable = "I am from outer function";

  function innerFunction() {
    const innerVariable = "I am from inner function";
    console.log(innerVariable); // Accessible
    console.log(outerVariable); // Accessible
  }

  innerFunction();
  // Calling inner function
}

outerFunction(); // Calling outer function
