document.getElementById("todoList").addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        alert("You clicked: " + event.target.textContent);
    }
});
