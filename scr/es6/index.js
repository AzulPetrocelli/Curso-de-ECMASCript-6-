//Defaults Params Y Concatenacion-------------------------------------------------------------------------------------
//parametros por defecto

//antes
function newFunction(name, age, country) {
  var name = name || 'oscar';
  var age = age || 32;
  var country = country || 'MX';
  console.log(name, age, country);
}

// es6
function newFunction2(name = 'oscar', age = 32, country = "MX") {
  console.log(name, age, country);
};

newFunction2();
newFunction2('Ricardo', '23', 'CO');


// Concatenacion texto variable
let hello = "Hello";
let world = "World";

//antes
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//Let Y Const, Multilinea, Spread Operator y desestructuracion--------------------------------------------------------

//Espaciado String

//antes
let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
  + "otra frase epica que necesitamos."

// es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epicaa
`;

console.log(lorem);
console.log(lorem2);


//acceder al valor de un objeto

let person = {
  'name': 'oscar',
  'age': 32,
  'country': 'MX'
}


//antes
console.log(person.name, person.age);

//es6
let { name } = person;
console.log(name);


//agregar valores de un array dentro de otro array

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

//antes
let team3 = ['David','Oscar', 'Julian', 'Ricardo','Valeria', 'Yesica', 'Camila']

//es6
let education = ['David', ...team1, ...team2];

console.log(education);


// Var Y Let

{
  var globalVar = "Global Var";
}

{
  let globalLet = 'Global Let';
  console.log(globalLet);//solo podes acceder a una variable let de forma local
}

console.log(globalVar);//podes acceder a una variable var de forma global

const a = 'b';
a = 'a';
console.log(a);//'b'

//Arrow Functions, Promesas y Parámetros en objetos-------------------------------------------------------------------

//crear un objeto a partir de unos datos
let Name = "Azul";
let Age = 19;

//antes
obj1 = {name: Name, age: Age}

//es6
obj2 = {Name, Age}



//funciones

const people = [
  {name: 'Azul', age: '19'},
  {name: 'Tomas', age: '21'},
  {name: 'Camila', age: '16'}
]

//antes
const listOfNames = people.map(function (item) {
  console.log(item.name) ;
})

//es6

//para crear una funcion con extenciones
const listOfNames2 = people.map((item) => console.log(item.name))

//para crear una funcion con varios parametros
const listOfNames3 = (parametro1 = "parametro1", parametro2 = "parametro2", parametro3 = "parametro3") => {
  console.log(`Funcion de flecha con parametros ${parametro1}, ${parametro2}, ${parametro3}`)
}

//para crear una funcion con un parametro
const listOfNames4 = item => {
  console.log(`Funcion de flecha con parametro ${item}`)
}

//para que retorne un valor
const square = num => num * num;


//Promesas

// esta es la promesa
const helloPromise = () => {
  return new Promise((resolve , reject) => {
    if(true){
      resolve('Verdadero')
    } else{
      reject('Falso')
    }
  })
}

//y aca la estamos llamando

helloPromise()
  .then(resolve => console.log(resolve))//este es un parametro que recibe el valor de resolve y puede tener cualquier nombre yo le puse asi para no confundirme
  .catch(reject => console.log(reject))//este es un parametro que recibe el valor de reject y puede tener cualquier nombre yo le puse asi para no confundirme



//Clases, Módulos y Generadores--------------------------------------------------------------------------------------

//Clase 
class calculator {
  constructor() {//funcion constructora
    this._valueA = 0;
    this._valueB = 0;
  }
  sum(valueA, valueB) {
    this._valueA = valueA;
    this._valueB = valueB;
    return this._valueA + this._valueB;
  }
}

//creo un objeto con la clase calculator
const calc = new calculator();
//llamo al metodo sum de la clase calculator() con sus respectivos parametros
console.log(calc.sum(2, 2));


//Importar una funcion
import { ejemplo } from './module';

ejemplo();


//Funcion generator

function* helloWorld() {
  if (true) {
    yield 'Hello, ';
  }
  if (true) {
    yield 'World';
  }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);// 'Hello, '
console.log(generatorHello.next().value);// 'World'
console.log(generatorHello.next().value);// undefined