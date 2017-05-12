var year = 1950;
var till = 2017;
var options = "";
for(var y=year; y<=till; y++){
  options += "<option> "+ y +"</option>";
}
document.getElementById('ano').innerHTML = options;

var dia = 1;
var fimdia = 31;
var options2 = "";
for(var y=dia; y<=fimdia; y++){
  options2 += "<option> "+ y +"</option>";
}
document.getElementById('dia').innerHTML = options2;


var meses = ["01", "02", "03", "04", "05", "06", 
			"07", "08", "09", "10", "11", "12"];
var options3 = "";
for(var i=0; i<meses.length; i++){
  options3 += "<option> "+ meses[i] +"</option>";
}
document.getElementById('mes').innerHTML = options3;

/*
function validar() {
	var nome = document.getElementById("nomeUsu").value;
	var email = document.getElementById("email");
	var senha = document.getElementById("senha");
	var confirmacaoSenha= document.getElementById("confirmacaoSenha");

	var nomeComp = document.getElementById("nomeComp");
	var endereco = document.getElementById("endereco");
	

	if (nome == "" || email.value == null|| senha.value == null ||
		confirmacaoSenha.value == null ||  nomeComp.value == null||  endereco.value == null) {
		alert("Preencha o campo com seu nome");
		return false;
	}

}
*/