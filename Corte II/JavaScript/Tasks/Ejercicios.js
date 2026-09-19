/**
 * TODO: EJERCICIO 1 - Calculadora Básica
 * Crea una función llamada calculadora que reciba dos números y un operador (+, -, *, /).
 * La función debe retornar el resultado de la operación
 * Debe imprimir un ejemplo con cada operador
 * Tener en cuenta la division por 0
 * Ejemplo: calculadora(10, 5, "+"); -> Resultado esperado: 15 
 */

/**
 * TODO: EJERCICIO 2 - Tabla de Multiplicar
 * Crea una función llamada tablaMultiplicar.
 * Debe recibir 2 numeros:
 *  - El primero es el numero de la tabla de multiplicar
 *  - El segundo es la cantidad de operaciones a realizar
 * Debe imprimir la tabla de multiplicar solicitada
 * Ejemplo: 2 y 15 -> Tabla de Multiplicar del 2 al 15
 */

/**
 * TODO: EJERCICIO 3 - Gestión de Producto
 * Tienes el siguiente arreglo.
 * Realiza las siguientes operaciones:
 *  - Agregar "Monitor"
 *  - Agregar "Audífonos" al inicio
 *  - Eliminar el último elemento
 *  - Mostrar el arreglo final
 */

const productos = ["Laptop", "Mouse", "Teclado"];

/**
 * TODO: EJERCICIO 4 - Inventario de Estudiantes
 * Crea un objeto llamado estudiante. Debe contener:
 *  - nombre
 *  - edad
 *  - carrera
 *  - materias (array)
 * Posteriormente:
 *  - Cambia la edad.
 *  - Agrega una nueva materia.
 *  - Muestra todas las propiedades utilizando Object.entries() (Investigar).
 */
const estudiante = {
    nombre: "Laura",
    edad: 20,
    carrera: "Ingeniería",
    materias: [
        "Matemáticas",
        "Programación"
    ]
};

/**
 * EJERCICIO 5 - Filtrar Empleados
 * Dado el siguiente arreglo:
 * Obtén un nuevo arreglo que contenga únicamente los empleados 
 * cuyo salario sea mayor o igual a 4000.
 */
const empleados = [
    { nombre: "Ana", salario: 3000 },
    { nombre: "Luis", salario: 5000 },
    { nombre: "Pedro", salario: 2500 },
    { nombre: "Sara", salario: 7000 }
];

const empleadosFiltrados = empleados.filter(function (empleado) {
    return empleado.salario >= 4000;
});

console.log("=== EJERCICIO 5 - Filtrar Empleados ===");
console.log("Empleados con salario >= 4000:", empleadosFiltrados);

/**
 * EJERCICIO 6 - Estadísticas de Ventas
 * Dado el siguiente arreglo:
 * Calcular:
 *  - Total vendido.
 *  - Venta más alta (Math.max investigar).
 *  - Promedio de ventas.
 */
const ventas = [250, 400, 150, 600, 800];

const totalVendido = ventas.reduce(function (acumulador, ventaActual) {
    return acumulador + ventaActual;
}, 0);

const ventaMasAlta = Math.max(...ventas);

const promedioVentas = totalVendido / ventas.length;

console.log("\n=== EJERCICIO 6 - Estadísticas de Ventas ===");
console.log("Total vendido:", totalVendido);       // 2200
console.log("Venta más alta:", ventaMasAlta);       // 800
console.log("Promedio de ventas:", promedioVentas); // 440

/**
 * EJERCICIO 7 - Catálogo de Libros
 * Dado el siguiente arreglo:
 * Realiza las siguientes operaciones:
 *  - Encontrar el libro con id 2.
 *  - Obtener solo los libros disponibles.
 *  - Crear un arreglo únicamente con los títulos.
 */

const libros = [
    {
        id: 1,
        titulo: "JavaScript",
        disponible: true
    },
    {
        id: 2,
        titulo: "Python",
        disponible: false
    },
    {
        id: 3,
        titulo: "Java",
        disponible: true
    }
];


const libroId2 = libros.find(function (libro) {
    return libro.id === 2;
});

const librosDisponibles = libros.filter(function (libro) {
    return libro.disponible === true;
});


const titulosLibros = libros.map(function (libro) {
    return libro.titulo;
});

console.log("\n=== EJERCICIO 7 - Catálogo de Libros ===");
console.log("Libro con id 2:", libroId2);
console.log("Libros disponibles:", librosDisponibles);
console.log("Solo los títulos:", titulosLibros);

/**
 * EJERCICIO 8 - Copias y Referencias
 * Dado el siguiente objeto:
 * Realiza lo siguiente:
 *  - Crea una copia del usuario utilizando asignación (=).
 *  - Modifica el nombre de la copia.
 *  - Observa el resultado de ambos.
 *  - Ahora crea una copia utilizando Spread.
 *  - Modifica nuevamente el nombre.
 *  - Observa el resultado de ambos.
 *  - Explica la diferencia entre ambos casos.
 */

const usuario = {
    nombre: "Carlos",
    edad: 30
};

