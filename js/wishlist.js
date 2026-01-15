// ==========================================
// WISHLIST PAGE FUNCTIONALITY
// ==========================================

// Product data (same as in other files)
const allProductsData = {
  1: {
    id: 1,
    name: "Classic Cotton T-Shirt",
    category: "Men",
    price: 2499,
    originalPrice: 3299,
    rating: 4.5,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    badge: "Sale",
    inStock: true
  },
  2: {
    id: 2,
    name: "Elegant Summer Dress",
    category: "Women",
    price: 6599,
    originalPrice: null,
    rating: 4.8,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
    badge: "New",
    inStock: true
  },
  3: {
    id: 3,
    name: "Denim Jacket",
    category: "Unisex",
    price: 7499,
    originalPrice: 9999,
    rating: 4.6,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    badge: "Sale",
    inStock: true
  },
  4: {
    id: 4,
    name: "Kids Colorful Hoodie",
    category: "Kids",
    price: 2899,
    originalPrice: null,
    rating: 4.7,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=400&fit=crop",
    badge: "New",
    inStock: true
  },
  5: {
    id: 5,
    name: "Formal Blazer",
    category: "Men",
    price: 12499,
    originalPrice: 16599,
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=400&fit=crop",
    badge: "Sale",
    inStock: true
  },
  6: {
    id: 6,
    name: "Casual Sneakers",
    category: "Unisex",
    price: 5799,
    originalPrice: null,
    rating: 4.4,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    badge: null,
    inStock: true
  },
  7: {
    id: 7,
    name: "Leather Handbag",
    category: "Women",
    price: 10799,
    originalPrice: 14999,
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
    badge: "Sale",
    inStock: true
  },
  8: {
    id: 8,
    name: "Sports Cap",
    category: "Accessories",
    price: 1649,
    originalPrice: null,
    rating: 4.3,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
    badge: null,
    inStock: false
  }
};

// ==========================================
// INITIALIZE PAGE
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  loadWishlist();
  setupEventListeners();
});

// ==========================================
// LOAD WISHLIST
// ==========================================

function loadWishlist() {
  const wishlistIds = JSON.parse(localStorage.getItem('wishlist')) || [];
  const wishlistContent = document.getElementById('wishlist-content');
  const emptyWishlist = document.getElementById('empty-wishlist');
  
  if (wishlistIds.length === 0) {
    wishlistContent.style.display = 'none';
    emptyWishlist.style.display = 'block';
    return;
  }
  
  wishlistContent.style.display = 'grid';
  emptyWishlist.style.display = 'none';
  wishlistContent.innerHTML = '<div class="loading">Loading wishlist...</div>';
  
  setTimeout(() => {
    wishlistContent.innerHTML = '';
    
    wishlistIds.forEach(productId => {
      const product = allProductsData[productId];
      if (product) {
        const wishlistItem = createWishlistItem(product);
        wishlistContent.appendChild(wishlistItem);
      }
    });
  }, 300);
}

// ==========================================
// CREATE WISHLIST ITEM
// ==========================================

function createWishlistItem(product) {
  const item = document.createElement('div');
  item.className = 'wishlist-item';
  
  const stars = '⭐'.repeat(Math.floor(product.rating));
  const hasDiscount = product.originalPrice !== null;
  
  item.innerHTML = `
    <div class="wishlist-item-image">
      <img src="${product.image}" alt="${product.name}">
      <button class="remove-wishlist-btn" data-id="${product.id}">✕</button>
      ${product.badge ? `<span class="wishlist-badge ${product.badge.toLowerCase()}">${product.badge}</span>` : ''}
      <span class="stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}">
        ${product.inStock ? 'In Stock' : 'Out of Stock'}
      </span>
    </div>
    <div class="wishlist-item-info">
      <div class="wishlist-item-category">${product.category}</div>
      <h3 class="wishlist-item-name">${product.name}</h3>
      <div class="wishlist-item-rating">
        <span class="stars">${stars}</span>
        <span class="rating-count">(${product.reviews})</span>
      </div>
      <div class="wishlist-item-price">
        <span class="current-price">₹${product.price.toLocaleString('en-IN')}</span>
        ${hasDiscount ? `<span class="original-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
      </div>
      <div class="wishlist-item-actions">
        <button class="btn-add-to-cart" data-id="${product.id}" ${!product.inStock ? 'disabled' : ''}>
          ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
        <button class="btn-view-product" data-id="${product.id}">View</button>
      </div>
    </div>
  `;
  
  // Event listeners
  const removeBtn = item.querySelector('.remove-wishlist-btn');
  const addToCartBtn = item.querySelector('.btn-add-to-cart');
  const viewBtn = item.querySelector('.btn-view-product');
  
  removeBtn.addEventListener('click', () => removeFromWishlist(product.id));
  
  if (product.inStock) {
    addToCartBtn.addEventListener('click', () => addToCart(product));
  }
  
  viewBtn.addEventListener('click', () => {
    window.location.href = `product-detail.html?id=${product.id}`;
  });
  
  return item;
}

// ==========================================
// REMOVE FROM WISHLIST
// ==========================================

function removeFromWishlist(productId) {
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  wishlist = wishlist.filter(id => id !== productId);
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  
  showNotification('Removed from wishlist', 'info');
  loadWishlist();
}

// ==========================================
// ADD TO CART
// ==========================================

function addToCart(product) {
  if (typeof cartManager !== 'undefined') {
    cartManager.addToCart(product);
    showNotification('Added to cart!', 'success');
  } else {
    // Fallback if cartManager is not available
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    showNotification('Added to cart!', 'success');
    
    // Update cart count
    updateCartCount();
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
// SETUP EVENT LISTENERS
// ==========================================

function setupEventListeners() {
  // Clear wishlist button
  const clearBtn = document.getElementById('clear-wishlist');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to clear your entire wishlist?')) {
        localStorage.setItem('wishlist', JSON.stringify([]));
        showNotification('Wishlist cleared', 'info');
        loadWishlist();
      }
    });
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