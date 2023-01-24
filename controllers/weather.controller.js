// controllers/weather.controller.js

import { getWeather } from "../services/weather.service.js";

export const getResult = async (req, res, next) => {
	try {
		const result = await getWeather();
		return res.status(200).json({
			status: 200,
			data: result,
			message: "Successfully get Weather!",
		});
	} catch (e) {
		return res.status(500).json({ status: 500, message: e.message });
	}
};
