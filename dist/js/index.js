"use strict";
let x = 10;
x = 20;
// x = "teste"
console.log(x);
// inferencia x annotation
let y = 12;
let z = 42;
//tipos básicos
let firstname = "Miqueias";
let age = 18;
const isAdmin = true;
// object
const myNumbers = [1, 2, 3];
myNumbers.push(5);
console.log(myNumbers);
//tuplas
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
// object literals -> {prop: value}
const user = {
    name: "Miqueias",
    age: 18
};
console.log(user);
// any
let a = 0;
a = "teste";
a = true;
a = [];
// union type
let id = "10";
id = 200;
const userId = 10;
const productId = "123";
// enum
// tamanho de roupas (size: Medio, size: Pequeno)
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.G
};
console.log(camisa);
// literal types
let teste;
// teste = "outrovalor"
teste = "algumvalor";
teste = null;
//function
function soma(a, b) {
    return a + b;
}
function sayHelloto(name) {
    return `Hello ${name}`;
}
console.log(sayHelloto("Miqueias"));
function logger(msg) {
    console.log(msg);
}
logger("Teste");
