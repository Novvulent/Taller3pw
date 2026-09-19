const estudiante = {
    nombre: "Laura",
    edad: 20,
    carrera: "Ingeniería",
    materias: [
        "Matemáticas",
        "Programación"
    ]
};

estudiante.edad = 21;
estudiante.materias.push("Bases de Datos");

console.log(Object.entries(estudiante));