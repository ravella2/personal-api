//require express and other modules
const 
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    db = require('./models')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

//serve static files from public folder
app.use(express.static(__dirname + '/public'));

//HTML Endpoints
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

//JSON API Endpoints
app.get('/api', (req, res) => {
    res.json({
        documentationUrl: "https://github.com/ravella2/personal-api",
        baseUrl: "https://pacific-reef-31409.herokuapp.com/",
        endpoints: [
            {method: "GET", path: "/api", description: "Describes all available enpoints"},
            {method: "GET", path: "/api/profile", description: "Who I am"},
            {method: "GET", path: "/api/dodgerplayers", description: "Index of all Dodger player roster"},
            {method: "POST", path: "/api/dodgerplayers", description: "Create a new Dodger"},
            {method: "PUT", path: "/api/dodgerplayers/:id", description: "Edit a previous Dodger"},
            {method: "DELETE", path: "api/dodgerplayers/:id", description: "Deletes a Dodger player"}
        ]
    })
});

//Profile
app.get('/api/profile', (req, res) => {
    res.json({
        name: "Rachele Avella",
        githubUsername: "ravella2",
        githubLink: "https://github.com/ravella2",
        githubProfileImage: "#",
        currentCity: "Redwood City, CA",
        pets: [{
            name: "Hamilton",
            type: "Fish",
            breed: "Dwarf Gourami"
        }]
    });
});


//Response Enpoints
app.listen(process.env.PORT || 3000, () => {
    console.log('Server running on http://localhost:3000');
});