// import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
/// <reference types="chrome-types"/>
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	if(changeInfo.url?.includes("medium.com")){
		// chrome.scripting.executeScript({
		// 	target: { tabId: tabId },
		// 	files: ['./content.js']
		// })
		chrome.action.setIcon({
			path: {
				"16": "public/fire-16.png",
				"32": "public/fire-32.png",
				"48": "public/fire-48.png",
				"128": "public/fire-128.png"
			},
			tabId: tabId
		})
	}
	console.log(changeInfo, tab);

});
chrome.tabs.onActivated.addListener((activeInfo) => {
	console.log(activeInfo);
	if(activeInfo.tabId){
		chrome.tabs.get(activeInfo.tabId, (tab) => {
			console.log(tab);
			
			if(tab.url?.includes("medium.com")) {
				chrome.action.setIcon({
					path: {
						"16": "public/fire-16.png",
						"32": "public/fire-32.png",
						"48": "public/fire-48.png",
						"128": "public/fire-128.png"
					},
					tabId: activeInfo.tabId
				})
			}
		});
	}
});
// console.log("Hello from the background script!");
