const carrinho = [
    { nome: "caneta", qtds: 10, preco: 7.99, fragil: true},
    { nome: "Impressora", qtds: 1, preco: 649.50, fragil: true},
    { nome: "Caderno", qtds: 4, preco: 27.10, fragil: false},
    { nome: "Lapis", qtds: 3, preco: 5.82, fragil: false},
    { nome: "Tesoura", qtds: 1, preco: 19.20, fragil: true},

]

// filter, map, reduce

//1. fregil: true
//2. qtd * preco -> total
//3. media totais

//1.
const media = carrinho
    .filter(item => item.fragil)
//2.
    .map(item => item.qtds * item.preco)
//3.
    .reduce((acc, el) => {
        const novaQtds = acc.qtds + 1
        const novoTotal = acc.total + el
        return {
            qtds: novaQtds,
            total: novoTotal,
            media: novoTotal / novaQtds
        }
    }, {qtds: 0, total: 0, media: 0})


console.log(media);