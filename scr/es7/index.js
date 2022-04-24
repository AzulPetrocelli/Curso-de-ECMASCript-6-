//¿Qué se implementó en ES7?-----------------------------------------------------------------------------------------

//Metodo includes()--------------------------------------------------------------------------------------------------
//lo que hace es retornar true o false dependiendo de si el
//valor que le especificamos se encuentra dentro del array o no

let numbers = [1,2,3,4,5,6,7,8,9,10];

if (numbers.includes(7)){
  console.log("Si se encuentra el valor 7");
} else {
  console.log("No se encuentra el valor 7");
}


//Numeros elevados--------------------------------------------------------------------------------------------------

let base = 4;
let exponente = 2;

//esto es igual a cuatro elevado a la dos
let resultado = base ** exponente;

console.log(resultado);// 16