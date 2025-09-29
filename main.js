window.calcularIMC = function() {
let peso = document.getElementById("peso").value;
let altura = document.getElementById("altura").value;
let resultado = document.getElementById("seuimc");

peso = parseFloat(peso);
altura = parseFloat(altura);

if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.innerText = "Por favor, insira valores válidos.";
        return;
    }

    altura = altura / 100;

    let imc = peso / (altura * altura);
    imc = imc.toFixed(2);

    let seuimce = "";

    if (imc < 18.5) {
        seuimce = "Abaixo do peso";
    } else if (imc < 24.9) {
        seuimce = "Peso normal";
    } else if (imc < 29.9) {
        seuimce = "Sobrepeso";
    } else if (imc < 34.9) {
        seuimce = "Obesidade grau 1";
    } else if (imc < 39.9) {
        seuimce = "Obesidade grau 2";
    } else {
        seuimce = "Obesidade grau 3";
    }

    resultado.innerText = `Seu IMC é ${imc} (${seuimce})`;

}
