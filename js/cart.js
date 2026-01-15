// ==========================================
// CART PAGE FUNCTIONALITY
// ==========================================

// Product data (same as in other files)
const allProductsData = {
  1: {
    id: 1,
    name: "Classic Cotton T-Shirt",
    category: "Men",
    price: 2499,
    originalPrice: 3299,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    inStock: true
  },
  2: {
    id: 2,
    name: "Elegant Summer Dress",
    category: "Women",
    price: 6599,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
    inStock: true
  },
  3: {
    id: 3,
    name: "Denim Jacket",
    category: "Unisex",
    price: 7499,
    originalPrice: 9999,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    inStock: true
  },
  4: {
    id: 4,
    name: "Kids Colorful Hoodie",
    category: "Kids",
    price: 2899,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=400&fit=crop",
    inStock: true
  },
  5: {
    id: 5,
    name: "Formal Blazer",
    category: "Men",
    price: 12499,
    originalPrice: 16599,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=400&fit=crop",
    inStock: true
  },
  6: {
    id: 6,
    name: "Casual Sneakers",
    category: "Unisex",
    price: 5799,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    inStock: true
  },
  7: {
    id: 7,
    name: "Leather Handbag",
    category: "Women",
    price: 10799,
    originalPrice: 14999,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
    inStock: true
  },
  8: {
    id: 8,
    name: "Sports Cap",
    category: "Accessories",
    price: 1649,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
    inStock: true
  }
};

// Promo codes
const promoCodes = {
  'SAVE10': { discount: 10, type: 'percentage' },
  'SAVE500': { discount: 500, type: 'fixed' },
  'FIRST20': { discount: 20, type: 'percentage' },
  'WELCOME': { discount: 15, type: 'percentage' }
};

let appliedPromo = null;

// ==========================================
// INITIALIZE PAGE
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  setupEventListeners();
});

// ==========================================
// LOAD CART
// ==========================================

function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItemsContainer = document.getElementById('cart-items');
  const emptyCart = document.getElementById('empty-cart');
  const cartSummary = document.getElementById('cart-summary');
  
  if (cart.length === 0) {
    cartItemsContainer.style.display = 'none';
    emptyCart.style.display = 'block';
    cartSummary.style.display = 'none';
    return;
  }
  
  cartItemsContainer.style.display = 'flex';
  emptyCart.style.display = 'none';
  cartSummary.style.display = 'block';
  cartItemsContainer.innerHTML = '<div class="loading">Loading cart...</div>';
  
  setTimeout(() => {
    cartItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
      const product = allProductsData[item.id];
      if (product) {
        const cartItem = createCartItem({ ...product, ...item });
        cartItemsContainer.appendChild(cartItem);
      }
    });
    
    updateCartSummary();
  }, 300);
}

// ==========================================
// CREATE CART ITEM
// ==========================================

function createCartItem(item) {
  const cartItem = document.createElement('div');
  cartItem.className = 'cart-item';
  cartItem.dataset.id = item.id;
  
  const hasDiscount = item.originalPrice !== null;
  
  cartItem.innerHTML = `
    <div class="cart-item-image">
      <img src="${item.image}" alt="${item.name}">
    </div>
    <div class="cart-item-details">
      <h3 class="cart-item-name">${item.name}</h3>
      <div class="cart-item-category">${item.category}</div>
      <div class="cart-item-options">
        ${item.selectedColor ? `
          <div class="cart-item-option">
            <span>Color:</span>
            <div class="color-indicator" style="background-color: ${getColorHex(item.selectedColor)}"></div>
            <span>${item.selectedColor}</span>
          </div>
        ` : ''}
        ${item.selectedSize ? `
          <div class="cart-item-option">
            <span>Size:</span>
            <strong>${item.selectedSize}</strong>
          </div>
        ` : ''}
      </div>
      <div class="cart-item-price">
        ₹${item.price.toLocaleString('en-IN')}
        ${hasDiscount ? `<span class="cart-item-original-price">₹${item.originalPrice.toLocaleString('en-IN')}</span>` : ''}
      </div>
    </div>
    <div class="cart-item-actions">
      <button class="remove-item-btn" data-id="${item.id}">✕</button>
      <div class="quantity-controls">
        <button class="qty-btn qty-decrease" data-id="${item.id}">−</button>
        <span class="qty-display">${item.quantity}</span>
        <button class="qty-btn qty-increase" data-id="${item.id}">+</button>
      </div>
    </div>
  `;
  
  // Event listeners
  const removeBtn = cartItem.querySelector('.remove-item-btn');
  const decreaseBtn = cartItem.querySelector('.qty-decrease');
  const increaseBtn = cartItem.querySelector('.qty-increase');
  
  removeBtn.addEventListener('click', () => removeFromCart(item.id));
  decreaseBtn.addEventListener('click', () => updateQuantity(item.id, -1));
  increaseBtn.addEventListener('click', () => updateQuantity(item.id, 1));
  
  return cartItem;
}

// ==========================================
// GET COLOR HEX
// ==========================================

function getColorHex(colorName) {
  const colors = {
    'Black': '#000000',
    'White': '#FFFFFF',
    'Red': '#FF0000',
    'Blue': '#0000FF',
    'Green': '#00FF00',
    'Yellow': '#FFFF00',
    'Pink': '#FFC0CB',
    'Gray': '#808080',
    'Brown': '#8B4513',
    'Navy': '#000080'
  };
  return colors[colorName] || '#CCCCCC';
}

// ==========================================
// UPDATE QUANTITY
// ==========================================

