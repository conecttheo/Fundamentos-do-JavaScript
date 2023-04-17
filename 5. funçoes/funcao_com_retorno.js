function sempreRetornaUm() {
    return 1;
}

function textoOuNumero(retornaTexto) {
    return retornaTexto ? 'sou um grande texto' : 456;
  //  if(retornaTexto) {
  //      return "sou um texto!";
  //  } else {
  //      return 123;
  //  }
}

let valor = sempreRetornaUm() + 999
console.log(valor);

let texto = textoOuNumero(true);
console.log(texto);

console.log(textoOuNumero(false));