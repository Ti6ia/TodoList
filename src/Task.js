//Class Task, just to use tasks

class Task {
    constructor(name, dueDate = 'No date'){
        // this.id = id;
        this.name = name;
        this.dueDate = dueDate; 
    }

    test(){ console.log("test task method");}

    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }

    setDueDate(dueDate){
        this.dueDate = dueDate;
    }
    getDueDate(){
        return this.dueDate;
    }
}

export {Task};