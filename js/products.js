// ==========================================
// PRODUCTS PAGE FUNCTIONALITY
// ==========================================

// Extended product data with INR prices and real images
const allProducts = [
  {
    id: 1,
    name: "Classic Cotton T-Shirt",
    category: "men",
    type: "tops",
    price: 2499,
    originalPrice: 3299,
    rating: 4.5,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    badge: "Sale",
    inStock: true,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["black", "white", "blue", "gray"]
  },
  {
    id: 2,
    name: "Elegant Summer Dress",
    category: "women",
    type: "dresses",
    price: 6599,
    originalPrice: null,
    rating: 4.8,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
    badge: "New",
    inStock: true,
    sizes: ["xs", "s", "m", "l", "xl"],
    colors: ["red", "pink", "blue", "white"]
  },
  {
    id: 3,
    name: "Denim Jacket",
    category: "unisex",
    type: "outerwear",
    price: 7499,
    originalPrice: 9999,
    rating: 4.6,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    badge: "Sale",
    inStock: true,
    sizes: ["s", "m", "l", "xl", "xxl", "3xl"],
    colors: ["blue", "black"]
  },
  {
    id: 4,
    name: "Kids Colorful Hoodie",
    category: "kids",
    type: "tops",
    price: 2899,
    originalPrice: null,
    rating: 4.7,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=400&fit=crop",
    badge: "New",
    inStock: true,
    sizes: ["xs", "s", "m", "l"],
    colors: ["red", "blue", "green", "yellow"]
  },
  {
    id: 5,
    name: "Formal Blazer",
    category: "men",
    type: "outerwear",
    price: 12499,
    originalPrice: 16599,
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=400&fit=crop",
    badge: "Sale",
    inStock: true,
    sizes: ["m", "l", "xl", "xxl", "3xl"],
    colors: ["black", "gray", "blue"]
  },
  {
    id: 6,
    name: "Casual Sneakers",
    category: "unisex",
    type: "footwear",
    price: 5799,
    originalPrice: null,
    rating: 4.4,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    badge: null,
    inStock: true,
    sizes: ["s", "m", "l", "xl"],
    colors: ["white", "black", "red", "blue"]
  },
  {
    id: 7,
    name: "Leather Handbag",
    category: "accessories",
    type: "accessories",
    price: 10799,
    originalPrice: 14999,
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
    badge: "Sale",
    inStock: true,
    sizes: [],
    colors: ["black", "brown", "red"]
  },
  {
    id: 8,
    name: "Sports Cap",
    category: "accessories",
    type: "accessories",
    price: 1649,
    originalPrice: null,
    rating: 4.3,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
    badge: null,
    inStock: true,
    sizes: [],
    colors: ["black", "white", "red", "blue"]
  },
  {
    id: 9,
    name: "Slim Fit Jeans",
    category: "men",
    type: "bottoms",
    price: 4999,
    originalPrice: 6599,
    rating: 4.6,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
    badge: "Sale",
    inStock: true,
    sizes: ["s", "m", "l", "xl", "xxl", "3xl"],
    colors: ["blue", "black", "gray"]
  },
  {
    id: 10,
    name: "Floral Blouse",
    category: "women",
    type: "tops",
    price: 3749,
    originalPrice: null,
    rating: 4.5,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1564257577-1a5f3e6a2f87?w=400&h=400&fit=crop",
    badge: "New",
    inStock: true,
    sizes: ["xs", "s", "m", "l", "xl", "xxl"],
    colors: ["white", "pink", "blue"]
  },
  {
    id: 11,
    name: "Winter Coat",
    category: "women",
    type: "outerwear",
    price: 14999,
    originalPrice: 20799,
    rating: 4.9,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=400&fit=crop",
    badge: "Sale",
    inStock: true,
    sizes: ["xs", "s", "m", "l", "xl"],
    colors: ["black", "gray", "red"]
  },
  {
    id: 12,
    name: "Kids Sneakers",
    category: "kids",
    type: "footwear",
    price: 3329,
    originalPrice: null,
    rating: 4.7,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400&h=400&fit=crop",
    badge: "New",
    inStock: true,
    sizes: ["xs", "s", "m"],
    colors: ["white", "pink", "blue", "red"]
  }
];

