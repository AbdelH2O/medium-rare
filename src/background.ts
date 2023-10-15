console.log(chrome.action);
console.log(chrome);


chrome.action.onClicked.addListener((tab) => {
	console.log(tab);

});
console.log("Hello from the background script!");