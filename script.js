/*This problem was asked by Apple.
A fixed point in an array is an element whose value is equal to its index. Given a sorted array of distinct elements, return a fixed point, if one exists. Otherwise, return False.
For example, given [-6, 0, 2, 40], you should return 2. Given [1, 5, 7, 8], you should return False.*/
let i = 0;
const array = [8, 1, 2, 8, 4];
let result = "";
array.findIndex((num) => (num == i ? (result = i) : (result = false)));
console.log(result);

//Ordenar un array de objetos
//Dado un array de objetos, escribe una función que lo ordene en función de una propiedad específica del objeto (por ejemplo, por edad o nombre).

const ordenarNombres = (elementos) => elementos.sort();
const ordenarNum = (gente) =>
  gente.sort((nombre, edad) => {
    if (nombre.name) {
    }
  });

const array1 = ["Juan", "Luis", "Pepe", "Jose", "Ricardo"];
const array2 = [1, 6, 3, 78, 30];
const gente = [
  { name: "Luis", age: 20 },
  { name: "Ana", age: 20 },
  { name: "Andrea", email: 19 },
];
console.log(ordenarNombres(array1));
console.log(ordenarNum(array2));

//Escribe una función que determine si dos cadenas son anagramas, es decir, si tienen las mismas letras en diferente orden.




const anagrama = (palabra1, palabra2) =>{
  palabra1 = String(palabra1.split("").sort()).toLowerCase()
  palabra2 = String(palabra2.split("").sort()).toLowerCase()
  let result = ""
  if (palabra1 === palabra2) {
    result = "La palabra es un anagrama"
  }else{
    result = "La palabra no es un anagrama"
  }return result
}
console.log(anagrama("MARACA", "camara"));
