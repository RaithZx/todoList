import React, {useState, useCallback, useEffect} from 'react';

const App = () => {
  const [newTodo , setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const onNewTodoChange = useCallback((event) => {
    setNewTodo(event.target.value)
  },[])
  
  const formSubmitted = useCallback((event) =>{
    event.preventDefault();
    if (!newTodo.trim()) return;
    setTodos([
      ...todos,
      {
        id:todos.length+1,
        content: newTodo,
        done: false
      }
    ])
    setNewTodo('')
  }, [newTodo, todos]);
  
  const addTodo = (todo, index) => (event) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1, {
      ...todo,
      done: !todo.target.checked
    })
  }
  useEffect(() => {
    console.log('todos', todos)
  },[todos])

  return (
    <div>
      <form onSubmit={formSubmitted}>
        <label for="newTodo">Enter a todo:</label>
        <input 
          id="newTodo"
          name="newTodo"
          value={newTodo}
          onChange={onNewTodoChange}
          />
          <button>Add todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox"
              checked={todo.done}
              onChange={addTodo}
            />
            {todo.content}
            </li>
        ))}
      </ul>
      <div>
      </div>
    </div>
  );
}

export default App;
