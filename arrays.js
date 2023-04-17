let arreglo = ["rails", "laravel", "django", "React"];

// for (let i = 0; i < arreglo.length; i++) {
//   console.log(arreglo[i]);
// }

// arreglo.forEach((lenguajes,index) => {
//   console.log(lenguajes,index);
// });

arreglo.map((lenguaje) => {
  return console.log(lenguaje);
});

let numeros = ["5", "4", "2", "3"];

// let nums = numeros.map((num) => {
//   return 5 * num;
// });

// console.log(nums);

newStrings = numeros.map((strings) => {
  return parseInt(strings);
});

console.log(newStrings);

let numbers = [4, 5, 2, 0, 8];

let newNumbers = numbers.filter((numero) => {
  return numero % 2 === 0;
});

let newLanguage = arreglo.filter((language) => {
  return language === "React";
});

console.log(newLanguage);

console.log(newNumbers);

let reduceNumber = [1, 2, 3, 4, 5];

let accum = reduceNumber.reduce((acc, element) => {
  return acc + element;
}, 0);

console.log(accum);

let stringReduce = ["ellis", "cris", "caicedo"];

let html = stringReduce.reduce((acc, element) => {
  return acc + element;
});

console.log(html);

/*
indexOf =>  ===> posicion
includes ==A true || false
*/

console.log(stringReduce.indexOf("ellis"));
console.log(stringReduce.includes("ellis"));

/* 
find =>  ===> elemento encontrado
findIndex == funcion prueba
some
*/

let found = stringReduce.find((elemento) => {
  return elemento === "ellis";
});

console.log(found);

let somes = arreglo.some((elemento) => {
  return elemento == "React";
});

console.log(somes);

let somesindex = arreglo.findIndex((elemento) => {
  return elemento == "React";
});

console.log(somesindex);

//Iterable
//Spread syntax(...)
let spreads = [5, 2, 5, 0, 50];

console.log(spreads);

console.log(...spreads);

let lastName = "caicedo";
console.log(...lastName);

//Rest parameters(...)
function demos(nombre, ...arr) {
  console.log(`las califaciones de ${nombre} son ${arr}`);
}

demos("ellis", 10, 2, 5, 4, 7);
