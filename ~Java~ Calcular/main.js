function soma(){
    var numero_1 = +document.querySelector('#campo-1').value;
    var numero_2 = +document.querySelector('#campo-2').value;
    var resultado = numero_1 + numero_2;
    //alert(resultado);
    document.querySelector('#resultado').value = resultado;
}

function subtração(){
    var numero_1 = +document.querySelector('#campo-1').value;
    var numero_2 = +document.querySelector('#campo-2').value;
    var resultado = numero_1 - numero_2;
    //alert(resultado);
    document.querySelector('#resultado').value = resultado;
}

function multiplicação(){
    var numero_1 = +document.querySelector('#campo-1').value;
    var numero_2 = +document.querySelector('#campo-2').value;
    var resultado = numero_1 * numero_2;
    //alert(resultado);
    document.querySelector('#resultado').value = resultado;
}

function divisão(){
    var numero_1 = +document.querySelector('#campo-1').value;
    var numero_2 = +document.querySelector('#campo-2').value;
    var resultado = numero_1 / numero_2;
    //alert(resultado);
    document.querySelector('#resultado').value = resultado;
}

function modulo(){
    var numero_1 = +document.querySelector('#campo-1').value;
    var numero_2 = +document.querySelector('#campo-2').value;
    var resultado = numero_1 % numero_2;
    //alert(resultado);
    document.querySelector('#resultado').value = resultado;
}

// Modo Avançado //

function calcula(sinal){
    if (sinal =="+"){

    }
}