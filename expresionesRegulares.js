let texto = "Hola, me llamo ellis y tengo 29 años";

console.log(texto.search(/\d/g));

let texto1 =
  "codigofacilito es una escuela de programacion , codigofacilito es genial";
let nuevoTexto = texto1.replace(/codigofacilito/g, "CodigoFacilito");

console.log(nuevoTexto);

let texto2 = "1000 numeros disponibles 4000";

let newText = texto2.replaceAll(/(\d)(\d{3})/g, "$1, $2");

console.log(newText);

// /[abcd]/

console.log("abcd".match(/[abcd]/));

console.log("123--3-2".match(/(\d-)*/g));

console.log("22123".match(/\d?/));

let text4 = "Visita https://codigofacilito.com";
console.log(
  text4.replace(
    /https?:\/\/(\S+\.)?\S+(\.\S+)(\.\S+)?)/,
    "<a href='$1'>$1</a> "
  )
);
