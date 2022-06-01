"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
x = 20;
console.log(x);
let y = 12;
let z = 42;
let firstname = "Miqueias";
let age = 18;
const isAdmin = true;
const myNumbers = [1, 2, 3];
myNumbers.push(5);
console.log(myNumbers);
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
const user = {
    name: "Miqueias",
    age: 18
};
console.log(user);
let a = 0;
a = "teste";
a = true;
a = [];
let id = "10";
id = 200;
const userId = 10;
const productId = "123";
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
let teste;
teste = "algumvalor";
teste = null;
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
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet}, ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting("Jose");
greeting("Lucas", "Sir");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplaParams(nums) {
    return (nums.n1 * nums.n2) + nums.n3;
}
console.log(multiplaParams({ n1: 5, n2: 5, n3: 2 }));
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado número!");
}
doSomething(10);
doSomething(true);
function showArrayItems(arr) {
    arr.forEach(item => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["1", .5, 5];
showArrayItems(a1);
showArrayItems(a2);
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    welcome() {
        return `Welcome ${this.name}, you is ${this.role}`;
    }
}
const zeca = new User("Zeca", "Admin", true);
console.log(zeca.welcome());
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.vheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();
class SuperCar extends Car {
    constructor(brand, vheels, engine) {
        super(brand, vheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
function BaseParamters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParamters()
], Person);
const sam = new Person("Sam");
console.log(sam);
