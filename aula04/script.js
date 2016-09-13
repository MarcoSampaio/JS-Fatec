function mostraP2(paragrafo){
	//ha um acesso de LEITURA ao atributo innerHTML do objeto paragrafo.
	alert(paragrafo.innerHTML);
}

function mostraP2(paragrafo){
	alert(paragrafo.innerHTML="CLIQUEI!");
}

function mudarBotao(btn){
	btn.innerHTML="Cliquei";
}

function clicar(img){
	var nome = img.nameProp;
	if(nome == "botao.png"){
		img.src="botao1.png";
	}else{
		img.src="botao.png";
	}
}

/* codigo para hackear objeto
function clicar(img){
	var acc="";
	for(var elem in img){
		acc=acc+elem+" : "+img[elem]+"<br>";
	}
	document.write(acc);
}
*/

function teste(){
	var p1 = document.getElementById('p1');
	//o atributo innerHTML contem a String (nó texto) dentro das tags <p></p>
	alert(p1.innerHTML);
}

//1-como buscar elementos na estrutura DOM usando id;
//2-como usar eventos junto ao DOM;
//3-
//4-
//{{},{},{}}
function buscar(){
	//objs eh uma colecao (objeto) de html onde a posicao 0 possui o objetivo paragrafo qe contem a palavra P1, a 
	//posicao 1 P2 e a posicao 2 P3.
	var objs=document.getElementsByTagName('p');
	//objs eh uma colecao de paragrafos.
	var p = objs[1];
	//p eh um elemento paragrafo da colecao de parafrafos.
	alert(objs[1].innerHTML);
	
	/*var acc = "";
	for(var e in objs){
		acc = acc+e+" : "+objs[e]+"<br>";
	}
	document.write(acc);
	*/
}

function somar(){
	var lis = document.getElementsByTagName('li');
	var soma = 0;
		for (var i=0; i< lis.length; i++){
			var li = lis[i];
			var num = parseInt(li.innerHTML);
			soma = soma + num;
		}
		alert (soma);
}