function ola(){
	var nome = document.forms.form1.nome.value;
	alert ("Ola "+nome);
}

//faca uma "TELA" que permita o usuario somar dois numeros usando um FORM.
//a soma deve ser mostrada via alert.
function soma(){
	var v1 = parseInt(document.forms.form2.v1.value);
	var v2 = parseInt(document.forms.form2.v2.value);
	alert(v1+v2);
}

//faca uma "TELA" que permita o calculo de IMC de um individuo.
//O IMC eh dado pela formula = peso/(altura*altura).
//abaixo de 18 mostre a mensagem "abaixo do peso".
//entre 18 e 25 mostre a mensagem "normal".
//acima de 25 mostre a mensagem "acima do peso".
//mostre em um paragrafo d id p1, o valor do IMC.
function imcrel(){
	var peso = parseInt(document.forms.form3.pes.value);
	var altura = parseInt(document.forms.form3.alt.value);
	var imc = peso/(altura*altura);
	if(imc < 18){
		alert("Abaixo do peso!");
	}else if(imc >=18 && imc <=25){
			alert("Normal!");
		}else{
			alert("Acima do peso!");
		}
		document.getElementById("p1").innerHTML = imc.tofixed(2);
}

function validar(){
	var nome = document.forms.form4.nome.value;
	var idade = document.forms.form4.idade.value;
	if(nome == "" || idade < 18 || isNaN(idade)){
		alert("Sem permissão!");
		window.open("falha.html", "");
		return false;
	}else{
		return true;
	}
}