import React, {useState, useReducer, useEffect} from 'react';
import '../css/FormAddTodo.css';
import {v4 as uuidv4} from 'uuid';

const todosReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    default:
      return state;
  }
};

const FormAddTodo = ({todos, type, dispatch}) => {
  const [currentTask, setCurrentTask] = useState('');
  const [currentDescription, setCurrentDescription] = useState('');
  const [currentDeadline, setCurrentDeadline] = useState('');

  // // Check localStorage for initial todos
  // const savedTodos = localStorage.getItem('todos');
  // const initialTodos = savedTodos ? JSON.parse(savedTodos) : [];
  // const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  const handleChangeTask = (event) => {
    setCurrentTask(event.target.value);
  };

  const handleChangeDes = (event) => {
    setCurrentDescription(event.target.value);
  };

  const handleChangeDeadline = (event) => {
    setCurrentDeadline(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: uuidv4(),
      task: currentTask,
      description: currentDescription,
      deadline: currentDeadline,
      type: type,
      completed: false,
    };

    // Dispatch action để thêm mới Todo vào danh sách
    dispatch({type: 'ADD_TODO', payload: newTodo});

    // Xóa nội dung trong input sau khi thêm mới Todo
    setCurrentTask('');
    setCurrentDescription('');
    setCurrentDeadline('');
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex_column form-add'
      style={{marginBottom: '4px'}}
    >
      <input
        value={currentTask}
        required={true}
        onChange={handleChangeTask}
        placeholder='Add Title'
      />
      <input
        value={currentDescription}
        required={true}
        onChange={handleChangeDes}
        placeholder='Add description'
      />
      <input
        id='datetime-local'
        label='Deadline'
        type='datetime-local'
        required={true}
        value={currentDeadline}
        onChange={handleChangeDeadline}
      />
      <div
      // style={{minHeight: '50px', display: 'flex', justifyContent: 'flex-end'}}
      >
        <button className='addbtn' variant='outlined' type='submit'>
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default FormAddTodo;
