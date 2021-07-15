$(function () {
    let cardPlayer1;
    let cardPlayer2;

    let pointsPlayer1 = 0;
    let pointsPlayer2 = 0;

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

    //Button event listeners

    $(".start-button").click(startGame);
    $(".btn-speed").click(compareSpeed);
    $(".btn-fear").click(compareFear);
    $(".btn-cute").click(compareCute);
    $(".btn-life").click(compareLife);
    $(".replay-button").click(replay);

    // on clicking the start button:

    function startGame() {

        // hide and display cards and buttons accordingly

        $(".title").removeClass("title-animated");
        $(".counter, .action-btn, .player1-card").removeClass("hide");
        $(".start-button, .card-backside-player1").addClass("hide");
               
        playBirds();

        // select random card from cardDeck and assign a card to both players
        
            cardPlayer1 = cards[Math.floor(Math.random() * cards.length)];
            cardPlayer2 = cards[Math.floor(Math.random() * cards.length)];

            while (cardPlayer1 === cardPlayer2) {
                cardPlayer2 = cards[Math.floor(Math.random() * cards.length)];  
        } 

        // pass card values to both player cards in DOM
        
        $("#animal-img-player1").attr("src", cardPlayer1.image);
        $("#animal-name-player1").html(cardPlayer1.name);
        $("#speed-player1 span").html(cardPlayer1.topSpeed);
        $("#fear-player1").html(cardPlayer1.fearFactor);
        $("#cute-player1").html(cardPlayer1.cuteness);
        $("#life-player1 span").html(cardPlayer1.lifeSpan);
        
        $("#animal-img-player2").attr("src", cardPlayer2.image);
        $("#animal-name-player2").html(cardPlayer2.name);
        $("#speed-player2 span").html(cardPlayer2.topSpeed);
        $("#fear-player2").html(cardPlayer2.fearFactor);
        $("#cute-player2").html(cardPlayer2.cuteness);
        $("#life-player2 span").html(cardPlayer2.lifeSpan);

    }
     
    // on clicking an action button:

    function compareSpeed() {
        
        $(".message-field").removeClass("hide");
        $("#speed-player1, #speed-player2").addClass("highlight");
    
        if (cardPlayer1.topSpeed > cardPlayer2.topSpeed) {
            win();
        } else {
            lost();
        }

        chooseAction();
    }

    function compareFear() {
        
        $(".message-field").removeClass("hide");
        $("#fear-player1, #fear-player2").addClass("highlight");
        
        if (cardPlayer1.fearFactor > cardPlayer2.fearFactor) {
            win();
        } else {
            lost();
        }

        chooseAction();
    }

    function compareCute() {
        
        $(".message-field").removeClass("hide");
        $("#cute-player1, #cute-player2").addClass("highlight");
           
        if (cardPlayer1.cuteness > cardPlayer2.cuteness) {
            win();
        } else {
            lost();
        }

        chooseAction();
    }

    function compareLife() {
        
        $(".message-field").removeClass("hide");
        $("#life-player1, #life-player2").addClass("highlight");
           
        if (cardPlayer1.lifeSpan > cardPlayer2.lifeSpan) {
            win();
        } else {
            lost();
        }

        chooseAction();
    }

    function chooseAction() {
        
        $(".card-backside-player2, .action-btn").addClass("hide");
        $(".player2-card, .replay-button").removeClass("hide");
    }

    // cases win and lost:

    function win() {
        
        $(".confetti").removeClass("hide");
        
        if (pointsPlayer1 < 4) {
            pointsPlayer1++;
            $(".counter-player1").html(pointsPlayer1);   
            $(".message-field").html("You win this round!");
            playWin();
        } else {
            pointsPlayer1 = 0;
            pointsPlayer2 = 0;
            $(".counter-player1").html(pointsPlayer1);
            $(".counter-player2").html(pointsPlayer2);
            $(".message-field").html("You won the game!");
            $(".message-field").css("background-color", "#FBB18F");
            playWinGame()
        }
    }

    function lost() {
        
        if (pointsPlayer2 < 4) {
            pointsPlayer2++;
            $(".counter-player2").html(pointsPlayer2);
            $(".message-field").html("You lose this round!");
            playLost();
        } else {
            pointsPlayer1 = 0;
            pointsPlayer2 = 0;
            $(".counter-player1").html(pointsPlayer1);
            $(".counter-player2").html(pointsPlayer2);
            $(".message-field").html("You lost the game!");
            $(".message-field").css("background-color", "#7A3A2D");
            playLostGame();
        }
    }

    // after clicking the replay button:

    function replay() {

        $(".title").addClass("title-animated");
        $(".counter, .confetti, .player1-card, .player2-card, .replay-button, .message-field").addClass("hide");
        $("td").removeClass("highlight");
        $(".start-button, .card-backside-player1, .card-backside-player2").removeClass("hide");
    }

}); 