import axios from "axios";

export const getCredo = async (query) => {
	try {
		const url = "https://gsacademy.jp/about/";
		const html = (await axios.get(url)).data;
		// html軽量化
		const minimizedHtml = html.replaceAll(/\n|\r|\t/g, "");

		// テキスト抽出
		const textJa = minimizedHtml
			.match(/(?<=<h4 class="system-credo__list-item-title">)[\s\S]+?(?=<\/h4>)/g)
			.map((x) => x.trim().replaceAll(/[' ', '<br>']/g, ""));

		// 画像抽出
		const imgUrl = minimizedHtml
			.match(/\/assets\/images\/item\/credo_0[1234567]\.png/g)
			.map((x) => `https://gsacademy.jp${x}`);

		// json作成
		const credoJson = [...Array(7)].map((x, i) => ({
			credo_no: i + 1,
			text_ja: textJa[i],
			img_url: imgUrl[i],
		}));

		return credoJson;
	} catch (e) {
		throw Error(e);
	}
};
