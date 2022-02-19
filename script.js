const  inputBox = document.querySelector('.inputField input');
const  addBtn = document.querySelector('.inputField button');
const  todoList = document.querySelector('.todoList');
const  deleteAllBtn = document.querySelector('.footer button');

///////// инпут //////////////////////////////
inputBox.onkeyup = () => {
    let userData = inputBox.value;
    if (userData.trim() != 0){
        addBtn.classList.add('active');
    }else {
        addBtn.classList.remove('active');
    }
}
//////////////////////////////////////////////////////////




showTasks()




///////добавить элемент?//////////////////////////////////////////////////

addBtn.onclick = ()  => {
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem('New Todo')
    if (getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage)
    }
    listArr.push(userData);
    localStorage.setItem('New Todo' , JSON.stringify(listArr));
    showTasks()
}

/////////////////////////////////////////////////////////////////////////









//////////функсия элемента?////////////////////////////////////////////


function  showTasks(){
    let getLocalStorage = localStorage.getItem('New Todo')
    if (getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage)
    }
    const pedi = document.querySelector('.pendingNum')
    if (listArr.length === 0){
        pedi.textContent = 'ничего нету'
    } else {
        pedi.textContent = listArr.length+' элемент'
    }

    let newLiTag = ''
    listArr.forEach((el , idx) => {
        newLiTag += `<li>${el}<span onclick ="deleteTask(${idx})"><i class="fas fa-trash mod-input"></i></span></li>`;
    })
    todoList.innerHTML = newLiTag;
    inputBox.value = ''
}

// console.log (null = {0:1} [0] )

//////////////////////////////////////////////////////////////////////////










////////////удаление элементов////////////////////////////////////////////

function deleteTask(idx){
    let getLocalStorage = localStorage.getItem('New Todo');
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(idx , 1);

    localStorage.setItem('New Todo' , JSON.stringify(listArr));
    showTasks()
}

//////////////////////////////////////////////////////







/////////удалить все/////////////////////////////


deleteAllBtn.onclick = () => {
    listArr = []
    localStorage.setItem('New Todo' , JSON.stringify(listArr));
    showTasks()
}

/////////////////////////////////////////////////////////////





//////////изменение елементов ///////////////////////////////

let inputValue2 = document.querySelector('.m-t-input')
let inputValueSubmit = document.querySelector('.m-t-input-submit')

let getLocalStorage = localStorage.getItem('New Todo');
listArr = JSON.parse(getLocalStorage);
inputValue2.value = listArr.map((el) => {
    el.length
})






////////////модальное окно///////////////////////////////////
let modalTodo = document.querySelectorAll('.todoList li')
let modInput = document.querySelector('.modal-todo')

modalTodo.forEach(modalTodo => {
    modalTodo.addEventListener('click' , () => {
        modInput.style.display = 'flex'
        modInput.style.animationIterationCount = "flex"

    })
})

window.addEventListener('click' ,  (event) => {
    if (event.target === modInput){
        modInput.style.display = 'none'
    }
})
/////////////////////////////////////////////////////////////









