
document.addEventListener("DOMContentLoaded", () => {
    let produto = document.getElementById("produto");
    let quantidadeEntrada = document.getElementById("quantidade");
    let listarProdutos = document.getElementById("lista-produtos");
    let valorTotal = document.getElementById("valor-total");
    
    let total = 1400; // Valor inicial do exemplo no HTML
  
    function atualizarTotal() {
      valorTotal.textContent = `R$${total.toFixed(2)}`;
    }
  
    window.adicionar = function () {
      let produtoSelecionado = produto.value;
      let quantidade = parseInt(quantidadeEntrada.value) || 1;
      
      let [nomeProduto, preco] = produtoSelecionado.split(" - R$");
      let precoUnitario = parseFloat(preco);
      
      let precoTotal = precoUnitario * quantidade;
      total += precoTotal;
      
      let item = document.createElement("section");
      item.classList.add("carrinho__produtos__produto");
      item.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${precoTotal.toFixed(2)}</span>`;
      
      listarProdutos.appendChild(item);
      atualizarTotal();
    };
  
    window.limpar = function () {
      listarProdutos.innerHTML = "";
      total = 0;
      atualizarTotal();
    };
  });
  