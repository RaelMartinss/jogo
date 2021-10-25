let order = [];
let clicledOrder = [];
let score = 0;

//0 = verde 
//1 = vermelho
//2 amarelo
//3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);

    order[order.length] = colorOrder;
    clicledOrder = [];

    for(let i in order){
        let elementColor = createrElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

let checkOrder = () => {
    for(let i in clicledOrder){
        if(clicledOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clicledOrder.length == order.length) {
        alert(`Pontuação: ${score} \n você acertou ! Inicaiamdo proximo nivel!`);
        nextLevel();
    }
}

//função para o click do usuario
let click = (color) => {
    clicledOrder[clicledOrder.length] = color;
    createrElement(color).classList.add('selected');

    setTimeout(() => {
        createrElement(color).classList.remove('selected');
        checkOrder();
    },250);
    
}

//função que retorna a cor
let createrElement = (color) => {
    if(color == 0) {
        return green;
    }else if(color == 1) {
        return red;
    }else if(color == 2){
        return yellow;
    }else if(color == 3){
        return blue;
    }
}

//função para proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}
// função game over
let gameOver = () => {
    alert(`Pontuação: ${score}\n você perdeu o jogo`)
    order = [];
    clicledOrder = [];

    playGame();
}
 //funcao de inicio do jogo
let playGame = () => {
    alert('Bem vindo ao Gênisis! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}
// green.addEventListener('click', click(0));
// red.addEventListener('click', click(1));
// yellow.addEventListener('click', click(2));
// blue.addEventListener('click', click(3));

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);



playGame();
