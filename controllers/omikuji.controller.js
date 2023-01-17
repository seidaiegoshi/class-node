// controllers/omikuji.controller.js

import { getOmikuji } from "../services/omikuji.service.js";

export const getResult = async (req, res, next) => {
	try {
		const result = await getOmikuji({});
		return res.status(200).json({
			status: 200,
			result: result,
			message: "Successfully get Omikuji!",
		});
	} catch (e) {
		return res.status(500).json({ status: 500, message: e.message });
	}
};
