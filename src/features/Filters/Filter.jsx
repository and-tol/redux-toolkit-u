import { useDispatch, useSelector } from 'react-redux';

import { allTodos, activeTodos, completedTodos } from './filter-slice';

export const FilterTodo = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(state => state.filter);

  return (
    <div>
      <button
        style={{
          backgroundColor:
            activeFilter === 'all' ? 'paleturquoise' : 'lightsalmon',
        }}
        onClick={() => dispatch(allTodos('all'))}
      >
        all
      </button>
      <button
        style={{
          backgroundColor:
            activeFilter === 'active' ? 'paleturquoise' : 'lightsalmon',
        }}
        onClick={() => dispatch(activeTodos('active'))}
      >
        active
      </button>
      <button
        style={{
          backgroundColor:
            activeFilter === 'completed' ? 'paleturquoise' : 'lightsalmon',
        }}
        onClick={() => dispatch(completedTodos('completed'))}
      >
        completed
      </button>
    </div>
  );
};
