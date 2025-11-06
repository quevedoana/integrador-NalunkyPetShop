const imgPromos = [
  "assets/banner1.jpg",
  "assets/banner2.jpg",
  "assets/banner3.jpg",
  "assets/4.jpg",
  "assets/5.jpg",
  "assets/6.jpg",
  "assets/7.jpg"

];
const img = document.getElementById("banner-imagen");
let indiceImg = 0;

function carruselPromos() {
  indiceImg++;
  if (indiceImg >= imgPromos.length) {
    indiceImg = 0;
  }
  img.src = imgPromos[indiceImg];
}

function carruselPromosReversa() {
  indiceImg--;
  if (indiceImg < 0) {
    indiceImg = imgPromos.length - 1;
  }
  img.src = imgPromos[indiceImg];
}
