let show = true;
let counter = 0;
let images = ["imagens/doctor-50.png", "imagens/2368528.jpg", "imagens/image-resized.jpg"];

const menu = document.getElementsByClassName("cabecalho__container")[0];
const menuToogle = document.getElementsByClassName("menu-toggle")[0];

menuToogle.addEventListener("click", () => {
  document.body.style.overflow = show ? "hidden" : "initial";
  menu.classList.toggle("cabecalho__container--on", show);
  show = !show;
})

function ativar() {
  let width = getWidth();
  if(width <= 450) {
    document.body.style.overflow = show ? "hidden" : "initial";
    menu.classList.toggle("cabecalho__container--on", show);
    show = !show;
  }
}

function modificar() {
  let width = getWidth();
  if(width > 450 && !show) {
    document.body.style.overflow = "initial";
  }
  if(width <= 450 && !show) {
    document.body.style.overflow = "initial";
    menu.classList.toggle("cabecalho__container--on", show);
  }
}

function carousel() {
  if(counter==3) counter = 0;
  let imagemContainer = document.getElementsByClassName("principal__imagem")[1];
  let actualRadio = document.getElementsByName("aba")[counter];
  actualRadio.checked = true;
  let image = images[counter++];
  imagemContainer.src=image;
  imagemContainer.style.opacity = "1";
}

function mudarPosicao(valor) {
  counter = valor;
  clearInterval(myTimer);
  carousel();
  myTimer = setInterval(carousel, 5000);
}

function mudarPosicaoDois() {
  mudarPosicao(1);
}

function mudarPosicaoTres() {
  mudarPosicao(2);
}

var myTimer = setInterval(carousel, 5000)

function getWidth() { 
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