// State management
let currentProducts = [...allProducts];
let currentPage = 1;
const productsPerPage = 9;
let currentView = 'grid';
let activeFilters = {
  categories: [],
  types: [],
  sizes: [],
  colors: [],
  minPrice: 0,
  maxPrice: 50000,
  special: []
};

// ==========================================
// INITIALIZE PAGE
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  initializeFilters();
  loadURLParameters();
  applyFilters();
  setupEventListeners();
});

// ==========================================
// LOAD URL PARAMETERS
// ==========================================

function loadURLParameters() {
  const urlParams = new URLSearchParams(window.location.search);
  
  const category = urlParams.get('category');
  if (category) {
    const checkbox = document.querySelector(`input[name="category"][value="${category}"]`);
    if (checkbox) {
      checkbox.checked = true;
      activeFilters.categories.push(category);
      updateBreadcrumb(category);
    }
  }
  
  const sale = urlParams.get('sale');
  if (sale === 'true') {
    const checkbox = document.querySelector('input[name="special"][value="sale"]');
    if (checkbox) {
      checkbox.checked = true;
      activeFilters.special.push('sale');
      updateBreadcrumb('Sale');
    }
  }
  
  const newArrivals = urlParams.get('new');
  if (newArrivals === 'true') {
    const checkbox = document.querySelector('input[name="special"][value="new"]');
    if (checkbox) {
      checkbox.checked = true;
      activeFilters.special.push('new');
      updateBreadcrumb('New Arrivals');
    }
  }
  
  const search = urlParams.get('search');
  if (search) {
    document.getElementById('search-input').value = search;
    updateBreadcrumb(`Search: ${search}`);
  }
}

// ==========================================
// UPDATE BREADCRUMB
// ==========================================

function updateBreadcrumb(text) {
  const breadcrumbCurrent = document.getElementById('breadcrumb-current');
  if (breadcrumbCurrent) {
    breadcrumbCurrent.textContent = text;
  }
}

// ==========================================
// INITIALIZE FILTERS
// ==========================================

function initializeFilters() {
  document.querySelectorAll('input[name="category"]').forEach(checkbox => {
    checkbox.addEventListener('change', handleFilterChange);
  });
  
  document.querySelectorAll('input[name="type"]').forEach(checkbox => {
    checkbox.addEventListener('change', handleFilterChange);
  });
  
  document.querySelectorAll('input[name="size"]').forEach(checkbox => {
    checkbox.addEventListener('change', handleFilterChange);
  });
  
  document.querySelectorAll('input[name="color"]').forEach(checkbox => {
    checkbox.addEventListener('change', handleFilterChange);
  });
  
  document.querySelectorAll('input[name="special"]').forEach(checkbox => {
    checkbox.addEventListener('change', handleFilterChange);
  });
  
  const priceSlider = document.getElementById('price-slider');
  const maxPriceInput = document.getElementById('max-price');
  
  if (priceSlider) {
    priceSlider.max = 50000;
    priceSlider.value = 50000;
    priceSlider.addEventListener('input', (e) => {
      maxPriceInput.value = e.target.value;
      activeFilters.maxPrice = parseInt(e.target.value);
      applyFilters();
    });
  }
  
  if (maxPriceInput) {
    maxPriceInput.value = 50000;
    maxPriceInput.addEventListener('change', (e) => {
      const value = parseInt(e.target.value) || 50000;
      priceSlider.value = value;
      activeFilters.maxPrice = value;
      applyFilters();
    });
  }
  
  const minPriceInput = document.getElementById('min-price');
  if (minPriceInput) {
    minPriceInput.addEventListener('change', (e) => {
      activeFilters.minPrice = parseInt(e.target.value) || 0;
      applyFilters();
    });
  }
}

// ==========================================
// HANDLE FILTER CHANGE
// ==========================================

