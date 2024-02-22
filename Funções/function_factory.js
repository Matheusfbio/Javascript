function criaPessoa(name, lastname, w, h) {
  return {
    name,
    lastname,
    speak(about) {
      return `${this.name} is ${about}.`;
    },
    weight: w,
    height: h,
    imc() {
      const indice = this.height / this.weight ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Matheus", "Fabio", 2.7, 92);
console.log(p1.imc());
