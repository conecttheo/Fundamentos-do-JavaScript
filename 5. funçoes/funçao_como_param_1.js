function executar(fn) {
    if(typeof fn === "function")
       console.log(fn());
}

function bomDia() {
    return "Bom dia";
}

//executar(3)
executar(bomDia)