document
        .getElementById("registerForm")
        .addEventListener("submit", function (event) {
          event.preventDefault();
          const name = document.getElementById("nickname").value;
          const username = document.getElementById("email").value;
          const password = document.getElementById("password").value;
          const alertBox = document.getElementById("alertBox");

          if (!name || !username || !password) {
            alert("Por favor, preencha todos os campos.");
            return;
          }

          const user = {
            id: gerarID(name),  // <-- ID único com nome
            name: name,
            username: username,
            password: password,
            bio: "",
            estilo: ""
          };

          localStorage.setItem(username, JSON.stringify(user));
          alertBox.innerHTML = `<div class="alert alert-success" role="alert">Carregado com sucesso!</div>`;
          setTimeout(() => {
            alertBox.innerHTML = "";
          }, 2500);
          window.location.href = "login.html";

          function gerarID(nome) {
          const idAleatorio = Date.now().toString(36) + Math.floor(Math.random() * 1000).toString(36);
          return `${nome}-${idAleatorio}`;
        }
        });