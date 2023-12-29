import React from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../Slice/userSlice';
import List from './List';

const Page = () => {

    // const user = useSelector((state)=>state.users)

    const dispatch = useDispatch();

    const handleSubmit=(e)=>{  
        e.preventDefault();
        const taskText = e.target.elements.task.value;   
        const description = e.target.elements.description.value;   
        dispatch(addUser({taskText,description }));
        e.target.elements.task.value = '';
        e.target.elements.description.value = '';
    }

  return (
    <>
    <form className='task-form' onSubmit={ handleSubmit}>
        <h3>Task Item</h3>
        <div className='form-control'>
            <input type='text' name='task' className='task' placeholder='Task Name' />
            <input type='text' name='description' className='task' placeholder='Descriptions'/>
            <button type='submit' className='submit-btn' > Add Task</button>
        </div>
    </form>

    <div className='task-container'>
        <List />
    </div>
    </>
  )
}

export default Page