// ==========================================
// PRODUCT DETAIL PAGE FUNCTIONALITY
// ==========================================

// Sample product data with INR prices and real images
const productsData = {
  1: {
    id: 1,
    name: "Classic Cotton T-Shirt",
    category: "Men",
    type: "Tops",
    price: 2499,
    originalPrice: 3299,
    rating: 4.5,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
    badge: "Sale",
    inStock: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Blue", hex: "#0000FF" },
      { name: "Gray", hex: "#808080" }
    ],
    description: "Premium quality cotton t-shirt perfect for everyday wear. Soft, comfortable, and durable fabric that maintains its shape wash after wash.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600&h=600&fit=crop"
    ]
  },
  2: {
    id: 2,
    name: "Elegant Summer Dress",
    category: "Women",
    type: "Dresses",
    price: 6599,
    originalPrice: null,
    rating: 4.8,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=600&fit=crop",
    badge: "New",
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Red", hex: "#FF0000" },
      { name: "Pink", hex: "#FFC0CB" },
      { name: "Blue", hex: "#0000FF" },
      { name: "White", hex: "#FFFFFF" }
    ],
    description: "Beautiful summer dress with elegant design. Perfect for casual outings and special occasions. Lightweight and breathable fabric.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=600&h=600&fit=crop"
    ]
  },
  3: {
    id: 3,
    name: "Denim Jacket",
    category: "Unisex",
    type: "Outerwear",
    price: 7499,
    originalPrice: 9999,
    rating: 4.6,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop",
    badge: "Sale",
    inStock: true,
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    colors: [
      { name: "Blue", hex: "#0000FF" },
      { name: "Black", hex: "#000000" }
    ],
    description: "Classic denim jacket that never goes out of style. Durable construction with comfortable fit. Perfect layering piece for any season.",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1543076659-9380cdf10613?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=600&fit=crop"
    ]
  },
  4: {
    id: 4,
    name: "Kids Colorful Hoodie",
    category: "Kids",
    type: "Tops",
    price: 2899,
    originalPrice: null,
    rating: 4.7,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&h=600&fit=crop",
    badge: "New",
    inStock: true,
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Red", hex: "#FF0000" },
      { name: "Blue", hex: "#0000FF" },
      { name: "Green", hex: "#00FF00" },
      { name: "Yellow", hex: "#FFFF00" }
    ],
    description: "Comfortable and colorful hoodie for kids. Soft fabric perfect for playtime and casual wear.",
    images: [
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&h=600&fit=crop"
    ]
  },
  5: {
    id: 5,
    name: "Formal Blazer",
    category: "Men",
    type: "Outerwear",
    price: 12499,
    originalPrice: 16599,
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=600&fit=crop",
    badge: "Sale",
    inStock: true,
    sizes: ["M", "L", "XL", "XXL", "3XL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Gray", hex: "#808080" },
      { name: "Navy", hex: "#000080" }
    ],
    description: "Professional blazer perfect for business meetings and formal occasions. Tailored fit with premium fabric.",
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&h=600&fit=crop"
    ]
  },
  6: {
    id: 6,
    name: "Casual Sneakers",
    category: "Unisex",
    type: "Footwear",
    price: 5799,
    originalPrice: null,
    rating: 4.4,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop",
    badge: null,
    inStock: true,
    sizes: ["6", "7", "8", "9", "10", "11"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Black", hex: "#000000" },
      { name: "Red", hex: "#FF0000" },
      { name: "Blue", hex: "#0000FF" }
    ],
    description: "Comfortable casual sneakers perfect for everyday wear. Cushioned sole and breathable material.",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop"
    ]
  },
  7: {
    id: 7,
    name: "Leather Handbag",
    category: "Women",
    type: "Accessories",
    price: 10799,
    originalPrice: 14999,
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=600&fit=crop",
    badge: "Sale",
    inStock: true,
    sizes: [],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Brown", hex: "#8B4513" },
      { name: "Red", hex: "#FF0000" }
    ],
    description: "Premium leather handbag with spacious interior. Perfect for work and casual outings.",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&h=600&fit=crop"
    ]
  },
  8: {
    id: 8,
    name: "Sports Cap",
    category: "Accessories",
    type: "Accessories",
    price: 1649,
    originalPrice: null,
    rating: 4.3,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=600&fit=crop",
    badge: null,
    inStock: true,
    sizes: [],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Red", hex: "#FF0000" },
      { name: "Blue", hex: "#0000FF" }
    ],
    description: "Comfortable sports cap perfect for outdoor activities. Adjustable strap for perfect fit.",
    images: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?w=600&h=600&fit=crop"
    ]
  }
};

// Related products
const relatedProductsData = [
  {
    id: 4,
    name: "Kids Colorful Hoodie",
    category: "Kids",
    price: 2899,
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=400&fit=crop"
  },
  {
    id: 5,
    name: "Formal Blazer",
    category: "Men",
    price: 12499,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=400&fit=crop"
  },
  {
    id: 6,
    name: "Casual Sneakers",
    category: "Unisex",
    price: 5799,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop"
  },
  {
    id: 7,
    name: "Leather Handbag",
    category: "Women",
    price: 10799,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop"
  }
];

