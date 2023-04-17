//ciclos
/*
for
1 intruccion inicial
condicion
instrucion despues de cada interacion
*/

for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i % 2 != 2) {
    continue;
  }
}

//while
let e = 10;
while (e <= 10) {
  console.log(e);
  e++;
}

//undefined , null y NaN  = tipos de datos
nombre = null;
console.log(typeof nombre);
