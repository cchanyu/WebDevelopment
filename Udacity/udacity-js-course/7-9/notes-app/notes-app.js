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

document.querySelector('#create').addEventListener("click", function (e) {
    e.target.textContent = "The button was clicked";
});

document.querySelector('#remove').addEventListener("click", function (e) {
    document.querySelectorAll(".note").forEach(function(note) {
        note.remove();
    });
});

document.querySelector('#search-text').addEventListener('change', function(e) {
   console.log(e.target.value) 
});