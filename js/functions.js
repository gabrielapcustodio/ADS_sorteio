// HTML e CSS

// define e inicializa variáveis relacionadas aos botões

let sortear = document.getElementById('raffle-button');
let resetar = document.getElementById('reset-button');

// mostra números sorteados na tela
let mostraNumeros = document.getElementById('mostra-numeros');


sortear.addEventListener("click", function() {
    mostraNumeros.innerHTML = numerosSorteados;
});

// atualiza a página

resetar.addEventListener("click", function refresh(listener) {
    listener.preventDefault();
    location.reload();
});