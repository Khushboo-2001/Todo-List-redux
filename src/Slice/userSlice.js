// userSlice.js

import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    addUser(state, action) {
      const newTask = { id: Date.now(), ...action.payload };
      state.push(newTask);
    },
    removeUser(state, action) {
      return state.filter((task) => task.id !== action.payload);
    },
    updateTask(state, action) {
      const { id, updatedTask } = action.payload;
      return state.map((task) => (task.id === id ? { ...task, ...updatedTask } : task));
    },
  },
});

export default userSlice.reducer;
export const { addUser, removeUser, updateTask } = userSlice.actions;
