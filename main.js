/* ============================================================
   MOTO GEAR STORE - JavaScript Principal
   ============================================================ */

'use strict';

/* ---- DADOS DOS PRODUTOS ---- */
const products = [
  {
    id: 1,
    name: 'Jaqueta Couro Night Rider',
    category: 'jaquetas',
    categoryLabel: 'Jaquetas',
    price: 849.90,
    oldPrice: 1199.90,
    image: 'images/jaqueta1.webp',
    badge: 'sale',
    badgeLabel: '-29%',
    rating: 5,
    reviews: 128,
    description: 'Jaqueta de couro legítimo com proteções CE nível 2 nos ombros e cotovelos. Forro removível para uso em todas as estações. Design clássico e resistente para longas viagens.',
    sizes: ['P', 'M', 'G', 'GG', 'XGG']
  },
  {
    id: 2,
    name: 'Jaqueta Moto Racing Pro',
    category: 'jaquetas',
    categoryLabel: 'Jaquetas',
    price: 699.90,
    oldPrice: null,
    image: 'images/jaqueta2.webp',
    badge: 'novo',
    badgeLabel: 'Novo',
    rating: 4,
    reviews: 54,
    description: 'Jaqueta estilo racing com proteções integradas, material resistente a abrasão e ventilação estratégica. Ideal para uso urbano e pistas.',
    sizes: ['P', 'M', 'G', 'GG']
  },
  {
    id: 3,
    name: 'Jaqueta Classic Biker',
    category: 'jaquetas',
    categoryLabel: 'Jaquetas',
    price: 1099.90,
    oldPrice: 1399.90,
    image: 'images/jaqueta3.jpg',
    badge: 'top',
    badgeLabel: 'Top',
    rating: 5,
    reviews: 203,
    description: 'A jaqueta clássica do motociclista. Couro premium, zíperes YKK, proteções dorsais e omoplatas. Um ícone do estilo biker.',
    sizes: ['P', 'M', 'G', 'GG', 'XGG']
  },
  {
    id: 4,
    name: 'Jaqueta Urban Moto Lady',
    category: 'jaquetas',
    categoryLabel: 'Jaquetas',
    price: 759.90,
    oldPrice: 899.90,
    image: 'images/jaqueta4.jpg',
    badge: 'sale',
    badgeLabel: '-15%',
    rating: 5,
    reviews: 87,
    description: 'Jaqueta feminina com corte moderno, couro sintético de alta qualidade e proteções CE. Estilo e segurança para a motociclista moderna.',
    sizes: ['PP', 'P', 'M', 'G', 'GG']
  },
  {
    id: 5,
    name: 'Luva X11 Epic Pro',
    category: 'luvas',
    categoryLabel: 'Luvas',
    price: 249.90,
    oldPrice: 319.90,
    image: 'images/luva1.jpg',
    badge: 'sale',
    badgeLabel: '-21%',
    rating: 5,
    reviews: 312,
    description: 'Luva de couro cano longo com proteções rígidas nos nós dos dedos e palma reforçada. Certificação CE. Excelente grip e conforto.',
    sizes: ['P', 'M', 'G', 'GG']
  },
  {
    id: 6,
    name: 'Luva Nitro Win Racing',
    category: 'luvas',
    categoryLabel: 'Luvas',
    price: 189.90,
    oldPrice: null,
    image: 'images/luva2.jpg',
    badge: 'novo',
    badgeLabel: 'Novo',
    rating: 4,
    reviews: 76,
    description: 'Luva tática com material respirável, proteções de impacto e tela touchscreen nos dedos. Perfeita para uso urbano e trilhas.',
    sizes: ['P', 'M', 'G', 'GG', 'XGG']
  },
  {
    id: 7,
    name: 'Capacete Full Face Speed',
    category: 'capacetes',
    categoryLabel: 'Capacetes',
    price: 599.90,
    oldPrice: 799.90,
    image: 'images/capacete1.jpg',
    badge: 'sale',
    badgeLabel: '-25%',
    rating: 5,
    reviews: 445,
    description: 'Capacete integral com viseira dupla, ventilação avançada e forro antibacteriano removível. Certificação DOT e ECE 22.06.',
    sizes: ['56', '58', '60', '62']
  },
  {
    id: 8,
    name: 'Capacete Vintage Retro',
    category: 'capacetes',
    categoryLabel: 'Capacetes',
    price: 449.90,
    oldPrice: null,
    image: 'images/capacete2.jpg',
    badge: 'top',
    badgeLabel: 'Top',
    rating: 4,
    reviews: 189,
    description: 'Capacete estilo vintage com acabamento premium, viseira bolha e forro de couro sintético. Para quem une estilo e segurança.',
    sizes: ['56', '58', '60', '62', '64']
  },
  {
    id: 9,
    name: 'Calça Jeans Kevlar Corsair',
    category: 'calcas',
    categoryLabel: 'Calças',
    price: 529.90,
    oldPrice: 699.90,
    image: 'images/calca1.jpg',
    badge: 'sale',
    badgeLabel: '-24%',
    rating: 5,
    reviews: 156,
    description: 'Calça jeans com reforço em Kevlar nas áreas críticas, proteções CE removíveis nos joelhos e quadris. Conforto de jeans, segurança de moto.',
    sizes: ['38', '40', '42', '44', '46', '48']
  },
  {
    id: 10,
    name: 'Calça Texx Armor Impermeável',
    category: 'calcas',
    categoryLabel: 'Calças',
    price: 479.90,
    oldPrice: null,
    image: 'images/calca2.jpg',
    badge: 'novo',
    badgeLabel: 'Novo',
    rating: 4,
    reviews: 93,
    description: 'Calça impermeável com proteções integradas, forro térmico removível e ventilação lateral. Ideal para viagens longas em qualquer clima.',
    sizes: ['38', '40', '42', '44', '46']
  },
  {
    id: 11,
    name: 'Bota Couro Harness Rider',
    category: 'botas',
    categoryLabel: 'Botas',
    price: 389.90,
    oldPrice: 499.90,
    image: 'images/bota1.jpg',
    badge: 'sale',
    badgeLabel: '-22%',
    rating: 5,
    reviews: 234,
    description: 'Bota de couro legítimo estilo harness, sola antiderrapante, biqueira reforçada e tornozelo protegido. Clássico e durável.',
    sizes: ['38', '39', '40', '41', '42', '43', '44']
  },
  {
    id: 12,
    name: 'Bota Tática Moto Combat',
    category: 'botas',
    categoryLabel: 'Botas',
    price: 449.90,
    oldPrice: null,
    image: 'images/bota2.jpg',
    badge: 'top',
    badgeLabel: 'Top',
    rating: 5,
    reviews: 178,
    description: 'Bota tática com proteção de tornozelo CE, impermeável, sola Vibram e fecho de engate rápido. Para quem leva a segurança a sério.',
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45']
  }
];

