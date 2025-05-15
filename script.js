const cookieImage = document.getElementById('cookie-image');
const fortuneMessage = document.getElementById('fortune-message');
const fortunes = [
    "You will find happiness in unexpected places.", 
    "A journey of a thousand miles begins with a single step."
];

const openCookieImageSrc = 'fortune-cookie-open.jpeg';

cookieImage.addEventListener('click', () => {
    cookieImage.removeEventListener('click', arguments.callee);
    cookieImage.classList.add('spinning');
    setTimeout(() => {
        cookieImage.src = openCookieImageSrc;
        cookieImage.classList.remove('spinning');

        const randomIndex = Math.floor(Math.random() * fortunes.length);
        const randomFortune = fortunes[randomIndex];
        fortuneMessage.textContent = randomFortune;
        fortuneMessage.classList.remove('hidden');
    }, 1000);
});