// State
let currentProduct = null;
let selectedColor = null;
let selectedSize = null;
let quantity = 1;

// ==========================================
// INITIALIZE PAGE
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  loadProduct();
  setupEventListeners();
  loadRelatedProducts();
});

// ==========================================
// LOAD PRODUCT
// ==========================================

function loadProduct() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id')) || 1;
  
  currentProduct = productsData[productId];
  
  if (!currentProduct) {
    window.location.href = 'products.html';
    return;
  }
  
  renderProduct();
}

// ==========================================
// RENDER PRODUCT
// ==========================================

function renderProduct() {
  // Update breadcrumb
  document.getElementById('breadcrumb-category').textContent = currentProduct.category;
  document.getElementById('breadcrumb-product').textContent = currentProduct.name;
  
  // Main image
  const mainImage = document.getElementById('main-image');
  mainImage.innerHTML = `
    <button class="wishlist-btn-large" id="wishlist-btn-large">♡</button>
    <span class="product-badge ${currentProduct.badge ? currentProduct.badge.toLowerCase() : ''} ${currentProduct.badge ? 'show' : ''}" id="product-badge">${currentProduct.badge || ''}</span>
    <img src="${currentProduct.images[0]}" alt="${currentProduct.name}" style="width: 100%; height: 100%; object-fit: cover;">
  `;
  
  // Thumbnails
  const thumbnailsContainer = document.getElementById('thumbnail-images');
  thumbnailsContainer.innerHTML = '';
  currentProduct.images.forEach((img, index) => {
    const thumbnail = document.createElement('div');
    thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
    thumbnail.innerHTML = `<img src="${img}" alt="Thumbnail ${index + 1}" style="width: 100%; height: 100%; object-fit: cover;">`;
    thumbnail.addEventListener('click', () => {
      document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
      thumbnail.classList.add('active');
      mainImage.querySelector('img').src = img;
    });
    thumbnailsContainer.appendChild(thumbnail);
  });
  
  // Category tag
  document.getElementById('product-category-tag').textContent = currentProduct.category;
  
  // Title
  document.getElementById('product-title').textContent = currentProduct.name;
  
  // Rating
  const stars = '⭐'.repeat(Math.floor(currentProduct.rating));
  document.getElementById('rating-stars').textContent = stars;
  document.getElementById('rating-text').textContent = currentProduct.rating.toFixed(1);
  document.getElementById('reviews-link').textContent = `(${currentProduct.reviews} reviews)`;
  
  // Price
  document.getElementById('current-price').textContent = `₹${currentProduct.price.toLocaleString('en-IN')}`;
  
  if (currentProduct.originalPrice) {
    document.getElementById('original-price').textContent = `₹${currentProduct.originalPrice.toLocaleString('en-IN')}`;
    document.getElementById('original-price').style.display = 'inline';
    
    const discount = Math.round(((currentProduct.originalPrice - currentProduct.price) / currentProduct.originalPrice) * 100);
    document.getElementById('discount-badge').textContent = `-${discount}%`;
    document.getElementById('discount-badge').style.display = 'inline-block';
  } else {
    document.getElementById('original-price').style.display = 'none';
    document.getElementById('discount-badge').style.display = 'none';
  }
  
  // Description
  document.getElementById('product-description').innerHTML = `<p>${currentProduct.description}</p>`;
  
  // Colors
  renderColors();
  
  // Sizes
  renderSizes();
  
  // Review score
  document.getElementById('review-score').textContent = currentProduct.rating.toFixed(1);
  document.getElementById('review-stars').textContent = stars;
  document.getElementById('review-count').textContent = `Based on ${currentProduct.reviews} reviews`;
  
  // Check wishlist status
  updateWishlistButton();
}

// ==========================================
// RENDER COLORS
// ==========================================

function renderColors() {
  const colorSelector = document.getElementById('color-selector');
  colorSelector.innerHTML = '';
  
  currentProduct.colors.forEach((color, index) => {
    const colorBtn = document.createElement('button');
    colorBtn.className = 'color-option-btn';
    colorBtn.style.backgroundColor = color.hex;
    colorBtn.title = color.name;
    
    if (color.hex === '#FFFFFF') {
      colorBtn.style.border = '3px solid #ddd';
    }
    
    colorBtn.addEventListener('click', () => {
      document.querySelectorAll('.color-option-btn').forEach(btn => btn.classList.remove('selected'));
      colorBtn.classList.add('selected');
      selectedColor = color.name;
      document.getElementById('selected-color').textContent = color.name;
    });
    
    colorSelector.appendChild(colorBtn);
    
    // Select first color by default
    if (index === 0) {
      colorBtn.click();
    }
  });
}

// ==========================================
// RENDER SIZES
// ==========================================

