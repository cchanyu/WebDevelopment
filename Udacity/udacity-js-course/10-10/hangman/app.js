const puzzleEl = document.getElementById('puzzle');
const guessesEl = document.getElementById('guesses');
const game1 = new Hangman('word', 5);

puzzleEl.textContent = game1.getPuzzle();
guessesEl.textContent = game1.remain;
console.log(game1.status);

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    puzzleEl.textContent = game1.getPuzzle();
    guessesEl.textContent = game1.remain;
    console.log(game1.status);
})