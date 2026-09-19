type Producto = {
    id: number;
    nombre: string;
    precio: number;
    disponible: boolean;
};

const producto1: Producto = {
    id: 1,
    nombre: "Laptop",
    precio: 2500,
    disponible: true
};

const producto2: Producto = {
    id: 2,
    nombre: "Mouse",
    precio: 50,
    disponible: false
};

console.log(producto1);
console.log(producto2);