function handleFilterChange(e) {
  const filterType = e.target.name;
  const filterValue = e.target.value;
  const isChecked = e.target.checked;
  
  if (filterType === 'category' && filterValue === 'all') {
    if (isChecked) {
      document.querySelectorAll('input[name="category"]').forEach(cb => {
        if (cb.value !== 'all') cb.checked = false;
      });
      activeFilters.categories = [];
    }
  } else if (filterType === 'category' && filterValue !== 'all') {
    const allCheckbox = document.querySelector('input[name="category"][value="all"]');
    if (allCheckbox) allCheckbox.checked = false;
  }
  
  const filterKey = filterType === 'category' ? 'categories' : 
                    filterType === 'type' ? 'types' :
                    filterType === 'size' ? 'sizes' :
                    filterType === 'color' ? 'colors' :
                    'special';
  
  if (isChecked) {
    if (!activeFilters[filterKey].includes(filterValue)) {
      activeFilters[filterKey].push(filterValue);
    }
  } else {
    activeFilters[filterKey] = activeFilters[filterKey].filter(v => v !== filterValue);
  }
  
  applyFilters();
}

// ==========================================
// APPLY FILTERS
// ==========================================

function applyFilters() {
  currentProducts = allProducts.filter(product => {
    if (activeFilters.categories.length > 0) {
      if (!activeFilters.categories.includes(product.category)) {
        return false;
      }
    }
    
    if (activeFilters.types.length > 0) {
      if (!activeFilters.types.includes(product.type)) {
        return false;
      }
    }
    
    if (activeFilters.sizes.length > 0) {
      const hasSize = activeFilters.sizes.some(size => product.sizes.includes(size));
      if (!hasSize && product.sizes.length > 0) {
        return false;
      }
    }
    
    if (activeFilters.colors.length > 0) {
      const hasColor = activeFilters.colors.some(color => product.colors.includes(color));
      if (!hasColor) {
        return false;
      }
    }
    
    if (product.price < activeFilters.minPrice || product.price > activeFilters.maxPrice) {
      return false;
    }
    
    if (activeFilters.special.length > 0) {
      if (activeFilters.special.includes('sale') && !product.originalPrice) {
        return false;
      }
      if (activeFilters.special.includes('new') && product.badge !== 'New') {
        return false;
      }
      if (activeFilters.special.includes('instock') && !product.inStock) {
        return false;
      }
    }
    
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    if (searchQuery) {
      const searchMatch = product.name.toLowerCase().includes(searchQuery) ||
                         product.category.toLowerCase().includes(searchQuery) ||
                         product.type.toLowerCase().includes(searchQuery);
      if (!searchMatch) {
        return false;
      }
    }
    
    return true;
  });
  
  currentPage = 1;
  renderProducts();
  renderPagination();
  updateResultsCount();
}

// ==========================================
// RENDER PRODUCTS
// ==========================================

function renderProducts() {
  const productsGrid = document.getElementById('products-grid');
  
  if (!productsGrid) return;
  
  productsGrid.innerHTML = '<div class="loading">Loading products...</div>';
  
  setTimeout(() => {
    productsGrid.innerHTML = '';
    
    if (currentProducts.length === 0) {
      productsGrid.innerHTML = `
        <div class="no-results">
          <h3>No products found</h3>
          <p>Try adjusting your filters or search terms</p>
          <button class="btn btn-primary" onclick="clearAllFilters()">Clear Filters</button>
        </div>
      `;
      return;
    }
    
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = currentProducts.slice(startIndex, endIndex);
    
    productsToShow.forEach(product => {
      const productCard = createProductCard(product);
      productsGrid.appendChild(productCard);
    });
  }, 300);
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
  
  card.addEventListener('click', () => {
    window.location.href = `product-detail.html?id=${product.id}`;
  });
  
  return card;
}

// ==========================================
// RENDER PAGINATION
// ==========================================

