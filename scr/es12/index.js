//ECMAScript 2021----------------------------------------------------------------------------------------------------

//replace() y replaceAll()

const string = 'JavaScript es un lenguaje de programacion maravilloso, con JavaScript puedo mejorar mi futuro';

//remplaza la primer coincidencia
console.log(string.replace('JavaScript', 'Python'));//Python es un lenguaje de programacion maravilloso, con JavaScript puedo mejorar mi futuro

//remplaza todas las coincidencias
console.log(string.replaceAll('JavaScript' ,'Python'));//Python es un lenguaje de programacion maravilloso, con Python puedo mejorar mi futuro

//Metodos Privados----------------------------------------------------------------------------------------------------
class Message{
  #show(val){
    console.log(val)
  }
}

const message = new Message();
message.show('Hola!');

//Promise.any([])----------------------------------------------------------------------------------------------------

const promise1 = new Promise((resolve,reject)=> reject('1'));
const promise2 = new Promise((resolve,reject)=> resolve('2'));
const promise3 = new Promise((resolve,reject)=> resolve('3'));

Promise.any([promise1, promise2, promise3])
  .then(respuesta => console.log(respuesta))//2

//WeakRef()----------------------------------------------------------------------------------------------------------
class anyclas { 
  constructor(element) {
    this._referencia = new WeakRef(element);//Guarda la referencia cada que crea un objeto
  }
}

//nuevos operadores de asinacion----------------------------------------------------------------------------------------
let isTrue
let isFalse


isTrue = true;
isFalse = false;
console.log(isTrue &&= isFalse);

isTrue = true;
isFalse = false;
console.log(isTrue ||= isFalse);

isTrue = undefined;
isFalse = false;
console.log(isTrue ??= isFalse);

