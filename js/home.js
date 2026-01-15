// ==========================================
// HOMEPAGE FUNCTIONALITY
// ==========================================

// Sample product data with INR prices and real product images
const featuredProducts = [
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
    id: 8,
    name: "Sports Cap",
    category: "Accessories",
    price: 1649,
    originalPrice: null,
    rating: 4.3,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
    badge: null,
    inStock: true
  }
];

// ==========================================
// INITIALIZE PAGE
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  loadFeaturedProducts();
  setupEventListeners();
  checkUserSession();
});

// ==========================================
// LOAD FEATURED PRODUCTS
// ==========================================

function loadFeaturedProducts() {
  const productGrid = document.getElementById('featured-products');
  
  if (!productGrid) return;
  
  productGrid.innerHTML = '<div class="loading">Loading products...</div>';
  
  // Simulate API delay
  setTimeout(() => {
    productGrid.innerHTML = '';
    
    featuredProducts.forEach(product => {
      const productCard = createProductCard(product);
      productGrid.appendChild(productCard);
    });
  }, 500);
}

// ==========================================
// CREATE PRODUCT CARD
// ==========================================

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  
  const stars = '⭐'.repeat(Math.floor(product.rating));
  const hasDiscount = product.originalPrice !== null;
  
  card.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
      ${product.badge ? `<span class="product-badge ${product.badge.toLowerCase()}">${product.badge}</span>` : ''}
      <button class="wishlist-btn-product" data-id="${product.id}">♡</button>
    </div>
    <div class="product-info">
      <div class="product-category">${product.category}</div>
      <h3 class="product-name">${product.name}</h3>
      <div class="product-rating">
        <span class="stars">${stars}</span>
        <span class="rating-count">(${product.reviews})</span>
      </div>
      <div class="product-price">
        <span class="current-price">₹${product.price.toLocaleString('en-IN')}</span>
        ${hasDiscount ? `<span class="original-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
      </div>
      <div class="product-actions">
        <button class="btn-add-cart" data-id="${product.id}">Add to Cart</button>
        <button class="btn-quick-view" data-id="${product.id}">View</button>
      </div>
    </div>
  `;
  
  // Add event listeners
  const addToCartBtn = card.querySelector('.btn-add-cart');
  const quickViewBtn = card.querySelector('.btn-quick-view');
  const wishlistBtn = card.querySelector('.wishlist-btn-product');
  
  addToCartBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    addToCart(product);
  });
  
  quickViewBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    window.location.href = `product-detail.html?id=${product.id}`;
  });
  
  wishlistBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleWishlist(product.id, wishlistBtn);
  });
  
  // Make entire card clickable
  card.addEventListener('click', () => {
    window.location.href = `product-detail.html?id=${product.id}`;
  });
  
  return card;
}

// ==========================================
// ADD TO CART
// ==========================================

function addToCart(product) {
  if (typeof cartManager !== 'undefined') {
    cartManager.addToCart(product);
    showNotification('Added to cart!', 'success');
  } else {
    console.error('Cart manager not initialized');
  }
}

// ==========================================
// WISHLIST FUNCTIONALITY
// ==========================================

function toggleWishlist(productId, button) {
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const index = wishlist.indexOf(productId);
  
  if (index > -1) {
    wishlist.splice(index, 1);
    button.classList.remove('active');
    button.textContent = '♡';
    showNotification('Removed from wishlist', 'info');
  } else {
    wishlist.push(productId);
    button.classList.add('active');
    button.textContent = '❤️';
    showNotification('Added to wishlist!', 'success');
  }
  
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// ==========================================
// SETUP EVENT LISTENERS
// ==========================================

function setupEventListeners() {
  // Newsletter form
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', handleNewsletterSubmit);
  }
  
  // Search functionality
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
  
  // Account button
  const accountBtn = document.getElementById('account-btn');
  if (accountBtn) {
    accountBtn.addEventListener('click', () => {
      const session = checkUserSession();
      if (session) {
        alert(`Welcome, ${session.name}!`);
      } else {
        window.location.href = 'signin.html';
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
}

// ==========================================
// NEWSLETTER SUBMIT
// ==========================================

function handleNewsletterSubmit(e) {
  e.preventDefault();
  
  const emailInput = document.getElementById('newsletter-email');
  const email = emailInput.value.trim();
  
  if (!email) return;
  
  // Simulate API call
  const button = e.target.querySelector('button');
  button.disabled = true;
  button.textContent = 'Subscribing...';
  
  setTimeout(() => {
    showNotification('Successfully subscribed to newsletter!', 'success');
    emailInput.value = '';
    button.disabled = false;
    button.textContent = 'Subscribe';
  }, 1000);
}

// ==========================================
// CHECK USER SESSION
// ==========================================

function checkUserSession() {
  const session = localStorage.getItem('userSession') || sessionStorage.getItem('userSession');
  
  if (session) {
    try {
      return JSON.parse(session);
    } catch (e) {
      return null;
    }
  }
  
  return null;
}

// ==========================================
// NOTIFICATION SYSTEM
// ==========================================

function showNotification(message, type = 'info') {
  const existing = document.querySelector('.notification');
  if (existing) {
    existing.remove();
  }
  
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

// Add animation styles
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);