/* ---- ESTADO DO CARRINHO ---- */
let cart = JSON.parse(localStorage.getItem('motoGearCart')) || [];
let currentFilter = 'todos';

/* ---- UTILITÁRIOS ---- */
function formatPrice(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function saveCart() {
  localStorage.setItem('motoGearCart', JSON.stringify(cart));
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ---- RENDERIZAR ESTRELAS ---- */
function renderStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    stars += `<span class="star">${i <= rating ? '★' : '☆'}</span>`;
  }
  return stars;
}

/* ---- RENDERIZAR PRODUTOS ---- */
function renderProducts(filter = 'todos') {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';

  const filtered = filter === 'todos'
    ? products
    : products.filter(p => p.category === filter);

  filtered.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.id = product.id;

    const inWishlist = JSON.parse(localStorage.getItem('motoGearWishlist') || '[]').includes(product.id);

    card.innerHTML = `
      <div class="product-image">
        ${product.badge ? `<span class="badge-tag ${product.badge}">${product.badgeLabel}</span>` : ''}
        <button class="wishlist-btn ${inWishlist ? 'active' : ''}" data-id="${product.id}" title="Favoritar">
          ${inWishlist ? '♥' : '♡'}
        </button>
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <button class="quick-add" data-id="${product.id}">+ Adicionar ao Carrinho</button>
      </div>
      <div class="product-info">
        <div class="product-category">${product.categoryLabel}</div>
        <div class="product-name">${product.name}</div>
        <div class="stars">
          ${renderStars(product.rating)}
          <span class="reviews">(${product.reviews})</span>
        </div>
        <div class="product-price">
          <span class="price-current">${formatPrice(product.price)}</span>
          ${product.oldPrice ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>` : ''}
        </div>
        <button class="add-to-cart" data-id="${product.id}">
          🛒 Adicionar
        </button>
      </div>
    `;

    grid.appendChild(card);
  });

  // Eventos dos botões
  document.querySelectorAll('.add-to-cart, .quick-add').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(parseInt(btn.dataset.id));
    });
  });

  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleWishlist(parseInt(btn.dataset.id), btn);
    });
  });

  // Clique no card abre modal
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      openProductModal(parseInt(card.dataset.id));
    });
  });
}

/* ---- WISHLIST ---- */
function toggleWishlist(id, btn) {
  let wishlist = JSON.parse(localStorage.getItem('motoGearWishlist') || '[]');
  const idx = wishlist.indexOf(id);
  if (idx === -1) {
    wishlist.push(id);
    btn.classList.add('active');
    btn.textContent = '♥';
    showToast('Adicionado aos favoritos! ♥');
  } else {
    wishlist.splice(idx, 1);
    btn.classList.remove('active');
    btn.textContent = '♡';
    showToast('Removido dos favoritos');
  }
  localStorage.setItem('motoGearWishlist', JSON.stringify(wishlist));
}

/* ---- CARRINHO ---- */
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCart();
  updateCartUI();
  showToast(`✓ ${product.name} adicionado ao carrinho!`);
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }
  saveCart();
  updateCartUI();
  renderCartItems();
}

function updateCartUI() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const countEl = document.getElementById('cartCount');
  countEl.textContent = count;
  if (count > 0) {
    countEl.classList.add('show');
  } else {
    countEl.classList.remove('show');
  }
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <span class="empty-icon">🛒</span>
        <p>Seu carrinho está vazio.</p>
        <button class="btn-primary" onclick="closeCart()">Ver Produtos</button>
      </div>
    `;
    totalEl.textContent = formatPrice(0);
    return;
  }

  container.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatPrice(item.price)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateQty(${item.id}, -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Remover">✕</button>
    `;
    container.appendChild(el);
  });

  totalEl.textContent = formatPrice(total);
}

function openCart() {
  renderCartItems();
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ---- MODAL PRODUTO ---- */
function openProductModal(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  document.getElementById('modalImage').src = product.image;
  document.getElementById('modalImage').alt = product.name;
  document.getElementById('modalCategory').textContent = product.categoryLabel;
  document.getElementById('modalName').textContent = product.name;
  document.getElementById('modalStars').innerHTML = renderStars(product.rating) + ` <span style="color:var(--text-muted);font-size:0.85rem">(${product.reviews} avaliações)</span>`;
  document.getElementById('modalCurrentPrice').textContent = formatPrice(product.price);
  document.getElementById('modalOldPrice').textContent = product.oldPrice ? formatPrice(product.oldPrice) : '';
  document.getElementById('modalDescription').textContent = product.description;

  // Tamanhos
  const sizesEl = document.getElementById('modalSizes');
  sizesEl.innerHTML = '';
  product.sizes.forEach((size, idx) => {
    const btn = document.createElement('button');
    btn.className = 'size-btn' + (idx === 0 ? ' selected' : '');
    btn.textContent = size;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
    sizesEl.appendChild(btn);
  });

  // Botão adicionar
  const addBtn = document.getElementById('modalAddBtn');
  addBtn.onclick = () => {
    addToCart(product.id);
    closeModal();
  };

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ---- FILTROS ---- */
function setupFilters() {
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.dataset.filter;
      renderProducts(currentFilter);
    });
  });
}

/* ---- BUSCA ---- */
function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');

  function doSearch() {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) {
      renderProducts(currentFilter);
      return;
    }

    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    const results = products.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.categoryLabel.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    );

    if (results.length === 0) {
      grid.innerHTML = `
        <div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-muted)">
          <div style="font-size:3rem;margin-bottom:16px">🔍</div>
          <p style="font-size:1.1rem">Nenhum produto encontrado para "<strong style="color:var(--primary)">${query}</strong>"</p>
        </div>
      `;
      return;
    }

    results.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.dataset.id = product.id;
      card.innerHTML = `
        <div class="product-image">
          ${product.badge ? `<span class="badge-tag ${product.badge}">${product.badgeLabel}</span>` : ''}
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <button class="quick-add" data-id="${product.id}">+ Adicionar ao Carrinho</button>
        </div>
        <div class="product-info">
          <div class="product-category">${product.categoryLabel}</div>
          <div class="product-name">${product.name}</div>
          <div class="stars">${renderStars(product.rating)}<span class="reviews">(${product.reviews})</span></div>
          <div class="product-price">
            <span class="price-current">${formatPrice(product.price)}</span>
            ${product.oldPrice ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>` : ''}
          </div>
          <button class="add-to-cart" data-id="${product.id}">🛒 Adicionar</button>
        </div>
      `;
      grid.appendChild(card);
    });

    document.querySelectorAll('.add-to-cart, .quick-add').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        addToCart(parseInt(btn.dataset.id));
      });
    });

    document.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', () => openProductModal(parseInt(card.dataset.id)));
    });

    // Scroll para produtos
    document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
  }

  searchBtn.addEventListener('click', doSearch);
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') doSearch();
  });
}

