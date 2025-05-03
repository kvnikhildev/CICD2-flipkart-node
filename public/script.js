const products = [
  { id: 1, name: "Realme Narzo 50", price: 12999, image: "https://via.placeholder.com/200x150?text=Phone" },
  { id: 2, name: "boAt Rockerz 255", price: 899, image: "https://via.placeholder.com/200x150?text=Headphones" },
  { id: 3, name: "Sony Smart TV", price: 39999, image: "https://via.placeholder.com/200x150?text=TV" },
  { id: 4, name: "Noise Smartwatch", price: 1799, image: "https://via.placeholder.com/200x150?text=Watch" }
];

const cart = [];
const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");

function renderProducts() {
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  cartCount.innerText = cart.length;

  if (cart.length === 0) {
    cartItems.innerHTML = `<li class="empty">Cart is empty</li>`;
    return;
  }

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
  });
}

renderProducts();

