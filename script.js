let cardPlayer1;
let cardPlayer2;

let pointsPlayer1 = 0;
let pointsPlayer2 = 0;

const actionButtons = document.querySelectorAll(".action-btn");
const message = document.querySelector(".message-field");
let counterPlayer1 = document.querySelector(".counter-player1");
let counterPlayer2 = document.querySelector(".counter-player2");

// sounds

function playWin() {
    const winSound = new Audio('sounds/win.ogg');
        winSound.play();
}

function playWinGame() {
    const winGame = new Audio('sounds/WonGame.wav');
        winGame.play();
}

function playLost() {
    const lostSound = new Audio('sounds/lose.flac');
    lostSound.play();
}

function playLostGame() {
    const lostGame = new Audio('sounds/lostGame.mp3');
    lostGame.play();
}

function playBirds() {
    const birdSong2 = new Audio('sounds/amb_bird_2.flac');
        birdSong2.play();
    const birdSong1 = new Audio('sounds/amb_bird_1.flac');
        birdSong1.play();
}

// on clicking the start button:

function startGame() {

    // hide and display cards and buttons accordingly

    document.querySelectorAll(".title").forEach(title => title.classList.remove("title-animated"));

    document.querySelectorAll(".counter").forEach(counter => counter.classList.remove("hide"));
    
    startButton.classList.add("hide");
    
    actionButtons.forEach(button => button.classList.remove("hide"));

    document.querySelector(".card-backside-player1").classList.add("hide");
    document.querySelector(".player1-card").classList.remove("hide");
    
    playBirds();

    // select random card from cardDeck and assign a card to both players
    
        cardPlayer1 = cards[Math.floor(Math.random() * cards.length)];
        cardPlayer2 = cards[Math.floor(Math.random() * cards.length)];

        while (cardPlayer1 === cardPlayer2) {
            cardPlayer2 = cards[Math.floor(Math.random() * cards.length)];
        
    } 

    // pass card values to both player cards in DOM
    
    document.querySelector("#animal-name-player1").innerHTML = cardPlayer1.name;
    document.querySelector("#animal-img-player1").src = cardPlayer1.image;
    document.querySelector("#speed-player1 span").innerHTML = cardPlayer1.topSpeed;
    document.querySelector("#fear-player1").innerHTML = cardPlayer1.fearFactor;
    document.querySelector("#cute-player1").innerHTML = cardPlayer1.cuteness;
    document.querySelector("#life-player1 span").innerHTML = cardPlayer1.lifeSpan;
    
    document.querySelector("#animal-name-player2").innerHTML = cardPlayer2.name;
    document.querySelector("#animal-img-player2").src = cardPlayer2.image;
    document.querySelector("#speed-player2 span").innerHTML = cardPlayer2.topSpeed;
    document.querySelector("#fear-player2").innerHTML = cardPlayer2.fearFactor;
    document.querySelector("#cute-player2").innerHTML = cardPlayer2.cuteness;
    document.querySelector("#life-player2 span").innerHTML = cardPlayer2.lifeSpan;
    

}
    

// on clicking an action button:

function compareSpeed() {
    
    message.classList.remove("hide");
    document.querySelector("#speed-player1").classList.add("highlight");
    document.querySelector("#speed-player2").classList.add("highlight");
   
    if (cardPlayer1.topSpeed > cardPlayer2.topSpeed) {
        win();
    } else {
        lost();
    }

    chooseAction();
    
}

function compareFear() {
    
        message.classList.remove("hide");
   document.querySelector("#fear-player1").classList.add("highlight");
    document.querySelector("#fear-player2").classList.add("highlight");

    if (cardPlayer1.fearFactor > cardPlayer2.fearFactor) {
        win();
    } else {
        lost();
    }

    chooseAction();
    
}

function compareCute() {
    
    message.classList.remove("hide");
    document.querySelector("#cute-player1").classList.add("highlight");
    document.querySelector("#cute-player2").classList.add("highlight");
   
    if (cardPlayer1.cuteness > cardPlayer2.cuteness) {
        win();

    } else {
        lost();
    }

    chooseAction();
    
}

function compareLife() {
    
    message.classList.remove("hide");
    document.querySelector("#life-player1").classList.add("highlight");
    document.querySelector("#life-player2").classList.add("highlight");
   
    if (cardPlayer1.lifeSpan > cardPlayer2.lifeSpan) {
        win();
    } else {
        lost();
    }

    chooseAction();
    
}

function chooseAction() {
    
// display card player2
    document.querySelector(".card-backside-player2").classList.add("hide");
    document.querySelector(".player2-card").classList.remove("hide");

// hide action buttons
    actionButtons.forEach(button => button.classList.add("hide"));

// display replay button
    document.querySelector(".replay-button").classList.remove("hide");

}

// cases win and lost:

function win() {
    
    document.querySelectorAll(".confetti").forEach(confetti => confetti.classList.remove("hide"));
    
    if (pointsPlayer1 < 4) {
        pointsPlayer1++;
        counterPlayer1.innerHTML = pointsPlayer1;   
        message.innerHTML = "You win this round!";
        playWin();
    } else {
        pointsPlayer1 = 0;
        pointsPlayer2 = 0;
        counterPlayer1.innerHTML = pointsPlayer1;
        counterPlayer2.innerHTML = pointsPlayer2;
        message.innerHTML = "You won the game!";
        message.style.backgroundColor = "#FBB18F";
        playWinGame()
    }
    
}

function lost() {
    
    if (pointsPlayer2 < 4) {
        pointsPlayer2++;
        counterPlayer2.innerHTML = pointsPlayer2;
        message.innerHTML = "You lose this round!";
        playLost();
    } else {
        pointsPlayer1 = 0;
        pointsPlayer2 = 0;
        counterPlayer1.innerHTML = pointsPlayer1;
        counterPlayer2.innerHTML = pointsPlayer2;
        message.innerHTML = "You lost the game!";
        message.style.backgroundColor = "#7A3A2D";
        playLostGame();
    }
    
}

// after clicking the replay button:

function replay() {

    document.querySelectorAll(".title").forEach(title => title.classList.add("title-animated"));
    document.querySelectorAll(".counter").forEach(counter => counter.classList.add("hide"));
    
    document.querySelectorAll("td").forEach(element => element.classList.remove("highlight"));
    document.querySelectorAll(".confetti").forEach(confetti => confetti.classList.add("hide"));
    
    message.classList.add("hide");
    document.querySelector(".card-backside-player1").classList.remove("hide");
    document.querySelector(".card-backside-player2").classList.remove("hide");

    document.querySelector(".player1-card").classList.add("hide");
    document.querySelector(".player2-card").classList.add("hide");

    startButton.classList.remove("hide");
    document.querySelector(".replay-button").classList.add("hide");
}


// eventListeners for buttons

const startButton = document.querySelector('.start-button');
startButton.addEventListener('click', startGame);

const speedButton = document.querySelector('.btn-speed');
speedButton.addEventListener('click', compareSpeed);

const fearButton = document.querySelector('.btn-fear');
fearButton.addEventListener('click', compareFear);

const cuteButton = document.querySelector('.btn-cute');
cuteButton.addEventListener('click', compareCute);

const lifeButton = document.querySelector('.btn-life');
lifeButton.addEventListener('click', compareLife);

const replayButton = document.querySelector('.replay-button');
replayButton.addEventListener('click', replay);


