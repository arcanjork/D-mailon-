let itens = 0;
let total = 0;

function adicionarCarrinho(nome, preco) {
  itens++;
  total += preco;
  document.getElementById('contador').textContent = `Itens no carrinho: ${itens}`;
  document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
}

function finalizarCompra() {
  window.location.href = "formas-pagamento.html";
}
