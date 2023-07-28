import React, {useState} from 'react';
import moment from 'moment';
import '../css/FormEditTodo.css';

const FormEditTodo = ({todo, handleEditTodo, handleCloseEdit}) => {
  const [editedTodo, setEditedTodo] = useState({...todo});

  const handleChange = (event) => {
    const {name, value} = event.target;
    setEditedTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleEditTodo(editedTodo);
    handleCloseEdit();
  };

  return (
    <div className='form-overlay'>
      <form className='form-edit' onSubmit={handleSubmit}>
        <input
          type='text'
          name='task'
          value={editedTodo.task}
          onChange={handleChange}
          placeholder='Edit Title'
          autoComplete='off'
          required
        />
        <textarea
          type='text'
          name='description'
          value={editedTodo.description}
          onChange={handleChange}
          placeholder='Edit Description'
          style={{maxHeight: '230px'}}
          required
        />
        <input
          type='datetime-local'
          name='deadline'
          value={moment(editedTodo.deadline).format('YYYY-MM-DDTHH:mm')}
          onChange={handleChange}
          style={{resize: 'none'}}
          required
        />
        <div
          style={{
            minHeight: '50px',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <button
            className='close-button'
            type='button'
            onClick={handleCloseEdit}
          >
            Cancel
          </button>
          <button className='update-button' type='submit'>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormEditTodo;
