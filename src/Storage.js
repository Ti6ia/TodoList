// Static class to manage storage

export default class Storage{
    static getTodoList = () => {
        let todolist;
        if(localStorage.getItem('todolist') === null){
            todos = [];
        }else {
            todos = JSON.parse(localStorage.getItem('todolist'));
        }
        return todos;
    }

    static saveTodoList = inputData => {
        const todos = getTodoList();
        todos.push(inputData);
        localStorage.setItem('todolist', JSON.stringify(todos));
    }

    
}