// create a constructor function for the hangman game
// setup two attributes, one for the word itself, another for the number of guesses allowed
// create two instances of it and print both of the console

const Hangman = function (word, guess) {
    this.word = word;
    this.guess = guess;
}

const game1 = new Hangman('word', 5);
console.log(game1);

const game2 = new Hangman('hardest', 6);
console.log(game2);
