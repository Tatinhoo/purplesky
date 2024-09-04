
function registrar(){
    let nome = document.getElementById("name-signup-input");
    let dataNascimento = document.getElementById("birthday signup-day");

    localStorage.setItem("username", nome.value);
    console.log("Dados enviados.");
    window.location.href = "tela-inicial.html"
}