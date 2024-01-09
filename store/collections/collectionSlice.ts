import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSession } from "../../context/session";

const initialState = {
	collections: [],
	loading: true,
	error: false,
};

export const fetchCollectionsThunk = createAsyncThunk("collections/fetchCollections", async (context: string) => {
	const url = `/api/collections?context=${context}`;
	console.log("fetchCollectionsThunk url", url);
	try {
		const response = await axios.get(url);
		console.log("fetchCollectionsThunk response", response);
		return response.data;
	} catch (error) {
		throw error;
	}
});

export const collectionSlice = createSlice({
	name: "collections",
	initialState,
	reducers: {
		fetchCollectionsFromBackend: (state, action) => {
			state.collections = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCollectionsThunk.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchCollectionsThunk.fulfilled, (state, action) => {
				state.collections = action.payload;
				state.loading = false;
			})
			.addCase(fetchCollectionsThunk.rejected, (state) => {
				state.loading = false;
			});
	},
});

export const { fetchCollectionsFromBackend } = collectionSlice.actions;

export default collectionSlice.reducer;
