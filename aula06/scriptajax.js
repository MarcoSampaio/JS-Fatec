function teste(){

	var xmlhttp = new XMLHttpRequest(); 

	var url = "uol.html"; 

	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			var doc = xmlhttp.responseText;
			see(doc);
		}
	}
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}

function see(doc){

	var parser = new DOMParser();// para passar o texto para DOM

	var newDoc = parser.parseFromString(doc,"text/html");

	var h2 = newDoc.querySelectorAll("p");

	alert(h2.length);
}



