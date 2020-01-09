// create a method for making a guess
// should accept a character for guessing
// should add unique guesses to list of guesses
// should decrement the guesses left if a unique guess isn't a match

const Hangman = function (word, remain) {
    this.word = word.toLowerCase().split('');
    this.remain = remain;
    this.guessed = [];
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = '';

    this.word.forEach((letter) => {
        if (this.guessed.includes(letter || letter === ' ')) {
            puzzle += letter;
        } else {
            puzzle += '*'
        }
    })

    return puzzle;
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessed.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    if (isUnique) {
        this.guessed.push(guess);
    }

    if (isUnique && isBadGuess) {
        this.remain--;
    }
}

const game1 = new Hangman('word', 5);
console.log(game1.getPuzzle());
console.log(game1.remain);

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    console.log(game1.getPuzzle());
    console.log(game1.remain);
})