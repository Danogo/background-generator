// ======== DOM caching =======
const colOne = document.querySelector('input[name="color1"]');
const colTwo = document.querySelector('input[name="color2"]');
const colors = document.querySelector(".colors");
const colValueBox = document.querySelector("h3");

// ========= Event listeners ==========
colors.addEventListener('click', setColor);
colValueBox.textContent = `background-image: linear-gradient(to right, ${colOne.value}, ${colTwo.value});`;

// ======= Functions (i.a. event handlers) ========
function setColor(evt) {
    // colValueBox.innerText = `background-image: linear-gradient(to right, ${colOne.value}, ${colTwo.value});`;
    alert(evt.target.tagName);
}