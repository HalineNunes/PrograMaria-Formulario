console.log("✅ Script carregado!");

document.getElementById("botaoEnviar").addEventListener("click", validaFormulario);

function validaFormulario(event){
  console.log("✅ Função executada!");
    event.preventDefault();     
    if(document.getElementById("nome").value != "" && 
       document.getElementById("email").value != "" && 
       document.getElementById("numero").value != ""){
        alert("Prontinho, você receberá as novidades por email.");
    }else{
        alert("Por favor, preencha os campos nome, email e telefone!");
    }
}