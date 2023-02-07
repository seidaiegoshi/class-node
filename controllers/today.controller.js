// controllers/weather.controller.js

import { getFantasticJsonData } from "../services/today.service.js";

export const getTodaysData = async (req, res, next) => {
	// console.log(req.query);
	const latitude = Number(req.query.latitude ?? 35.6785);
	const longitude = Number(req.query.latitude ?? 139.6823);
	try {
		const result = await getFantasticJsonData({ latitude, longitude });
		return res.status(200).json({
			status: 200,
			data: result,
			message: "Successfully get Weather!",
		});
	} catch (e) {
		return res.status(500).json({ status: 500, message: e.message });
	}
};
