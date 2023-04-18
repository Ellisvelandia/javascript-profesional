//generador

function* counter() {
  try {
    console.log("Estoy aqui");
    yield 1;
    console.log("Ahora esoty aqui");
    yield 2;
  } catch (error) {
    console.error(error);
  }
}

let genetor = counter();

console.log(genetor.next());
console.log(genetor.next());
console.log(genetor.next());

function* count() {
  for (let i = 0; i <= 5; i++) {
    yield i;
  }
}

let generators = count();

function* retornador() {
  yield* count();
}

let g = retornador();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());

let simbolo = Symbol("mi simbolo");

let obj = {};

obj[simbolo] = function () {
  console.log("ni nombre es simbolo");
};

obj[simbolo]();
