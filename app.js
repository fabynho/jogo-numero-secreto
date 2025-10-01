let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", 
    {rate: 1.2})
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Digite um numero entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Voce acertou!');

        let tentativasTexto = tentativas == 1 ? 'tentativa' : 'tentativas';
        let mensagemTentativas = `Voce acertou o numero secreto em ${tentativas} ${tentativasTexto}.`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

       
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O numero secreto e menor');
        } else {
            exibirTextoNaTela('p', 'O numero secreto e maior');
        }
    }
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio() {
    
    let numeroSorteado = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeNumerosSorteados = listaNumerosSorteados.length;

    if (quantidadeNumerosSorteados == numeroMaximo) {
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroSorteado)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroSorteado);
        return numeroSorteado;
    }
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    
}