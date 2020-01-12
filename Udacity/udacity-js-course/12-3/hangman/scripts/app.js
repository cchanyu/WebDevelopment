const puzzleEl = document.getElementById('puzzle');
const guessesEl = document.getElementById('guesses');
let game1;

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    render();
})

const render = () => {
    puzzleEl.innerHTML = '';
    guessesEl.textContent = game1.statusMessage;

    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span');
        letterEl.textContent = letter;
        puzzleEl.appendChild(letterEl);
    });
}

const startGame = async () => {
    const puzzle = await getPuzzle('2');
    game1 = new Hangman(puzzle, 10);
    render();
}

document.getElementById('reset').addEventListener('click', startGame)

startGame();

// getPuzzle('2').then((data) => {
//     console.log(data.puzzle);
// }).catch((err) => {
//     console.log(`Error: ${err}`);
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name);
// }).catch((error) => {
//     console.log(error);
// })