class Persona {
    constructor(nombre, edad, genero) {
      this.nombre = nombre;
      this.edad = edad;
      this.genero = genero;
    }
  
    caminar() {
      console.log(this.nombre + " está caminando.");
    }
  
    hablar() {
      console.log(this.nombre + " está hablando.");
    }
  }
  
  let persona1 = new Persona("Juan", 25, "Masculino");
  
  persona1.caminar();
  persona1.hablar();
  