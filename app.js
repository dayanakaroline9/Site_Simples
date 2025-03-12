'use strict'; // Modo estrito

const btn = document.querySelector('.btn'); // Acessa o botão
const body = document.body;

// Função para alternar o tema
function alternarTema() {
    body.classList.toggle('tema-escuro');

    // Verifica se o tema escuro está ativado
    const temaEscuroAtivo = body.classList.contains('tema-escuro');

    // Atualiza o texto e title do botão
    btn.textContent = temaEscuroAtivo ? "Modo Claro" : "Modo Escuro";
    btn.setAttribute('title', temaEscuroAtivo ? "Ativar modo claro" : "Ativar modo escuro");

    // Armazena a preferência do usuário no localStorage
    localStorage.setItem('tema', temaEscuroAtivo ? 'tema-escuro' : 'tema-claro');

    console.log("Tema atual:", temaEscuroAtivo ? "tema-escuro" : "tema-claro");
}

// Adiciona o evento de clique no botão
btn.addEventListener('click', alternarTema);

// Verifica o tema salvo no localStorage e aplica ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'tema-escuro') {
        body.classList.add('tema-escuro');
        btn.textContent = "Modo Claro";
        btn.setAttribute('title', "Ativar modo claro");
    }
});
