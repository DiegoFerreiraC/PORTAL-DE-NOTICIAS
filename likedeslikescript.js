
document.addEventListener("DOMContentLoaded", () => {
    const noticia = document.querySelector('.like-dislike');
    const noticiaId = noticia.dataset.id;
    const likeBtn = noticia.querySelector('.like-btn');
    const dislikeBtn = noticia.querySelector('.dislike-btn');
    const likeCount = noticia.querySelector('.like-count');
    const dislikeCount = noticia.querySelector('.dislike-count');

    // Recupera do localStorage
    let data = JSON.parse(localStorage.getItem(noticiaId)) || { likes: 0, dislikes: 0, voted: null };
    likeCount.textContent = data.likes;
    dislikeCount.textContent = data.dislikes;

    // Função de Like
    likeBtn.addEventListener('click', () => {
        if (data.voted === 'like') return;
        if (data.voted === 'dislike') {
            data.dislikes--;
            dislikeBtn.classList.remove('active');
        }
        data.likes++;
        data.voted = 'like';
        likeBtn.classList.add('active');
        likeCount.textContent = data.likes;
        dislikeCount.textContent = data.dislikes;
        localStorage.setItem(noticiaId, JSON.stringify(data));
    });

    // Função de Dislike
    dislikeBtn.addEventListener('click', () => {
        if (data.voted === 'dislike') return;
        if (data.voted === 'like') {
            data.likes--;
            likeBtn.classList.remove('active');
        }
        data.dislikes++;
        data.voted = 'dislike';
        dislikeBtn.classList.add('active');
        likeCount.textContent = data.likes;
        dislikeCount.textContent = data.dislikes;
        localStorage.setItem(noticiaId, JSON.stringify(data));
    });
});
