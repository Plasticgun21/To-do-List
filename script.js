document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todoInput');
    const addButton = document.getElementById('addButton');
    const todoList = document.getElementById('todoList');

    addButton.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const li = document.createElement('li');
            li.textContent = todoText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Löschen';
            deleteButton.addEventListener('click', () => {
                li.remove();
            });

            li.appendChild(deleteButton);
            li.addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            todoList.appendChild(li);
            todoInput.value = '';
        }
    }
});