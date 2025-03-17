document.addEventListener("DOMContentLoaded", () => {
  //makes sure script runs after web page has fully loaded.
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    //listens for form submission.
    event.preventDefault(); //this prevents page from reloading/refreshing.

    const taskInput = document.getElementById("new-task-description"); //fetches user input
    const inputText = taskInput.value.trim(); //.trim removes spaces.The spaces won't be cosidered as tasks.
    const dateInput = document.getElementById("task-date");
    const taskDate = dateInput.value;

    if (!inputText || !taskDate) return; //prevents function from running when input is empty(ignores spaces and empty dates)

    const toDoItem = document.createElement("li"); //li is created to store the task
    //toDoItem.textContent = inputText;
    toDoItem.textContent = `${taskDate}: ${inputText}`;

    //edit button

    const editButton = document.createElement("button"); // edit button is created
    editButton.textContent = "📝";
    editButton.style.marginLeft = "15px";
    editButton.onclick = () => {
      //when clicked a prompt with edit your task is displayed
      const newText = prompt("Edit your task:", inputText);
      if (newText !== null && newText.trim() !== "") {
        toDoItem.textContent = `${taskDate}: ${newText}`;
        toDoItem.appendChild(editButton);
        toDoItem.appendChild(deleteButton);
      }
    };

    //delete button
    const deleteButton = document.createElement("button"); //delete button is created
    deleteButton.textContent = "DEL";
    deleteButton.onclick = () => toDoItem.remove(); //when clicked it deletes
    deleteButton.style.marginRight = "15px";

    toDoItem.appendChild(editButton);
    toDoItem.appendChild(deleteButton); //button is added next to every task.
    taskList.appendChild(toDoItem); //new task is added to the "ul" in html

    taskInput.value = ""; //after adding task,this clear the input to allow the user to add another task.
    dateInput.value = "";
  });
});
