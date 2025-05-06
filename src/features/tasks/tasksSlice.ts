import { tasks as tasksData } from "./../../data/data";
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState: TTask[] = tasksData;

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addTask: (state, action) => {
			const newTask: TTask = {
				id: uuidv4(),
				name: action.payload.name.toString(),
				priority: +action.payload.selectedPriority,
				dueDate: action.payload.date.toString(),
				completed: false
			};
			state.push(newTask);
		},
		//PayloadAction<>
		changeTask: (state, action) => {
			const task = state.find(todo => todo.id === action.payload.id);
			if (task) {
				task.dueDate = action.payload.date;
				task.name = action.payload.name;
				task.priority = action.payload.selectedPriority;
			}
		},
		deleteTask: (state, action) => {
			return state.filter(t => t.id !== action.payload.id);
		},
		toggleTask: (state, action) => {
			const task = state.find(todo => todo.id === action.payload.id);
			if (task) {
				task.completed = !task.completed;
			}
		},
		clearTasks: () => {
			return [];
		},
	}
})
export const { addTask, changeTask, deleteTask, toggleTask, clearTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
