const notes = [{}, {
    title: 'My next trip',
    body: 'I would like to go to Spain'
},{
    title: 'Habbits to work on',
    body: 'Exercise, eating a bit better.'
},{
    title: 'Office modification',
    body: 'Get a new seat'
}];

// // for loop
// notes.forEach(function (item, index) {
//     console.log(index);
//     console.log(item);
// });

const index = notes.findIndex(function(note, index) {
    return note.title === 'Habbits to work on';
});
console.log(index);
