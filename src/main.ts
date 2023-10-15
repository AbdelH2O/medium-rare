/// <reference types="chrome-types"/>
chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
	if(changeInfo.url?.includes("medium.com")){
		chrome.action.setIcon({
			path: {
				"16": "fire-16.png",
				"32": "fire-32.png",
				"48": "fire-48.png",
				"128": "fire-128.png"
			},
			tabId: tabId
		})
	} else {
		chrome.action.setIcon({
			path: {
				"16": "meat-16.png",
				"32": "meat-32.png",
				"48": "meat-48.png",
				"128": "meat-128.png"
			},
			tabId: tabId
		})
	}
});
chrome.tabs.onActivated.addListener((activeInfo) => {
	if(activeInfo.tabId){
		chrome.tabs.get(activeInfo.tabId, (tab) => {
			console.log(tab);
			
			if(tab.url?.includes("medium.com")) {
				chrome.action.setIcon({
					path: {
						"16": "fire-16.png",
						"32": "fire-32.png",
						"48": "fire-48.png",
						"128": "fire-128.png"
					},
					tabId: activeInfo.tabId
				})
			} else {
				chrome.action.setIcon({
					path: {
						"16": "meat-16.png",
						"32": "meat-32.png",
						"48": "meat-48.png",
						"128": "meat-128.png"
					},
					tabId: activeInfo.tabId
				})
			}
		});
	}
});
