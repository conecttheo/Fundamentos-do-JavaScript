const nota1 = 4.8;
const nota2 = 3.1;
const nota3 = 2.1;

function minimo(n1, n2) {
    return n1 <= n2 ? n1 : n2;
}

function media(n1, n2, n3) {
    const menorNota = minimo(n1, minimo(n2, n3));

    if(menorNota === n1) {
        return (n2 + n3) / 2;
    } else if(menorNota === n2) {
        return (n1 + n3) / 2;
    } else {
        return (n1 + n2) / 2;
    }
}

function mediaParaStatus(media) {
    if(media >= 7) {
        return "APROVADO";
    } else if(media >= 4) {
        return "RECUPERAÇÃO";
    } else {
        return "REPROVADO";
    }
    
}
const mediaFinal = media(nota1, nota2, nota3);
const statusFinal = mediaParaStatus(mediaFinal)
console.log(`O redultado final do aluno é ${statusFinal}!!`);