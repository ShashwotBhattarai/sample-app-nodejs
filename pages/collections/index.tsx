import { useEffect } from "react";
// import { useGetAllCollections } from "../../lib/hooks";
import { useDispatch, useSelector } from "react-redux";
import { fetchCollectionsThunk } from "store/collections/collectionSlice";
import type { AppDispatch, RootState } from "store/store";
import { useSession } from "../../context/session";
const Collections = () => {
	// useGetAllCollections();

	const { context } = useSession();

	const dispatch = useDispatch<AppDispatch>();
	useEffect(() => {
		dispatch(fetchCollectionsThunk(context));
	}, [dispatch]);

	const collectionsData = useSelector((state: RootState) => state.collections.collections);
	console.log(collectionsData);
	return (
		<div>
			{collectionsData?.map((collection) => (
				<div key={collection.id}>{collection.name}</div>
			))}
		</div>
	);
};

export default Collections;
