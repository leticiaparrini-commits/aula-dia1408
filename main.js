import {somar} from "/.calculadora.js";

const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const botaoSomar = document.getElementById("btn-somar");
const resultado = document.getElementById("resultado");

botaoSomar.addEventListener("click", function() {
    const valorUm = Number(n1.value);
    const valorDois = Number (n2.value);

    const resultadoSoma = somar(valorUm, valorDois);

    resultado.innerHTML = resultadoSoma;
});
