let curso = {
  titulo: "Curso profesional de js",
  formato: "video",
  bloques: ["introduccion", "funciones"],
  inscribir: function () {
    console.log("Inscrito");
  },
};

console.log(curso);

console.log(curso.titulo);
console.log(
  (curso["inscribir"] = function () {
    console.log("Incribir V2");
  })
);

curso.inscribir();

//shorhand sintaxis
let nombre = "ellis";
let usuario = { nombre };

console.log(usuario.nombre);

let user = {
  edad: 20,
  nombre: "cris",
};

let esquemaPermiso = { nivel: 2 };

let admin = { ...user, ...esquemaPermiso, permisos: true };

console.log(admin);

let copia = Object.assign(user, esquemaPermiso);

console.log(copia);

let user2 = {
  name: "Cris",
  age: 29,
  lastName: "caicedo",
  isdeveloper: true,
  isAwesome: true,
};

let { name, age, lastName: last, ...rest } = user2;

console.log(`your name is ${name} ${last} and he is ${age} years old`);

console.log(rest);

let calificaciones = [10, 20, 30, 10, 10];

let [matematicas, programacion, ciencias, ...otras] = calificaciones;

console.log(ciencias);
console.log(otras);

function obtenerCalificaciones() {
  return [10, 8, 9];
}

let [matematica, ...otrasCalificaciones] = obtenerCalificaciones();

console.log(matematica);

//funciones constructoras

function hola(title) {
  this.title = title;
}

let objeto = new hola("Curso de React");

console.log(objeto);
