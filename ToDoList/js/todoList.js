export class ToDoList {
    constructor() {
        this.todoList = [];
    }
    addToDo(todo) {
        this.todoList.push(todo);
    }
    removeToDo(index) {
        this.todoList.splice(index, 1);
    }
    renderToDo() {
        let content = "";
        content += this.todoList.reduceRight((tdContent, item, index) => {
            tdContent += `
                <li>
                    <span>${item.textTodo}</span>
                    <div class="buttons">
                        <button class="remove" data-index ="${index}" data-status ="${item.status}" onclick="deleteToDo(event)">
                            <i class="fa fa-trash-alt"></i>
                        </button>
                        <button class="complete" data-index ="${index}" data-status ="${item.status}" onclick="completeToDo(event)">
                            <i class="far fa-check-circle"></i>
                            <i class="fas fa-check-circle"></i>
                        </button>
                    </div>
                </li>
            `;
            return tdContent;
        }, '')
        return content;
    }
    sortToDoList(isDES) {
        this.todoList.sort((todo, nextTodo) => {
            const textA = todo.textTodo.toLowerCase();
            const textB = nextTodo.textTodo.toLowerCase();
            // ASC
            return textB.localeCompare(textA);
        });
        if (isDES) {
            this.todoList.reverse();
        }
    }
}