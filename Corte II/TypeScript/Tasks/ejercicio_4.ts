interface Empleado {
    nombre: string;
    cargo: string;
    salario: number;
}

const empleado1: Empleado = {
    nombre: "Carlos",
    cargo: "Desarrollador",
    salario: 4000
};

const empleado2: Empleado = {
    nombre: "María",
    cargo: "Diseñadora",
    salario: 3500
};

console.log(empleado1);
console.log(empleado2);