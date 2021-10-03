import { ToDo } from './todo.js';
import { ToDoList } from './todoList.js';

let tdList = new ToDoList();
let completeList = new ToDoList();

const getElm = (id) => {
    return document.getElementById(id);
}

const addToDo = () => {
    let txtToDo = getElm("newTask").value;
    let ulToDo = getElm("todo");

    if (txtToDo == "") {
        return;
    }
    let td = new ToDo(txtToDo, "todo");
    tdList.addToDo(td);
    showToDoList(ulToDo);
    getElm("newTask").value = "";
}

getElm("addItem").addEventListener("click", () => {
    addToDo();
})

const showToDoList = (ulToDo) => {
    ulToDo.innerHTML = tdList.renderToDo();
}

const showCompleteList = (ulCompleted) => {
    ulCompleted.innerHTML = completeList.renderToDo();
}

const deleteToDo = (evt) => {
    let tdIndex = evt.currentTarget.getAttribute("data-index");
    let tdStatus = evt.currentTarget.getAttribute("data-status");
    let ulToDo = getElm("todo");
    let ulCompleted = getElm("completed");

    if (tdStatus == "todo") {
        tdList.removeToDo(tdIndex);
        showToDoList(ulToDo);
    }
    else if (tdStatus == "completed") {
        completeList.removeToDo(tdIndex);
        showCompleteList(ulCompleted);
    }
    else {
        alert("Cannot delete todo !");
    }
}

window.deleteToDo = deleteToDo;

const completeToDo = (evt) => {
    let tdIndex = evt.currentTarget.getAttribute("data-index");
    let tdStatus = evt.currentTarget.getAttribute("data-status");
    let ulToDo = getElm("todo");
    let ulCompleted = getElm("completed");

    if (tdStatus == "todo") {
        // slice: start <= index < end
        let completedItem = tdList.todoList.slice(tdIndex, tdIndex + 1);
        let objToDo = new ToDo(completedItem[0].textTodo, "completed");
        moveToDo(tdList, completeList, objToDo, tdIndex);
        showToDoList(ulToDo);
        showCompleteList(ulCompleted);
    }
    else if (tdStatus == "completed") {
        let undoItem = completeList.todoList.slice(tdIndex, tdIndex + 1);
        let objToDo = new ToDo(undoItem[0].textTodo, "todo");
        moveToDo(completeList, tdList, objToDo, tdIndex);
        showToDoList(ulToDo);
        showCompleteList(ulCompleted);
    }
    else {
        alert("Cannot remove todo !");
    }
}

window.completeToDo = completeToDo;

const moveToDo = (departure, arrival, objToDo, tdIndex) => {
    // Remove todo from departure
    departure.removeToDo(tdIndex);
    // Add todo to arrival
    arrival.addToDo(objToDo);
}

// Sort
const sort = (type) => {
    let ulToDo = getElm("todo");
    if (type == "ASC") {
        tdList.sortToDoList(false);
        showToDoList(ulToDo);
    }
    else if (type == "DES") {
        tdList.sortToDoList(true);
        showToDoList(ulToDo);
    }
    else {
        alert("Cannot sort ToDo List !");
    }
}

window.sort = sort;

let date = new Date();
document.getElementById('date').innerHTML = date.toDateString();