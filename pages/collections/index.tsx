import { useGetAllCollections } from "../../lib/hooks";
import { useState, useEffect } from "react";

const Collections = () => {
	const [collections, setCollections] = useState([]);
	const [err, setError] = useState(null);

	const { data, error, isLoading } = useGetAllCollections();
	console.log(data);
	useEffect(() => {
		if (data) {
			setCollections(data);
		}
		if (err) {
			setError(error);
		}
	}, [data, err]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (err) {
		return <div>Failed to load collections: {err}</div>;
	}
	return (
		<div>
			{collections?.map((collection) => (
				<div key={collection.id}>{collection.name}</div>
			))}
		</div>
	);
};

export default Collections;
