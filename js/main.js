function main(){
	document.addEventListener("DOMContentLoaded",function(){
		const urlArray = [];
		var btn = document.getElementById('btn');
		var changeIP = document.getElementById('change_ip');
		var changeSandbox = document.getElementById('change_sandbox');
		var changeMalwareDB = document.getElementById('change_mal_db');

		function changeCheckbox(jsonFile){
			//$("#url_checkbox c").remove();
			$("#url_checkbox").empty();
			$.getJSON(jsonFile, function(data){
				console.log(data);
				$.each(data, function(key, value){
					$('#url_checkbox').append('<c><input type="checkbox" id="' + key + '" name="checkbox" value="' + value + '">' + key + '<br></c>');
				});
			});
		}

		btn.addEventListener('click', function(){
			var hash = document.hashform.hashtext.value;
			var elms = document.getElementsByName("checkbox");
			console.log(elms);
			for(const elm of elms){
				isChecked = elm.checked;
				if(isChecked){
					searchUrl = elm.value + hash;
					chrome.tabs.create({url: searchUrl}, tab => {});
				}
			}
		});

		changeIP.addEventListener('click',function(){
			event.preventDefault();
			changeCheckbox("../json/urls_ip.json");
		});

		changeSandbox.addEventListener('click',function(){
			event.preventDefault();
			changeCheckbox("../json/urls_sandbox.json");
		});
		
		changeMalwareDB.addEventListener('click',function(){
			event.preventDefault();
			changeCheckbox("../json/urls_malware_db.json");
		});

	});
}

main();