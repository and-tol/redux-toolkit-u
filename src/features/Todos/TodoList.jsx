import { useDispatch, useSelector } from 'react-redux';

import { selectVisibleTodos, toggleTodo, removeTodo } from './todos-slice.js';

export const TodoList = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(state => state.filter);
  const todos = useSelector(state => {
    return selectVisibleTodos(state, currentFilter);
  });

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <input
            type='checkbox'
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />{' '}
          {todo.title}{' '}
          <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
        </li>
      ))}
    </ul>
  );
};
