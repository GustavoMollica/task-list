const STORAGE_KEY = 'tasks';

function main() {
    const form = document.querySelector('#form-tasks');
    const inputTask = document.querySelector('#input-task');
    const taskListElement = document.querySelector('#task-list');
    const divErrorMessage = document.querySelector('#div-error-message');

    function handleSubmit(e) {
        e.preventDefault();

        if (divErrorMessage.children.length)
            divErrorMessage.replaceChildren();

        const text = inputTask.value.trim();

        if (!text) {
            const message = 'É necessário digitar uma tarefa para adicionar';
            const elementH3 = buildElement('h3', 'error-message', message);

            divErrorMessage.appendChild(elementH3);
            clearInput(inputTask);

            return;
        }

        createTask(text);
        saveTasks();
        clearInput(inputTask);
    }

    function handleRemoveClick(e) {
        const target = e.target;

        if (target.classList.contains('btn-remove-task')) {
            target.closest('li').remove();
            saveTasks();
        }
    }

    function createTask(text) {
        const newElementLi = buildElement('li', 'li-task');
        const newElementSpan = buildElement('span', 'task-text', text);
        const newElementBtn = buildElement('button', 'btn-remove-task', 'Apagar');
        newElementBtn.setAttribute('aria-label', `Apagar tarefa: ${text}`);

        newElementLi.appendChild(newElementSpan);
        newElementLi.appendChild(newElementBtn);
        taskListElement.appendChild(newElementLi);
    }

    function saveTasks() {
        const taskTexts = Array.from(taskListElement.querySelectorAll('.task-text'))
            .map(span => span.textContent);

        localStorage.setItem(STORAGE_KEY, JSON.stringify(taskTexts));
    }

    function loadTasks() {
        const tasksJson = localStorage.getItem(STORAGE_KEY);
        const tasks = JSON.parse(tasksJson) || [];

        for (let task of tasks) {
            createTask(task);
        }
    }

    function buildElement(element, classElement, value = null) {
        const newElement = document.createElement(element);
        newElement.classList.add(classElement);

        if (value !== null)
            newElement.textContent = value;

        return newElement;
    }

    function clearInput(input) {
        input.value = '';
        input.focus();
    }

    form.addEventListener('submit', handleSubmit);
    taskListElement.addEventListener('click', handleRemoveClick);

    loadTasks();
}

main();
