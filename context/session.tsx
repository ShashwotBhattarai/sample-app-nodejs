import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import { bigCommerceSDK } from "../scripts/bcSdk";

const SessionContext = createContext({ context: "" });

const SessionProvider = ({ children }) => {
	const { query } = useRouter();
	const [context, setContext] = useState("");

	useEffect(() => {
		if (query.context) {
			console.log("query.context-token captured by sessionfile", query.context);

			setContext(query.context.toString());
			// Keeps app in sync with BC (e.g. heatbeat, user logout, etc)
			bigCommerceSDK(query.context); ///script run garya change
		}
	}, [query.context]);

	return <SessionContext.Provider value={{ context }}>{children}</SessionContext.Provider>;
};

export const useSession = () => useContext(SessionContext);

export default SessionProvider;
