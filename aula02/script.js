


	function ola(){

		alert("Olá Mundo");
	}

	function somar(){
		var x = prompt("Digite um número: ","");
		var y = prompt("Digite outro número: ","");
		x = parseInt(x);
		y = parseInt(y);
		var soma = x+y;
		alert(soma);
	}

	function dividir(){
		var x = prompt("Digite o número a ser dividido: ","");
		var y = prompt("Dividir por: ","");
		x = parseFloat(x);
		y = parseFloat(y);
		if(y != 0){
			var divisao = x/y;
			alert(divisao);
		}else{
			alert("Não se divide por 0.");
		}
	}

	function es(){
		var x = prompt("Digite um número: ","");
		var y = prompt("Digite outro número: ","");
		x = parseFloat(x);
		y = parseFloat(y);
		alert("Menor valor: "+menor(x,y));
	}

	function menor(a,b){
		if(a<=b){
			return a;
		}else{
			return b;
		}
	}
	//VETOR

	function teste(){
		var v  = [];
		v.push(5);
		v.push(6,7,8,9,10,0);// push = empilha.
		alert(v); //mostra todos os elementos do vetor.
		alert(v[4]); //mostra o elemento de indice 4.
	}
	function mostrarVetor(vet){ //mostra um elemento de cada vez pelo alert
		for(var i=0; i<vet.length;i++){
			alert(vet[i]);
		}
	}
	//Somar vetor
	function testeSoma(){
		somarVetor([1,0,9,-1,9,3,2])
	}
	function somarVetor(vet){ //mostra um elemento de cada vez pelo alert
		var soma=0;//Variavel de acumulação (acumula a soma).
		for(var i=0; i<vet.length;i++){
			soma = soma+vet[i];
		}
		alert(soma);
	}

	//EXERCÍCIO: faça uma função que conte os números negativos de um vetor de inteiros.
	function contarNegativos(vet){
		var contar = 0; //contador
		for(var i in vet){ // for em javascript
			if(vet[i]<0){
				contar++;
			}
		}
		alert("No vetor contém: "+contar+" números negativos.");
	} 
	function testeContarNegativo(){
		contarNegativos([1,0,9,-1,9,3,2])
	}

	//HomeWork
	// faça uma função que mostre na tela a multiplicação de todos os números pares negativos de um vetor de inteiros.

	