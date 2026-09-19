function calculadora(num1, num2, operador) {
    let resultado;

    if (operador === "+") {
        resultado = num1 + num2;
    } else if (operador === "-") {
        resultado = num1 - num2;
    } else if (operador === "*") {
        resultado = num1 * num2;
    } else if (operador === "/") {
        if (num2 === 0) {
            return "Error: no se puede dividir por 0";
        }
        resultado = num1 / num2;
    } else {
        return "Operador no válido";
    }

    return resultado;
}

console.log("Suma:", calculadora(10, 5, "+"));
console.log("Resta:", calculadora(10, 5, "-"));
console.log("Multiplicación:", calculadora(10, 5, "*"));
console.log("División:", calculadora(10, 5, "/"));
console.log("División por 0:", calculadora(10, 0, "/"));