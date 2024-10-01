import TodoForm from "./assets/components/todo-form/TodoForm";
import TodoList from "./assets/components/todo-list/TodoList";
// reducer function to manage state changes

function App() {
  return (
    <main className="cls-main">
      <h1>Todo React App</h1>
      <TodoForm />
      <TodoList />
    </main>
  );
}

export default App;
