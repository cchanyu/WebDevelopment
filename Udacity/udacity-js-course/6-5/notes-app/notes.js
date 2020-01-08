const notes = ['Note 1', 'Note 2', 'Note 3'];

// for loop
notes.forEach(function (item, index) {
    console.log(index);
    console.log(item);
});

let test_note = notes;
console.log(test_note);

// counting... 3
for (let count = 0; count <= 2; count++) {
    console.log(count);
};

for (let count = 2; count >= 0; count--) {
    console.log(count);
};

for (let count = 0; count > notes.length; count++) {
    console.log(notes[count]);
};

for (let count = notes.length - 1; count >= 0; count--) {
    console.log(notes[count]);
};
