
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const itens = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.numbers');
const list = document.querySelector('.list');

let active = 0;
const total = itens.length;
let timer;

// Atualiza o carrossel
function update(direction) {

    // Remove a classe active do item e do indicador atual
    itens[active].classList.remove('active');
    dots[active].classList.remove('active');

    // Avançar
    if (direction > 0) {
        active++;

        if (active === total) {
            active = 0;
        }
    }

    // Retroceder
    else if (direction < 0) {
        active--;

        if (active < 0) {
            active = total - 1;
        }
    }

    // Ativa o novo item e indicador
    itens[active].classList.add('active');
    dots[active].classList.add('active');

    // Atualiza o número do indicador
    numberIndicator.textContent = String(active + 1).padStart(2, '0');
}

// Reinicia o temporizador
function resetTimer() {
    clearInterval(timer);

    timer = setInterval(() => {
        update(1);
    }, 5000);
}

// Botão anterior
prevButton.addEventListener('click', () => {
    update(-1);
    resetTimer();
});

// Botão próximo
nextButton.addEventListener('click', () => {
    update(1);
    resetTimer();
});

// Inicia o carrossel automático
resetTimer();
