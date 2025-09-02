// let character = "Mr. Borges";
// let age = 44;
// let isBlackBelt = false;
// character = "Fernando";
// age = 43;
// isBlackBelt = true;
// console.log(character);
// console.log(age);
// console.log(isBlackBelt);
// const circ = (diameter: number) => {
// 	return diameter * Math.PI;
// };
// console.log(inputs);
// inputs.forEach(input => {
//     console.log(input);
// });
// lesson 4
// Array & Objects
// let names = ["luigi", "mario", "yoshi"];
// names.push("toad");
// let number = [10, 20, 30, 40];
// number.push(25);
// number.push(45);
// console.log(number);
// console.log(names);
// // let mixed = ["ken", 4, "chun-li", 8, 9];
// // mixed.push("ryu");
// // objects
// let ninja = {
// 	name: "mario",
// 	belt: "black",
// 	age: 30,
// 	skills: ["fighting", "sneaking"],
// };
// ninja.age = 40;
// ninja.name = "ryu";
// ninja.belt = "33";
// ninja = {
// 	name: "yoshi",
// 	belt: "orange",
// 	age: 40,
// 	skills: ["sneaking", "fighting", "swordsmanship"],
// };
// console.log("This is ninja: ", ninja);
//leesson 5
// Explicit Types
// let character: string;
// let age: number;
// let isLoggedIn: boolean;
// age = 44;
// isLoggedIn = false;
// //arrays
// let ninjas: string[] = [];
// ninjas = ["yoshi", "chun-li", "ryu"];
// //union types
// let mixed: (string | number | boolean)[] = [];
// mixed.push("hello");
// mixed.push(20);
// mixed.push(false);
// console.log(mixed);
// //objects
// let ninjaOne: object;
// ninjaOne = { name: "yoshi", age: 30 };
// ninjaOne = [];
// let ninjaTwo: {
// 	name: string;
// 	age: number;
// 	isLoggedIn: boolean;
// 	skills: string[];
// };
// ninjaTwo = {
// 	name: "mario",
// 	age: 20,
// 	isLoggedIn: true,
// 	skills: ["fighting", "sneaking"],
// };
// ninjaTwo = {
// 	name: "luigi",
// 	age: 25,
// 	isLoggedIn: false,
// 	skills: ["sneaking", "fighting", "swordsmanship"],
// };
// console.log(ninjaTwo);
//lesson 6
// let age: any = 25;
// age = true;
// console.log(age);
// age = "hello";
// console.log(age);
// age = { name: "luigi" };
// console.log(age);
// age = [1, 2, 3];
// console.log(age);
//lesson 7
console.log("lesson 7");
//lesson 8
// functions & types
let greet = () => {
    console.log("hello, world");
};
// greet = "Hello"
greet = () => {
    console.log("hi, world");
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
    // console.log(a + c);
};
//void means function does not return anything
// ? means it is optional parameter
// c has union type
add(5, 10, 40);
// add(5, "10")
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
console.log(result);
const greet2 = (user) => {
    console.log(`hello ${user.name}, you are ${user.uid} uid`);
};
const greet3 = (user) => {
    console.log(`hello ${user.name}, you are ${user.age} years old`);
};
//example 1
let calculate;
calculate = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
