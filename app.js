const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// for CSS
app.use(express.static(path.join(__dirname, 'public')));

// routing
const birds = require('./routes/birds')

app.get('/', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'views', ))
    console.log('empty - first page')
})
app.get('/party', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'views', ))
    
    console.log('still empty - second page')

})

app.get('/birds', birds)


app.listen(3000)