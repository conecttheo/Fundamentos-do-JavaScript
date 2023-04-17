const hora = 9;
let saudacao;

if(hora < 12) {
    saudacao = "Bom dia mundo!";
} else {
    if(hora < 18) {
    saudacao = "Boa tarde mundo!";
} else {
    saudacao = "Boa noite mundo!";
}
}

console.log(saudacao);