const playBtn = document.getElementById('play-quiz');

if (playBtn) {
    playBtn.addEventListener('click', () => {
        window.location.href = 'categories.html';
    });
}