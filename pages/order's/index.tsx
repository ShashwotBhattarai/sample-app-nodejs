import { useSession } from "context/session";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrdersThunk } from "store/orders/ordersSlice";
import type { AppDispatch, RootState } from "store/store";

const Orders = () => {
	const { context } = useSession();

	const dispatch = useDispatch<AppDispatch>();
	useEffect(() => {
		dispatch(fetchOrdersThunk(context));
	}, [dispatch]);

	const ordersData = useSelector((state: RootState) => state.orders.orders);
	return (
		<div>
			{ordersData?.map((order) => (
				<div key={order.id}>{order.id}</div>
			))}
		</div>
	);
};

export default Orders;
