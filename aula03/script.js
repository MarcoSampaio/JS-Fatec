function objs(){
	var obj = {}; //objeto vazio
	
	obj["nome"] = "Marco";
	obj["idade"] = 37;
	obj["cidade"] = "Santos";
	obj["telefone"] = "3284-2545";
	obj["sexo"] = 'M';
	obj["profissao"] = "Desenvolvedor Web";
	
	alert(obj.nome+obj.idade);//soh pode usar "." se o indice for "string".
	
	for(var x in obj){
		alert(x+obj[x]);
	}
}

function teste1(){
	objs();
}

//mostre usando for a soma dos salarios
function vetObjs(){
	var vet = [];//vetor vazio
	
	vet.push({"nome":"Marco", "salario":4500});
	vet.push({"nome":"Allan", "salario":800});
	vet.push({"nome":"Garcia", "salario":15000});
	vet.push({"nome":"Chiara", "salario":30000});
	
	soma=0.0;
	//[{..},{..},{..},{..}]
	//0-{..} 1-{..} 2-{..} 3-{..}
	for(var i in vet){
		soma = soma + vet[i].salario;
	}
	alert(soma);
	}
}

function teste2(){
	vetObjs();
}

//Faca uma funcao que receba via parametro um vetor de objetos. Cada objeto possui um indice num
//e um indice str. Sua funcao deve mostrar na tela a media dos nums e a concatenacao das strs. Faca um teste.
function testObjs(vetobj){
	//sei que ha dois indices: nun e str
	//posso entao acessar via .num e .str
	var media=0.0;
	var conc = "";
	//tenho que extrair as nums e os strs
	//preciso percorrer o vetor com o for
	for(var i in vetobj){
		//cada vetobj[i] eh um objeto que possui indice num e indice str
		media = media + vetobj[i].num;
		conc = conc + vetobj[i].str;
	}
	atert(media/vetobj.length);
	alert(conc);
}

function teste3(){
	//popular o vetor vetObj com os objetos
	var vetObj = [];
	vetObj.push({num:10,str:"Alo"});
	vetObj.push({num:8,str:"Fatec"});
	vetObj.push({num:3,str:"Santos"});
	//passar via parametro no momento da chamada
	testObjs(vetObj);
}

//DOM - Document Object Model
//JS Object e JS Array

function teste4(){
	var str = "";
	var p = document.getElementById('p1');
	//for(var x in p){
	//	str = str + x + " : " + p[x] + "<br>"; 
	//}
	//document.write(str);
	alert(p.innerHTML);
}

function teste5(){
	//mostre via alert o nome do botao
	var p = document.getElementById('p1');
	alert(p.innerHTML);
	var b = document.getElementById('b1');
	alert(b.innerHTML);
}

function mudaCor(){
	var p = document.getElementById('p1');
	alert(p.innerHTML);
	//mudar a cor do paragrafo para vermelho
	p.style.color = "Red";
	//muda a cor do fundo
	p.style.backgroundColor = "Yellow";
}

function teste6(){
	mudaCor();
}



