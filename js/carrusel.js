const imgPromos = [
  "../assets/banner.png",
  "../assets/Captura.PNG"
];
const img = document.getElementById("banner-imagen");
let indiceImg = 0;

function carruselPromos() {
  if (indiceImg === imgPromos.length) {
    indiceImg = 0;
  }
  img.src = imgPromos[indiceImg];
  indiceImg++;
}

function carruselPromosReversa() {
  if (indiceImg === -1) {
    indiceImg = imgPromos.length - 1;
  }
  img.src = imgPromos[indiceImg];
  indiceImg--;
}
