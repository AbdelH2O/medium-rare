import { load } from "cheerio";

chrome.runtime.onMessage.addListener((message: { html: string }) => {
	renderArticle(message.html);
	return false;
});

async function renderArticle(html: string) {
	const article = document.querySelector("article");
	if (!article) {
		return;
	}
	const $ = load(html);
	const full = $("article");

	const fullArticle = document.createElement("article");
	fullArticle.innerHTML = full.html() || "";
	if (!fullArticle) {
		return;
	}
	article.nextElementSibling?.remove();
	const shadowRoot = article.parentElement?.attachShadow({ mode: "closed" });
	if (!shadowRoot) {
		return;
	}
	article.remove();
	shadowRoot.appendChild(fullArticle);
	const styles = $("style");
	styles.each((_, style) => {
		const st = document.createElement("style");
		style.attributes.forEach((attr) => {
			st.setAttribute(attr.name, attr.value);
		});
		// @ts-ignore - data is an attribute
		st.innerHTML = style.children[0].data! || "";
		shadowRoot.appendChild(st);
	});
}
