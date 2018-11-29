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
            {method: "GET", path: "/api/favshows", description: "Index of all favorite TV shows"},
            {method: "POST", path: "/api/favshows", description: "Create a new favorite TV show"},
            {method: "PUT", path: "/api/favshows/:id", description: "Edit a previous favorite show"},
            {method: "DELETE", path: "api/favshows/:id", description: "Deletes a favorite show"}
        ]
    })
});


//Response Enpoints
app.listen(process.env.PORT || 3000, () => {
    console.log('Server running on http://localhost:3000');
});