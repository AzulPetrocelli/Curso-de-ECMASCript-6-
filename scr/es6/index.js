//Defaults Params Y Concatenacion---------------------------------------------------------------------------------------------------------------
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

//Let Y Const, Multilinea, Spread Operator y desestructuracion----------------------------------------------------------------------------------

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