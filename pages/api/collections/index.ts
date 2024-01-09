import { getSession } from "@lib/auth";
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function collections(req: NextApiRequest, res: NextApiResponse) {
	try {
		console.log("collections api called");
		const { accessToken, storeHash } = await getSession(req);

		console.log(accessToken, storeHash);

		// const bigcommerce = bigcommerceClient(accessToken, storeHash);
		// const response = await bigcommerce.get(`/catalog/categories/}`);

		const url = `https://api.bigcommerce.com/stores/${storeHash}/v3/catalog/categories`;

		const options = {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"X-Auth-Token": accessToken,
			},
		};
		const response = await axios(url, options);
		const data = response.data.data;
		res.status(200).json(data);
	} catch (error) {
		const { message, response } = error;
		res.status(response?.status || 500).json({ message });
	}
}
