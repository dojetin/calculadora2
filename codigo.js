var num1 = 'e';
var num2 = 'y';
var opera = 0;

function borrar() {
    document.getElementById("resultado").value = ' ';

}

function sumita() {
    if (num1 = !'e') {
        opera = 1
    }
}

function restita() {
    if (num1 = !'e') {
        opera = 2
    }
}

function mupli() {
    if (num1 = !'e') {
        opera = 3
    }
}

function divi() {
    if (num1 = !'e') {
        opera = 4
    }
}

function valor(numero) {
    var states;
    if (document.getElementById("resultado").value == ' ') {
        document.getElementById("resultado").value = numero
        num1 = document.getElementById("resultado").value
    } else if (opera == 0) {
        document.getElementById("resultado").value = document.getElementById("resultado").value + numero
        num1 = document.getElementById("resultado").value
    } else {
        document.getElementById("resultado").value = document.getElementById("resultado").value + numero
        num2 = document.getElementById("resultado").value
    }


}