const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// routing
const main = require('./routes/main');
const user = require('./routes/user');
const birds = require('./routes/birds');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

// for CSS
app.use(express.static(path.join(__dirname, 'public')));

app.use('/main', main);
app.use('/user', user);
app.use('/birds', birds);
app.use((req, res, next) => {
  res.status(404).send('<h1>your princess is in another castle - 404 page not found</h1>');
});

app.listen(3000);
