//ECMAScript 2020----------------------------------------------------------------------------------------------------

//.addEventListener()------------------------------------------------------------------------------------------------
const button = document.getElementById("btn");

//Ejecuta la funcion importada hello() cada vez que le hacen click al button
button.addEventListener("click", async function () {
  const module = await import("./file.js");
  module.hello();
});


//BigInt()------------------------------------------------------------------------------------------------------------
const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);


//Promise.allSettled([])---------------------------------------------------------------------------------------------

const promises1 = new Promise((resolve, reject) => reject ('reject'));
const promises2 = new Promise((resolve, reject) => resolve ('resolve 1'));
const promises3 = new Promise((resolve, reject) => resolve ('resolve 2'));

Promise.allSettled([promises1, promises2, promises3])
  .then(response => console.log(response));


//operador nulo ??---------------------------------------------------------------------------------------------------
const valor1 = 'Hola' ?? 'Adios';
const valor2 = null ?? 'Adios';
const valor3 = 'Hola' ?? null;

console.log(valor1);//'Hola'
console.log(valor2);//'Adios'
console.log(valor3);//'Hola'

//operador undefined------------------------------------------------------------------------------------------------
const user = {};

console.log(user.profile.email);//error
console.log(user?.profile?.email);//undefined 

if (user.profile.email){
  console.log('Mail')
} else {
  console.log('Fail')
}