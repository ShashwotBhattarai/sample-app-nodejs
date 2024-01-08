import { useGetAllCollections } from "../../lib/hooks";
import { useSelector } from "react-redux";
import type { RootState } from "store/store";
const Collections = () => {
	useGetAllCollections();
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
