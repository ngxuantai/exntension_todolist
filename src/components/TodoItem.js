import React, {useState} from 'react';
import {Paper, Checkbox, IconButton} from '@material-ui/core';
import {Delete, CalendarToday} from '@material-ui/icons';
import FormEditTodo from './FormEditTodo';
import moment from 'moment';
import '../css/TodoItem.css';

const TodoItem = ({todo, dispatch}) => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const handleMarkDone = (id) => {
    dispatch({
      type: 'UPDATE_COMPLETED_TODO',
      payload: {id: todo.id, completed: !todo.completed},
    });
  };

  const handleDelete = (id) => {
    dispatch({
      type: 'DELETE_TODO',
      payload: {id: todo.id},
    });
  };

  const handleClickOnTodo = () => {
    console.log('click');
    setSelectedTodo(todo);
  };

  const handleEditTodo = (editedTodo) => {
    dispatch({
      type: 'EDIT_INFO_TODO',
      payload: editedTodo,
    });
  };

  const handleCloseEdit = () => {
    setSelectedTodo();
  };

  return (
    <Paper
      key={todo.id}
      className='flex todo_container'
      style={{marginBottom: '5px'}}
    >
      <Checkbox
        className='checkbox'
        checked={todo.completed}
        onClick={() => handleMarkDone(todo._id)}
        color='primary'
      />
      <div onClick={() => handleClickOnTodo()} style={{marginTop: '5px'}}>
        <div
          className={todo.completed ? 'todo line_through task' : 'todo task'}
        >
          {todo.task}
        </div>
        <div
          className={
            todo.completed
              ? 'todo line_through description'
              : 'todo description'
          }
        >
          Description:{' '}
          {todo.description && todo.description.length > 20
            ? `${todo.description.substring(0, 10)}...`
            : todo.description || 'Không có'}
        </div>
        <div
          className={
            todo.completed ? 'todo line_through deadline' : 'todo deadline'
          }
        >
          <CalendarToday
            style={{fontSize: '15px', margin: '0px 5px 5px 0px'}}
          />
          {moment(todo.deadline).format('HH:mm DD MMM')}
        </div>
      </div>
      {selectedTodo && (
        <FormEditTodo
          todo={todo}
          handleEditTodo={handleEditTodo}
          handleCloseEdit={handleCloseEdit}
        />
      )}
      <IconButton onClick={() => handleDelete(todo._id)} color='secondary'>
        <Delete />
      </IconButton>
    </Paper>
  );
};

export default TodoItem;