/* ---- COUNTDOWN TIMER ---- */
function setupCountdown() {
  const endTime = new Date();
  endTime.setHours(endTime.getHours() + 23);
  endTime.setMinutes(endTime.getMinutes() + 59);
  endTime.setSeconds(endTime.getSeconds() + 59);

  function update() {
    const now = new Date();
    const diff = endTime - now;

    if (diff <= 0) {
      document.getElementById('countHours').textContent = '00';
      document.getElementById('countMins').textContent = '00';
      document.getElementById('countSecs').textContent = '00';
      return;
    }

    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    document.getElementById('countHours').textContent = String(h).padStart(2, '0');
    document.getElementById('countMins').textContent = String(m).padStart(2, '0');
    document.getElementById('countSecs').textContent = String(s).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/* ---- NAVBAR SCROLL ---- */
function setupNavbar() {
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* ---- BACK TO TOP ---- */
function setupBackToTop() {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---- HAMBURGER MENU ---- */
function setupHamburger() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('open');
    });
  });
}

/* ---- NEWSLETTER ---- */
function setupNewsletter() {
  const form = document.getElementById('newsletterForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input');
    if (input.value.trim()) {
      showToast('✓ Inscrição realizada com sucesso! Bem-vindo(a)!');
      input.value = '';
    }
  });
}

