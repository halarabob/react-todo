// function add(a, b) {
//   return a + b;
// }
// 
// console.log(add(3,1));
// 
// var toAdd = [9, 5];
// 
// console.log(add(...toAdd));

// var groupA = ['Mark', 'Stark', 'Lark'];
// var groupB = ['Michael', 'Chris'];
// 
// var final = [3, ...groupA];
// 
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];
// Hi Andrew, you are 25

var greeting = function(name, age) {
  console.log('Hi ' + name + ', you are ' + age);  
};

greeting(...person);
greeting(...personTwo);

var names = ['Mike', 'Chuck', 'Shaq'];
var final = ['pwlprz', ...names];

final.forEach((name) => {
  console.log('Hi ' + name);
});