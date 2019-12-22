const express = require('express')
const app = express();
const expressLayouts = require('express-ejs-layouts')
const port = 8080;
const TodoList = require('./src/to-do');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(expressLayouts);
app.use(express.static('public'));

const todoList = new TodoList('Your Task List');

app.get('/', (req,res) => {
  res.render('index', {todoList: todoList})
});

app.post('/add_task', (req,res) => {
  console.log(req.body);
  todoList.addTask(req.body.task, req.body.dueDate);
  res.render('index', { todoList })
});

app.post('/delete_task', (req, res) => {
  console.log(req.body);
  let task_id = Number(Object.keys(req.body)[0])
  todoList.deleteTask(task_id)
  res.render('index', { todoList })
});

app.post('/update_task', (req, res) =>{
  console.log(req.body);
  let taskIdStr = Object.keys(req.body)[0]
  const task = todoList.tasks.find((task) => task.task_id === Number(taskIdStr));
  task.updateTask(req.body[taskIdStr]);
  res.render('index', { todoList })
});

app.get('/test', (req,res) => {
  res.render('checking', { todoList });
  
});

app.listen(port,() => console.log(`Now listening on port ${port}...`))