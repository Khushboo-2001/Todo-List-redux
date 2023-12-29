// List.js

import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { updateTask, removeUser } from '../Slice/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const List = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users);

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  const [isEditing, setIsEditing] = useState(false);
  const [editTaskIndex, setEditTaskIndex] = useState(null);

  const handleEditClick = (id) => {
    setIsEditing(true);
    setEditTaskIndex(id);
  };

  const handleEditSave = (id, editedTask) => {
    // Dispatch action to update task in Redux store
    dispatch(updateTask({ id, updatedTask: editedTask }));
    
    setIsEditing(false);
    setEditTaskIndex(null);
  };

  return (
    <>
      {data.map((user) => (
        <li key={user.id} className="task-item">
          {isEditing && editTaskIndex === user.id ? (
              <form
            className='task-form'
              onSubmit={(e) => {
                  e.preventDefault();
                handleEditSave( user.id, {
                    taskText: e.target.elements.task.value,
                    description: e.target.elements.description.value,
                });
              }}
            >
            <div className='form-control'>

              <input className="task" type="text" name="task" defaultValue={user.taskText} />
              
              <input className="task" type="text" name="description" defaultValue={user.description} />
              
              <button className="submit-btn" type="submit">Save</button>
            </div>
            </form>
          ) : (
            <>
              <strong>{user.taskText}</strong>
              {user.description}
              <div className="btn-container">
                <button 
                type="button"
                onClick={() => deleteUser(user.id)} className='edit-btn'>
                  <MdDelete  />
                </button>
                <button 
                type="button"
                onClick={() => handleEditClick(user.id)}
                className="delete-btn">
                  <FaEdit />
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </>
  );
};

export default List;
