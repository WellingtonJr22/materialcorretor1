if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página");
    window.location.href = "../html/signin.html";
  }
  
  const userLogado = JSON.parse(localStorage.getItem("userLogado"));
  
  const logado = document.querySelector("#logado");
  logado.innerHTML = `Olá ${userLogado.nome}!`;
  
  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "./assets/html/signin.html";
  } 


  
  document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('searchInput').addEventListener('input', function() {
          // Obtém o valor da barra de pesquisa
          var searchTerm = this.value.toLowerCase();

          // Obtém todos os itens da lista
          var listItems = document.querySelectorAll('#listaItens li');

          // Percorre os itens e mostra/oculta com base no termo de pesquisa
          listItems.forEach(function(item) {
              var itemText = item.textContent.toLowerCase();
              var match = itemText.startsWith(searchTerm);

              item.style.display = match ? 'list-item' : 'none';
          });
      });
  });
