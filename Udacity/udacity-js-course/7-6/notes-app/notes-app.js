const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
},{
    title: 'Habbits to work on',
    body: 'Exercise, eating a bit better.'
},{
    title: 'Office modification',
    body: 'Get a new seat'
}];

// DOM - Document Object Model:

// selects the p tag from HTML file
// query and remove, only removes 1st match it finds
const p = document.querySelector('p');
p.remove();

// query all and remove
const ps = document.querySelectorAll('p');
ps.forEach(function (p) {
    p.textContent = '******';
    // console.log(p.textContent);
    // p.remove();
});

// Add a new element
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new element from Javascript'
document.querySelector('body').appendChild(newParagraph);