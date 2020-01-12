const printTeam = (teamName, coach, ...players) => {
    console.log(`Team: ${teamName}`);
    console.log(`Coach: ${coach}`);
    console.log(`Players: ${players.join(', ')}`)
}

const team = {
    name: 'Liberty',
    coach: 'Casey Penn',
    players: ['Marge', 'Aiden', 'Herbert', 'Sherry']
}

printTeam(team.name, team.coach, ...team.players)

const cities = ['Barcelona', 'Cape Town', 'Bordeaux']
const citiesCopy = [...cities, 'Santiago']

console.log(cities)
console.log(citiesCopy)