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
  if(e.target.closest('div').classList.contains('delete-btn')) 
  e.target.closest('section').remove()
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
    `<li class="dom-task" data-id="${taskId}" id="${taskId}">
        <input type='image' src='./images/delete.svg' class='icon js-li-delete'>
        <p class='nav__li--text'>${listItemInput.value}</p>
      </li>`);
}


const createList= () => {
  const domTaskList = []
  
  document.querySelectorAll('.dom-task').forEach(task => domTaskList.push({id:task.id, text:task.innerText}))
  const bob = domTaskList.map(domTask => `
  <li class="task-item" id=${domTask.id}><input class="icon talk-checkbox" type="image" src='./images/checkbox.svg'><p class="task-text">${domTask.text}</p></li>
  `)
  console.log('bob: ',bob)
  listContainer.insertAdjacentHTML(
    "afterbegin",
    `<section class="checklist">
    <div class="tasklist">
      <div class="list-header">Title</div> 
      <ul class="task-list">
        ${bob.join('')}
        
      </ul>
      <footer class="list-footer">
        <div class="urgent-btn">
          <img class='icon' src='./images/urgent.svg' />
          urgent
        </div>
        <div class="delete-btn">
          <img class='icon' src='./images/delete.svg' />
          All done
        </div>
      </footer>
    </div>
  </section>`
  );
};
