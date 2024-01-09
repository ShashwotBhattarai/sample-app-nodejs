import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCollectionsThunk } from "store/collections/collectionSlice";
import type { AppDispatch, RootState } from "store/store";
import { useSession } from "../../context/session";
const Collections = () => {
	const { context } = useSession();

	const dispatch = useDispatch<AppDispatch>();
	useEffect(() => {
		dispatch(fetchCollectionsThunk(context));
	}, [dispatch]);

	const collectionsData = useSelector((state: RootState) => state.collections.collections);
	console.log(collectionsData);

	const isLoading = useSelector((state: RootState) => state.collections.loading);
	const error = useSelector((state: RootState) => state.collections.error);

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error</p>;
	return (
		<div>
			{collectionsData?.map((collection) => (
				<div key={collection.id}>{collection.name}</div>
			))}
		</div>
	);
};

export default Collections;
