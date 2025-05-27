 const user = localStorage.getItem("user");
      if (user) {
        const parsedUser = JSON.parse(user);
        document.getElementById(
          "welcomeMessage"
        ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="45px" viewBox="0 -960 960 960" width="45px" fill="#FFFFFF"><path d="M237-285q54-38 115.5-56.5T480-360q66 0 127.5 18.5T723-285q35-41 52-91t17-104q0-129.67-91.23-220.84-91.23-91.16-221-91.16Q350-792 259-700.84 168-609.67 168-480q0 54 17 104t52 91Zm243-123q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42Zm.28 312Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q52 0 100-16.5t90-48.5q-43-27-91-41t-99-14q-51 0-99.5 13.5T290-233q42 32 90 48.5T480-168Zm0-312q30 0 51-21t21-51q0-30-21-51t-51-21q-30 0-51 21t-21 51q0 30 21 51t51 21Zm0-72Zm0 319Z"/></svg>${parsedUser.name}`;
        document.getElementById("userProfile").innerText = `${parsedUser.name}`;
        document.getElementById("idProfile").innerText = `ID: ${parsedUser.id}`;
        document.getElementById("bioProfile").innerText = `${parsedUser.bio}`;
        document.getElementById("estiloJogo").innerText = `${parsedUser.estilo}`;
        document.getElementById("userEdit").value = parsedUser.name;
        document.getElementById("bioEdit").value = parsedUser.bio;
        document.getElementById("estiloEdit").value = parsedUser.estilo;
        document.getElementById("logoutButton").classList.remove("hidden");
      } else {
        document.getElementById(
          "welcomeMessage"
        ).innerHTML = `Hello, please <a href='login.html'>login</a>.`;
      }


  function atualizarUsuario() {
    const novoNome = document.getElementById("userEdit").value;
    const novaBio = document.getElementById("bioEdit").value;
    const novoEstilo = document.getElementById("estiloEdit").value;
    const user = localStorage.getItem("user");
    const alertBox = document.getElementById("alertBox");

    if (user) {
      const parsedUser = JSON.parse(user);
      

      // Atualiza o nome
      parsedUser.name = novoNome;
      parsedUser.bio = novaBio;
      parsedUser.estilo = novoEstilo;

      // Salva de novo no localStorage
      localStorage.setItem("user", JSON.stringify(parsedUser));

      // Atualiza na tela também
      document.getElementById("userProfile").innerText = novoNome;
      document.getElementById("bioProfile").innerText = novaBio;
      document.getElementById("estiloJogo").innerText = novoEstilo;
      document.getElementById("welcomeMessage").innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" height="45px" viewBox="0 -960 960 960" width="45px" fill="#FFFFFF"><path d="M237-285q54-38 115.5-56.5T480-360q66 0 127.5 18.5T723-285q35-41 52-91t17-104q0-129.67-91.23-220.84-91.23-91.16-221-91.16Q350-792 259-700.84 168-609.67 168-480q0 54 17 104t52 91Zm243-123q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42Zm.28 312Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q52 0 100-16.5t90-48.5q-43-27-91-41t-99-14q-51 0-99.5 13.5T290-233q42 32 90 48.5T480-168Zm0-312q30 0 51-21t21-51q0-30-21-51t-51-21q-30 0-51 21t-21 51q0 30 21 51t51 21Zm0-72Zm0 319Z"/></svg>${novoNome}`;

      alertBox.innerHTML = `<div class="alert alert-success" role="alert">Atualizado com sucesso!</div>`;                                                                  
      setTimeout(() => {
        alertBox.innerHTML = "";                                            
      }, 2500);
    } else {
      alert("Usuário não encontrado!");
    }
}


function mostrarCard2(){
  document.getElementById("procurarBtn").addEventListener("click", function () {
    const valorSelecionado = document.getElementById("estiloEdit").value;
    const alertBox = document.getElementById("alertBox");
  
    // Mostra o card selecionado
    if (valorSelecionado === "CS2") {
      document.getElementById("cs2Card").style.display = "flex";
      alertBox.innerHTML = `<div class="alert alert-success" role="alert">Carregado com sucesso!</div>`;                                                                  
      setTimeout(() => {
        alertBox.innerHTML = "";                                            
      }, 2500);
    } else if (valorSelecionado === "GTA") {
      document.getElementById("GTACard").style.display = "flex";
      alertBox.innerHTML = `<div class="alert alert-success" role="alert">Carregado com sucesso!</div>`;
      setTimeout(() => {
        alertBox.innerHTML = "";
      }, 2500);
    } else if (valorSelecionado === "VALORANT") {
      document.getElementById("ValorantCard").style.display = "flex";
      alertBox.innerHTML = `<div class="alert alert-success" role="alert">Carregado com sucesso!</div>`;
      setTimeout(() => {
        alertBox.innerHTML = "";
      }, 2500);
    }

  });
}



  function mostrarCard(id, checkbox) {
    const card = document.getElementById(id);
    card.style.display = checkbox.checked ? "flex" : "none";
  }

  
