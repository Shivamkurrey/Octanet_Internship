const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const completedList = document.getElementById("completedList");

addButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const card = document.createElement("li");
        card.className = "card";
        card.textContent = taskText;
        taskList.appendChild(card);
        taskInput.value = "";
        card.addEventListener("click", toggleTask);
    }
}

function toggleTask(event) {
    const card = event.target;
    card.classList.toggle("completed");
    if (card.classList.contains("completed")) {
        card.style.animation = "fadeOut 1s forwards";
        setTimeout(() => {
            taskList.removeChild(card);
            completedList.appendChild(card);
            card.style.animation = "";
        }, 1000);
    } else {
        card.style.animation = "fadeIn 1s forwards";
        setTimeout(() => {
            completedList.removeChild(card);
            taskList.appendChild(card);
            card.style.animation = "";
        }, 1000);
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
