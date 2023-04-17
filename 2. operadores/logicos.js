let temDinheiro = false;
let estaEnsolarado = false;
let carroEstaNaGaragem = false;

let resultadoE = " #1 - vai pro shopping? ";
resultadoE += temDinheiro && estaEnsolarado; // AND = &&
console.log(resultadoE);

let resultadoOU = " #2 - vai pro shopping? "; // OU = ||
resultadoOU += estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOU);