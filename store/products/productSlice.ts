import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: [],
};

export const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		fetchProductFromBackend: (state, action) => {
			state.products = action.payload;
		},
	},
});

export const { fetchProductFromBackend } = productSlice.actions;

export default productSlice.reducer;
