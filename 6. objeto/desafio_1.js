const nascimento = {
    dia: 31,
    mes: 10,
    ano: 1998,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}/`;
    }
};

console.log(nascimento.exibir())