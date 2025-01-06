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
          // se for válido, realizar o cadastro
          event.preventDefault(); // Evita o envio padrão do formulário
          cadastrar();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();

// Função de cadastro
function cadastrar() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Verifica a senha
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passwordRegex.test(password)) {
    alert(
      "A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, um número e um caractere especial."
    );
    return;
  }

  // Armazenar os dados no localStorage
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  alert("Cadastro realizado com sucesso!");
  window.location.href = "login.html"; // Redirecionar para a página de login
}


//parte de Login
// Inicialização da validação do Bootstrap
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
    window.location.href = "home.html"; // Redirecionar para a página principal
  } else {
    alert("Email ou senha incorretos.");
  }
}
*/

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
        cadastrar();
      }

      form.classList.add('was-validated');
    });
  });
})();

function cadastrar() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validação da senha
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passwordRegex.test(password)) {
    alert("A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, um número e um caractere especial.");
    return;
  }

  // Armazenar no localStorage
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  alert("Cadastro realizado com sucesso!");
  window.location.href = "login.html";
}
