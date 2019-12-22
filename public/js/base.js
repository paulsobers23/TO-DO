const tasks = document.querySelectorAll('.task');
const dueDate = document.querySelectorAll('.due-dates');

tasks.forEach((task) => {
  task.addEventListener('dblclick', switchToForm)
});;


function switchToForm(event) {
  let originalInput = event.target.innerHTML;
  const taskForm =`
  <form method='post' action ='/update_task'>
    <div class = 'inline input-field'>
      <input name ='${event.target.dataset.id}' type ='text' value ='${originalInput}' />
    </div>
  </form>  
`;
  console.log(event);
  event.target.innerHTML = taskForm;
}