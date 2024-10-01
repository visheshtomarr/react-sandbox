# React Sandbox - Implementation of React and Custom Hooks

This repository demonstrates the usage of built-in and custom React hooks. It aims to showcase various hooks provided by React to optimize performance and improve code reusability, along with custom hooks for handling HTTP requests and local storage management.

## Hooks

- **useRef**: Used to create a persistent reference to an element or value that does not cause a re-render when updated.

- **useMemo**: Optimizes performance by memoizing the result of expensive computations or functions, only recalculating when its dependencies change.

- **useCallback**: Memoizes a function to prevent it from being recreated on every render, unless its dependencies change. This can improve performance by reducing unnecessary re-renders.

- **useFetch (Custom Hook)**: A custom hook designed to simplify making HTTP requests (usually via the `fetch` API) and managing the resulting state within a React component.

- **useLocalStorage (Custom Hook)**: A custom hook that simplifies storing and retrieving data from the browser's local storage, while keeping the component's state reactive to changes.

## Installation
To install and run the project locally:
```
npm install
npm start
```