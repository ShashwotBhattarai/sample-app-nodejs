import { configureStore } from "@reduxjs/toolkit";
import collectionsReducer from "../store/collections/collectionSlice";
import ordersReducer from "../store/orders/ordersSlice";
export const store = configureStore({
	reducer: {
		collections: collectionsReducer,
		orders: ordersReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
