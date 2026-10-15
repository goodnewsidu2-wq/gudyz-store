// --- CONFIGURATION ---
const CONFIG = {
    whatsappNumber: "2348151383388",
    bankDetails: {
        bankName: "Moniepoint ",
        accountNumber: "5183186265",
        accountName: "Gudyz Innovations"
    },
    flatDeliveryFee: 1000
};

// --- 30 SAMPLE PRODUCTS ---
const ALL_PRODUCTS = [
    { id: 1, name: "Golden Penny Semovita 10kg", category: "Groceries", subcategory: "Grains & Pasta", price: 12500, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80", inStock: true },
    { id: 2, name: "Mama Gold Premium Rice 50kg", category: "Groceries", subcategory: "Grains & Pasta", price: 78000, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80", inStock: true },
    { id: 3, name: "Fresh Vine Tomatoes (Basket)", category: "Fresh Produce", subcategory: "Vegetables", price: 4500, image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&q=80", inStock: true },
    { id: 4, name: "Dano Milk Powder 400g Refill", category: "Groceries", subcategory: "Breakfast & Dairy", price: 3800, image: "https://images.unsplash.com/photo-1563636619-e9143da9973b?w=400&q=80", inStock: true },
    { id: 5, name: "Peak Milk Evaporated 38g (10 Pack)", category: "Groceries", subcategory: "Breakfast & Dairy", price: 2500, image: "https://images.unsplash.com/photo-1563636619-e9143da9973b?w=400&q=80", inStock: true },
    { id: 6, name: "Indomie Super Pack Chicken (Carton)", category: "Groceries", subcategory: "Instant Foods", price: 9200, image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=400&q=80", inStock: true },
    { id: 7, name: "Bigi Cola Soft Drink 60cl (Pack of 12)", category: "Drinks", subcategory: "Soft Drinks", price: 3600, image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&q=80", inStock: true },
    { id: 8, name: "Eva Table Water 75cl (Pack of 12)", category: "Drinks", subcategory: "Water", price: 1800, image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&q=80", inStock: true },
    { id: 9, name: "Carlo Rossi Red Sweet Wine 75cl", category: "Wine 18+", subcategory: "Red Wine", price: 6500, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80", inStock: true },
    { id: 10, name: "Nivea Nourishing Body Milk 400ml", category: "Cosmetics", subcategory: "Skincare", price: 4200, image: "https://images.unsplash.com/photo-1608248597359-994235c2420a?w=400&q=80", inStock: true },
    { id: 11, name: "Morning Fresh Dishwashing Liquid 1L", category: "Household", subcategory: "Cleaning", price: 2100, image: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400&q=80", inStock: true },
    { id: 12, name: "Pepsodent Toothpaste 140g", category: "Daily Essentials", subcategory: "Oral Care", price: 1200, image: "https://images.unsplash.com/photo-1559591937-b12597b67eb0?w=400&q=80", inStock: true },
    { id: 13, name: "Kings Pure Vegetable Oil 3L", category: "Groceries", subcategory: "Cooking Oils", price: 6800, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80", inStock: true },
    { id: 14, name: "Honeywell Wheat Meal 5kg", category: "Groceries", subcategory: "Grains & Pasta", price: 4500, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80", inStock: true },
    { id: 15, name: "Fresh Round Onions (Medium Bag)", category: "Fresh Produce", subcategory: "Vegetables", price: 3500, image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=400&q=80", inStock: true },
    { id: 16, name: "Ripe Yellow Plantains (Bunch)", category: "Fresh Produce", subcategory: "Fruits & Tubers", price: 2500, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80", inStock: false },
    { id: 17, name: "Maltina Malt Drink 33cl (Pack of 12)", category: "Drinks", subcategory: "Malt & Energy", price: 4800, image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&q=80", inStock: true },
    { id: 18, name: "Moët & Chandon Brut Impérial 75cl", category: "Wine 18+", subcategory: "Champagne & Spirits", price: 75000, image: "https://images.unsplash.com/photo-1569919659178-1a22591c4c85?w=400&q=80", inStock: true },
    { id: 19, name: "Vaseline Intensive Care Lotion 400ml", category: "Cosmetics", subcategory: "Skincare", price: 3900, image: "https://images.unsplash.com/photo-1608248597359-994235c2420a?w=400&q=80", inStock: true },
    { id: 20, name: "Ariel Automatic Washing Powder 2kg", category: "Household", subcategory: "Laundry", price: 5200, image: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400&q=80", inStock: true },
    { id: 21, name: "Geisha Canned Sardines 125g", category: "Groceries", subcategory: "Canned Goods", price: 950, image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&q=80", inStock: true },
    { id: 22, name: "Titus Sardines (Pack of 4)", category: "Groceries", subcategory: "Canned Goods", price: 3400, image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&q=80", inStock: true },
    { id: 23, name: "Irish Fresh Potatoes 5kg Bag", category: "Fresh Produce", subcategory: "Fruits & Tubers", price: 4800, image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=80", inStock: true },
    { id: 24, name: "Lucozade Boost Energy Drink 500ml", category: "Drinks", subcategory: "Malt & Energy", price: 1100, image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&q=80", inStock: true },
    { id: 25, name: "Four Cousins Sweet White Wine 75cl", category: "Wine 18+", subcategory: "White Wine", price: 6200, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80", inStock: true },
    { id: 26, name: "Oriflame Love Potion Perfume 50ml", category: "Cosmetics", subcategory: "Fragrances", price: 18500, image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&q=80", inStock: false },
    { id: 27, name: "Harpic Toilet Bowl Cleaner 750ml", category: "Household", subcategory: "Cleaning", price: 2300, image: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400&q=80", inStock: true },
    { id: 28, name: "Sensodyne Fresh Mint Toothpaste 100g", category: "Daily Essentials", subcategory: "Oral Care", price: 3200, image: "https://images.unsplash.com/photo-1559591937-b12597b67eb0?w=400&q=80", inStock: true },
    { id: 29, name: "Dangote Granulated Sugar 1kg", category: "Groceries", subcategory: "Breakfast & Dairy", price: 1400, image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&q=80", inStock: true },
    { id: 30, name: "Safeguard Antibacterial Soap 130g", category: "Daily Essentials", subcategory: "Bath & Body", price: 900, image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&q=80", inStock: true }
];

const SUBCATEGORIES = {
    "Groceries": ["Grains & Pasta", "Breakfast & Dairy", "Instant Foods", "Cooking Oils", "Canned Goods"],
    "Fresh Produce": ["Vegetables", "Fruits & Tubers"],
    "Drinks": ["Soft Drinks", "Water", "Malt & Energy"],
    "Wine 18+": ["Red Wine", "White Wine", "Champagne & Spirits"],
    "Cosmetics": ["Skincare", "Fragrances"],
    "Household": ["Cleaning", "Laundry"],
    "Daily Essentials": ["Oral Care", "Bath & Body"]
};

// --- APP STATE ---
let state = {
    cart: [],
    currentCategory: "All Items",
    currentSubcategory: "All",
    searchQuery: "",
    displayedCount: 12,
    hasUnsavedChanges: false
};

// --- DOM ELEMENTS ---
const cartBadge = document.getElementById('cartBadge');
const openCartBtn = document.getElementById('openCartBtn');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartDrawer = document.getElementById('cartDrawer');
const siteOverlay = document.getElementById('siteOverlay');
const searchInput = document.getElementById('searchInput');
const categoryChips = document.getElementById('categoryChips');
const subCategoryChips = document.getElementById('subCategoryChips');
const productGrid = document.getElementById('productGrid');
const sectionTitle = document.getElementById('sectionTitle');
const productCount = document.getElementById('productCount');
const loadMoreContainer = document.getElementById('loadMoreContainer');
const loadMoreBtn = document.getElementById('loadMoreBtn');

const cartItemsList = document.getElementById('cartItemsList');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartTotal = document.getElementById('cartTotal');
const bankInfoBox = document.getElementById('bankInfoBox');
const transferBtn = document.getElementById('transferBtn');

const openRequestModalBtn = document.getElementById('openRequestModalBtn');
const closeRequestModalBtn = document.getElementById('closeRequestModalBtn');
const requestModal = document.getElementById('requestModal');
const submitRequestBtn = document.getElementById('submitRequestBtn');

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();
    renderBankDetails();
    prefillCheckoutForm();
    setupEventListeners();
    updateSubcategoryChips();
    filterAndRenderProducts();
    updateCartUI();
});

// --- LOCAL STORAGE HANDLING ---
function loadFromLocalStorage() {
    try {
        const savedCart = localStorage.getItem('gudyz_cart');
        if (savedCart) state.cart = JSON.parse(savedCart);
    } catch (e) {
        console.error("Error reading cart from localStorage", e);
    }
}

function saveCartToLocalStorage() {
    try {
        localStorage.setItem('gudyz_cart', JSON.stringify(state.cart));
    } catch (e) {
        console.error("Error saving cart to localStorage", e);
    }
}

function prefillCheckoutForm() {
    try {
        const name = localStorage.getItem('gudyz_name');
        const phone = localStorage.getItem('gudyz_phone');
        const address = localStorage.getItem('gudyz_address');
        if (name) document.getElementById('checkoutName').value = name;
        if (phone) document.getElementById('checkoutPhone').value = phone;
        if (address) document.getElementById('checkoutAddress').value = address;
    } catch (e) {
        console.error("Error reading profile from localStorage", e);
    }
}

function saveCheckoutProfile() {
    try {
        const name = document.getElementById('checkoutName').value.trim();
        const phone = document.getElementById('checkoutPhone').value.trim();
        const address = document.getElementById('checkoutAddress').value.trim();
        if (name) localStorage.setItem('gudyz_name', name);
        if (phone) localStorage.setItem('gudyz_phone', phone);
        if (address) localStorage.setItem('gudyz_address', address);
    } catch (e) {
        console.error("Error saving profile to localStorage", e);
    }
}

// --- RENDER BANK DETAILS ---
function renderBankDetails() {
    bankInfoBox.innerHTML = `
        Transfer total amount to:<br>
        <strong>Bank:</strong> ${CONFIG.bankDetails.bankName}<br>
        <strong>Account No:</strong> ${CONFIG.bankDetails.accountNumber}<br>
        <strong>Account Name:</strong> ${CONFIG.bankDetails.accountName}
    `;
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
    openCartBtn.addEventListener('click', toggleCartDrawer);
    closeCartBtn.addEventListener('click', toggleCartDrawer);
    siteOverlay.addEventListener('click', closeAllModals);

    searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.toLowerCase().trim();
        state.displayedCount = 12;
        filterAndRenderProducts();
    });

    // Category Chips
    categoryChips.addEventListener('click', (e) => {
        const chip = e.target.closest('.chip');
        if (!chip) return;
        document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        state.currentCategory = chip.dataset.category;
        state.currentSubcategory = "All";
        state.displayedCount = 12;
        updateSubcategoryChips();
        filterAndRenderProducts();
    });

    // Subcategory Chips
    subCategoryChips.addEventListener('click', (e) => {
        const subChip = e.target.closest('.sub-chip');
        if (!subChip) return;
        document.querySelectorAll('.sub-chip').forEach(c => c.classList.remove('active'));
        subChip.classList.add('active');
        state.currentSubcategory = subChip.dataset.subcategory;
        state.displayedCount = 12;
        filterAndRenderProducts();
    });

    loadMoreBtn.addEventListener('click', () => {
        state.displayedCount += 12;
        filterAndRenderProducts();
    });

    // Request Modal
    openRequestModalBtn.addEventListener('click', () => {
        requestModal.classList.add('active');
        siteOverlay.classList.add('active');
    });
    closeRequestModalBtn.addEventListener('click', closeAllModals);

    submitRequestBtn.addEventListener('click', handleSpecialRequest);

    // Product grid clicks (Add to cart)
    productGrid.addEventListener('click', (e) => {
        const addBtn = e.target.closest('.add-btn');
        if (!addBtn) return;
        const productId = parseInt(addBtn.dataset.id);
        addToCart(productId);
    });

    // Cart drawer item controls
    cartItemsList.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn) return;
        const id = btn.dataset.id;
        const action = btn.dataset.action;

        if (action === 'inc') updateQuantity(id, 1);
        if (action === 'dec') updateQuantity(id, -1);
        if (action === 'remove') removeFromCart(id);
    });

    transferBtn.addEventListener('click', handleWhatsAppCheckout);

    // Before unload warning if cart has items or unsaved changes
    window.addEventListener('beforeunload', (e) => {
        if (state.hasUnsavedChanges || state.cart.length > 0) {
            e.preventDefault();
            e.returnValue = '';
        }
    });
}

function closeAllModals() {
    cartDrawer.classList.remove('active');
    requestModal.classList.remove('active');
    siteOverlay.classList.remove('active');
}

function toggleCartDrawer() {
    cartDrawer.classList.toggle('active');
    siteOverlay.classList.toggle('active');
}

// --- SUBCATEGORIES MANAGEMENT ---
function updateSubcategoryChips() {
    subCategoryChips.innerHTML = '';
    const subs = SUBCATEGORIES[state.currentCategory];
    if (!subs || subs.length === 0) {
        subCategoryChips.style.display = 'none';
        return;
    }
    subCategoryChips.style.display = 'flex';

    // 'All' subcategory chip
    const allSubChip = document.createElement('button');
    allSubChip.className = 'sub-chip active';
    allSubChip.dataset.subcategory = 'All';
    allSubChip.textContent = 'All ' + state.currentCategory;
    subCategoryChips.appendChild(allSubChip);

    subs.forEach(sub => {
        const chip = document.createElement('button');
        chip.className = 'sub-chip';
        chip.dataset.subcategory = sub;
        chip.textContent = sub;
        subCategoryChips.appendChild(chip);
    });
}

// --- FILTER & RENDER PRODUCTS ---
function getFilteredProducts() {
    return ALL_PRODUCTS.filter(p => {
        const matchesCat = state.currentCategory === 'All Items' || p.category === state.currentCategory;
        const matchesSub = state.currentSubcategory === 'All' || p.subcategory === state.currentSubcategory;
        const matchesSearch = p.name.toLowerCase().includes(state.searchQuery) || p.category.toLowerCase().includes(state.searchQuery);
        return matchesCat && matchesSub && matchesSearch;
    });
}

function filterAndRenderProducts() {
    const filtered = getFilteredProducts();
    sectionTitle.textContent = state.searchQuery ? `Search: "${state.searchQuery}"` : state.currentCategory;
    
    const sliceTo = Math.min(state.displayedCount, filtered.length);
    productCount.textContent = `Showing ${sliceTo} of ${filtered.length} products`;

    if (filtered.length === 0) {
        productGrid.innerHTML = `<div style="grid-column: span 2; text-align:center; padding: 40px 0; color:#94a3b8;">No products found. Try a different category or search term.</div>`;
        loadMoreContainer.style.display = 'none';
        return;
    }

    productGrid.innerHTML = filtered.slice(0, sliceTo).map(p => `
        <div class="product-card">
            <div class="product-img-wrap">
                ${!p.inStock ? '<span class="out-of-stock-badge">Out of Stock</span>' : ''}
                <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><rect width=%22100%22 height=%22100%22 fill=%22%23f1f5f9%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%2394a3b8%22 font-size=%2214%22>Gudyz Product</text></svg>'">
            </div>
            <div class="product-info">
                <div>
                    <div class="product-category">${p.category}</div>
                    <div class="product-name">${p.name}</div>
                </div>
                <div class="product-footer">
                    <span class="product-price">₦${p.price.toLocaleString()}</span>
                    <button class="add-btn" data-id="${p.id}" ${!p.inStock ? 'disabled' : ''}>
                        ${p.inStock ? '+ Add' : 'Sold Out'}
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    if (sliceTo >= filtered.length) {
        loadMoreContainer.style.display = 'none';
    } else {
        loadMoreContainer.style.display = 'block';
    }
}

// --- CART LOGIC ---
function addToCart(productId) {
    const product = ALL_PRODUCTS.find(p => p.id === productId);
    if (!product || !product.inStock) return;

    const existingIndex = state.cart.findIndex(item => item.id === productId && !item.isSpecialRequest);
    if (existingIndex > -1) {
        state.cart[existingIndex].quantity += 1;
    } else {
        state.cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            isSpecialRequest: false
        });
    }

    saveCartToLocalStorage();
    updateCartUI();
    state.hasUnsavedChanges = true;
}

function handleSpecialRequest() {
    const desc = document.getElementById('reqDescription').value.trim();
    const qty = document.getElementById('reqQuantity').value.trim();
    const budget = document.getElementById('reqBudget').value.trim();

    if (!desc || !qty) {
        alert("Please provide both item description and quantity.");
        return;
    }

    const specialItem = {
        id: 'req_' + Date.now(),
        name: `[Special Request] ${desc} (Qty: ${qty})${budget ? ' - Budget: ₦' + Number(budget).toLocaleString() : ''}`,
        price: 0,
        quantity: 1,
        isSpecialRequest: true
    };

    state.cart.push(specialItem);
    saveCartToLocalStorage();
    updateCartUI();

    // Clear form and close modal
    document.getElementById('reqDescription').value = '';
    document.getElementById('reqQuantity').value = '';
    document.getElementById('reqBudget').value = '';
    requestModal.classList.remove('active');
    siteOverlay.classList.remove('active');
    state.hasUnsavedChanges = true;

    // Open cart to show the added request
    toggleCartDrawer();
}

function updateQuantity(id, delta) {
    const item = state.cart.find(i => String(i.id) === String(id));
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(id);
    } else {
        saveCartToLocalStorage();
        updateCartUI();
    }
}

function removeFromCart(id) {
    state.cart = state.cart.filter(i => String(i.id) !== String(id));
    saveCartToLocalStorage();
    updateCartUI();
}

function updateCartUI() {
    const totalCount = state.cart.reduce((sum, 
