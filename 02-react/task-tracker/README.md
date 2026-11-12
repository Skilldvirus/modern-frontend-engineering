# Task Tracker

A small React application for practicing component composition, state updates, and async UI states.

## Features

- Load example tasks through a delayed mock service
- Add tasks and toggle completion
- Filter tasks by all, active, or completed
- Show loading, empty, and error/retry states
- Display a completed-task count

Task data is held in React state and comes from a mock in-memory service. It is not connected to a production API and does not persist across page reloads.

## Implementation

- `src/App.jsx` owns task state, filtering, loading/error handling, and task actions.
- `src/taskList.jsx` renders filtered tasks and passes the toggle callback to each item.
- `src/taskItem.jsx` renders an individual task checkbox and title.
- `src/taskSummary.jsx` displays the completed count.
- `src/mockService.jsx` simulates an asynchronous task request.

## Run locally

From this directory:

```sh
npm install
npm run dev
```

## Validation

```sh
npm run lint
npm run build
```
