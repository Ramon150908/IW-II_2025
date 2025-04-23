const lampada = document.getElementById("lampada");
const btnLigar = document.getElementById("on");
const btnDesligar = document.getElementById("off");
const estado = document.getElementById("estado");

function ligarLampada() {
  lampada.src = "img/lamp_on.png";
  lampada.alt = "Lâmpada Ligada";
}

function desligarLampada() {
  lampada.src = "img/lamp_off.png";
  lampada.alt = "Lâmpada Desligada";
}

btnLigar.addEventListener("click", ligarLampada);
btnDesligar.addEventListener("click", desligarLampada);