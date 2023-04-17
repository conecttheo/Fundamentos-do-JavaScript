const numeros = [1, 2, 3, 4, 5, 8];

numeros.splice(1, 1);
console.log(numeros);

numeros.pop(); //exclui o ultimo elemento
console.log(numeros);
console.log(numeros.pop()) //mostra qual numero foi excluido