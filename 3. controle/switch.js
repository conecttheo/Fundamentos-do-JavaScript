
let nota = 15;

switch(Math.ceil(nota)) {
    case 10:
    case 9:
    case 8:
    case 7:
        console.log('parabens');
        break;
    case 6: case 5:
        console.log('recuperação')
        break;
    case 4:
    case 3:
    case 2:
        console.log('reprovado');
        break;
    case 1: case 0:
        console.log('muito reprovado');
        break;
    default:
            console.log('nota invalida');
}

console.log('fim')