function renderSizes() {
  const sizeSelector = document.getElementById('size-selector');
  sizeSelector.innerHTML = '';
  
  if (currentProduct.sizes.length === 0) {
    sizeSelector.innerHTML = '<p style="color: var(--text-secondary);">One Size Fits All</p>';
    selectedSize = 'One Size';
    document.getElementById('selected-size').textContent = 'One Size';
    return;
  }
  
  currentProduct.sizes.forEach((size, index) => {
    const sizeBtn = document.createElement('button');
    sizeBtn.className = 'size-option-btn';
    sizeBtn.textContent = size;
    
    sizeBtn.addEventListener('click', () => {
      document.querySelectorAll('.size-option-btn').forEach(btn => btn.classList.remove('selected'));
      sizeBtn.classList.add('selected');
      selectedSize = size;
      document.getElementById('selected-size').textContent = size;
    });
    
    sizeSelector.appendChild(sizeBtn);
    
    // Select first size by default
    if (index === 0) {
      sizeBtn.click();
    }
  });
}

// ==========================================
// SETUP EVENT LISTENERS
// ==========================================

function setupEventListeners() {
  // Quantity controls
  document.getElementById('qty-decrease').addEventListener('click', () => {
    const input = document.getElementById('qty-input');
    if (quantity > 1) {
      quantity--;
      input.value = quantity;
    }
  });
  
  document.getElementById('qty-increase').addEventListener('click', () => {
    const input = document.getElementById('qty-input');
    if (quantity < 10) {
      quantity++;
      input.value = quantity;
    }
  });
  
  document.getElementById('qty-input').addEventListener('change', (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value) || value < 1) value = 1;
    if (value > 10) value = 10;
    quantity = value;
    e.target.value = value;
  });
  
  // Add to cart
  document.getElementById('btn-add-to-cart').addEventListener('click', handleAddToCart);
  
  // Buy now
  document.getElementById('btn-buy-now').addEventListener('click', handleBuyNow);
  
  // Wishlist
  document.getElementById('wishlist-btn-large').addEventListener('click', toggleWishlist);
  
  // Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabName = btn.dataset.tab;
      switchTab(tabName);
    });
  });
  
  // Share buttons
  document.querySelectorAll('.share-btn').forEach(btn => {
    btn.addEventListener('click', handleShare);
  });
  
  // Write review
  document.getElementById('write-review-btn').addEventListener('click', () => {
    alert('Review form would open here');
  });
}

// ==========================================
// HANDLE ADD TO CART
// ==========================================

function handleAddToCart() {
  if (!selectedColor || !selectedSize) {
    showNotification('Please select color and size', 'error');
    return;
  }
  
  const cartItem = {
    ...currentProduct,
    selectedColor,
    selectedSize,
    quantity
  };
  
  if (typeof cartManager !== 'undefined') {
    cartManager.addToCart(cartItem);
    showNotification(`Added ${quantity} item(s) to cart!`, 'success');
  } else {
    showNotification('Added to cart!', 'success');
  }
}

// ==========================================
// HANDLE BUY NOW
// ==========================================

function handleBuyNow() {
  if (!selectedColor || !selectedSize) {
    showNotification('Please select color and size', 'error');
    return;
  }
  
  handleAddToCart();
  
  // Redirect to cart
  setTimeout(() => {
    window.location.href = 'cart.html';
  }, 500);
}

// ==========================================
// WISHLIST FUNCTIONALITY
// ==========================================

function toggleWishlist() {
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const index = wishlist.indexOf(currentProduct.id);
  
  if (index > -1) {
    wishlist.splice(index, 1);
    showNotification('Removed from wishlist', 'info');
  } else {
    wishlist.push(currentProduct.id);
    showNotification('Added to wishlist!', 'success');
  }
  
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  updateWishlistButton();
}

function updateWishlistButton() {
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const btn = document.getElementById('wishlist-btn-large');
  
  if (wishlist.includes(currentProduct.id)) {
    btn.classList.add('active');
    btn.textContent = '❤️';
  } else {
    btn.classList.remove('active');
    btn.textContent = '♡';
  }
}

// ==========================================
// TAB SWITCHING
// ==========================================

function switchTab(tabName) {
  // Update buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
  
  // Update panels
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  document.getElementById(`tab-${tabName}`).classList.add('active');
}

// ==========================================
// SHARE FUNCTIONALITY
// ==========================================

function handleShare(e) {
  const btn = e.currentTarget;
  const title = btn.getAttribute('title');
  
  if (title.includes('Link')) {
    // Copy link
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      showNotification('Link copied to clipboard!', 'success');
    });
  } else {
    showNotification(`Share on ${title.replace('Share on ', '')} - Coming soon!`, 'info');
  }
}

// ==========================================
// LOAD RELATED PRODUCTS
// ==========================================

function loadRelatedProducts() {
  const grid = document.getElementById('related-products-grid');
  
  relatedProductsData.forEach(product => {
    const card = createRelatedProductCard(product);
    grid.appendChild(card);
  });
}

function createRelatedProductCard(product) {
  const card = document.createElement('a');
  card.href = `product-detail.html?id=${product.id}`;
  card.className = 'product-card';
  
  card.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
    </div>
    <div class="product-info">
      <div class="product-category">${product.category}</div>
      <h3 class="product-name">${product.name}</h3>
      <div class="product-price">
        <span class="current-price">₹${product.price.toLocaleString('en-IN')}</span>
      </div>
    </div>
  `;
  
  return card;
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