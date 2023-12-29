// features/taskSlice.js
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const tasksAdapter = createEntityAdapter();

const initialState = tasksAdapter.getInitialState();

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: tasksAdapter.addOne,
    removeTask: tasksAdapter.removeOne,
    updateTask: tasksAdapter.updateOne, // Use createEntityAdapter for efficient updates
  },
});

export const { addTask, removeTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
