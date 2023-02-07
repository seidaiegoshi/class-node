import { getWeather } from "./weather.service.js";
import { getCredo } from "./scraping.service.js";

export const getFantasticJsonData = async ({ latitude, longitude }) => {
	// console.log(latitude, longitude);
	try {
		const weatherData = (await getWeather({ latitude, longitude }))[0];
		const credoData = (await getCredo())[0];
		return { weatherData, credoData };
	} catch (e) {
		throw Error("Error while getting Weather.");
	}
};
