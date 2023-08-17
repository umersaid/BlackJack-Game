let cards = [];
let sum = 0;
let gameStarted = false;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardEl = document.querySelector('#card-el');
let playerEl = document.getElementById('player-el');
let startGameEl = document.getElementById('start-game');


let player = {
    name: 'Umer',
    chips: '$150'
}
// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.
function startGame() {
    playerEl.textContent = player.name + ': ' + player.chips;
    if (!gameStarted) {
        gameStarted = true;
        isAlive = true;
        let firstCard = getRandomNumber();
        let secondCard = getRandomNumber();
        sum = firstCard + secondCard;
        cards.push(firstCard);
        cards.push(secondCard);
        renderGame();
    }
}
function renderGame() {
    sumEl.textContent = `Sum: ${sum}`;
    cardEl.textContent = 'Cards: ';

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! 😭";
        isAlive = false;
    }

    messageEl.textContent = message;
}

const newCard = () => {
    if (isAlive && !hasBlackJack) {
        let thirdCard = getRandomNumber();
        sum += thirdCard;
        cards.push(thirdCard);
        renderGame();
    }
}
function getRandomNumber() {
    let randomNumer = Math.floor(Math.random() * 13) + 1;
    if (randomNumer >= 10) {
        return 10;
    } else if (randomNumer === 1) {
        return 11;
    } else {
        return randomNumer;
    }
}