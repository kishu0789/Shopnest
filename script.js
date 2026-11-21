

/* script.js */

const products = [
  {id:1,name:"Apple iPhone 15 (128GB)",category:"Electronics",price:54999,oldPrice:69900,rating:4.6,reviews:2841,discount:21,bestseller:true,stock:true,image:"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600",description:"A powerful smartphone with a beautiful display, advanced camera system and smooth everyday performance."},
  {id:2,name:"Wireless Bluetooth Headphones",category:"Electronics",price:1499,oldPrice:2999,rating:4.3,reviews:1250,discount:50,bestseller:true,stock:true,image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",description:"Comfortable wireless headphones with clear sound, modern design and long-lasting battery life."},
  {id:3,name:"Smart Watch Series 8",category:"Electronics",price:2299,oldPrice:4999,rating:4.2,reviews:945,discount:54,bestseller:true,stock:true,image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",description:"Track your everyday activity and stay connected with a stylish smartwatch."},
  {id:4,name:"Premium Running Sneakers",category:"Fashion",price:1899,oldPrice:3499,rating:4.4,reviews:876,discount:46,bestseller:true,stock:true,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",description:"Lightweight everyday sneakers designed for comfort, movement and casual style."},
  {id:5,name:"Women's Everyday Handbag",category:"Fashion",price:1299,oldPrice:2499,rating:4.1,reviews:642,discount:48,bestseller:false,stock:true,image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",description:"A versatile handbag with a practical design for everyday use."},
  {id:6,name:"Classic Casual Cotton T-Shirt",category:"Fashion",price:499,oldPrice:999,rating:4.0,reviews:532,discount:50,bestseller:false,stock:true,image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",description:"A comfortable cotton T-shirt for everyday casual outfits."},
  {id:7,name:"Modern Table Lamp",category:"Home",price:899,oldPrice:1599,rating:4.3,reviews:421,discount:44,bestseller:true,stock:true,image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600",description:"A modern table lamp that adds a warm and cosy touch to your room."},
  {id:8,name:"Minimal Ceramic Coffee Mug Set",category:"Home",price:599,oldPrice:999,rating:4.2,reviews:312,discount:40,bestseller:false,stock:true,image:"https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600",description:"A stylish ceramic mug set for your favourite coffee and tea."},
  {id:9,name:"Soft Decorative Cushion",category:"Home",price:399,oldPrice:799,rating:4.1,reviews:267,discount:50,bestseller:false,stock:true,image:"https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600",description:"A soft decorative cushion to refresh your living room or bedroom."},
  {id:10,name:"Daily Skincare Essentials Kit",category:"Beauty",price:799,oldPrice:1499,rating:4.5,reviews:1150,discount:47,bestseller:true,stock:true,image:"https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600",description:"A skincare essentials set for a simple and refreshing daily routine."},
  {id:11,name:"Rose Beauty Gift Set",category:"Beauty",price:999,oldPrice:1799,rating:4.2,reviews:387,discount:44,bestseller:false,stock:true,image:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600",description:"A thoughtful beauty gift set with a lovely presentation."},
  {id:12,name:"Classic Reading Notebook",category:"Books",price:249,oldPrice:399,rating:4.4,reviews:192,discount:38,bestseller:false,stock:true,image:"https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600",description:"A beautifully simple notebook for notes, journaling and ideas."},
  {id:13,name:"Inspirational Hardcover Book",category:"Books",price:349,oldPrice:599,rating:4.6,reviews:738,discount:42,bestseller:true,stock:true,image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600",description:"An engaging hardcover book for your next reading session."},
  {id:14,name:"Portable Mini Bluetooth Speaker",category:"Electronics",price:1199,oldPrice:1999,rating:4.2,reviews:559,discount:40,bestseller:false,stock:true,image:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600",description:"A compact speaker for music at home, outdoors or while travelling."},
  {id:15,name:"Digital Kitchen Blender",category:"Appliances",price:2499,oldPrice:3999,rating:4.1,reviews:302,discount:38,bestseller:false,stock:true,image:"https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600",description:"A convenient kitchen blender for smoothies, sauces and everyday preparation."},
  {id:16,name:"Modern Home Air Purifier",category:"Appliances",price:4999,oldPrice:7999,rating:4.3,reviews:188,discount:38,bestseller:false,stock:false,image:"https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600",description:"A modern home appliance designed to fit neatly into your living space."},
  {id:17,name:"Elegant Women's Wrist Watch",category:"Fashion",price:1599,oldPrice:2799,rating:4.3,reviews:461,discount:43,bestseller:false,stock:true,image:"https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600",description:"An elegant everyday watch with a timeless look."},
  {id:18,name:"Professional Camera",category:"Electronics",price:32999,oldPrice:39999,rating:4.7,reviews:621,discount:18,bestseller:true,stock:true,image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",description:"Capture your favourite moments with a versatile digital camera."},
  {id:19,name:"Comfortable Office Chair",category:"Home",price:5499,oldPrice:7999,rating:4.2,reviews:229,discount:31,bestseller:false,stock:true,image:"https://images.unsplash.com/photo-1505843490701-5be5d1b7f5c4?w=600",description:"A comfortable chair for your workspace or study corner."},
  {id:20,name:"Wireless Computer Mouse",category:"Electronics",price:699,oldPrice:1199,rating:4.0,reviews:815,discount:42,bestseller:false,stock:true,image:"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600",description:"A compact wireless mouse for smooth everyday computer use."}
];

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

const productGrid = $("#productGrid");
const bestSellerGrid = $("#bestSellerGrid");
const searchInput = $("#searchInput");
const suggestions = $("#searchSuggestions");
const overlay = $("#overlay");
const cartDrawer = $("#cartDrawer");
const wishlistDrawer = $("#wishlistDrawer");
const productModal = $("#productModal");
const accountModal = $("#accountModal");
const locationModal = $("#locationModal");
const checkoutModal = $("#checkoutModal");
const toast = $("#toast");

let selectedCategory = "all";
let cart = JSON.parse(localStorage.getItem("shopnest-cart") || "[]");
let wishlist = JSON.parse(localStorage.getItem("shopnest-wishlist") || "[]");
let currentSearch = "";
let toastTimer;

const formatPrice = amount =>
  "₹" + Number(amount).toLocaleString("en-IN");

function saveData() {
  localStorage.setItem("shopnest-cart", JSON.stringify(cart));
  localStorage.setItem("shopnest-wishlist", JSON.stringify(wishlist));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function getProduct(id) {
  return products.find(product => product.id === Number(id));
}

function productCard(product) {
  const wished = wishlist.includes(product.id);

  return `
    <article class="product-card">
      <div class="product-image" data-view="${product.id}">
        <span class="discount-tag">${product.discount}% OFF</span>
        <img src="${product.image}" alt="${product.name}" loading="lazy"
             onerror="this.src='https://placehold.co/400x400/fff0f5/e91e63?text=ShopNest'">
        <button class="wish-btn ${wished ? "active" : ""}" data-wish="${product.id}"
                aria-label="Add ${product.name} to wishlist">${wished ? "♥" : "♡"}</button>
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <div class="product-name" data-view="${product.id}">${product.name}</div>
        <div class="rating-line"><span class="rating">${product.rating} ★</span><span class="review-count">(${product.reviews.toLocaleString("en-IN")})</span></div>
        <div class="price-line">
          <strong class="current-price">${formatPrice(product.price)}</strong>
          <del class="old-price">${formatPrice(product.oldPrice)}</del>
          <span class="discount-text">${product.discount}% off</span>
        </div>
        <span class="delivery-note">Free delivery on eligible orders</span>
        <span class="stock-note ${product.stock ? "" : "out"}">${product.stock ? "In stock" : "Currently unavailable"}</span>
        <div class="card-actions">
          <button class="view-btn" data-view="${product.id}">View details</button>
          <button class="add-btn" data-add="${product.id}" ${product.stock ? "" : "disabled"}>${product.stock ? "Add to cart" : "Out of stock"}</button>
        </div>
      </div>
    </article>`;
}

function renderProducts() {
  const maxPrice = Number($("#priceRange").value);
  const minRating = $("#ratingFilter").checked;
  const inStock = $("#stockFilter").checked;
  const discountOnly = $("#discountFilter").checked;
  const searchWords = currentSearch.trim().toLowerCase();

  let filtered = products.filter(product => {
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
    const searchMatch = !searchWords ||
      `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(searchWords);
    const priceMatch = product.price <= maxPrice;
    const ratingMatch = !minRating || product.rating >= 4;
    const stockMatch = !inStock || product.stock;
    const discountMatch = !discountOnly || product.discount >= 20;

    return categoryMatch && searchMatch && priceMatch && ratingMatch && stockMatch && discountMatch;
  });

  const sort = $("#sortSelect").value;
  if (sort === "price-low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "price-high") filtered.sort((a, b) => b.price - a.price);
  if (sort === "rating") filtered.sort((a, b) => b.rating - a.rating);
  if (sort === "discount") filtered.sort((a, b) => b.discount - a.discount);
  if (sort === "popular") filtered.sort((a, b) => b.reviews - a.reviews);

  productGrid.innerHTML = filtered.map(productCard).join("");
  $("#resultCount").textContent = `Showing ${filtered.length} of ${products.length} products`;
  $("#toolbarLabel").textContent = selectedCategory === "all" ? "Recommended for you" : selectedCategory;

  $("#emptyState").classList.toggle("hidden", filtered.length > 0);
  productGrid.classList.toggle("hidden", filtered.length === 0);
}

function renderBestSellers() {
  bestSellerGrid.innerHTML = products
    .filter(product => product.bestseller)
    .slice(0, 5)
    .map(productCard)
    .join("");
}

function setCategory(category) {
  selectedCategory = category;
  currentSearch = "";
  searchInput.value = "";
  $("#searchCategory").value = "all";

  $$("[data-category]").forEach(button => {
    button.classList.toggle("active", button.dataset.category === category);
  });

  const filterRadio = document.querySelector(`input[name="filterCategory"][value="${category}"]`);
  if (filterRadio) filterRadio.checked = true;

  renderProducts();
  $("#products").scrollIntoView({behavior:"smooth"});
}

function resetFilters() {
  selectedCategory = "all";
  currentSearch = "";
  searchInput.value = "";
  $("#searchCategory").value = "all";
  $("#priceRange").value = 100000;
  $("#priceValue").textContent = formatPrice(100000);
  $("#ratingFilter").checked = false;
  $("#stockFilter").checked = false;
  $("#discountFilter").checked = false;
  $("#sortSelect").value = "featured";
  $$('input[name="filterCategory"]').forEach(input => {
    input.checked = input.value === "all";
  });
  $$(".nav-category").forEach(button => button.classList.toggle("active", button.dataset.category === "all"));
  renderProducts();
}

function searchProducts() {
  currentSearch = searchInput.value.trim();
  const chosenCategory = $("#searchCategory").value;
  selectedCategory = chosenCategory;
  $$('input[name="filterCategory"]').forEach(input => {
    input.checked = input.value === selectedCategory;
  });
  $$(".nav-category").forEach(button => {
    button.classList.toggle("active", button.dataset.category === selectedCategory);
  });
  suggestions.classList.remove("show");
  renderProducts();
  $("#products").scrollIntoView({behavior:"smooth"});
}

function updateSuggestions() {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) {
    suggestions.classList.remove("show");
    return;
  }

  const matches = products
    .filter(product => product.name.toLowerCase().includes(query) || product.category.toLowerCase().includes(query))
    .slice(0, 5);

  suggestions.innerHTML = matches.length
    ? matches.map(product => `<button class="suggestion" data-suggestion="${product.id}">⌕ &nbsp;${product.name}</button>`).join("")
    : `<div class="suggestion">No matching products found</div>`;

  suggestions.classList.add("show");
}

function updateCounts() {
  $("#cartCount").textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  $("#wishlistCount").textContent = wishlist.length;
  $("#drawerCartCount").textContent = `(${cart.reduce((sum, item) => sum + item.quantity, 0)})`;
}

function addToCart(id) {
  const product = getProduct(id);
  if (!product || !product.stock) {
    showToast("This product is currently unavailable.");
    return;
  }

  const existing = cart.find(item => item.id === product.id);
  if (existing) existing.quantity++;
  else cart.push({id: product.id, quantity: 1});

  saveData();
  updateCounts();
  renderCart();
  showToast(`${product.name} added to cart.`);
}

function changeQuantity(id, amount) {
  const item = cart.find(entry => entry.id === Number(id));
  if (!item) return;

  item.quantity += amount;
  if (item.quantity <= 0) cart = cart.filter(entry => entry.id !== Number(id));

  saveData();
  updateCounts();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== Number(id));
  saveData();
  updateCounts();
  renderCart();
  showToast("Item removed from cart.");
}

function renderCart() {
  const container = $("#cartItems");

  if (!cart.length) {
    container.innerHTML = `<div class="drawer-empty"><span>🛒</span><h3>Your cart is empty</h3><p>Looks like you haven't added anything yet.</p></div>`;
    $("#cartSubtotal").textContent = formatPrice(0);
    $("#cartFooter").classList.add("hidden");
    return;
  }

  $("#cartFooter").classList.remove("hidden");
  let subtotal = 0;

  container.innerHTML = cart.map(item => {
    const product = getProduct(item.id);
    if (!product) return "";
    subtotal += product.price * item.quantity;

    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}">
        <div>
          <h4>${product.name}</h4>
          <strong>${formatPrice(product.price)}</strong>
          <div class="quantity">
            <button data-quantity="${product.id}" data-change="-1" aria-label="Decrease quantity">−</button>
            <span>${item.quantity}</span>
            <button data-quantity="${product.id}" data-change="1" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <button class="remove-item" data-remove="${product.id}" aria-label="Remove item">×</button>
      </div>`;
  }).join("");

  $("#cartSubtotal").textContent = formatPrice(subtotal);
}

function toggleWishlist(id) {
  const product = getProduct(id);
  if (!product) return;

  if (wishlist.includes(product.id)) {
    wishlist = wishlist.filter(item => item !== product.id);
    showToast("Removed from wishlist.");
  } else {
    wishlist.push(product.id);
    showToast("Added to wishlist.");
  }

  saveData();
  updateCounts();
  renderProducts();
  renderBestSellers();
  renderWishlist();
}

function renderWishlist() {
  const container = $("#wishlistItems");

  if (!wishlist.length) {
    container.innerHTML = `<div class="drawer-empty"><span>♡</span><h3>Your wishlist is empty</h3><p>Save products you love and find them here.</p></div>`;
    return;
  }

  container.innerHTML = wishlist.map(id => {
    const product = getProduct(id);
    if (!product) return "";
    return `
      <div class="wish-item">
        <img src="${product.image}" alt="${product.name}">
        <div><h4>${product.name}</h4><strong>${formatPrice(product.price)}</strong>
         <div class="quantity"><button data-add="${product.id}">Add to cart</button></div>
        </div>
        <button class="remove-item" data-wish="${product.id}" aria-label="Remove from wishlist">×</button>
      </div>`;
  }).join("");
}

function showProduct(id) {
  const product = getProduct(id);
  if (!product) return;

  $("#productModalContent").innerHTML = `
    <div class="modal-product">
      <img src="${product.image}" alt="${product.name}">
      <div>
        <span class="product-category">${product.category}</span>
        <h2>${product.name}</h2>
        <div class="rating-line"><span class="rating">${product.rating} ★</span><span class="review-count">${product.reviews.toLocaleString("en-IN")} ratings</span></div>
        <div class="modal-price"><strong>${formatPrice(product.price)}</strong><del>${formatPrice(product.oldPrice)}</del><span>${product.discount}% discount</span></div>
        <p>${product.description}</p>
        <p>✓ Free delivery on eligible orders<br>✓ Easy returns on eligible products<br>✓ Secure shopping experience</p>
        <button class="primary-btn" data-add="${product.id}" ${product.stock ? "" : "disabled"}>${product.stock ? "Add to cart" : "Currently unavailable"}</button>
        <button class="view-btn" data-wish="${product.id}" style="padding:12px;margin-left:7px">♡ Wishlist</button>
      </div>
    </div>`;

  openModal(productModal);
}

function openModal(modal) {
  closeDrawers();
  overlay.classList.add("show");
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModals() {
  [productModal, accountModal, locationModal, checkoutModal].forEach(modal => modal.classList.remove("open"));
  overlay.classList.remove("show");
  document.body.style.overflow = "";
}

function openDrawer(drawer) {
  closeModals();
  cartDrawer.classList.remove("open");
  wishlistDrawer.classList.remove("open");
  overlay.classList.add("show");
  drawer.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeDrawers() {
  cartDrawer.classList.remove("open");
  wishlistDrawer.classList.remove("open");
  overlay.classList.remove("show");
  document.body.style.overflow = "";
}

function closeEverything() {
  closeModals();
  closeDrawers();
}

function openCheckout() {
  if (!cart.length) {
    showToast("Your cart is empty.");
    return;
  }

  const subtotal = cart.reduce((sum, item) => {
    const product = getProduct(item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  $("#checkoutSummary").innerHTML = `<strong>Order subtotal: ${formatPrice(subtotal)}</strong><br><small>${cart.reduce((sum,item) => sum + item.quantity, 0)} item(s) in your cart. This is a demo checkout.</small>`;
  openModal(checkoutModal);
}

function startCountdown() {
  let remaining = 8 * 60 * 60 + 45 * 60 + 30;

  function tick() {
    const hours = Math.floor(remaining / 3600);
    const minutes = Math.floor((remaining % 3600) / 60);
    const seconds = remaining % 60;

    $("#hours").textContent = String(hours).padStart(2, "0");
    $("#minutes").textContent = String(minutes).padStart(2, "0");
    $("#seconds").textContent = String(seconds).padStart(2, "0");

    if (remaining > 0) remaining--;
    else remaining = 8 * 60 * 60 + 45 * 60 + 30;
  }

  tick();
  setInterval(tick, 1000);
}

/* Product actions: event delegation also works for dynamically rendered cards. */
document.addEventListener("click", event => {
  const addButton = event.target.closest("[data-add]");
  const wishButton = event.target.closest("[data-wish]");
  const viewButton = event.target.closest("[data-view]");
  const quantityButton = event.target.closest("[data-quantity]");
  const removeButton = event.target.closest("[data-remove]");
  const suggestionButton = event.target.closest("[data-suggestion]");
  const categoryButton = event.target.closest(".category-card, .nav-category");

  if (addButton) {
    addToCart(addButton.dataset.add);
    return;
  }

  if (wishButton) {
    toggleWishlist(wishButton.dataset.wish);
    return;
  }

  if (viewButton) {
    showProduct(viewButton.dataset.view);
    return;
  }

  if (quantityButton) {
    changeQuantity(quantityButton.dataset.quantity, Number(quantityButton.dataset.change));
    return;
  }

  if (removeButton) {
    removeFromCart(removeButton.dataset.remove);
    return;
  }

  if (suggestionButton) {
    const product = getProduct(suggestionButton.dataset.suggestion);
    if (product) {
      searchInput.value = product.name;
      currentSearch = product.name;
      selectedCategory = "all";
      suggestions.classList.remove("show");
      renderProducts();
      $("#products").scrollIntoView({behavior:"smooth"});
    }
    return;
  }

  if (categoryButton) {
    setCategory(categoryButton.dataset.category);
    return;
  }

  if (event.target.closest("[data-close]")) {
    closeEverything();
  }
});

$("#searchButton").addEventListener("click", searchProducts);
searchInput.addEventListener("input", updateSuggestions);
searchInput.addEventListener("keydown", event => {
  if (event.key === "Enter") searchProducts();
  if (event.key === "Escape") suggestions.classList.remove("show");
});

document.addEventListener("click", event => {
  if (!event.target.closest(".search-wrap")) suggestions.classList.remove("show");
});

$("#priceRange").addEventListener("input", event => {
  $("#priceValue").textContent = formatPrice(event.target.value);
  renderProducts();
});

["ratingFilter", "stockFilter", "discountFilter", "sortSelect"].forEach(id => {
  $("#" + id).addEventListener("change", renderProducts);
});

$$('input[name="filterCategory"]').forEach(input => {
  input.addEventListener("change", () => setCategory(input.value));
});

$("#clearFilters").addEventListener("click", resetFilters);
$("#resetSearch").addEventListener("click", resetFilters);
$("#bestSellerLink").addEventListener("click", () => {
  selectedCategory = "all";
  currentSearch = "";
  searchInput.value = "";
  renderProducts();
});

$("#cartButton").addEventListener("click", () => {
  renderCart();
  openDrawer(cartDrawer);
});

$("#wishlistButton").addEventListener("click", () => {
  renderWishlist();
  openDrawer(wishlistDrawer);
});

$("#accountButton").addEventListener("click", () => openModal(accountModal));
$("#locationButton").addEventListener("click", () => openModal(locationModal));
$("#checkoutButton").addEventListener("click", openCheckout);
overlay.addEventListener("click", closeEverything);

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeEverything();
});

$("#accountForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = $("#accountName").value.trim();
  if (!name) return;
  closeEverything();
  showToast(`Welcome, ${name}! This is a demo account.`);
  $("#accountButton").innerHTML = `<span>♙</span><small>${name.split(" ")[0]}</small>`;
});

$("#locationForm").addEventListener("submit", event => {
  event.preventDefault();
  const pin = $("#pincodeInput").value.trim();
  if (!/^\d{6}$/.test(pin)) {
    showToast("Please enter a valid 6-digit PIN code.");
    return;
  }
  $("#locationButton").textContent = `PIN ${pin} ▾`;
  closeEverything();
  showToast("Delivery PIN code updated.");
});

$("#newsletterForm").addEventListener("submit", event => {
  event.preventDefault();
  const email = $("#newsletterEmail").value.trim();
  if (!email) return;
  showToast("Thanks for subscribing to ShopNest!");
  event.target.reset();
});

$("#checkoutForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = $("#checkoutName").value.trim();
  const address = $("#checkoutAddress").value.trim();
  const pin = $("#checkoutPin").value.trim();

  if (!name || !address || !/^\d{6}$/.test(pin)) {
    showToast("Please complete all delivery details correctly.");
    return;
  }

  const orderNumber = "SN" + Date.now().toString().slice(-8);
  cart = [];
  saveData();
  updateCounts();
  renderCart();
  event.target.reset();
  closeEverything();
  showToast(`Demo order ${orderNumber} placed successfully. Thank you, ${name}!`);
});

$("#mobileMenu").addEventListener("click", () => {
  $("#categoryNav").scrollIntoView({behavior:"smooth", block:"start"});
});

function initializeShopNest() {
  renderProducts();
  renderBestSellers();
  renderCart();
  renderWishlist();
  updateCounts();
  startCountdown();
}

initializeShopNest();
