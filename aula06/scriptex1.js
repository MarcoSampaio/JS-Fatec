function somar(){
	
	var x = parseFloat(document.querySelector("#n1").value);
	
	var y = parseFloat(document.querySelector("#n2").value);

	var p = document.querySelector("p");
	
	if(x>=0&&x!=isNaN&&y>=0&&y!=isNaN){
		
	var soma=x+y;
	
	p.innerHTML ="A soma dos valores "+x+" + "+y+" é: "+ soma;
	
	p.style.color ="#00f";
	}else{
		
		p.innerHTML = "Valores Invalidos";
		p.style.color ="#f00";
	}
}


