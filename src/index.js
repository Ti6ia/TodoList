import { Task } from './Task';
import { Project } from './Project';
import { format } from "date-fns";
 
const buttons = document.querySelectorAll('button');
// console.log(buttons);

const project = new Project('Progetto');
// console.log(project);

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        //inputID => id of btn without "btn" and the first letter in lower case == id of input
        const inputID = e.target.id.substring('btn'.length).charAt(0).toLowerCase() + e.target.id.substring('btn'.length).slice(1);
        // input = input.value
        const inputName = document.querySelector(`#${inputID}Name`).value;
        let inputDueDate = document.querySelector(`#${inputID}DueDate`).value;
        console.log(inputDueDate);
        if(inputDueDate == ''){inputDueDate = undefined;}
        else { inputDueDate = inputDueDate.split('-'); }
        // format(inputDueDate, 'dd/MM/yyyy')
        // if input.value does not exist just return and alert the user
        if(inputName == ''){alert('Non hai inserito nessun dato'); return}

        //eseguo
        switch(inputID){
            case 'addTask':
                console.log(inputDueDate);
                project.addTask(new Task(inputName, format(new Date(inputDueDate[0], inputDueDate[1], inputDueDate[2]), 'dd/MM/yyyy')));
                console.log(project);
                break;
            case 'deleteTask':
                console.log('dentro deletetask');
                break;
            default:
                console.log('default');
        }
    });
});



// let newProject = new Project('NewProject');

// let task1 = new Task('FirstTask', new Date("2/1/22"));
// let task2 = new Task('SecondTask', new Date("2/3/22"));
// let task3 = new Task('ThirdTask', new Date("2/5/22"));
// let task4 = new Task('FirstTask', new Date("2/7/22"))

// newProject.addTask(task1);
// newProject.addTask(task2);
// newProject.addTask(task3);
// newProject.addTask(task4);




// console.log(newProject);
