import { bigcommerceClient, getSession } from "@lib/auth";
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function getAllOrders(req: NextApiRequest, res: NextApiResponse) {
	try {
		const { accessToken, storeHash } = await getSession(req);

		// const bigcommerce = bigcommerceClient(accessToken, storeHash);
		// const response = await bigcommerce.get(`/catalog/categories/}`);

		let url = `https://api.bigcommerce.com/stores/${storeHash}/v2/orders`;

		let options = {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"X-Auth-Token": accessToken,
			},
		};
		const response = await axios(url, options);
		const data = response.data;

		res.status(200).json(data);
	} catch (error) {
		console.log(error);
		const { message, response } = error;
		res.status(response?.status || 500).json({ message });
	}
}
