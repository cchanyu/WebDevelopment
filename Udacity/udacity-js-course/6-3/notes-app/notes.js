const notes = ['Note 1', 'Note 2', 'Note 3'];

console.log(notes.length);

console.log(notes.pop());

// adds later
notes.push('My new note');
console.log(notes.shift);
notes.unshift('My first note');

// when you want to remove
notes.splice(1, 1, 'This is the new second item');

// replacing a value at that position
notes[2] = 'This is now the new note 3';

let test_note = notes;
console.log(test_note);