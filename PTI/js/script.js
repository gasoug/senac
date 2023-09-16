$(document).ready(function() {
    $("#form").submit(function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obtenha os valores dos campos Email e Senha
        var email = $("#email").val();
        var senha = $("#senha").val();

        localStorage.setItem("email", email);
        localStorage.setItem("senha", senha);

        // Faça algo com os valores, como enviá-los ao servidor via AJAX
        console.log("Email: " + email);
        console.log("Senha: " + senha);

        // Opcional: Exiba uma mensagem de confirmação
        alert("Cadastro realizado com sucesso!");
        window.location.href = "index.html";
    });
    $("#logar").click(function() {
        // Obtenha os valores digitados pelo usuário
        var loginDigitado = $("#login1").val();
        var senhaDigitada = $("#senha1").val();

        // Obtenha os valores do localStorage
        var loginArmazenado = localStorage.getItem("email");
        var senhaArmazenada = localStorage.getItem("senha");
        //console.log(loginArmazenado, senhaArmazenada)
        // Verifique se os valores coincidem
        if (loginDigitado == loginArmazenado && senhaDigitada == senhaArmazenada) {
            // Redirecione para a página de usuário
            alert("Logado com sucesso");
            window.location.href = "usuario.html";
        } else {
            // Exiba uma mensagem de erro (opcional)
            alert("Login ou senha incorretos. Por favor, tente novamente.");
            $("#login1").val('');
            $("#senha1").val('');
        }
    });
});