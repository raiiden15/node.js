const fs = require('fs');
const filePath = "./tasks.json";

const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath) // returns a data buffer object, we need to convert into string
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson) 
    } catch (error) {
        return []
    }
}

const listTasks = () => {
    const tasks = loadTasks()
    tasks.forEach((task, index) => {
        console.log(`"${task.task}" this is at index ${index}`);
    });
}

const addTask = (task) => {
    // in order to add task, we first need to load the already allocated tasks and then add current task to it. Therefore we create loadTasks() method there. 
    const tasks = loadTasks()
    tasks.push({task})
    saveTasks(tasks)
    console.log("Task Added Successfully");
}

const saveTasks = (tasks) => {
    const dataJson = JSON.stringify(tasks)
    fs.writeFileSync(filePath, dataJson)
}

const removeTask = (index) => {
    
    const tasks = loadTasks()
    if (index < 0 || index >= tasks.length) {
        console.log("Invalid task index. Please provide a valid index.");
        return;
    }
    
    const removedTask = tasks.splice(index, 1)[0];
    saveTasks(tasks);
    console.log(`Task "${removedTask.task}" removed successfully.`);
}

const command = process.argv[2] // node todo/todo.js add "buy milk", 2 will get add. 
const argument = process.argv[3] // this will take "buy milk"

if (command === "add") {
    addTask(argument);
} else if (command === "list") {
    listTasks();
} else if (command === "remove") {
    removeTask(parseInt(argument));
} else {
    console.log("Command not found. ");
}