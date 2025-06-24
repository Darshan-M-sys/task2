# task2
TO-DO LIST APP
Languages
-----
*HTML
*CSS
*JAVASCRIPT


🧩 HTML Concepts
Basic HTML Structure
The app uses a simple HTML structure with:

An <input> field to enter the task.

A <button> to add the task.

A <ul> to hold the list items (<li>) dynamically.

DOM Elements
Each element is assigned an id (like taskInput, taskList) to easily access it using JavaScript.

🎨 CSS Concepts
Styling the layout
CSS is used to:

Center the layout using flexbox.

Add spacing, padding, borders, and shadows for a clean UI.

Style list items and buttons individually.

Dynamic Class Styling
The .completed class is styled to apply text-decoration: line-through for marking tasks as completed.

📜 JavaScript Concepts
1. DOM Manipulation
document.getElementById() is used to select HTML elements.

document.createElement() is used to create new <li> and <button> elements.

element.appendChild() adds new nodes into the DOM.

2. Event Handling
addEventListener('click', ...) is used to handle:

Adding a task when the user clicks the "Add" button.

Marking a task as completed by toggling a class.

Deleting a task by clicking the "X" button.

3. Condition Checking & Validation
if (taskText === ''): Checks if the input is empty.

Duplicate task checking: Compares the entered task with existing tasks using a for loop.

4. String Manipulation
.trim() removes extra spaces from user input.

.textContent gets the text inside list items for comparison.

5. Class Manipulation
element.classList.toggle('completed'): Toggles a class to change the visual state (completed/incomplete).

element.className = 'remove': Adds a class to style the "X" button.

6. Event Propagation Control
e.stopPropagation(): Prevents the click event on the "X" button from also toggling the task as completed.

7. State Management
Although there’s no explicit state variable, the taskList (<ul>) acts as a simple state holder. You dynamically read/write to it based on user interaction.



Tools used
*vs code
*github

files
*index.html
*style.css
*script.js

