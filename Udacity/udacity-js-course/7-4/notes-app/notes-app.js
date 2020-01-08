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