function renderPagination() {
  const pagination = document.getElementById('pagination');
  
  if (!pagination) return;
  
  const totalPages = Math.ceil(currentProducts.length / productsPerPage);
  
  if (totalPages <= 1) {
    pagination.innerHTML = '';
    return;
  }
  
  let paginationHTML = '';
  
  paginationHTML += `
    <button class="page-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">
      ← Prev
    </button>
  `;
  
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      paginationHTML += `
        <button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">
          ${i}
        </button>
      `;
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      paginationHTML += `<span class="page-btn" style="border: none; cursor: default;">...</span>`;
    }
  }
  
  paginationHTML += `
    <button class="page-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">
      Next →
    </button>
  `;
  
  pagination.innerHTML = paginationHTML;
}

// ==========================================
// CHANGE PAGE
// ==========================================

function changePage(page) {
  currentPage = page;
  renderProducts();
  renderPagination();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// UPDATE RESULTS COUNT
// ==========================================

function updateResultsCount() {
  const resultsCount = document.getElementById('results-count');
  if (resultsCount) {
    resultsCount.textContent = `Showing ${currentProducts.length} product${currentProducts.length !== 1 ? 's' : ''}`;
  }
}

// ==========================================
// SETUP EVENT LISTENERS
// ==========================================

function setupEventListeners() {
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', handleSort);
  }
  
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      const view = this.dataset.view;
      const productsGrid = document.getElementById('products-grid');
      
      if (view === 'list') {
        productsGrid.classList.add('list-view');
      } else {
        productsGrid.classList.remove('list-view');
      }
    });
  });
  
  const clearFiltersBtn = document.getElementById('clear-filters');
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', clearAllFilters);
  }
  
  const toggleFiltersBtn = document.getElementById('toggle-filters');
  const filtersSidebar = document.getElementById('filters-sidebar');
  
  if (toggleFiltersBtn && filtersSidebar) {
    toggleFiltersBtn.addEventListener('click', () => {
      filtersSidebar.classList.add('active');
      
      const overlay = document.createElement('div');
      overlay.className = 'filters-overlay active';
      document.body.appendChild(overlay);
      
      overlay.addEventListener('click', () => {
        filtersSidebar.classList.remove('active');
        overlay.remove();
      });
    });
  }
  
  const applyFiltersMobile = document.getElementById('apply-filters-mobile');
  if (applyFiltersMobile) {
    applyFiltersMobile.addEventListener('click', () => {
      filtersSidebar.classList.remove('active');
      const overlay = document.querySelector('.filters-overlay');
      if (overlay) overlay.remove();
    });
  }
  
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        applyFilters();
      }
    });
  }
}

// ==========================================
// HANDLE SORT
// ==========================================

function handleSort(e) {
  const sortValue = e.target.value;
  
  switch(sortValue) {
    case 'price-low':
      currentProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      currentProducts.sort((a, b) => b.price - a.price);
      break;
    case 'name-az':
      currentProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-za':
      currentProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'rating':
      currentProducts.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
      currentProducts.sort((a, b) => (b.badge === 'New' ? 1 : 0) - (a.badge === 'New' ? 1 : 0));
      break;
    default:
      break;
  }
  
  renderProducts();
}

// ==========================================
// CLEAR ALL FILTERS
// ==========================================

function clearAllFilters() {
  activeFilters = {
    categories: [],
    types: [],
    sizes: [],
    colors: [],
    minPrice: 0,
    maxPrice: 50000,
    special: []
  };
  
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.checked = false;
  });
  
  const allCheckbox = document.querySelector('input[name="category"][value="all"]');
  if (allCheckbox) allCheckbox.checked = true;
  
  document.getElementById('min-price').value = 0;
  document.getElementById('max-price').value = 50000;
  document.getElementById('price-slider').value = 50000;
  
  document.getElementById('search-input').value = '';
  
  updateBreadcrumb('Shop All');
  
  applyFilters();
}

// ==========================================
// HELPER FUNCTIONS
// ==========================================

function addToCart(product) {
  if (typeof cartManager !== 'undefined') {
    cartManager.addToCart(product);
    showNotification('Added to cart!', 'success');
  }
}

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