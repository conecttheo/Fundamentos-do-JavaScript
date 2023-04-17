const hora = 23;
let saudacao;

if(hora < 12) {
    saudacao = "Bom dia mundo!";
} else if(hora < 18) {
    saudacao = "Boa tarde mundo!";
} else if(hora < 22) {
    saudacao = "Boa noite mundo!";
} else {
    saudacao = "muito tarde para dizer";
}


console.log(saudacao); 