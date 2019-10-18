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

//Event listeners

document.querySelector('.aside').addEventListener('click', asideClickHandler);
listItemInput.addEventListener('keydown', inputEnter)

function asideClickHandler (e) {

  if(e.target.classList.contains('add-task')) addTaskToNav();

  if(e.target.classList.contains('js-li-delete')) removeTask(e);

  if(e.target.classList.contains('js-make-list-btn')){
    console.log('here')
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


