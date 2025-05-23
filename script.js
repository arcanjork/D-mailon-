
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function adicionarCarrinho(produto, preco) {
  carrinho.push({ produto, preco });
  salvarCarrinho();
  atualizarCarrinho();
  mostrarAlerta();
}

function removerCarrinho(index) {
  carrinho.splice(index, 1);
  salvarCarrinho();
  atualizarCarrinho();
}

function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function atualizarCarrinho() {
  const lista = document.getElementById("lista-carrinho");
  const contador = document.getElementById("contador");
  const total = document.getElementById("total");
  lista.innerHTML = "";
  let soma = 0;
  carrinho.forEach((item, index) => {
    soma += item.preco;
    const li = document.createElement("li");
    li.textContent = `${item.produto} - R$ ${item.preco.toFixed(2)}`;
    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.onclick = () => removerCarrinho(index);
    li.appendChild(btnRemover);
    lista.appendChild(li);
  });
  contador.textContent = `Itens no carrinho: ${carrinho.length}`;
  total.textContent = `Total: R$ ${soma.toFixed(2)}`;
}

function mostrarAlerta() {
  const alerta = document.getElementById("alerta");
  alerta.style.display = "block";
  setTimeout(() => {
    alerta.style.display = "none";
  }, 2000);
}

function finalizarCompra() {
  alert("Pagamento via PIX ou boleto bancário. Chave PIX CPF: 125.634.529-61");
  carrinho = [];
  salvarCarrinho();
  atualizarCarrinho();
}

function filtrarProdutos() {
  const busca = document.getElementById("busca").value.toLowerCase();
  const produtos = document.querySelectorAll(".produto");
  produtos.forEach(produto => {
    const nome = produto.getAttribute("data-nome").toLowerCase();
    produto.style.display = nome.includes(busca) ? "block" : "none";
  });
}

document.addEventListener("DOMContentLoaded", atualizarCarrinho);
