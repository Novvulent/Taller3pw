const empleados = [
    { nombre: "Ana", salario: 3000 },
    { nombre: "Luis", salario: 5000 },
    { nombre: "Pedro", salario: 2500 },
    { nombre: "Sara", salario: 7000 }
];

const empleadosFiltrados = empleados.filter(function(empleado) {
    return empleado.salario >= 4000;
});

console.log(empleadosFiltrados);