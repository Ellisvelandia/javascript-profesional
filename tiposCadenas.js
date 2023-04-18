//cadenas
let nombre = "ellis";
console.log(nombre.length);

let name = String("ellis");
console.log(name);

console.log("Uriel dijo:  'Hola' \\ ");

//concatenacion
let a = "Hola ";
let b = "mundo";

console.log(a.concat(b));

let mes = "3";
console.log(mes.padStart(2, "0"));
console.log(mes.padEnd(2, "0"));

console.log("A" > "B");
console.log("a" > "B");
console.log("A" > "b");

//local compare
/*
iguales = 0
*/
console.log("A".localeCompare("z"));
console.log("a".localeCompare("b"));
console.log("a".localeCompare("B"));

console.log("a".toUpperCase() > "B".toLowerCase());

console.log("Hola"[0]);

let cadena = "Ellis";

for (const caracter of cadena) {
  console.log(caracter);
}

let subCadena = "Hola mundo";

console.log(subCadena.substring(-1, 4));

console.log(subCadena.slice(0, 2));

let texto = "Estoy aprendiendo javascript con el curso de codigo facilito";

let palabras = texto.split(" ");

console.log(palabras.join(","));

console.log("  hola ".trim());
console.log("Hello world".replace("Hello ellis"));
