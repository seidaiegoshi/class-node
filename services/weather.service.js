// services/weather.service.js

import axios from "axios";

export const getWeather = async (query) => {
	try {
		const url =
			"https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=Asia%2FTokyo";
		const weather = (await axios.get(url)).data;
		const weatherData = weather.daily;
		console.log(weatherData);
		return weatherData;
	} catch (e) {
		throw Error("Error while getting Weather.");
	}
};
