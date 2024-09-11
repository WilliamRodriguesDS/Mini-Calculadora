let numero = "";

function reset(){
    let output = document.querySelector("#output");
    numero = "";
    output.innerHTML = numero;
}

function criar(){
    let output = document.querySelector("#output");
    if(numero === ""){
        numero = parseFloat(prompt("Digite um número"));
        output.innerHTML = numero;
    }
    else{
        alert("Número existante ou NaN, clique no botão de reset");
    }
}

function calcular(calcule){
    if(numero == "" || isNaN(numero)){
        alert("Crie um número para continuar");
    }
    else{
        let n2 = parseFloat(prompt("Digite um número para efutar a operação"));
        if(numero != ""){
            switch(calcule){
                case "+":
                    numero += n2;
                    break;
                case "-":
                    numero -= n2;
                    break;
                case "*":
                    numero *= n2;
                    break;
                case "/":
                    if(n2 == 0){
                        alert("Impossível dividir o número 0");
                    }
                    else{
                        numero /= n2;
                    }
            }
        }
    else{
        alert("Crie um número para continuar")
    }
    }

    let output = document.querySelector("#output");
    output.innerHTML = numero;
}
