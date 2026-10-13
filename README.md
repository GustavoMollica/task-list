🇺🇸 English | 🇧🇷 [Português](README.pt-br.md)

# Task List

A simple task list built with vanilla HTML, CSS and JavaScript. Tasks are saved in the browser, so they are still there after reloading the page.

## Overview

The app lets the user add and remove tasks through a form. The list is stored in `localStorage` and rendered again when the page loads.

## Features

- Add tasks through a form
- Remove tasks with a button on each item
- Validation for empty tasks, including input with only spaces
- Tasks persisted in `localStorage`
- Accessibility basics: labeled input, error message announced by screen readers, descriptive `aria-label` on each remove button and visible keyboard focus
- Responsive layout, adapted for smaller screens

## Technologies

- HTML5
- CSS3 (Flexbox, CSS variables)
- JavaScript (Vanilla JS, no frameworks)

## How It Works

- `main()` in `assets/js/main.js` gets the DOM elements, registers the event listeners and loads the saved tasks.
- On submit, the text is trimmed and validated. If it is valid, the task is rendered and the list is saved.
- Clicking a remove button deletes that item and saves the list again.
- The list is stored in `localStorage` under the `tasks` key, as an array of strings.

## Project Structure

```
TaskList/
├── index.html
└── assets/
    ├── css/
    │   └── style.css
    └── js/
        └── main.js
```

## How to Run

No dependencies need to be installed. Open the `index.html` file in your browser (or use VS Code's **Live Server** extension).

## Future Improvements

- [ ] Handle `localStorage` errors with `try/catch` (corrupted data, full storage)
- [ ] Keep the tasks in a state array with an `id` per task, instead of reading the DOM
- [ ] Mark tasks as completed and edit them
- [ ] Split the code into modules
- [ ] Add automated tests

## Author

Gustavo Mollica
Fullstack Developer (.NET/C# on the back-end)
