//Peça para que o usuário digite um número
let numero = prompt("Usúario, digite um número para que possamos começar");
//converter para número
numero = parseFloat(numero);
//Inserir o número no browser, digitado pelo usuário
output.innerHTML = numero;
//Criar uma função escrever
function escrever(){
    //crie uma variavel output
    let output = document.querySelector("#output");
    output.innerHTML = numero;
    escrever();
    //essa função ajuda pega o número digitado pelo usuário, e então ser utilizado para outras funções como somar, multiplicar, dividir e substratir
}
//Crie uma função somar
function Somar(){
    //criar uma variavel indice
    let indice = prompt("Digite um número para somar com seu número digitado, anteriomente");
    //converta para número
    indice = parseFloat(indice);
    //Agora substitua o antigo valor pelo novo
    numero = numero + indice;
    escrever();
}
//Crie uma função substrair
function Substrair(){
    //criar uma variavel indice
    let indice = prompt("Digite um número para substrair com seu número digitado, anteriomente")
    //converta para número
    indice = parseFloat(indice);
    //substitua pelo o antigo valor pelo número
    numero = numero - indice;
    escrever();
}
//Crie uma função multiplicar
function Multiplicar(){
    //criar uma variavel indice
    let indice = prompt("Digite um número para multiplicar com seu número digitado, anteriomente")
    //converta para número
    indice = parseFloat(indice);
    //substitua pelo o antigo valor pelo novo
    numero = numero * indice;
    escrever();
}
//Crie uma função dividir
function Dividir(){
    //criar uma variavel indice
    let indice = prompt("Digite um número para dividir com seu número digitado, anteriomente")
    //converta para número
    indice = parseFloat(indice);
    //substitua pelo o antigo valor pelo novo
    numero = numero / indice;
    escrever();
}
//crie uma função resetar
function Resetar(){
    //crie uma variavel indice
    let indice = prompt("Escolha um novo número para que possamos recomeçar");
    //converta para numero
    indice = parseFloat(indice);
    //substitua o número pela indice
    numero = indice;
    escrever();
}
//Fim! é isso, falou ai
