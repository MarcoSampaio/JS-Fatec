function pinta(){
	
	var h = document.querySelector("h2");
	
	h.style.color ="#f00";
	
}


function teste(){
	// seleciona a primeria tag P encontrada no documento
	var p = document.querySelector("#p3");
	
	p.style.color = "#f00";
	
	alert(p);
}

function pintatodosP(){
	
	var p = document.querySelectorAll("p");
	
	for (var i in p){
		
		p[i].style.color = "#F00";
		
	}
}

function pintatodos(){
	
	var p = document.querySelectorAll("h1,p,h2");
	
	for (var i in p){
		
		p[i].style.color = "#F00";
		
	}
}

function pintatodosmenosid(){
	
	var p = document.querySelectorAll("h1,p,h2");
	var p3 = document.querySelector("#p3");
	for (var i in p){
			p[i].style.color = "#F00";
			p3.style.color = "#00f";
		
	}	
}


function pintatodosh2ep3(){
	
	var p = document.querySelectorAll("#p3,h2");
	for (var i in p){
			p[i].style.color = "#c54";		
	}	
}

function preenchenome(){
	
	var nome = document.querySelector("#t1");
		
	nome.value = "Bruno";
	
}
