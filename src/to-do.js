const Task = require('./task')
function TodoList(listName) {
  this.listName = listName;
  this.tasks = [];
}

TodoList.prototype = {
  constructor: TodoList,
  markAllComplete: function(){
    this.tasks.forEach(task => task.isComplete = true);
  },
  getCompleteTask: function(){
    return this.tasks.filter(task => task.isComplete);
  },
  getIncompleteTask: function(){
    return this.tasks.filter(task => !task.isComplete);
  },
  addTask: function(task, dueDate){
    const newTask = new Task(task,dueDate);
    this.tasks.push(newTask);
    return newTask;
  },
  deleteAll: function(){
    return this.tasks.splice(0)
  },
  deleteTask: function(id){
    const task = this.tasks.find((task) => task.task_id === id);
    return this.tasks.splice(this.tasks.indexOf(task), 1);
  },
}
module.exports = TodoList;