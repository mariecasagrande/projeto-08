// script.js
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    // Obtém os valores dos campos
    const nomeContato = document.getElementById('nome-contato').value;
    const telefoneContato = document.getElementById('telefone-contato').value;

    // Adiciona uma nova linha na tabela
    const tbody = document.querySelector('tbody');
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <td>${nomeContato}</td>
        <td>${telefoneContato}</td>
    `;
    tbody.appendChild(novaLinha);

    // Limpa os campos do formulário
    document.getElementById('nome-contato').value = '';
    document.getElementById('telefone-contato').value = '';
});
