//Peça ao usuário digitar um número
let numero = prompt("Digite um número");
//converta para número
numero = parseFloat(numero);
//crie uma variavel output
let output = document.querySelector("#output");
//Inserir número no browser
output.innerHTML = numero;
//Criar a função escreva(){}
function escreva(){
    let output = document.querySelector("#output")
    output.innerHTML = numero;
}
function calcular(calcule){
    //crie uma variavel indice
    let indice = prompt("Digite outro número")
    //converta para número
    indice = parseFloat(indice)
    //usar switch para especificar a operação
    switch(calcule){
        case "+":
            numero += indice;
            break;
        case "-":
            numero -= indice;
            break;
        case "*":
            numero *= indice;
            break;
        case "/":
            numero /= indice;
            break;
        case "reset":
        numero = indice;

    }
    escreva();
}
