require('dotenv').config()

const express = require('express')
const app = express()
const indexRouter = require('./routes/index')
const bodyParser = require('body-parser');

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');


app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));
app.use('/', indexRouter);
app.use('/images', express.static(__dirname + '/images'));





app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});