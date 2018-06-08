// ======== DOM caching =======
const colOne    = document.querySelector('input[name="color1"]'),
    colTwo      = document.querySelector('input[name="color2"]'),
    settingsBox = document.querySelector('.settings'),
    colValueBox = document.querySelector('h2'),
    bodyBox     = document.querySelector('body');  

// ======= Functions (i.a. event handlers) ========
function setColor(evt) {
    let bgCol = `linear-gradient(to right, ${colOne.value}, ${colTwo.value})`;
    bodyBox.style.backgroundImage = bgCol;
    colValueBox.textContent = `background-image: ${bgCol}`;
}

setColor();

// ========= Event listeners ==========
settingsBox.addEventListener('input', setColor);
