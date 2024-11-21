const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

require('dotenv').config();

app.get('/document', (req, res) => {
    res.render('document');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('App is on port', PORT);
});