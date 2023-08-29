// arrays destructuring

let fruits = ['apple', 'banana'];
let [a , b] = fruits;
console.log(a, b);

// object destructuring

let user = {unserName: 'oscar', age: 34};
let {unserName, age} = user;
console.log(unserName, age);

// spread operator

let person  = {name: 'luis', age: 28};
let country = 'MX';

let data = { id: 1,...person, country}
console.log(data);

// rest 

function sum (num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum (1, 3, 5, 8);