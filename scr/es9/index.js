//¿Qué se implementó en ES9?-------------------------------------------------------------------------------------------

//Destrucrurar Elementos-----------------------------------------------------------------------------------------------

const obj = {
  name: 'Azul',
  age: 19,
  country: 'Argentina'
};

let {country, ...valor} = obj;

console.log(valor) //{name : 'Azul', age: 19}
console.log(country)//Argentina 
console.log(country ,valor)//Argentina{ name : 'Azul', age: 19}

//Anidar elementos de un array---------------------------------------------------------------------------------------

const objeto1 = {
  name : 'Azul',
  age: 19,
};

const objeto2 = {
  ...objeto1,
  country: 'Argentina',
}

console.log(objeto2)//{name: 'Azul', age: 19, country: 'Argentina'}


//.finally() promise--------------------------------------------------------------------------------------------------
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    if(true){
      resolve('Esta todo bien');
    }else{
      reject(new error ('Esta todo mal'));
    }
  })
};

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Finalizado'))//El finally se ejecuta sin inportar el resultado

//Regex------------------------------------------------------------------------------------------------------------

const degexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
//const degexData = /([de que numero- a que numero puede usar]{la cantidad de caracteres q debe tener})/

const match = degexData.exec('2022-04-25');
const year = match[1];
const month = match[2];
const day = match[3]; 

console.log(match);//['2022-04-25', '2022', '04', '25', index: 0, input: '2022-04-25', groups: undefined]
console.log(year);//2022
console.log(month);//04
console.log(day);//25

