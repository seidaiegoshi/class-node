import { getWeather } from "./weather.service.js";
import { getCredo } from "./scraping.service.js";

export const getFantasticJsonData = async ({ latitude, longitude }) => {
	// console.log(latitude, longitude);

	const createCredoNumber = (sunriseTime, sunsetTime) => {
		return Math.abs(Number(sunsetTime.split(":")[1]) - Number(sunriseTime.split(":")[1])) % 7;
	};

	try {
		const weatherData = (await getWeather({ latitude, longitude }))[0];
		const credoIndex = createCredoNumber(weatherData.sunrise, weatherData.sunset);
		const credoData = (await getCredo())[credoIndex];
		return { weatherData, credoData };
	} catch (e) {
		throw Error("Error while getting Weather.");
	}
};
