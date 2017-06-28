var express = require('express');
var bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
// const data = require('./data.js')
const models = require('./models')
const app = express();
const fs = require('fs');
const path = require('path');
const router = express.Router();


const task = models.task.build({
  title: "clean the house",
  completed: false
})

// app.post('/', function (req, res) {
//   let nextTask = pushToArray(req.body.todo)
// })

app.post('/', function(req, res){
  let titles = pushToArray(req.body.todo);
  title: titles;
})
// task.save().then(function(newTask){
//   console.log(newTask);
//   console.log('^LoOk HeRe');
// })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache')
// app.set('layout', 'layout');
app.use('/static', express.static('static'));
app.use(express.static('public'));
app.engine('mustache', mustacheExpress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', './views');


app.get("/", function (req, res) {
    models.task.findAll().then(function (tasks) {
        res.render("index", {
            hashSlash: tasks
        });
    });
});

// app.get('/', function (req, res) {
//   res.render('index', {hashSlash: data.listItems})
// })



app.listen(3000, function(){
  console.log('Started express application!')
});
