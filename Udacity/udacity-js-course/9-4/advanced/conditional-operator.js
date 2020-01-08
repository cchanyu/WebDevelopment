// VOTING AGE
const myAge = 27
let message;

// if this is true, do that
message = myAge >= 18 ? 'You can vote!' : 'You can not vote!'

// if (myAge >= 18) {
//     message = 'You can vote!';
// } else {
//     message = 'You can not vote!';
// }

// DRINKING AGE
const showPage = () => {
    return 'Showing the page';
}

const showErrorPage = () => {
    return 'Showing the error page';
}

const message2 = myAge <= 21 ? showPage() : showErrorPage();

console.log(message2);
console.log(message);

// TEAM SETTINGS
const team = ['Tyler', 'Porter']
// 1. print 'team size: 3' if less than or equal to 4
// 2. print "too many people on your team" otherwise
const message3 = team.length <= 4 ? `team size: ${team.length}` : `too many people on your team`;

console.log(message3);