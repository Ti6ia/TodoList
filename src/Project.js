// Class Projext, where i store tasks
// must exist class "default" to save every task without a specific project

import {Task} from "./Task";

class Project{
    constructor(name){
        this.name = name;
        this.tasks = [];
    }

    test(){ console.log("test project method");}

    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }

    setTasks(tasks){ //array
        this.tasks = tasks;
    }
    getTasks(){
        return this.tasks;
    }

    getTask(taskName){
        return this.tasks.find((task) => task.getName() === taskName);
    }
    addTask(newTask){
        this.tasks.push(newTask);
        // if(this.tasks.find((task) => task.getName() === newTask.getName())){
        //     alert('You already add this task');
        //     return -1;
        // } else {
        //     this.tasks.push(newTask);
        //     // this.tasks.sort((a, b) => new Date(a.getDueDate()) - new Date(b.getDueDate()));
        // }
    }
    // deleteTask(taskToDelete){
    //     if(this.tasks.find((task) => task.getName() == taskToDelete)){

    //     }
    // }
}

export {Project};

// test(){
    //     let date = [];

    //     let date1 = format(addDays(new Date(), 3), 'dd/MM/yyyy');
    //     let date2 = format(new Date(), 'dd/MM/yyyy');
    //     let date3 = format(addDays(new Date(), 2), 'dd/MM/yyyy');

    //     date.push(date1);
    //     date.push(date2);
    //     date.push(date3);


        
    //     console.log(date);
    //     // console.log(date2);
    // }