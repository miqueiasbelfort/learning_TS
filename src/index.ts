let x: number = 10
x = 20
// x = "teste"
console.log(x)

// inferencia x annotation
let y = 12

let z: number = 42

//tipos básicos
let firstname: string = "Miqueias"
let age: number = 18
const isAdmin: boolean = true

// object
const myNumbers: number[] = [1,2,3]
myNumbers.push(5)

console.log(myNumbers)

//tuplas
let myTuple: [number, string, string[]]
myTuple = [5, "teste", ["a", "b"]]

// object literals -> {prop: value}
const user: {name: string, age:number} = {
    name: "Miqueias",
    age: 18
}
console.log(user)

// any
let a: any = 0
a = "teste"
a = true
a = []

// union type
let id: string | number = "10"
id = 200

// type alias
type myIdType = number | string
const userId: myIdType = 10
const productId: myIdType = "123"

// enum
// tamanho de roupas (size: Medio, size: Pequeno)
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa gola V",
    size: Size.G
}
console.log(camisa)

// literal types
let teste: "algumvalor" | null
// teste = "outrovalor"
teste = "algumvalor"
teste = null

//function
function soma(a:number, b:number){
    return a + b
}

function sayHelloto(name:string): string {
    return `Hello ${name}`
}
console.log(sayHelloto("Miqueias"))

function logger(msg:string): void {
    console.log(msg)
}
logger("Teste")

function greeting(name: string, greet?: string): void {
    if(greet){
        console.log(`Olá ${greet}, ${name}`)
        return
    }
    console.log(`Olá ${name}`)


}
greeting("Jose")
greeting("Lucas", "Sir")

//interface
interface MathFunctionParams {
    n1: number,
    n2: number,
    n3?: number
}

function sumNumbers(nums: MathFunctionParams){
    return nums.n1 + nums.n2
}
console.log(sumNumbers({n1: 1, n2: 2}))

function multiplaParams(nums: MathFunctionParams){
    return (nums.n1 * nums.n2) + nums.n3
}
console.log(multiplaParams({n1: 5, n2: 5, n3: 2}))

// narrowing
//checagem de tipos
function doSomething(info: number | boolean){
    if(typeof info === "number"){
        console.log(`O número é ${info}`)
        return
    } 
    console.log("Não foi passado número!")
}

doSomething(10)
doSomething(true)

// generics
function showArrayItems<T>(arr: T[]){
    arr.forEach(item => {
        console.log(`ITEM: ${item}`)
    })
}
const a1 = [1,2,3]
const a2 = ["1", .5, 5]
showArrayItems(a1)
showArrayItems(a2)

// classes
class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean){
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }

    welcome(): string{
        return `Welcome ${this.name}, you is ${this.role}`
    }
}

const zeca = new User("Zeca", "Admin", true)
console.log(zeca.welcome())

//interface em classes
interface IVehicle {
    brand: string,
    showBrand(): void
}

class Car implements IVehicle {

    brand
    vheels

    constructor(brand: string, wheels: number){
        this.brand = brand
        this.vheels = wheels
    }

    showBrand(): void {
        console.log(`A marca do carro é ${this.brand}`)
    }
}

const fusca = new Car("VW", 4)
fusca.showBrand()

// heranca
class SuperCar extends Car {
    engine
    constructor(brand: string, vheels: number, engine: number){
        super(brand, vheels)
        this.engine = engine
    }
}

const a4 = new SuperCar("Audi", 4, 2.0)
console.log(a4)
a4.showBrand()

// decorators
function BaseParamters(){
    return function <T extends {new (...args: any[]): {}}>(constructor: T){
        return class extends constructor {
            id = Math.random()
            createdAt = new Date()
        }
    }
}

@BaseParamters()
class Person {
    name 
    constructor(name: string){
        this.name = name
    }
}

const sam = new Person("Sam")
console.log(sam)