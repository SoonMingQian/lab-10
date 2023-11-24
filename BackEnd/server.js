const express = require('express')
const app = express()
const port = 4000

const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
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

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://qian:qian8082@cluster0.mbl5ukq.mongodb.net/?retryWrites=true&w=majority');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const bookSchema = new mongoose.Schema({
    title:String,
    cover:String,
    author:String
})

const bookModel = mongoose.model('books', bookSchema);

app.put('/api/books/:id', async(req, res)=>{
    console.log("Update: " + req.params.id);
    let book = await bookModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.send(book);
})

app.post('/api/books', (req, res) => {
    console.log(req.body);
    bookModel.create({
        title:req.body.title,
        cover:req.body.cover,
        author:req.body.author
    })
    .then(() => {res.send("Data Received")})
    .catch(() => {res.send("Error")})
})


//Root route
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying')
})

//Route with a dynamic parameter
app.get("/hello/:name", (req, res) => {
    console.log(req.params.name);
    res.send("Hello " + req.params.name);
})

//Route for fetching a list of books
app.get('/api/books', async (req, res) => {
    let books = await bookModel.find({});
    res.json(books);
})

app.get('/api/book/:id', async (req, res) => {
    console.log(req.params.id);
    let books = await bookModel.findById({_id:req.params.id})
    res.send(books);
})

//Route for serving an HTML file
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

//Route to handle GET requests for name
app.get('/name', (req, res) => {
    res.send("Hello " + req.query.fname + ' ' + req.query.lname)
})

//Route to handle POST requests for name
app.post('/name', (req, res) => {
    res.send("Hello " + req.body.fname + " " + req.body.lname);
})
app.get("/whatever", (req, res) => {
    res.send("GoodBye")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})