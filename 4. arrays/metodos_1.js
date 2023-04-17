const numeros = [1, 2, 3, 4, 5];


numeros[0] = 100
numeros.push(6);

console.log(numeros.join(' - ')); //acrescenta um elemento aos valores do array
const numeros2 = numeros. concat(7, 8, 9) //faz um novo array
console.log(numeros.includes(10)); //mosta numeros inclusos
console.log(numeros.indexOf(4))

console.log(numeros)
console.log(numeros2)