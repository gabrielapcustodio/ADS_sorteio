// Código relacionado ao sorteio

// função para gerar números aleatórios em determinado intervalo
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// checa se o número já foi sorteado
function checarNumeroDuplicado(arr, el) {
    return arr.includes(el) === false;
}

export function sorteiaNumeros () {
    let numerosSorteados = [];
    let quantidadeDeNumeros = 0;
    
    // repete sorteio e insere números na lista
    while (quantidadeDeNumeros < 6) {
        var numero = getRandomIntInclusive(1, 60);
        if (checarNumeroDuplicado(numerosSorteados, numero)) {
            numerosSorteados.push(numero);
            quantidadeDeNumeros++;
        }
    }
    return numerosSorteados;
}