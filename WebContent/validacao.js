function validar() {
	

	var nome = document.getElementById("nomeUsu").value;
	var email = document.getElementById("email").value;
	var senha = document.getElementById("senha").value;
	var confirmacaoSenha= document.getElementById("confirmacaoSenha").value;
	var nomeComp = document.getElementById("nomeComp").value;
	var endereco = document.getElementById("endereco").value;

	var tamanho = (document.form.nomeUsu.value.length);
	var erroNome =document.getElementById("erroNome");

	var tamanhoSenha = (document.form.senha.value.length);
	var erroSenha =document.getElementById("erroSenha");
	var erroSenha1 =document.getElementById("erroSenha1");

	var erroEmail =document.getElementById("erroEmail");
	var regMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	var sexM = document.getElementById("sexM").checked;
	var sexF = document.getElementById("sexF").checked;
	
	//campos
	if (nome == "" || email == ""|| senha == "" ||
		confirmacaoSenha == "" ||  nomeComp == "" ||  endereco == "" ) {
		window.alert("Você não deve deixar nenhum campo vazio. preencha os campos em branco.");
		return false;
	}

	//nome
	else if(tamanho>24 || tamanho<6){
		erroNome.innerHTML = "O nome do usuario tem que ser maior que 6 caracteres e menor que 24 caracteres." ;
		erroNome.setAttribute("class","erro");
		return false;
	}

	//email
	else if(!regMail.test(email)){
		erroEmail.innerHTML = "Email invalido. Você deve digitar algo como: exemplo@exemplo.exemplo" ;
		erroNome.setAttribute("class","erro");
		return false;
	}
	
	//senha
	else if(tamanhoSenha >24 || tamanhoSenha <6){
		//window.alert("As senhas devem ser maior que 6 caracteres e menor que 24 caracteres.");
		//document.getElementById('erroSenha').innerHTML = "As senhas devem ser maior que 6 caracteres e menor que 24 caracteres.";
		erroSenha.innerHTML = "As senhas devem ser maior que 6 caracteres e menor que 24 caracteres." ;
		erroSenha.setAttribute("class","erro");
		return false;
	}else if(senha != confirmacaoSenha){
		//window.alert("As senhas devem ser iguais.");
		//document.getElementById('erroSenha1').innerHTML = "As senhas devem ser iguais.";
		erroSenha1.innerHTML = "As senhas devem ser iguais." ;
		erroSenha1.setAttribute("class","erro");
		return false;
	}

	//sex

	else if(sexM == false && sexF == false){
		window.alert("Você deve selecionar seu sexo.");
		return false;
	}

	return true;

}
