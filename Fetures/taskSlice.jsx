import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: []
};

const savedTask = JSON.parse(localStorage.getItem("task"));
if (savedTask) {
  initialState.tasks = savedTask;
}

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
      localStorage.setItem("task", JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("task", JSON.stringify(state.tasks));
    },
    updateTask: (state, action) => {
      const { id, name, title, description, createdAt } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.name = name;
        task.title = title;
        task.description = description;
        task.createdAt = createdAt;
        localStorage.setItem("task", JSON.stringify(state.tasks));
      }
    },
  }
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
