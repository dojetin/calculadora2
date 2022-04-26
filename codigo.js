function sumar() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var suma = Number(num1) + Number(num2);
    document.getElementById("res").value = suma;
}

function restar() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var suma = Number(num1) - Number(num2);
    document.getElementById("res").value = suma;
}

function Multiplicar() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var suma = Number(num1) * Number(num2);
    document.getElementById("res").value = suma;
}

function Dividir() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var suma = Number(num1) / Number(num2);
    document.getElementById("res").value = suma;
}