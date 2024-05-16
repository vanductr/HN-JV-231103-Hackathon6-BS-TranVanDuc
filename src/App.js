import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './App.css';
import ConfirmDialog from './components/ConfirmDialog';
import EditDialog from './components/EditDialog';

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  }); // Local 

  const [todoToDelete, setTodoToDelete] = useState(null); // Logic liên quan: Ẩn hiện, Xác nhận việc xoá Todo.
  const [todoToEdit, setTodoToEdit] = useState(null); // Logic của việc Edit

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]); // Khi có bất kì thay đổi nào của todos thì ngay lập tức cập nhật Local

  const addTodo = title => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const confirmDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
    setTodoToDelete(null);
  };

  const cancelDelete = () => {
    setTodoToDelete(null);
  };

  const handleDeleteClick = (todo) => {
    setTodoToDelete(todo);
  };

  const saveEditTodo = (id, newTitle) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
    setTodoToEdit(null);
  };

  const cancelEdit = () => {
    setTodoToEdit(null);
  };

  const handleEditClick = (todo) => {
    setTodoToEdit(todo);
  };

  return (
    <div className="App">
      <h1>Danh Sách Công Việc</h1>
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={handleDeleteClick} onEdit={handleEditClick} />
      {todoToDelete && (
        <ConfirmDialog
          todo={todoToDelete}
          onConfirm={confirmDeleteTodo}
          onCancel={cancelDelete}
        />
      )}
      {todoToEdit && (
        <EditDialog
          todo={todoToEdit}
          onSave={saveEditTodo}
          onCancel={cancelEdit}
        />
      )}
    </div>
  );
};

export default App;


// TodoList:
// 1. Cắt giao diện
// 2. Create
// 3. Read
// 4. Delete
// 5. Edit
// 6. Checked
// 7. Focus
// 8. Chức năng nâng cao.
// 9. Up Git