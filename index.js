console.log('Spirit of this Machine, heed my will!');

import { Task } from "./Task/script.js"


let counter = 0;

const updateCounter = () => {

    counter++;

    if (counter % 2 === 0) {
        renderTasks();
    } else {
        showNotDone();
    }
};

const renderTasks = () => {

    fetch("https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks").then(
        (response) => {
            return response.json();
        })
        .then((data) => {  
            toDoWrapper.innerHTML = data.map(Task).join(``);
         });

         console.log(counter);
};


const toDoWrapper = document.querySelector(".todo__tasks")

renderTasks();


const showNotDone = () => {
    
    fetch("https://apps.kodim.cz/daweb/trening-api/apis/tasks-api//tasks?done=false").then(
        (response) => {
            return response.json();
        })
        .then((data) => {
            toDoWrapper.innerHTML = data.map(Task).join(``);
        });

        console.log(counter);
};



const notDone = document.getElementById("checkbox-undone");

notDone.addEventListener("click", showNotDone);

notDone.addEventListener("click", updateCounter)