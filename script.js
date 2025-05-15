const cookieImage = document.getElementById('cookie-image');
const fortuneMessage = document.getElementById('fortune-message');
const fortunes = [
    "You will find happiness in unexpected places.", 
    "A journey of a thousand miles begins with a single step."
];

const openCookieImageSrc = 'fortune-cookie-open.jpeg';

console.log("JavaScript file loaded.");

cookieImage.addEventListener('click', () => {
    console.log("image clicked");
    cookieImage.removeEventListener('click', arguments.callee);
    cookieImage.classList.add('spinning');
    console.log("spinning added");
    setTimeout(() => {
        console.log("timeout finished");
        cookieImage.src = openCookieImageSrc;
        console.log("image source changed");
        cookieImage.classList.remove('spinning');
        console.log("spinning removed");

        const randomIndex = Math.floor(Math.random() * fortunes.length);
        const randomFortune = fortunes[randomIndex];
        fortuneMessage.textContent = randomFortune;
        console.log("fortune generated:", randomFortune);
        fortuneMessage.classList.remove('hidden');
        console.log("hidden class removed");
    }, 1000);
});