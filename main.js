main();

function main(){

	// chrome.tabs.create({url: 'popup.html', active: false}, tab => {});
	var btn = document.getElementById('btn');
	
	btn.addEventListener('click', function(){
		var hash = document.hashform.hashtext.value;
		// alert(hash);
		var url_vt_summary = "https://www.virustotal.com/gui/file/" + hash + "/summary";
		var url_vt_detection = "https://www.virustotal.com/gui/file/" + hash + "/detection";
		var url_vt_details = "https://www.virustotal.com/gui/file/" + hash + "/details";
		var url_vt_behavior = "https://www.virustotal.com/gui/file/" + hash + "/behavior";
		var url_ms = "https://malshare.com/search.php?query=" + hash;
		var url_vt = "https://www.virustotal.com/gui/file/" + hash;
		chrome.tabs.create({url: url_vt}, tab => {});
		chrome.tabs.create({url: url_ms}, tab => {});
	});
}
