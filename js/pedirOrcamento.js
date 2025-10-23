// ../js/pedirOrcamento.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

// Config real do teu projeto
const firebaseConfig = {
    apiKey: "AIzaSyDdYedFEmv9A-zZiJcIxPllzFuiNNKTysE",
    authDomain: "ctra-ee456.firebaseapp.com",
    projectId: "ctra-ee456",
    storageBucket: "ctra-ee456.appspot.com", // <- corrige para appspot.com
    messagingSenderId: "508055571269",
    appId: "1:508055571269:web:7193a345cf6b8741c6cc2c"
};

// Inicializar Firebase + Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Listener do formulário + gravação
document.getElementById('orcamentoForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const dados = {
        nome: formData.get('nome')?.trim(),
        email: formData.get('email')?.trim(),
        telefone: formData.get('telefone')?.trim(),
        servico: formData.get('servico'),
        mensagem: formData.get('mensagem')?.trim() || "",
        criadoEm: serverTimestamp(),
        origem: 'website'
    };

    if (!dados.nome || !dados.email || !dados.telefone || !dados.servico) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    try {
        await addDoc(collection(db, 'orcamentos'), dados);

        const alerta = document.getElementById('sucesso-alerta');
        alerta.classList.add('visivel');

        setTimeout(() => {
            window.location.href = '../pages/index.html';
        }, 3000);
    } catch (err) {
        console.error('Erro ao guardar no Firestore:', err);
        alert('Não foi possível enviar. Tente novamente.');
    }
});