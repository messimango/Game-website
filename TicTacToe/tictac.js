const blocks = document.querySelectorAll(".game-tiles");
const line = document.querySelector(".line");
const gameover = document.querySelector(".gameover");
const winnerText = document.querySelector(".winner");


Player1 = "X";
Player2 = "O";
let turn = Player1;

const boardState = Array(blocks.length);
boardState.fill(null);

blocks.forEach((block) => block.addEventListener("click", blockClick));


// add X's and O's
function blockClick(event) {
    if(gameover.classList.contains("show")) {
        return;
    }

    const block = event.target;
    const blockNumber = block.dataset.index;
    if (block.innerText != "") {
        return
    }

    if(turn === Player1) {
        block.innerText = Player1;
        boardState[blockNumber - 1] = Player1;
        turn = Player2;
    }

    else {
        block.innerText = Player2;
        boardState[blockNumber - 1] = Player2;
        turn = Player1;
    }

    hover();
    checkWinner();
}

hover();

function hover() {
    blocks.forEach((block) => {
        block.classList.remove("X-hover")
        block.classList.remove("O-hover")
    });

    const hoverClass = `${turn}-hover`;

    blocks.forEach(block=> {
        if(block.innerText == "") {
            block.classList.add(hoverClass);
        }
    });
}

// check winner

const winCombos = [
    {   combo: [1,2,3],
        lineClass: "line-row-1"
    },

    {   combo: [4,5,6],
        lineClass: "line-row-2"
    },

    {   combo: [7,8,9],
        lineClass: "line-row-3"
    },

    {   combo: [1,4,7],
        lineClass: "line-column-1"
    },

    {   combo: [2,5,8],
        lineClass: "line-column-2"
    },

    {   combo: [3,6,9],
        lineClass: "line-column-3"
    },

    {   combo: [1,5,9],
        lineClass: "line-diagonal-1"
    },

    {   combo: [7,5,3],
        lineClass: "line-diagonal-2"
    },

]

function checkWinner() {
    for(const winCombo of winCombos) {
        const { combo, lineClass } = winCombo;
        const boardValue1 = boardState[combo[0] - 1];
        const boardValue2 = boardState[combo[1] - 1];
        const boardValue3 = boardState[combo[2] - 1];
        if(
            boardValue1 != null &&
            boardValue1 === boardValue2 &&
            boardValue1 === boardValue3
            ) {
                line.classList.add(lineClass);
                gameOver(boardValue1);
                return
            }
        }
         // draw
         const allBlocksFull = boardState.every((block) => block !== null);
         if (allBlocksFull) {
             gameOver(null);
    } 
}

function gameOver(winner) {
    let text = "YOU BOTH ARE LOSERS!"
    if (winner != null) {
        text = `Winner is ${winner}`
    }
    gameover.className = "show";
    winnerText.innerText = text;
}

// play again


const playAgain = document.querySelector(".playagain");
const playAgainSound = new Audio("./another-one.mp3");

playAgain.addEventListener("click", startNewGame);

function startNewGame() {
    line.className= "line";
    gameover.className = "hide";
    boardState.fill(null);
    blocks.forEach((block) => (block.innerText = ""));
    turn = Player1;
    playAgainSound.play();
    hover();
}


clearInterval(blocks);
location.reload();