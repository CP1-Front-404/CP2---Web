const imagens = [
    'src/assets/carro1.jpg',
    'src/assets/carro2.webp',
    'src/assets/carro3.jpg',
    'src/assets/carro4.jpg',
];

let i = 0;
const tempo = 5000;
let intervalId = null;

function mostrarImagem(index) {
    const imgElement = document.getElementById('image');
    if (!imgElement) return;

    imgElement.style.opacity = 0;
    setTimeout(() => {
        imgElement.src = imagens[index];
        imgElement.onload = () => {
            imgElement.style.opacity = 1; 
        };
    }, 400);
}

function proxImagem() {
    i = (i + 1) % imagens.length;
    mostrarImagem(i);
}

function prevImagem() {
    i = (i - 1 + imagens.length) % imagens.length;
    mostrarImagem(i);
}

function startSlideshow() {
    intervalId = setInterval(proxImagem, tempo);
}

function stopSlideshow() {
    if (intervalId) clearInterval(intervalId);
}

window.onload = function() {
    mostrarImagem(i);

    // Botões
    document.getElementById('nextBtn').onclick = function() {
        stopSlideshow();
        proxImagem();
        startSlideshow();
    };
    document.getElementById('prevBtn').onclick = function() {
        stopSlideshow();
        prevImagem();
        startSlideshow();
    };

    startSlideshow();
};