console.log("\n=== EJERCICIO 8 - Copias y Referencias ===");


const copiaAsignacion = usuario;
copiaAsignacion.nombre = "Andrés";

console.log("-- Copia con asignación (=) --");
console.log("usuario:", usuario);                 
console.log("copiaAsignacion:", copiaAsignacion);  


const copiaSpread = { ...usuario };
copiaSpread.nombre = "Mariana";

console.log("-- Copia con Spread (...) --");
console.log("usuario:", usuario);           
console.log("copiaSpread:", copiaSpread);   

// --- Explicación de la diferencia ---
console.log(`
Explicación:
- Con la asignación (=), "copiaAsignacion" y "usuario" apuntan al
  MISMO objeto en memoria. Modificar una modifica la otra, porque
  no existen dos objetos, sino una sola referencia compartida.
- Con el operador Spread (...), se crea un objeto completamente
  NUEVO en memoria, con sus propias propiedades copiadas. Por eso,
  al modificar "copiaSpread", el objeto "usuario" original permanece
  intacto.
`);

/**
 * EJERCICIO 9 - Desestructuración
 * Dado el siguiente objeto:
 * Realiza las siguientes tareas:
 *  - Extrae las propiedades marca y ram.
 *  - Renombra almacenamiento como ssd.
 *  - Asigna un valor por defecto a una propiedad llamada tarjetaGrafica.
 */

const computador = {
    marca: "Lenovo",
    procesador: "Intel i7",
    ram: 16,
    almacenamiento: 512
};


const {
    marca,
    ram,
    almacenamiento: ssd,
    tarjetaGrafica = "Integrada"
} = computador;

console.log("\n=== EJERCICIO 9 - Desestructuración ===");
console.log("marca:", marca);                     // "Lenovo"
console.log("ram:", ram);                          // 16
console.log("ssd (antes almacenamiento):", ssd);   // 512
console.log("tarjetaGrafica (valor por defecto):", tarjetaGrafica); // "Integrada"

/**
 * EJERCICIO 10 - Sistema de Gestión de Estudiantes
 * Dado el siguiente arreglo:
 * Desarrolla un programa que permita:
 *  - Mostrar únicamente los estudiantes aprobados (nota mayor o igual a 3.0).
 *  - Mostrar únicamente los mayores de edad.
 *  - Obtener un arreglo únicamente con los nombres.
 *  - Buscar al estudiante con id 3.
 *  - Calcular el promedio de todas las notas.
 *  - Encontrar el estudiante con la nota más alta.
 *  - Crear un nuevo arreglo agregando la propiedad estado, cuyo valor será "Aprobó" o "Reprobó" según la nota.
 *  - Realizar una copia del arreglo utilizando el operador Spread.
 */

const estudiantes2 = [
    {
        id: 1,
        nombre: "Ana",
        nota: 4.5,
        edad: 20
    },
    {
        id: 2,
        nombre: "Luis",
        nota: 3.8,
        edad: 18
    },
    {
        id: 3,
        nombre: "Carlos",
        nota: 4.9,
        edad: 22
    },
    {
        id: 4,
        nombre: "Laura",
        nota: 2.9,
        edad: 19
    }
];

console.log("\n=== EJERCICIO 10 - Sistema de Gestión de Estudiantes ===");

const estudiantesAprobados = estudiantes2.filter(function (estudiante) {
    return estudiante.nota >= 3.0;
});
console.log("1) Aprobados (nota >= 3.0):", estudiantesAprobados);

const estudiantesMayoresDeEdad = estudiantes2.filter(function (estudiante) {
    return estudiante.edad >= 18;
});
console.log("2) Mayores de edad (edad >= 18):", estudiantesMayoresDeEdad);

const nombresEstudiantes = estudiantes2.map(function (estudiante) {
    return estudiante.nombre;
});
console.log("3) Solo nombres:", nombresEstudiantes);

const estudianteId3 = estudiantes2.find(function (estudiante) {
    return estudiante.id === 3;
});
console.log("4) Estudiante con id 3:", estudianteId3);

const sumaNotas = estudiantes2.reduce(function (acumulador, estudiante) {
    return acumulador + estudiante.nota;
}, 0);
const promedioNotas = sumaNotas / estudiantes2.length;
console.log("5) Promedio de notas:", promedioNotas.toFixed(2));

const estudianteNotaMasAlta = estudiantes2.reduce(function (mejor, actual) {
    return actual.nota > mejor.nota ? actual : mejor;
});
console.log("6) Estudiante con la nota más alta:", estudianteNotaMasAlta);


const estudiantesConEstado = estudiantes2.map(function (estudiante) {
    return {
        ...estudiante,
        estado: estudiante.nota >= 3.0 ? "Aprobó" : "Reprobó"
    };
});
console.log("7) Estudiantes con propiedad 'estado':", estudiantesConEstado);


const copiaEstudiantes = [...estudiantes2];
console.log("8) Copia del arreglo con Spread:", copiaEstudiantes);
console.log("   ¿Es el mismo arreglo en memoria? (===):", copiaEstudiantes === estudiantes2); // false
