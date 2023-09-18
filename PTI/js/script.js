$(document).ready(function() {
    $("#form").submit(function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obtenha os valores dos campos Nome, Email e Senha
        var nome = $("#nome").val();
        var email = $("#email").val();
        var senha = $("#senha").val();

        localStorage.setItem("nome", nome);
        localStorage.setItem("email", email);
        localStorage.setItem("senha", senha);

        // Faça algo com os valores, como enviá-los ao servidor via AJAX
        //console.log("Email: " + email);
        //console.log("Senha: " + senha);

        // Opcional: Exiba uma mensagem de confirmação
        Swal.fire({
            icon: 'success',
            title: 'Cadastro realizado com sucesso!',
            text: 'Redirecionando...',
            showConfirmButton: false,
            timer: 1500 // Fechar o Swal após 1,5 segundos
        });
        // Redirecione para a página de usuário após um breve intervalo
        setTimeout(function() {
            window.location.href = "index.html";
        }, 1500);
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
            Swal.fire({
                icon: 'success',
                title: 'Login bem-sucedido!',
                text: 'Redirecionando...',
                showConfirmButton: false,
                timer: 1500 // Fechar o Swal após 1,5 segundos
            });
            // Redirecione para a página de usuário após um breve intervalo
            setTimeout(function() {
                window.location.href = "usuario.html";                
            }, 1500);            
        } else {
            // Exiba uma mensagem de erro (opcional)
            Swal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Login ou senha incorretos. Por favor, tente novamente.'
            });
            $("#login1").val('');
            $("#senha1").val('');
        }
    });
});