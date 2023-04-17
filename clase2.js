//tipos de datos
//undefined ausencia de valor
//symbol
//null

let IamString = "I am string in variable";
let variableNumber = 20.4;

let newNumber = Math.round(variableNumber);
console.log(newNumber);

variableNumber = Math.ceil(variableNumber);
console.log(variableNumber);

variableNumber = Math.floor(variableNumber);
console.log(variableNumber);

let boleanosTrue = true;
let boleanosFalse = false;

//tipos de datos primitivos son inmutables

console.log(Number("21"));
console.log(String(4));

//parseInt no permite cambiar un string en un numero

let str = "50";

console.log(typeof parseInt(str));
console.log(typeof str);

//coercion
console.log("10" == 10);
console.log("10" === 10);
console.log([] == 0);

//expresiones booleanas  true || false

let resultado = Boolean(1);
console.log(resultado);

//operadores de comparacion
// == Igual
// ===  Estrictitacente igual
// != Desigualdad
// !== Desigualda estricta
// == > Mayor que
// == < Menor que
// >= Mayor o igual a que
// <= Menor o igual a que

let resultados = 2 < 4;
console.log(resultados);

resultados = 2 > 4;
console.log(resultados);

resultados = 2 <= 4;
console.log(resultados);

resultados = 2 >= 4;
console.log(resultados);

resultados = 2 == 4;
console.log(resultados);
resultados = 2 === 4;
console.log(resultados);

resultados = 2 != 4;
console.log(resultados);

resultados = 2 !== 4;
console.log(resultados);

//en este ejemplo se comparan los caracteres
let name = "ellis";

let result = name > "cody";
console.log(result);

// las letras minusculas son mayores que las mayusculas
let name1 = "Ellis";
let result1 = name1 > "abel";
console.log(result1);

let edad = 24;
let result3 = edad !== 24;
console.log(result3);

/*operadores logicos existen 4 operadores logicos
&& operador AND
|| operador OR
!  operador de negacion o NOT
?? el operador nullish // funsion nulosa
*/

let and = 20 && 10;
let sum = 10 + and;
console.log(sum);

console.log(edad > 18 && edad < 30);

console.log(edad > 18 || edad < 25);
console.log(!"string");
console.log(!1);
console.log(!0);
console.log(!"");
console.log(null ?? "hola");
console.log(false ?? "hola");

//condionales

if (5 === "5") {
  return "is equal";
} else {
  return "its not equal";
}

let ages = 20;

if (ages > 18) {
  console.log("major age");
} else {
  console.log("minus age");
}
