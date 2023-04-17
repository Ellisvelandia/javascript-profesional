//funciones bloques de codigo que reciben codigo y los retornan procesados

function greeting() {
  console.log("Hello dev");
}

greeting();

function number(num) {
  return num * 5;
}

console.log(number(5));

/* 
scope global
scope local
*/

let name = "Ellis";
let isDeveloper = true;
console.log(name);

function names() {
  let name = "cris";
  let age = 29;
  console.log(
    `Hello ${name} your age is  ${age} and is developer? ${isDeveloper}`
  );
}

// console.log(age) no esta definida ya que esta declarada en un ambito local

names();

function hello(nombre) {
  if (nombre) {
    let saludo = "holla " + nombre;
    console.log(saludo);
  }
}

hello("ellis");

function cuadrado(numero) {
  return numero * numero;
}

let resultado = cuadrado(20);
console.log(resultado);

function sumaTodos(...arg) {
  let suma = 0;
  for (let i = 0; i < arg.length; i++) {
    suma = arg[i];
    console.log(suma);
  }
}

sumaTodos(1, 5, 6, 7);

let edades = [20];

function modificador(edades) {
  edades[0] = 30;
  console.log(`dentro de la funcion ${edades}`);
}

console.log(edades);
modificador(edades);
console.log(edades);

let valor = 10;
valor += 2;
console.log(valor);

/*
---funciones de primera clase----
Debe ser posible retornarlo
Debe ser posible asignarlo a una varibale
Debe ser posible enviarlo como argumento
*/

function executor(funcion) {
  funcion();
}

function sayHello() {
  console.log("hello");
}

executor(sayHello);

function sumaTodosAlt() {
  return Array.from(arguments).reduce((acc, argument) => argument + acc, 0);
}

sumaTodosAlt(0);

function build() {
  return function () {
    console.log("hello");
  };
}
let f = build();

f();

//Hoisting
function demo(a, b) {
  return a * b;
}

let sumDemo = demo(50, 50);
console.log(sumDemo);
