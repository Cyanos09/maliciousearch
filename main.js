function main(){
	document.addEventListener("DOMContentLoaded",function(){
		var element;
		var btn = document.getElementById('btn');
		btn.addEventListener('click', function(){
			var hash = document.hashform.hashtext.value;
			var url_vt = "https://www.virustotal.com/gui/file/" + hash;
			var url_jsb = "https://www.joesandbox.com/search?q=" + hash;
			var url_ha = "https://www.hybrid-analysis.com/sample/" + hash;
			var url_yoroi = "https://yomi.yoroi.company/submissions/" + hash;
			var url_ms = "https://malshare.com/search.php?query=" + hash;

			const url_btn_tuple_array = [[url_vt,'btn_vt'],[url_jsb,'btn_jsb'],[url_ha,'btn_ha'],[url_yoroi,'btn_yoroi'],[url_ms,'btn_ms']];
			for(const url_btn_tuple of url_btn_tuple_array){
				element = document.getElementById(url_btn_tuple[1]).checked;
				if(element){
					chrome.tabs.create({url: url_btn_tuple[0]}, tab => {});
				}
			}
		});
	});
}

main();