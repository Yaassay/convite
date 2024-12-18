document.getElementById('yesBtn').addEventListener('click', function() {
    // Esconde o conteúdo inicial
    document.querySelector('.content').classList.add('hidden');
    // Exibe a imagem em tela cheia
    document.getElementById('image-container').classList.remove('hidden');
});

document.getElementById('noBtn').addEventListener('click', function() {
    // Esconde o conteúdo inicial
    document.querySelector('.content').classList.add('hidden');
    // Exibe a mensagem de spam
    document.getElementById('spam-message').classList.remove('hidden');
});
