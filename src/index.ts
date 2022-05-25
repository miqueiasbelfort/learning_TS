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
