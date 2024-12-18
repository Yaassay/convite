document.getElementById('yesBtn').addEventListener('click', function() {
    // Esconde o conteúdo inicial
    document.querySelector('.content').classList.add('hidden');
    // Exibe a primeira imagem surpresa
    document.getElementById('image-container').classList.remove('hidden');
});

document.getElementById('noBtn').addEventListener('click', function() {
    // Esconde o conteúdo inicial
    document.querySelector('.content').classList.add('hidden');
    // Exibe a segunda imagem surpresa
    document.getElementById('image-container-no').classList.remove('hidden');
});