/* ---- CATEGORIAS CLICK ---- */
function setupCategories() {
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const filter = card.dataset.filter;
      document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        document.querySelectorAll('.filter-tab').forEach(t => {
          t.classList.toggle('active', t.dataset.filter === filter);
        });
        renderProducts(filter);
        currentFilter = filter;
      }, 600);
    });
  });
}

/* ---- ANIMAÇÃO DE ENTRADA (Intersection Observer) ---- */
function setupAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.product-card, .category-card, .feature-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease, border-color 0.3s ease, box-shadow 0.3s ease';
    observer.observe(el);
  });
}

/* ---- CHECKOUT (simulado) ---- */
function setupCheckout() {
  document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) {
      showToast('Seu carrinho está vazio!');
      return;
    }
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    showToast(`✓ Pedido realizado! Total: ${formatPrice(total)}`);
    cart = [];
    saveCart();
    updateCartUI();
    renderCartItems();
    closeCart();
  });
}

/* ---- INICIALIZAÇÃO ---- */
document.addEventListener('DOMContentLoaded', () => {
  // Renderizar produtos
  renderProducts();

  // Atualizar UI do carrinho
  updateCartUI();

  // Setup de funcionalidades
  setupFilters();
  setupSearch();
  setupCountdown();
  setupNavbar();
  setupBackToTop();
  setupHamburger();
  setupNewsletter();
  setupCategories();
  setupCheckout();

  // Animações após renderização
  setTimeout(setupAnimations, 100);

  // Eventos do carrinho
  document.getElementById('cartBtn').addEventListener('click', openCart);
  document.getElementById('cartClose').addEventListener('click', closeCart);
  document.getElementById('cartOverlay').addEventListener('click', closeCart);

  // Eventos do modal
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
  });

  // Fechar com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeModal();
    }
  });

  // Smooth scroll para links de navegação
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
