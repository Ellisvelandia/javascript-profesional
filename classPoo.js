class Curso {
  constructor(titulo) {
    this.titulo = titulo;
  }
  inscribir() {
    console.log("inscrito");
  }
}

let javascript = new Curso("Curso profesional de javascript");

console.log(javascript.titulo);

// class Course{
//   #title = "javascript";
//   #bienvenido(){
//     console.log("Bienvenido al curso: " + this.#title)
//   }
// }

// let javascripts = new Course()

class Course {
  constructor(titulo, color = "yellow") {
    this.titulo = titulo;
    this.color = color;
  }
}

new Course("Curso profesional de javascript");

// class Human {
//   especie = "humano";
//   respirar() {
//     console.log("Inhala");
//   }
// }

// class Admin extends Human {}

// let admin = new Admin();

class User {
  get nombre() {
    return "Ellis";
  }
  set nombre(nombre) {}
}

let user = new User();
console.log(user.nombre);

class Api {
  static ENDPOINT = "localhost:3000";
  static get() {
    console.log("Soy un metodo estatico");
  }
}

Api.get();

console.log(Api.ENDPOINT);
