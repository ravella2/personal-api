//require express and other modules
const 
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

//serve static files from public folder
app.use(express.static(__dirname + '/public'));


//HTML Endpoints
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

//Respone Enpoints
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
})