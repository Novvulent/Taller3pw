/**
 * TODO: TALLER DE TYPESCRIPT
 */


/**
 * TODO: EJERCICIO 1 - Tipos Básicos
 *
 * Declara las siguientes variables utilizando
 * el tipo de dato correcto:
 *
 * - nombre
 * - edad
 * - salario
 * - estaActivo
 * - ciudad
 *
 * Posteriormente:
 * - Imprime todas las variables y luego su tipo de dato con typeof.
 * - Ej: console.log(variable, typeof variable)
 */


/**
 * TODO: EJERCICIO 2 - Arrays Tipados
 *
 * Crea los siguientes arreglos:
 *
 * - Un arreglo de números.
 * - Un arreglo de strings.
 * - Un arreglo de booleanos.
 *
 * Después:
 *
 * - Agrega un nuevo elemento (uso del push).
 * - Elimina el último elemento (uso del pop).
 * - Recorre cada arreglo utilizando for...of.
 */


/**
 * TODO: EJERCICIO 3 - Crear un Type
 *
 * Crea un type llamado Producto que contenga:
 *
 * - id
 * - nombre
 * - precio
 * - disponible
 *
 * Después:
 *
 * - Crea dos productos.
 * - Imprime ambos productos.
 */


/**
 * TODO: EJERCICIO 4 - Interfaces
 *
 * Crea una interface llamada Empleado.
 *
 * Debe contener:
 *
 * - nombre
 * - cargo
 * - salario
 *
 * Después:
 *
 * - Crea dos empleados.
 * - Muéstralos por consola.
 */


/**
 * EJERCICIO 5 - Union Types
 *
 * Crea una función llamada mostrarDato.
 *
 * Debe recibir un parámetro que pueda ser:
 *
 * - string
 * - number
 *
 * Si recibe un string deberá mostrarlo en mayúsculas (uso del toUpperCase).
 * Si recibe un número deberá mostrarlo con dos decimales (uso del toFixed).
 */

function mostrarDato(dato: string | number): void {
 
    if (typeof dato === "string") {
        console.log("Dato tipo string en mayúsculas:", dato.toUpperCase());
    } else {
        console.log("Dato tipo number con dos decimales:", dato.toFixed(2));
    }
}

console.log("=== EJERCICIO 5 - Union Types ===");
mostrarDato("hola mundo"); // -> "HOLA MUNDO"
mostrarDato(15);           // -> "15.00"
mostrarDato(7.5);          // -> "7.50"


/**
 * EJERCICIO 6 - Enums
 *
 * Crea un enum llamado EstadoPedido.
 *
 * Debe contener:
 *
 * - Pendiente
 * - EnProceso
 * - Enviado
 * - Entregado
 *
 * Después:
 *
 * - Crea una variable utilizando el enum.
 * - Imprime su valor.
 */


enum EstadoPedido {
    Pendiente,
    EnProceso,
    Enviado,
    Entregado
}


const estadoActual: EstadoPedido = EstadoPedido.Enviado;

console.log("\n=== EJERCICIO 6 - Enums ===");
console.log("Estado actual (valor numérico):", estadoActual);            
console.log("Estado actual (nombre):", EstadoPedido[estadoActual]);      


/**
 * ==========================================================
 */


/**
 * EJERCICIO 7 - Clases
 *
 * Crea una clase llamada Vehiculo.
 *
 * Debe contener:
 *
 * - marca
 * - modelo
 *
 * Agrega un método llamado mostrarInformacion()
 * que imprima ambas propiedades.
 *
 * Crea dos objetos utilizando la clase.
 */

