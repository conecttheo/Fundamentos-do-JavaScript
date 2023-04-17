function criarData(dia, mes, ano) {
    return {
        dia, mes, ano,
        exibir() {
            return `${this.dia}/${this.mes}/${this.ano}`;
        }
    };
}
const d1 = criarData(31, 10, 1988);
const d2 = criarData(10, 03, 1997);
const d3 = criarData(25, 08, 2003);

console.log(d1.exibir())
console.log(d2.exibir())
console.log(d3.exibir())