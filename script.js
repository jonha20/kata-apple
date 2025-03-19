/*This problem was asked by Apple.
A fixed point in an array is an element whose value is equal to its index. Given a sorted array of distinct elements, return a fixed point, if one exists. Otherwise, return False.
For example, given [-6, 0, 2, 40], you should return 2. Given [1, 5, 7, 8], you should return False.*/
let i = 0;
const array = [8, 1, 2, 8, 4]
let result = ""
array.findIndex((num) => num == i ? result = i : result = false)
console.log(result);

//Ordenar un array de objetos
//Dado un array de objetos, escribe una función que lo ordene en función de una propiedad específica del objeto (por ejemplo, por edad o nombre).



const ordenarNombres = elementos => elementos.sort()
const ordenarNum = elementos => elementos.sort((a,b)=> a-b) ;

const array1 = ["Juan", "Luis", "Pepe" , "Jose", "Ricardo"]
const array2 = [1, 6, 3, 78, 30]
console.log(ordenarNombres(array1)); 
console.log(ordenarNum(array2)); 
