const express = require('express');
const app = express();
const cors = require('cors');
var morgan = require('morgan');


const port = 3000;

const oData = {
    name: "Oscar Navas",
    data: [56,
        80,
        100,
        100,
        75,
        85,
        100,
        0,
        50,
        50,
        50,
        50],
    months: ["January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"]
};

app.use(morgan('dev'))
app.use(cors())

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + "/public"));

app.get('/home', (req, res) => {
    res.render("index", oData);
});

app.get('/c', (req, res) => {
    res.render("chart")
})

app.listen(port, () => {
    console.log('servidor en el puerto: ', port);
});