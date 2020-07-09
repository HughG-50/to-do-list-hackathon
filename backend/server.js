const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

//creates an instance of the Express Router
const todoRoutes = express.Router();

app.use(cors());
app.use(bodyParser.json());

//newNewURLParser - prevents deprecation
mongoose.connect('mongodb://127.0.0.1:271017/to-dos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

//
app.use('/to-dos', todoRoutes);