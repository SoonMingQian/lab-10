const express = require('express')
const app = express()
const port = 4000

const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

//Parse incoming requests 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/books',(req,res)=>{
    console.log(req.body);
    res.send("Data Received");
})


//Root route
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying')
})

//Route with a dunamic parameter
app.get("/hello/:name", (req, res) => {
    console.log(req.params.name);
    res.send("Hello "+ req.params.name);
})

//Route for fetching a list of books
app.get('/api/books', (req, res) => {
    const data = [
        {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
        "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        },
        {
        "title": "Getting MEAN with Mongo, Express, Angular, and Node",
        "isbn": "1617292036",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
        "status": "MEAP",
        "authors": ["Simon Holmes"],
        "categories": []
        }
        ];
    res.status(200).json({
        myBooks:data,
        "message":"Hello from the server"
    })
})

//Route for serving an HTML file
app.get('/test', (req, res) =>{
    res.sendFile(__dirname+ '/index.html')
})

//Route to handle GET requests for name
app.get('/name', (req, res) => {
    res.send("Hello "+ req.query.fname+ ' ' + req.query.lname)
})

//Route to handle POST requests for name
app.post('/name', (req, res) => {
    res.send("Hello "+req.body.fname + " "+req.body.lname);
})
app.get("/whatever", (req, res) => {
    res.send("GoodBye")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})