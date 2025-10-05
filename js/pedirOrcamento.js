document.getElementById('orcamentoForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const alerta = document.getElementById('sucesso-alerta');
    alerta.classList.add('visivel');

    setTimeout(() => {
        window.location.href = '../pages/index.html';

    }, 3000);
});