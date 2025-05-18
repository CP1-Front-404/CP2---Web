const imagens = [
    'src/assets/carro1.jpg',
    'src/assets/carro2.webp',
    'src/assets/carro3.jpg',
    'src/assets/carro4.jpg',
];

let index = 0;
const tempo = 5000;
let intervalId = null;
let fadeTimeout = null;

function fadeBackground(nextIndex) {
    const hero = document.getElementById('hero2');
    if (!hero) return;

    // Limpa o fade anterior, se ainda não terminou
    if (fadeTimeout) clearTimeout(fadeTimeout);

    // Aplica próxima imagem no ::after
    hero.style.setProperty('--bg-next', `url('${imagens[nextIndex]}')`);
    hero.classList.add('fade-bg');

    // Só troca o background principal após o fade
    fadeTimeout = setTimeout(() => {
        hero.style.backgroundImage = `url('${imagens[nextIndex]}')`;
        hero.classList.remove('fade-bg');
        fadeTimeout = null;
    }, 800); // igual ao tempo do transition
}

function proxBG() {
    let nextIndex = (index + 1) % imagens.length;
    fadeBackground(nextIndex);
    index = nextIndex;
}

function prevBG() {
    let nextIndex = (index - 1 + imagens.length) % imagens.length;
    fadeBackground(nextIndex);
    index = nextIndex;
}

function startSlideshow() {
    intervalId = setInterval(proxBG, tempo);
}

function stopSlideshow() {
    if (intervalId) clearInterval(intervalId);
    if (fadeTimeout) clearTimeout(fadeTimeout);
}

window.onload = function() {
    const hero = document.getElementById('hero2');
    if (hero) hero.style.backgroundImage = `url('${imagens[index]}')`;

    document.getElementById('nextBtn').onclick = function() {
        stopSlideshow();
        proxBG();
        startSlideshow();
    };
    document.getElementById('prevBtn').onclick = function() {
        stopSlideshow();
        prevBG();
        startSlideshow();
    };

    startSlideshow();
};