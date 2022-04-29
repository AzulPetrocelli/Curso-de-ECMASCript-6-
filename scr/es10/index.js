let array 

//flat() y flatMap()-------------------------------------------------------------------------------------------------
array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(1));//[1,2,3,1,2,3, [1,2,3]]
console.log(array.flat(2));//[1,2,3,1,2,3,1,2,3]


array = [1,2,3,4,5]; 

console.log(array.flatMap(value => value, value * 2))//[1,2,2,4,3,6,4,8,5,10]


//Object.fromEntries-----------------------------------------------------------------------------------------------------
array = [['nombre', 'azul'], ['age', 19]];

console.log(Object.fromEntries(array));//{nombre: 'azul', age: 19}


//.trimStart y trimEnd-----------------------------------------------------------------------------------------------
array = '          Hello           ';

console.log(array);//'          Hello           '
console.log(array.trimEnd());//'          Hello'
console.log(array.trimStart());//'Hello           '

//Catch antes vs ahora

//antes
try{

}catch (error){

}

//ahora
try{

} catch{
  error
}

//Symbol() y .description---------------------------------------------------------------------------------------------------------
let string = 'My Symbol';
let symbol = Symbol(string);
console.log(symbol.description);//My Symbol