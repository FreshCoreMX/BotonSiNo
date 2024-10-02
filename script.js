const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');
const message = document.getElementById('message');

noButton.addEventListener('click', () => {
    const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
    const randomY = Math.floor(Math.random() * (window.innerHeight - 100));
    
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
});

yesButton.addEventListener('click', () => {
    message.textContent = 'JAJAJAJAJAJA GEY';
    noButton.style.display = 'none'; // Oculta el botón "No"
});