// ======== DOM caching =======
const colOne    = document.getElementById('col1'),
    colTwo      = document.getElementById('col2'),
    colHeading  = document.getElementById('col3'),
    colHShadow  = document.getElementById('col4'),
    bgDirection = document.querySelector('.direction'),
    pal1        = document.getElementById('palette1'),
    pal2        = document.getElementById('palette2'),
    palHdgCol   = document.getElementById('palette3'),
    palHdgShad  = document.getElementById('palette4'),
    settingsBox = document.querySelector('.settings'),
    infoBox     = document.querySelector('h2'),
    heading     = document.querySelector('h1');
    bodyBox     = document.querySelector('body');  

// ======= Functions (i.a. event handlers) ========
// set colors to all components
function setColors() {
    setDirection();
    paintBackground();
    paintHeading();
    paintPalettes();
}

// set color for background and display information about current background
function paintBackground() {
    let bgCol = `linear-gradient(${direction}, ${colOne.value}, ${colTwo.value})`;
    bodyBox.style.backgroundImage = bgCol;
    infoBox.textContent = `background-image: ${bgCol}`;
}

// set color and text shadow for heading
function paintHeading() {
    heading.style.color = colHeading.value;
    heading.style.textShadow = `.5rem 1rem 2rem ${colHShadow.value}`;
}

// set color for icons same as for corresponding inputs
function paintPalettes() {
    pal1.style.color = colOne.value;
    pal2.style.color = colTwo.value;
    palHdgCol.style.color = colHeading.value;
    palHdgShad.style.color = colHShadow.value;
}

// set direction of linear gradient
function setDirection() {
    return direction = bgDirection.value;
}

setColors();

// ========= Event listeners ==========
settingsBox.addEventListener('input', setColors);

