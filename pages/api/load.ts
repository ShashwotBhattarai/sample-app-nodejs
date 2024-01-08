import { NextApiRequest, NextApiResponse } from "next";
import { encodePayload, getBCVerify, setSession } from "../../lib/auth";

const buildRedirectUrl = (url: string, token: string) => {
	const [path, query = ""] = url.split("?");
	const queryParams = new URLSearchParams(`context=${token}&${query}`);

	return `${path}?${queryParams}`;
};

export default async function load(req: NextApiRequest, res: NextApiResponse) {
	try {
		// Verify when app loaded (launch)
		console.log("inside load api");
		console.log("req.query ", req.query);
		const session = await getBCVerify(req.query);
		console.log("session after BCverify ", session);
		console.log("session url ", session.url);
		const token = encodePayload(session); // Signed JWT to validate/ prevent tampering
		console.log("token sent from load api ", token);
		await setSession(session);
		const url = buildRedirectUrl(session.url, token);

		console.log("redirecting to ", url);
		res.redirect(302, url);
	} catch (error) {
		const { message, response } = error;
		res.status(response?.status || 500).json({ message });
	}
}
