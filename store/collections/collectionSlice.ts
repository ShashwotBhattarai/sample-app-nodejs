import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	collections: [],
};

export const collectionSlice = createSlice({
	name: "collections",
	initialState,
	reducers: {
		fetchCollectionsFromBackend: (state, action) => {
			state.collections = action.payload;
		},
	},
});

export const { fetchCollectionsFromBackend } = collectionSlice.actions;

export default collectionSlice.reducer;
