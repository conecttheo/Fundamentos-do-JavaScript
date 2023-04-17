// #1: Função COM parametros e COM retorno
function somar(a, b) {
    return a + b;
}

let resultado = somar(30, 56);
console.log(resultado);
// console.log(somar(30, 56));

// #2: Função COM parametros e SEM retorno
function exibirMultiplicacao(a, b) {
    console.log(a * b);
}

exibirMultiplicacao(10, 21);

// #3: Função SEM parametros e COM retorno
function retornarDataAtual() {
    return new Date();
}

console.log(retornarDataAtual())

// #4: Função SEM parametros e SEM retorno
function exibirHoraAtual() {
    console.log(new Date().getHours())
}

exibirHoraAtual();
   
