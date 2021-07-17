'use strict';
console.log(4 / 0);
console.log('string' * 9);
let something;
console.log(something);


let person = {
    name: 'John',
    age: 25,
    isMarried: false
}

console.log(person["name"]);
let arr = ['plum.png', 'orange0jpeg', 'apple.bmp']

console.log(arr[2]);

// alert('ты молодец');
// let answer = confirm('Когда в горы?');

// console.log(answer);

// let answer = +prompt('ты любишь себя?', "да");

// console.log(answer);


// console.log('arr' + '-obj');
// console.log(4 + '-obj');


let incr = 10,
    decr = 10;



console.log(incr++);
console.log(decr--);
console.log(5 % 2);
console.log("2" === 2);

let isChecked = false,
    isClose = false;
console.log(isChecked || !isClose);