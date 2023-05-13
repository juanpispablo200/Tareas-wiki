class Animal {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    hablar() {
      console.log(this.nombre + " hace un sonido.");
    }
  }
  
  class Perro extends Animal {
    hablar() {
      console.log(this.nombre + " ladra.");
    }
  }
  
  class Gato extends Animal {
    hablar() {
      console.log(this.nombre + " maulla.");
    }
  }
  
  let miPerro = new Perro("Firulais");
  let miGato = new Gato("Garfield");
  
  miPerro.hablar();
  miGato.hablar();
  