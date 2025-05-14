
let itens = 0;
let total = 0;
let carrinho = [];

function adicionarCarrinho(nome, preco) {
  itens++;
  total += preco;
  carrinho.push({ nome, preco });

  document.getElementById('contador').textContent = `Itens no carrinho: ${itens}`;
  document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
  atualizarListaCarrinho();
}

function atualizarListaCarrinho() {
  const lista = document.getElementById("lista-carrinho");
  lista.innerHTML = "";
  carrinho.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    lista.appendChild(li);
  });
}

function finalizarCompra() {
  window.location.href = "formas-pagamento.html";
}

function filtrarProdutos() {
  const termo = document.getElementById("busca").value.toLowerCase();
  const produtos = document.querySelectorAll(".produto");
  produtos.forEach(prod => {
    const nome = prod.dataset.nome.toLowerCase();
    prod.style.display = nome.includes(termo) ? "block" : "none";
  });
}
