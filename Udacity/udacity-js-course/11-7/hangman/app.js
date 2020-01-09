const puzzleEl = document.getElementById('puzzle');
const guessesEl = document.getElementById('guesses');
const game1 = new Hangman('word', 5);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    puzzleEl.textContent = game1.puzzle;
    guessesEl.textContent = game1.statusMessage;
})

getPuzzle("2", (error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`);
    } else {
        console.log(puzzle);
    }
})

getCountry('US', (error, country) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Country name: ${country.name}`)
    }
})