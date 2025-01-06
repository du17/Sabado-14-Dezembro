/*// Inicialização da validação do Bootstrap
(function () {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');
  
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        'submit',
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          } else {
            // Se o formulário estiver válido, realizar o login
            event.preventDefault(); // Evita o envio padrão do formulário
            login();
          }
  
          form.classList.add('was-validated');
        },
        false
      );
    });
  })();
  
  // Função de login
  function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Recuperar dados do localStorage
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");
  
    // Verificar se os dados coincidem
    if (email === storedEmail && password === storedPassword) {
      alert("Login bem-sucedido!");
      window.location.href = "teste.html"; // Redirecionar para a página principal
    } else {
      alert("Email ou senha incorretos.");
    }
}*/


(function () {
      'use strict';
      const forms = document.querySelectorAll('.needs-validation');
    
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          } else {
            event.preventDefault(); // Evita o envio padrão
            login();
          }
    
          form.classList.add('was-validated');
        });
      });
    })();
    
    function login() {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
    
      // Recuperar dados do localStorage
      const storedEmail = localStorage.getItem("userEmail");
      const storedPassword = localStorage.getItem("userPassword");
    
      if (email === storedEmail && password === storedPassword) {
        alert("Login bem-sucedido!");
        window.location.href = "home.html";
      } else {
        alert("Email ou senha incorretos.");
      }
    }
    