const db = require('./models');

const dodgers_list = [
    {
        name: "Clayton Kershaw",
        position: "Pitcher",
        jerseyNumber: 22,
        hometown: "Dallas, Tx",
        image: "https://securea.mlb.com/mlb/images/players/head_shot/477132.jpg"
    },
    {
        name: "Enrique Hernandez",
        position: "Utility Player",
        jerseyNumber: 14,
        hometown: "Toa Baja, Puerto Rico",
        image: "http://mlb.mlb.com/mlb/images/players/head_shot/571771.jpg"
    },
    {
        name: "Matt Kemp",
        position: "Outfielder",
        jerseyNumber: 27,
        hometown: "Midwest City, OK",
        image: "https://securea.mlb.com/mlb/images/players/head_shot/461314.jpg"
    },
    {
        name: "Justin Turner",
        position: "Third Baseman",
        jerseyNumber: 10,
        hometown: "Long Beach, CA",
        image: "https://i1.wp.com/scvnews.com/wp-content/uploads/2017/09/Justin-Turner.jpg?resize=300%2C451&ssl=1"
    },
    {
        name: "Cody Bellinger",
        position: "First Baseman",
        jerseyNumber: 35,
        hometown: "Scottsdale, AZ",
        image: "http://mlb.mlb.com/mlb/images/players/head_shot/641355.jpg"
    }
];

var newPlayers = new Array();

dodgers_list.forEach(player => {
    db.Player.create(player, (err, newPlayer) => {
        if(err) {
            return console.log(err);
        }
        newPlayers.push(newPlayer);
    })
}) 

// console.log('player added');

