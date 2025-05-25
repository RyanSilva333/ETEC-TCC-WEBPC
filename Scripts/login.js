document
        .getElementById("loginForm")
        .addEventListener("submit", function (event) {
          event.preventDefault();
          const username = document.getElementById("email").value;
          const password = document.getElementById("password").value;

          const user = localStorage.getItem(username);

          if (user) {
            const parsedUser = JSON.parse(user);
            if (parsedUser.password === password) {
              localStorage.setItem("user", JSON.stringify(parsedUser));
              window.location.href = "PC.html";
            } else {
              alert("Incorrect password");
            }
          } else {
            alert("User not found");
          }
        });