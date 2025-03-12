'use strict'; // Modo estrito

const btn = document.getElementById('toggleTema'); // Botão de tema
const body = document.body;

// Alterna entre temas
function alternarTema() {
    body.classList.toggle('tema-escuro');

    // Verifica se o tema escuro está ativado
    const temaEscuroAtivo = body.classList.contains('tema-escuro');

    // Atualiza o ícone do botão
    btn.textContent = temaEscuroAtivo ? "☀️" : "🌙";
    btn.setAttribute('title', temaEscuroAtivo ? "Ativar modo claro" : "Ativar modo escuro");

    // Armazena o tema escolhido no localStorage
    localStorage.setItem('tema', temaEscuroAtivo ? 'tema-escuro' : 'tema-claro');

    console.log("Tema atual:", temaEscuroAtivo ? "tema-escuro" : "tema-claro");
}

// Evento de clique no botão
btn.addEventListener('click', alternarTema);

// Aplica o tema salvo ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'tema-escuro') {
        body.classList.add('tema-escuro');
        btn.textContent = "☀️";
        btn.setAttribute('title', "Ativar modo claro");
    }
});
