const games = [
    {
        id: 1,
        name: "Snake",
        image: "./images/snake.png",
        link: "./snake/snake.html",
        description: "Controls a long, thin creature, resembling a snake, which roams around on a bordered plane, picking up apples, trying to avoid hitting its own body or the edges of the playing area.",
    },
    
    {
        id: 2,
        name: "Tic Tac Toe",
        image: "./images/tictac.PNG",
        link: "./TicTacToe/tictac.html",
        description: "Two players seek in alternate turns to complete a row, a column, or a diagonal with either three O's or three X's drawn in the spaces of a grid of nine squares.",
    },

    {
        id: 3,
        name: "Dropper",
        image: "./images/dropper.png",
        link: "./Drop/drop.html",
        description: "A ball in freefall must avoid to roof and fall through the cracks in the floor.",
    },

    {
        id: 4,
        name: "Jumper",
        image: "./images/jumper.png",
        link: "./Jumper/jumper.html",
        description: "Jump over block coming at you at high speeds",
    },

    
];

const gameList = document.querySelector(".gamelist")

window.addEventListener("DOMContentLoaded", function() {
    displayGames(games)
})

function displayGames(gameInfo) {
    let displayGames = gameInfo.map(function (info) {
        return `<div class="game">
        <a href="${info.link}"><img src="${info.image}" alt="${info.name}" class="photo"></a>
        <h1 class="game-name">${info.name}</h1>
        <div class="game-info">                    
            <p class="discription">${info.description}</p>
        </div>
        </div>`;
    });
    displayGames = displayGames.join("");
    gameList.innerHTML = displayGames;
}