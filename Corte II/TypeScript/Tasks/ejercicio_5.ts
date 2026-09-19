function mostrarDato(dato: string | number) {
    if (typeof dato === "string") {
        console.log(dato.toUpperCase());
    } else {
        console.log(dato.toFixed(2));
    }
}

mostrarDato("hola");
mostrarDato(15);