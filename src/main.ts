/// <reference types="chrome-types"/>
chrome.tabs.onUpdated.addListener((tabId) => {
	chrome.tabs.get(tabId, (tab) => {
		if (tab.url?.includes("medium.com")) {
			chrome.action.setIcon({
				path: {
					"16": "fire-16.png",
					"32": "fire-32.png",
					"48": "fire-48.png",
					"128": "fire-128.png",
				},
				tabId: tabId,
			});
		} else {
			chrome.action.setIcon({
				path: {
					"16": "meat-16.png",
					"32": "meat-32.png",
					"48": "meat-48.png",
					"128": "meat-128.png",
				},
				tabId: tabId,
			});
		}
	});
});
chrome.tabs.onActivated.addListener((activeInfo) => {
	if (activeInfo.tabId) {
		chrome.tabs.get(activeInfo.tabId, (tab) => {
			if (tab.url?.includes("medium.com")) {
				chrome.action.setIcon({
					path: {
						"16": "fire-16.png",
						"32": "fire-32.png",
						"48": "fire-48.png",
						"128": "fire-128.png",
					},
					tabId: activeInfo.tabId,
				});
			} else {
				chrome.action.setIcon({
					path: {
						"16": "meat-16.png",
						"32": "meat-32.png",
						"48": "meat-48.png",
						"128": "meat-128.png",
					},
					tabId: activeInfo.tabId,
				});
			}
		});
	}
});

chrome.action.onClicked.addListener((tab) => {
	fetch("https://webcache.googleusercontent.com/search?q=cache:" + tab.url, {
		headers: {
			accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
			"accept-language": "en-US,en;q=0.9",
			"upgrade-insecure-requests": "1",
		},
		body: null,
		method: "GET",
	}).then((response) => {
		response.text().then((text) => {
			chrome.tabs.sendMessage(tab.id!, { html: text });
		});
	});
});
