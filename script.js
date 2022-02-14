const openBtn = document.getElementById('open');
const card = document.querySelector('.container');

openBtn.addEventListener('click', () => {
    card.classList.add('active');
});

