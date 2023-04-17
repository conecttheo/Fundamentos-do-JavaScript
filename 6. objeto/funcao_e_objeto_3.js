// função construtora (classe) -> objeto
function Data(dia = 1, mes = 1, ano = 2001) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;

    this.exibir = function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}

const d1 = new Data();
d1.ano = 1970
const d2 = new Data(24, 12, 2002);
const d3 = new Data(07, 09, 2008);

console.log(d1);
console.log(d2);
console.log(d3);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());