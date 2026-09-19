const numeros: number[] = [1, 2, 3, 4];
const textos: string[] = ["a", "b", "c"];
const booleanos: boolean[] = [true, false, true];

numeros.push(5);
textos.push("d");
booleanos.push(false);

numeros.pop();
textos.pop();
booleanos.pop();

for (const numero of numeros) {
    console.log(numero);
}

for (const texto of textos) {
    console.log(texto);
}

for (const booleano of booleanos) {
    console.log(booleano);
}