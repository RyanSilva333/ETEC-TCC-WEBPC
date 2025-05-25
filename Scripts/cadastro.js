document
        .getElementById("registerForm")
        .addEventListener("submit", function (event) {
          event.preventDefault();
          const name = document.getElementById("nickname").value;
          const username = document.getElementById("email").value;
          const password = document.getElementById("password").value;

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
          alert("Registration successful! Please login.");
          window.location.href = "login.html";

          function gerarID(nome) {
          const idAleatorio = Date.now().toString(36) + Math.floor(Math.random() * 1000).toString(36);
          return `${nome}-${idAleatorio}`;
        }
        });