class Vehiculo {
    marca: string;
    modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    mostrarInformacion(): void {
        console.log(`Vehículo -> Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
}

console.log("\n=== EJERCICIO 7 - Clases ===");
const vehiculo1 = new Vehiculo("Toyota", "Corolla");
const vehiculo2 = new Vehiculo("Mazda", "CX-5");

vehiculo1.mostrarInformacion();
vehiculo2.mostrarInformacion();


/**
 * EJERCICIO 8 - Herencia
 *
 * Crea una clase Persona.
 *
 * Debe contener:
 *
 * - nombre
 * - edad
 *
 * Luego crea una clase Estudiante
 * que herede de Persona.
 *
 * Agrega la propiedad carrera.
 *
 * Finalmente crea un estudiante
 * e imprime toda su información.
 */

class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrarInformacion(): void {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}


class Estudiante extends Persona {
    carrera: string;

    constructor(nombre: string, edad: number, carrera: string) {
        
        super(nombre, edad);
        this.carrera = carrera;
    }

   
    mostrarInformacion(): void {
        super.mostrarInformacion(); 
        console.log(`Carrera: ${this.carrera}`);
    }
}

console.log("\n=== EJERCICIO 8 - Herencia ===");
const estudiante1 = new Estudiante("Sofía", 21, "Ingeniería de Sistemas");
estudiante1.mostrarInformacion();


/**
 * EJERCICIO 9 - Generics
 *
 * Crea una función genérica llamada
 * obtenerPrimero().
 *
 * Debe recibir un arreglo de cualquier tipo
 * y retornar el primer elemento.
 *
 * Prueba la función con:
 *
 * - Un arreglo de números.
 * - Un arreglo de strings.
 * - Un arreglo de booleanos.
 */


function obtenerPrimero<T>(arreglo: T[]): T {
    return arreglo[0];
}

console.log("\n=== EJERCICIO 9 - Generics ===");

const numeros: number[] = [10, 20, 30];
const palabras: string[] = ["rojo", "verde", "azul"];
const booleanos: boolean[] = [true, false, true];


console.log("Primero de números:", obtenerPrimero(numeros));     // 10
console.log("Primero de strings:", obtenerPrimero(palabras));    // "rojo"
console.log("Primero de booleanos:", obtenerPrimero(booleanos)); // true


/**
 * EJERCICIO 10 - Sistema de Usuarios
 *
 * Desarrolla un pequeño sistema utilizando
 * todo lo aprendido durante el curso.
 *
 * Requisitos:
 *
 * 1. Crear un type llamado Usuario.
 *
 * Debe contener:
 *
 * - id
 * - nombre
 * - edad
 * - activo
 *
 * 2. Crear un arreglo tipado de usuarios.
 *
 * 3. Crear una función para agregar usuarios (uso del push).
 *
 * 4. Crear una función para buscar un usuario por su id (uso del find).
 *
 * 5. Crear una función para mostrar únicamente los usuarios activos (uso del filter).
 *
 * 6. Mostrar el arreglo final.
 */

type Usuario = {
    id: number;
    nombre: string;
    edad: number;
    activo: boolean;
};


const usuarios: Usuario[] = [
    { id: 1, nombre: "Ana", edad: 22, activo: true },
    { id: 2, nombre: "Luis", edad: 19, activo: false }
];

function agregarUsuario(nuevoUsuario: Usuario): void {
    usuarios.push(nuevoUsuario);
}


function buscarUsuarioPorId(id: number): Usuario | undefined {
    return usuarios.find(function (usuario) {
        return usuario.id === id;
    });
}

function obtenerUsuariosActivos(): Usuario[] {
    return usuarios.filter(function (usuario) {
        return usuario.activo === true;
    });
}

console.log("\n=== EJERCICIO 10 - Sistema de Usuarios ===");

agregarUsuario({ id: 3, nombre: "Carlos", edad: 25, activo: true });

console.log("Usuario con id 2:", buscarUsuarioPorId(2));
console.log("Usuario con id 99 (no existe):", buscarUsuarioPorId(99));

console.log("Usuarios activos:", obtenerUsuariosActivos());

console.log("Arreglo final de usuarios:", usuarios);


export {};
