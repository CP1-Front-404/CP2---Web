

let imagens =[
    'src/assets/carro1.jpg',
    'src/assets/carro2.webp',
    'src/assets/carro3.jpg',
    'src/assets/carro4.jpg',
]


let i = 0;
let tempo = 5000;



function slideShow(){
    document.getElementById('image').src = imagens[i];
    i++;
    if(i == imagens.length){
        i=0;
    }
    setTimeout("slideShow()",tempo)
}
slideShow();