const taskArray =[]
//Inputs
const taskTitleInput = document.querySelector('.task-title');
const listItemInput =  document.querySelector('.list-item');
const addTaskBtn = document.querySelector('.add-task');

//Buttons
const makeListBtn = document.querySelector('.js-make-list-btn')
const clearAllBtn = document.querySelector('.js-clear-btn')
const urgentListBtn = document.querySelector('.js-filter-btn')

//Locations for adding items
const domTasks = document.querySelector('.js__taskList')
const listContainer = document.querySelector('.main__div-list')
//Event listeners

document.querySelector('.aside').addEventListener('click', asideClickHandler);
listItemInput.addEventListener('keydown', inputEnter)
listContainer.addEventListener('click', mainClickHandeler)

function mainClickHandeler(e) {
  console.log(e.target)
  if(e.target.closest('div').classList.contains('delete-btn')){ 
  e.target.closest('section').remove()
  }

  if(e.target.getAttribute('src') === './images/checkbox.svg') {
    changeCheckBox(e);
  }

  if(e.target.dataset.name === 'urgentBtn'){
    console.log('hi')
    e.target.closest('section').classList.add('urgent')
    
  }
  
}


const changeCheckBox = (e) => {
  document.getElementById(e.target.id).setAttribute('src','./images/checkbox-active.svg');
  e.target.closest('li').classList.add('checked')
}

function asideClickHandler (e) {
  if(e.target.classList.contains('add-task')) addTaskToNav();
  if(e.target.classList.contains('js-li-delete')) removeTask(e);
  if(e.target.classList.contains('js-make-list-btn')){
    createList()
  }
}

function inputEnter(e) {
  if(e.key === 'Enter' && listItemInput.value !== '') {
    addTaskToNav()
  }
}

const removeTask = (e) => {
    e.target.closest('li').remove();
}

const addTaskToNav = () => {
  if (listItemInput.value !== ''){
    var taskId = Date.now();
    makeNavTask(taskId);
    listItemInput.value = '';
    listItemInput.focus();
  }
}

const makeNavTask = (taskId) => {
  domTasks.insertAdjacentHTML('beforeend',
    `<li class="dom-task" data-id="${taskId}">
        <input type='image' src='./images/delete.svg' class='icon js-li-delete'>
        <p class='nav__li--text'>${listItemInput.value}</p>
      </li>`);
}

const createList= () => {
  const domTaskList = []
  const title = document.querySelector('.task-title').value;
  const id = Date.now()
  document.querySelectorAll('.dom-task').forEach(task => domTaskList.push({id:task.dataset.id, text:task.innerText}))
  const tasks = domTaskList.map(domTask => `
  <li class="task-item" ><input id=${domTask.id} class="icon task-checkbox" type="image" src='./images/checkbox.svg'><p class="task-text">${domTask.text}</p></li>
  `)

  listContainer.insertAdjacentHTML(
    "afterbegin",
    `<section class="checklist" id=${id}>
    <div class="tasklist">
      <div class="list-header">${title}</div> 
      <ul class="task-list">
        ${tasks.join('')}
        
      </ul>
      <footer class="list-footer">
        <div class="urgent-btn" data-name='urgentBtn'>
          <img class='icon' data-name='urgentBtn' src='./images/urgent.svg' />
          urgent
        </div>
        <div class="delete-btn" data-name='btn'}>
          <img class='icon' data-name='btn' src='./images/delete.svg' />
          All done
        </div>
      </footer>
    </div>
  </section>`
  );
  document.querySelector('.js__taskList').innerHTML = '';
  document.querySelector('.task-title').value = '';
};

const checkOffTask = () => {

}