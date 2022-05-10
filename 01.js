// Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.

class persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    obtDetalles() {
        console.log(`${this.nombre}, en un/a ${this.genero} de ${this.edad}`)
    }
}

let paco = new persona('Paco', 25, 'mujer');
paco.obtDetalles();

// Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.

class estudiante extends persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }
    registrar() {
        console.log(`El/la estudiante se llama ${this.nombre}, es ${this.genero} y tiene ${this.edad} años. Actualmente estudia en el grupo ${this.grupo} de ${this.curso}`)
    }
}

let julian = new estudiante('Julian', 25, 'mujer', 'FullStack', 'FullTime')
julian.registrar();



// Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.
class profesor extends persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    asignar() {
        console.log(`El/la profesor/a se llama ${this.nombre}, es ${this.genero} y tiene ${this.edad} años. Actualmente da clases de ${this.asignatura} a alumnos de ${this.nivel}.`);
    }

}

let juana = new profesor('Juana', 12, 'hombre', 'filosofia', 'guarderia');
juana.asignar();