import { useGetAllOrders } from "../../lib/hooks";
import { useState, useEffect } from "react";

const Orders = () => {
	const [orders, setOrders] = useState([]);
	const [err, setError] = useState(null);

	const { data, error, isLoading } = useGetAllOrders();
	useEffect(() => {
		if (data) {
			setOrders(data);
		}
		if (err) {
			setError(error);
		}
	}, [data, err]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (err) {
		return <div>Failed to load orders: {err}</div>;
	}
	return (
		<div>
			{orders?.map((order) => (
				<div key={order.id}>{order.id}</div>
			))}
		</div>
	);
};

export default Orders;
