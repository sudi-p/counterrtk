import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	count: 0,
}
export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers:{
		increment: (state) => {
			state.count++;
		},
		decrement: (state) => {
			state.count--;
		},
		incrementByAmount: (state, action) => {
			console.log(action)
			state.count += action.payload;
		}
	}
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;