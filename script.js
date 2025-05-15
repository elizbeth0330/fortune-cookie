const cookieImage = document.getElementById('cookie-image');
const fortuneMessage = document.getElementById('fortune-message');
const fortunes = [
    "You will find happiness in unexpected places.",
    "A journey of a thousand miles begins with a single step.",
    "The early bird gets the worm, but the second mouse gets the cheese.",
    "Good things are coming your way.",
    "A smile is your passport.",
    "Believe you can and you're halfway there.",
    "The best is yet to come.",
    "Today is your lucky day!",
    "Don't be afraid to take risks.",
    "Your creativity will lead you to success.",
    "A pleasant surprise is in store for you.",
    "Your hard work will soon pay off.",
    "Take time to enjoy the simple things.",
    "Friendship is a treasure.",
    "Laughter is the best medicine.",
    "New opportunities will arise.",
    "You have a kind heart.",
    "Embrace change with an open mind.",
    "The answer you seek is within you."
];

const openCookieImageSrc = "fortune-cookie-open.jpg";

console.log("JavaScript file loaded.");

function handleClickCookie() {
    cookieImage.removeEventListener('click', handleClickCookie);
    console.log("image clicked");
    cookieImage.classList.add('spinning');
    console.log("spinning added");
    setTimeout(() => {
        console.log("timeout finished");
        cookieImage.src = openCookieImageSrc;
        console.log("img source changed");
        cookieImage.classList.remove('spinning');
        console.log("spinning removed");
        
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        const randomFortune = fortunes[randomIndex];
        fortuneMessage.textContent = randomFortune;
        console.log("fortune generated:", randomFortune);
        fortuneMessage.classList.remove('hidden');
        console.log("hidden class removed");
    }, 1000);
}

cookieImage.addEventListener('click', handleClickCookie);
