let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById("cart").innerText = `Carrinho (${cartCount})`;
}