function updateQuantity(productId, change) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const item = cart.find(i => i.id === productId);
  
  if (item) {
    item.quantity += change;
    
    if (item.quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    if (item.quantity > 10) {
      item.quantity = 10;
      showNotification('Maximum quantity is 10', 'info');
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
    updateCartCount();
  }
}

// ==========================================
// REMOVE FROM CART
// ==========================================

function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  
  showNotification('Item removed from cart', 'info');
  loadCart();
  updateCartCount();
}

// ==========================================
// UPDATE CART SUMMARY
// ==========================================

function updateCartSummary() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Calculate subtotal
  let subtotal = 0;
  let totalItems = 0;
  
  cart.forEach(item => {
    subtotal += item.price * item.quantity;
    totalItems += item.quantity;
  });
  
  // Calculate shipping
  const shipping = subtotal >= 4000 ? 0 : 200;
  
  // Calculate discount
  let discount = 0;
  if (appliedPromo) {
    if (appliedPromo.type === 'percentage') {
      discount = Math.round((subtotal * appliedPromo.discount) / 100);
    } else {
      discount = appliedPromo.discount;
    }
  }
  
  // Calculate total
  const total = subtotal + shipping - discount;
  
  // Update UI
  document.getElementById('items-count').textContent = totalItems;
  document.getElementById('subtotal').textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  document.getElementById('shipping').textContent = shipping === 0 ? 'FREE' : `₹${shipping.toLocaleString('en-IN')}`;
  document.getElementById('total').textContent = `₹${total.toLocaleString('en-IN')}`;
  
  // Show/hide discount row
  const discountRow = document.getElementById('discount-row');
  if (discount > 0) {
    discountRow.style.display = 'flex';
    document.getElementById('discount').textContent = `-₹${discount.toLocaleString('en-IN')}`;
  } else {
    discountRow.style.display = 'none';
  }
}

// ==========================================
// UPDATE CART COUNT
// ==========================================

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCountElement = document.querySelector('.cart-count');
  
  if (cartCountElement) {
    cartCountElement.textContent = totalItems;
    cartCountElement.style.display = totalItems > 0 ? 'flex' : 'none';
  }
}

// ==========================================
// APPLY PROMO CODE
// ==========================================

function applyPromoCode() {
  const promoInput = document.getElementById('promo-input');
  const promoMessage = document.getElementById('promo-message');
  const code = promoInput.value.trim().toUpperCase();
  
  if (!code) {
    promoMessage.textContent = 'Please enter a promo code';
    promoMessage.className = 'promo-message error';
    return;
  }
  
  if (promoCodes[code]) {
    appliedPromo = promoCodes[code];
    promoMessage.textContent = `Promo code applied! You saved ${appliedPromo.type === 'percentage' ? appliedPromo.discount + '%' : '₹' + appliedPromo.discount}`;
    promoMessage.className = 'promo-message success';
    updateCartSummary();
    showNotification('Promo code applied successfully!', 'success');
  } else {
    promoMessage.textContent = 'Invalid promo code';
    promoMessage.className = 'promo-message error';
  }
}

// ==========================================
// CHECKOUT
// ==========================================

function handleCheckout() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  if (cart.length === 0) {
    showNotification('Your cart is empty', 'error');
    return;
  }
  
  // Check if user is logged in
  const session = localStorage.getItem('userSession') || sessionStorage.getItem('userSession');
  
  if (!session) {
    if (confirm('Please sign in to continue with checkout. Go to sign in page?')) {
      window.location.href = 'signin.html';
    }
    return;
  }
  
  // In a real app, this would redirect to checkout page
  alert('Proceeding to checkout...\n\nIn a real application, this would take you to the checkout page where you can enter shipping and payment information.');
  
  // For demo purposes, we'll just show a success message
  // localStorage.setItem('cart', JSON.stringify([]));
  // showNotification('Order placed successfully!', 'success');
  // setTimeout(() => window.location.href = 'index.html', 2000);
}

// ==========================================
// SETUP EVENT LISTENERS
// ==========================================

function setupEventListeners() {
  // Apply promo code
  const applyPromoBtn = document.getElementById('apply-promo');
  if (applyPromoBtn) {
    applyPromoBtn.addEventListener('click', applyPromoCode);
  }
  
  const promoInput = document.getElementById('promo-input');
  if (promoInput) {
    promoInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        applyPromoCode();
      }
    });
  }
  
  // Checkout button
  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', handleCheckout);
  }
  
  // Cart button
  const cartBtn = document.getElementById('cart-btn');
  if (cartBtn) {
    cartBtn.addEventListener('click', () => {
      window.location.href = 'cart.html';
    });
  }
  
  // Wishlist button
  const wishlistBtn = document.getElementById('wishlist-btn');
  if (wishlistBtn) {
    wishlistBtn.addEventListener('click', () => {
      window.location.href = 'wishlist.html';
    });
  }
  
  // Account button
  const accountBtn = document.getElementById('account-btn');
  if (accountBtn) {
    accountBtn.addEventListener('click', () => {
      const session = localStorage.getItem('userSession') || sessionStorage.getItem('userSession');
      if (session) {
        const userData = JSON.parse(session);
        alert(`Welcome, ${userData.name}!`);
      } else {
        window.location.href = 'signin.html';
      }
    });
  }
  
  // Search
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
          window.location.href = `products.html?search=${encodeURIComponent(query)}`;
        }
      }
    });
  }
}

// ==========================================
// NOTIFICATION SYSTEM
// ==========================================

function showNotification(message, type = 'info') {
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();
  
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background-color: ${type === 'success' ? '#66BB6A' : type === 'error' ? '#EF5350' : '#42A5F5'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    z-index: 10000;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Initialize cart count on page load
updateCartCount();