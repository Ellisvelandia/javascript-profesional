// // // //contexto
// // function demo() {
// //   console.log(this);
// // }

// // demo();

// // let objeto = {
// //   demo: function () {
// //     console.log(this);
// //   },
// // };

// // objeto.demo();

// let objeto = {
//   func: function () {
//     console.log(this);
//   },
// };

// let f = objeto.func;

// f();

// let segundoObjeto = {
//   func: null,
//   ejecutor: function (f) {
//     this.func = f;
//     this.func();
//   },
// };

// segundoObjeto.ejecutor(objeto.func)

function Estudiante() {
  this.nombre = "ellis";
  this.saludar = function () {
    console.log(this);
  };
  this.saludar = this.saludar.bind(this);
}

let e = new Estudiante();

let f = e.saludar;

e.saludar();
f();

/*
Imediata: call y apply
Lazy: blind
*/

// let demo = () => console.log("Hola mundo");

// let suma = (a, b) => a + b;

// console.log(suma(4, 4));
