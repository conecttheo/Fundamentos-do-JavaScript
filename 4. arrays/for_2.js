const notas = [7, 8, 3, 5, 1, 9, 8, 8];
//foreach

let valores = '';
for(let nota of notas) { // OF vai gerar os valores
   valores += nota + ' ';
}
console.log(valores)


let indices = '';
for(let indice in notas) { // IN vai gerar os indices
    indices += indice + ' '
}

console.log(indices)