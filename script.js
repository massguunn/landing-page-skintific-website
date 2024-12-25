let cart = [];

function addToCart(productName, productPrice) {
  // Menambahkan produk ke keranjang
  cart.push({ name: productName, price: productPrice });
  updateCart();
}

function updateCart() {
  // Memperbarui daftar produk dalam keranjang
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - Rp ${item.price.toLocaleString()}`;
    cartItems.appendChild(li);
  });
}

function toggleCart() {
  // Menampilkan atau menyembunyikan keranjang belanja
  const cartElement = document.getElementById("cart");
  cartElement.style.display =
    cartElement.style.display === "block" ? "none" : "block";
}

function checkout() {
  // Menampilkan pesan checkout
  if (cart.length === 0) {
    alert("Keranjang kosong!");
    return;
  }
  let orderSummary = "Pesanan Anda:\n\n";
  cart.forEach((item) => {
    orderSummary += `${item.name} - Rp ${item.price.toLocaleString()}\n`;
  });
  alert(orderSummary + "\nTerima kasih telah memesan!");
  cart = []; // Kosongkan keranjang
  updateCart();
  toggleCart(); // Sembunyikan keranjang
}
