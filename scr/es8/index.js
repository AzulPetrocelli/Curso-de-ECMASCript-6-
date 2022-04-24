//¿QUE SE IMPLEMENTO EN ES8?-----------------------------------------------------------------------------------------

//Object.entries-----------------------------------------------------------------------------------------------------
const data = {
  frontend: 'Azul',
  backend: 'Isabel',
  design: 'Ana',
}

//transforma las asignaciones y los valores de un objeto en un array

const entries = Object.entries(data);

console.log(entries); //[['frontend', 'Azul'], ['backend', 'Isabel'], ['design', 'Ana']]
console.log(entries.length); //3



//Object.values()---------------------------------------------------------------------------------------------------

//transforma los valores de un objeto a array

const arrayData = Object.values(data);

console.log(arrayData); //['Azul' , 'Isabel' , 'Ana']


//.padStart() y .padEnd()-------------------------------------------------------------------------------------------
const string = 'Azul';

//variable.padStart(cantidad de caracteres , 'Texto que va al principio')
console.log(string.padStart(9, 'Hola'));// Hola Azul

//variable.padEnd(cantidad de caracteres , 'Texto que va al final')
console.log(string.padEnd(10, 'Adios'));// Azul Adios

//ASYNC Y AWAIT------------------------------------------------------------------------------------------------------

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    if(true){
      setTimeout( () => resolve('Hello World'), 3000)
    }else{
      reject(new Error('Test Error'))
    }
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
  try{
    const hello = await helloWorld();
    console.log(hello);
  }catch(error){
    console.log(error);
  }
}

anotherFunction();
