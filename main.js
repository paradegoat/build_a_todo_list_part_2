var express = require('express');
var bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const data = require('./data.js')
var app = express();



app.use(express.static('public'));
app.engine('mustache', mustacheExpress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', './views');
app.set('view engine', 'mustache')



app.get('/', function (req, res) {
  res.render('index', {hashSlash: data.listItems})
})

app.post('/', function (req, res) {
  let nextTask = pushToArray(req.body.todo)
})

app.listen(3000, function(){
  console.log('Started express application!')
});
