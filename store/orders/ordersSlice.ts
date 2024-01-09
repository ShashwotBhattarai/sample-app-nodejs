import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSession } from "../../context/session";

const initialState = {
	orders: [],
	loading: true,
	error: false,
};

export const fetchOrdersThunk = createAsyncThunk("orders/fetchOrders", async (context: string) => {
	const url = `/api/order's?context=${context}`;
	console.log("fetchOrdersThunk url", url);
	try {
		const response = await axios.get(url);
		console.log("fetchOrdersThunk response", response);
		return response.data;
	} catch (error) {
		throw error;
	}
});

export const ordersSlice = createSlice({
	name: "orders",
	initialState,
	reducers: {
		fetchOrdersFromBackend: (state, action) => {
			state.orders = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchOrdersThunk.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchOrdersThunk.fulfilled, (state, action) => {
				state.orders = action.payload;
				state.loading = false;
			})
			.addCase(fetchOrdersThunk.rejected, (state) => {
				state.loading = false;
			});
	},
});

export const { fetchOrdersFromBackend } = ordersSlice.actions;

export default ordersSlice.reducer;
