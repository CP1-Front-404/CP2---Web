const imagens = [
    'src/assets/carro1.jpg',
    'src/assets/carro2.webp',
    'src/assets/carro3.jpg',
    'src/assets/carro4.jpg',
];


let carIndex = 0;
let interval;

function showImg(idx) {
    const imgs = document.querySelectorAll('.carousel-img');
    imgs.forEach((img, i) => {
        img.classList.toggle('active', i === idx);
    });
}

function nextImg() {
    carIndex = (carIndex + 1) % imagens.length;
    showImg(carIndex);
}

function prevImg() {
    carIndex = (carIndex - 1 + imagens.length) % imagens.length;
    showImg(carIndex);
}

window.onload = function() {
    showImg(carIndex);
    interval = setInterval(nextImg, 5000);

    document.getElementById('nextBtn').onclick = function() {
        clearInterval(interval);
        nextImg();
        interval = setInterval(nextImg, 5000);
    };
    document.getElementById('prevBtn').onclick = function() {
        clearInterval(interval);
        prevImg();
        interval = setInterval(nextImg, 5000);
    };
};