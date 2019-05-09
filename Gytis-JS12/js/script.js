class Task {
    constructor(text) {
        this.text = text;
        this.done = false;
    }

}

const listView = document.querySelector('ul');
const todoInput = document.querySelector('input');
const addButton = document.querySelector('.button');
const inputElement = document.querySelectorAll('ul li');

const tasks = [];

addButton.addEventListener('click', () => {
    tasks.push(new Task(todoInput.value));

    drawTasks();
});

function drawTasks() {
    listView.innerHTML = '';
    tasks.forEach((task, index) => {
        let className = task.done ? 'done' : '';

        let imageToShow = task.done ? 'img/share.png' : 'img/dribble.png';

        listView.innerHTML += `<li class="${className}" onclick="taskDone(${index})">${task.text}</li>`;
    });
}

function taskDone(taskIndex) {
    if (tasks[taskIndex].done) {
        tasks.splice(taskIndex, 1);
    } else {
        tasks[taskIndex].done = true;
    }
    drawTasks();
}













































