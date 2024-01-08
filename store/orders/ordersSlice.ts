import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	orders: [],
};

export const ordersSlice = createSlice({
	name: "orders",
	initialState,
	reducers: {
		fetchOrdersFromBackend: (state, action) => {
			state.orders = action.payload;
		},
	},
});

export const { fetchOrdersFromBackend } = ordersSlice.actions;

export default ordersSlice.reducer;
