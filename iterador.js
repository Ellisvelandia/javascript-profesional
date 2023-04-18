//iteradores
let iterador = {
  currentValue: 1,
  next() {
    let result = {
      value: null,
      done: true,
    };

    if (this.currentValue > 0 && this.currentValue <= 5) {
      result = { value: this.currentValue, done: false };
      this.currentValue += 1;
    } else {
      result = { done: true };
    }
    return result;
  },
};

let item = iterador.next();
while (!item.done) {
  console.log(item.value);
  item = iterador.next();
}

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
