import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const handleClick = (id) =>
    dispatch({
      type: 'DELETE_TODO',
      payload: id,
    });
  if (!todos || !todos.length) {
    return <p className="heading">NO Todos</p>;
  }
  return (
    <div className="show-list">
      <ul>
        {todos.map((todo) => (
          <li onClick={() => handleClick(todo.id)}>{todo.label}</li>
        ))}
      </ul>
    </div>
  );
};

const TodosInput = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState();
  const handleChange = (event) => setNewTodo(event.target.value);
  const handleClick = () =>
    dispatch({
      type: 'ADD_TODO',
      payload: {
        label: newTodo,
        id: Math.ceil(Math.random() * 100),
      },
    });
  return (
    <>
      <div className="input">
        <input
          className="input-field"
          value={newTodo || ' '}
          onChange={handleChange}
          type="text"
        />
        <button onClick={handleClick}> Add TODO</button>
      </div>
    </>
  );
};

export default class Home extends React.Component {
  render() {
    return (
      <div>
        Home
        <Todos />
        <TodosInput />
      </div>
    );
  }
}
