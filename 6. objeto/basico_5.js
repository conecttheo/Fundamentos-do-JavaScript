const cliente = {
    codigo: 16532,
    nome: 'Ana',
    vip: true,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123,
        complemento: 'apt 96 bloco B',
        pontosRef: [
            {nome: 'roldão atacadista', muitoProximo: true},
            {nome: 'center vale shopping', muitoProximo: false},
        ]
    },
    nomeFilhos: ['Bia', 'Carlos', 'Gabriel']
};
console.log(cliente['endereco']['logradouro']);
console.log(cliente.endereco.logradouro);
console.log(cliente.endereco.pontosRef[0].muitoProximo);