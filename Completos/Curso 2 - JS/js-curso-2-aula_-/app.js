let listaNumSorteado= [];
let limite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});

}

function exibirMensagemIicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemIicial(); 

function verificarChute() {
    let chute = document.querySelector('input').value;
   
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');
       let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa'; 
        let mensagemTentatitivas =  `voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentatitivas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'o número é menor');
        }else{
            exibirTextoNaTela('p', 'o numero é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido=  parseInt(Math.random() * limite + 1);
    let quantElementos= listaNumSorteado.length; 

    if(quantElementos == limite){
        listaNumSorteado = []; 
    }

    if(listaNumSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaNumSorteado.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
   
function limparCampo() {
        chute = document.querySelector('input');
        chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio(); 
    limparCampo();
    tentativas = 1; 
    exibirMensagemIicial(); 
    document.getElementById('reiniciar').setAttribute('disabled',true);
   
}

