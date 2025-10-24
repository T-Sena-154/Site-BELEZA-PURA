document.addEventListener('DOMContentLoaded', function() {
    // Script para validar formulários ou qualquer outra funcionalidade de JS que você queira adicionar.
    console.log("Página carregada com sucesso!");

    // Exemplo de validação simples
    const form = document.getElementById('cadastroForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            if (nome === "" || email === "") {
                alert("Por favor, preencha todos os campos.");
                event.preventDefault();
            }
        });
    }
});
