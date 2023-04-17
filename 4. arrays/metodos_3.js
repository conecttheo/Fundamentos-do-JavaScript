const numeros = [17, 29, 34];

//numeros.forEach(function() {
//    console.log('Dentro do forEach')
//})

function paraCadaElemento(elemento, indice, array) {
    console.log(elemento, indice, array)
}
numeros. forEach(paraCadaElemento)

//for(let n of numeros) {
//    console.log(n);
//}

//for (let i = 0; i < numeros.length; i++) {
//    console.log(numeros[i]);   
//}