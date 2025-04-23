const imagem = document.getElementById("imagem");
const botao = document.getElementById("trocar img");
let imgAtual = 1;
function TrocarImg() {
    if (imgAtual === 1) {
        imagem.src = "img/img_1.png";
        imgAtual = 2;
    }else if (imgAtual === 2) {
        imagem.src = "img/img_2.png";
        imgAtual = 3;
    }else if (imgAtual === 3){
        imagem.src = "img/img_3.png";
        imgAtual = 1;
    }
}

botao.addEventListener("click",TrocarImg);