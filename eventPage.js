
console.log("okay so background is running");

chrome.alarms.create("aryan", {delayInMinutes: 0.1,periodInMinutes:0.2});

chrome.alarms.onAlarm.addListener(alarmalert);
var gopal=0;




function alarmalert(alarm){
	console.log("message sent");
	let msg ={
		txt:"hello",
		seconds:gopal
	}	
	//chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    //var myTabId = tabs[0].id;})
	//chrome.tabs.sendMessage(myTabId, msg);
	
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		console.log(tabs);
    chrome.tabs.sendMessage(tabs[0].id, msg);  
});
}