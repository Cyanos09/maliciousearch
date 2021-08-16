main();

function main(){

	var btn = document.getElementById('btn');

	btn.addEventListener('click', function(){
		var hash = document.hashform.hashtext.value;
		var url_ms = "https://malshare.com/search.php?query=" + hash;
		var url_vt = "https://www.virustotal.com/gui/file/" + hash;
		chrome.tabs.create({url: url_vt}, tab => {});
		chrome.tabs.create({url: url_ms}, tab => {});
	});
}
