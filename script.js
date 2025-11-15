// variables 
let numeroActual = "";
let numeroAnterior = "";
let operacion = null;

const pantalla = document.getElementById("pantalla");

// botones numéricos
document.querySelectorAll(".btn").forEach(boton => {
    boton.addEventListener("click", () => {
        numeroActual += boton.dataset.num;
        actualizarPantalla(numeroActual);
    });
});

// botones de operaciones
document.querySelectorAll(".op").forEach(boton => {
    boton.addEventListener("click", () => {
        if (numeroActual === "") return;

        if (numeroAnterior !== "") calcular();

        operacion = boton.dataset.op;
        numeroAnterior = numeroActual;
        numeroActual = "";
    });
});

// botón resultado
document.getElementById("resultado").addEventListener("click", () => {
    if (numeroActual === "" || numeroAnterior === "" || operacion === null) return;
    calcular();
});

// botón limpiar
document.getElementById("limpiar").addEventListener("click", () => {
    numeroActual = "";
    numeroAnterior = "";
    operacion = null;
    actualizarPantalla("0");
});

// función para mostrar números
function actualizarPantalla(valor) {
    pantalla.textContent = valor;
}

// función para operar
function calcular() {
    let resultado;

    const n1 = parseFloat(numeroAnterior);
    const n2 = parseFloat(numeroActual);

    switch (operacion) {
        case "+": resultado = n1 + n2; break;
        case "-": resultado = n1 - n2; break;
        case "*": resultado = n1 * n2; break;
        case "/": resultado = n1 / n2; break;
    }

    actualizarPantalla(resultado);
    numeroActual = resultado.toString();
    numeroAnterior = "";
    operacion = null;
}

