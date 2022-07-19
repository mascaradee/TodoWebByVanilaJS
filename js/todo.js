const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = 'todos';
let toDos = [];

// 4. TODO 저장
function saveToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 로컬스토리지에는 텍스트만 저장된다. JSON.stringify()로 배열형태의 문자열로 저장한다. 
}

// 3. TODO html요소 삭제 
function deleteToDo(event) {
    // console.dir(event.target.parentElement);
    const li = event.target.parentElement; // 클릭된 요소의 부모요소를 찾는다. 
    li.remove();
    toDos = toDos.filter(item => item.id != li.id);
    saveToDo();

}

// 2. TODO 목록 그리기
function paintToDo(newTodo) {
    const newLi = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    newLi.id = newTodo.id;
    const button = document.createElement('button');
    button.innerText = '❌';
    button.addEventListener('click', deleteToDo);
    newLi.appendChild(button);
    newLi.appendChild(span);
    toDoList.appendChild(newLi);
}

// 1. 인입값 처리
function handleToDoSubmit(event) {

    if (toDos.length > 3) {
        alert('Please write maximin 4 todo.');
        document.querySelector('todo-text').value = '';
        return;
    }
    event.preventDefault();
    const newTodo = toDoInput.value;
    const newTodoObj = {
        text: toDoInput.value,
        id: Date.now()
    }
    toDoInput.value = '';
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDo();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

// 5. 저장된 값 불러오기: 안하면 새로고침시마다 노출이 안됨
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}