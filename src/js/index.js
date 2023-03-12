/*
    OBJETIVO - quando clicarmos nos botões da tela, alterar as imagens de fundo de acordo com a sequencia

    passo 1 - dar um jeito de pegar o elemento html dos botões

    passo 2 - identificar o clique do usuário no botão (evento)

    passo 3 - desmarcar botão selecionado anterior

    passo 4 - marcar o botão clicado como se estivesse selecionado

    passo 5 - trocar as imagens

    passo 6 - aparecer a imagem correspodente ao botão
*/


//dar um jeito de pegar o elemento html dos botões
const botoesCarrosel = document.querySelectorAll('.botao');
const imagensCarrosel = document.querySelectorAll('.imagem');


//passo 2 - identificar o clique do usuário no botão (evento)
botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // passo 3 - desmarcar botão selecionado anterior  
        desativarBotaoSelecionado();

        // passo 4 - marcar o botão clicado como se estivesse selecionado 
        selecionarBotaoCarrosel(botao);

        // passo 5 - trocar a imagem ativa
        esconderImagemAtiva();

        // passo 6 - aparecer a imagem correspodente ao botão
        mostrarImagemDeFundo(indice);
    });
});
function mostrarImagemDeFundo(indice) {
    imagensCarrosel[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

