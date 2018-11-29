const db = require('./models');

const dodgers_list = [
    {
        name: "Clayton Kershaw",
        position: "Pitcher",
        jerseyNumber: 22,
        hometown: "Dallas, Tx",
        image: "#"
    },
    {
        name: "Enrique Hernandez",
        position: "Utility Player",
        jerseyNumber: 14,
        hometown: "Toa Baja, Puerto Rico",
        image: "#"
    },
    {
        name: "Matt Kemp",
        position: "Outfielder",
        jerseyNumber: 27,
        hometown: "Midwest City, OK",
        image: "#"
    },
    {
        name: "Justin Turner",
        position: "Third Baseman",
        jerseyNumber: 10,
        hometown: "Long Beach, CA",
        image: "#"
    },
    {
        name: "Cody Bellinger",
        position: "First Baseman",
        jerseyNumber: 35,
        hometown: "Scottsdale, AZ",
        image: "#"
    }
];

var newPlayers = new Array();

dodgers_list.forEach(player => {
    db.Player.create(player, (err, newPlayer) => {
        if(err) return console.log(err);
        newPlayers.push(newPlayer);
    })
}) 

console.log('player added');

