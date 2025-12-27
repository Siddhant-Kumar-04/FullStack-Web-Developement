
document.getElementById("formMain").addEventListener("submit", function (event) {
    event.preventDefault();
    const taskInput = document.getElementById("inputTask")
    const task = taskInput.value;
    if (task === '') {
        alert('Please Enter a task');
        return;
    }
    setUpcreateTaskElement(task);
    taskInput.value = '';
});
function setUpcreateTaskElement(task) {
    const licreateElement = document.createElement("li");
    licreateElement.textContent = task;
    const btn1 = document.createElement("button");
    btn1.textContent = "Delete";
    const mainElement = document.getElementById("Matrial");
    licreateElement.appendChild(btn1);
    mainElement.appendChild(licreateElement);
    setUpEventListenerForDelete(btn1, licreateElement);


}
function setUpEventListenerForDelete(button, listItem) {
    button.addEventListener("click", function (event) {
       listItem.remove();
    });
} 