const botoes = document.querySelector('.botoes');
botoes = Number.botoes;

function voto() {
    return botoes.value;
}

function imagem() {
    const img_presidente = document.querySelector('.foto_candidato');
    const img_vice = document.querySelector('foto_vice');
    return img_presidente, img_vice;
}

function branco(){
    const branco = document.querySelector('.botoes.branco')
    return 'Voto em branco!'
}

function corrige(){
    const corrige = document.querySelector('.botoes.corrige')
    botoes = ''
    return 'Reiniciando voto...'
    }

function confirma(){
    const confirma = document.querySelector('.botoes.confirma')
    return 'Voto confirmado!'
}