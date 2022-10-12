const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.set('viw engine', 'ejs')
// app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }));

// for CSS
app.use(express.static(path.join(__dirname, 'public')));

// routing
const main = require('./routes/main');
const party = require('./routes/party');
const birds = require('./routes/birds');

app.get('/party', party);
app.get('/birds', birds);
app.use('/', main);

app.listen(3000);
