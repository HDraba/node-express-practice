const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// for CSS
app.use(express.static(path.join(__dirname, 'public')));

// routing
const main = require('./routes/main');
const party = require('./routes/party');
const birds = require('./routes/birds');

app.get('/', main);
app.get('/party', party);
app.get('/birds', birds);

app.listen(3000);
