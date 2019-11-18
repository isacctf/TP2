
const cartaEl = document.querySelectorAll('.carta');
let cartaVirada = false;
let trava = false;
let primeiraCarta, segundaCarta;
let jogo = document.querySelector('#jogo');
let botaoEl = document.querySelector('#botao');

botaoEl.addEventListener('click', function(e){
  jogo.classList.add('visivel');
  botao.classList.add('invisivel');
});
function flipCard() {
  if (trava) return;
  if (this === primeiraCarta) return;
  this.classList.add('flip');

  if (!cartaVirada) {
    cartaVirada = true;
    primeiraCarta = this;
    return;
  }
  segundaCarta = this;

 igual();
}

function igual() {
  let igualmente = primeiraCarta.dataset.framework === segundaCarta.dataset.framework;
  igualmente ? desabilitar() : verso();
}

function desabilitar() {
 primeiraCarta.removeEventListener('click', flipCard);
 segundaCarta.removeEventListener('click', flipCard);
  resetar();
}

function verso() {
  trava = true;
 setTimeout(() => {
   primeiraCarta.classList.remove('flip');
   segundaCarta.classList.remove('flip');
    resetar();
 }, 1000);
}

function resetar() {
  [cartaVirada, trava] = [false, false];
  [primeiraCarta, segundaCarta] = [null, null];
}

(function embaralhar() {
  cartaEl.forEach(card => {
    let embaralhado = Math.floor(Math.random() * 12);
    card.style.order = embaralhado;
  });
})();

cartaEl.forEach(cartaEl => cartaEl.addEventListener('click', flipCard));

//Nome
let nomeEl = document.querySelector('#nome');
let addEl = document.querySelector('#add');

addEl.addEventListener('click', function (e) {
  let spanNomeEl = document.createElement("span");
  spanNomeEl.innerHTML = nomeEl.value;

  let divJogadorEl = document.createElement("div");
  divJogadorEl.appendChild(spanNomeEl);
  divJogadorEl.classList.add(!"jogar");

  let jogadores = document.querySelector('#jogadores');
  jogadores.appendChild(divJogadorEl);
});
