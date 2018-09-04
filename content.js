console.log("content script is running yeaa boiiisss");
var gopal=0;

setInterval(anmol, 1000);

function anmol(){
	gopal++;
	document.getElementById("nachiket").innerHTML=gopal;
}

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
	console.log(message.txt);


	alert('Stop wasting valuable time. you have wasted '+gopal +'seconds');
};
