(() => {
  "use strict";

  const products = [
    {id:"w-sage",name:"Sage Gathered Blouse",category:"women",label:"WOMEN",image:"./assets/images/products/women-sage-gathered-top.png",alt:"Sage green gathered blouse",description:"A softly gathered silhouette with an easy, relaxed feel. Part of the NOVRIELLE collection preview."},
    {id:"w-ivory-layer",name:"Ivory Layered Blouse",category:"women",label:"WOMEN",image:"./assets/images/products/women-ivory-layered-blouse.png",alt:"Ivory layered blouse",description:"Light layers and a clean silhouette for a considered everyday look."},
    {id:"w-floral",name:"Floral Day Dress",category:"women",label:"WOMEN",image:"./assets/images/products/women-floral-day-dress.png",alt:"Floral day dress",description:"A floral statement with a relaxed shape and expressive detail."},
    {id:"w-rose-jacket",name:"Rose Utility Jacket",category:"women",label:"WOMEN",image:"./assets/images/products/women-rose-utility-jacket.png",alt:"Rose utility jacket",description:"An easy outer layer with a practical shape and soft color."},
    {id:"w-piped-shirt",name:"Ivory Piped Shirt",category:"women",label:"WOMEN",image:"./assets/images/products/women-ivory-piped-shirt.png",alt:"Ivory piped shirt",description:"Crisp lines and understated contrast for an everyday wardrobe."},
    {id:"w-sky-blouse",name:"Sky Tie Blouse",category:"women",label:"WOMEN",image:"./assets/images/products/women-sky-tie-blouse.png",alt:"Sky blue tie blouse",description:"A fresh blue tone and a soft tie detail make this piece easy to style."},
    {id:"w-berry-tunic",name:"Berry Printed Tunic",category:"women",label:"WOMEN",image:"./assets/images/products/women-berry-printed-tunic.png",alt:"Berry printed tunic",description:"A richly colored print with a comfortable, easy-wearing feel."},
    {id:"w-wrap",name:"Ivory Wrap Top",category:"women",label:"WOMEN",image:"./assets/images/products/women-ivory-wrap-top.jpeg",alt:"Ivory wrap top",description:"A clean wrap-inspired layer with a soft, minimal finish."},
    {id:"w-noir",name:"Noir Embroidered Top",category:"women",label:"WOMEN",image:"./assets/images/products/women-noir-embroidered-top.jpeg",alt:"Black embroidered top",description:"A dark, considered top with delicate decorative detailing."},
    {id:"m-heritage",name:"Heritage Kurta",category:"men",label:"MEN",image:"./assets/images/products/men-heritage-kurta.jpeg",alt:"Men's heritage kurta",description:"A contemporary take on a familiar silhouette, styled for a confident everyday look."},
    {id:"m-crimson-jacket",name:"Crimson Zip Jacket",category:"men",label:"MEN",image:"./assets/images/products/men-crimson-zip-jacket.jpeg",alt:"Crimson zip jacket",description:"An uncomplicated outer layer with a strong color statement."},
    {id:"m-crimson-kurta",name:"Crimson Everyday Kurta",category:"men",label:"MEN",image:"./assets/images/products/men-crimson-kurta.jpeg",alt:"Crimson everyday kurta",description:"A clean, classic shape with a modern point of view."},
    {id:"k-weekend",name:"Weekend Set",category:"kids",label:"KIDS",image:"./assets/images/products/kids-weekend-set.jpeg",alt:"Kids' coordinated weekend outfits",description:"Comfort-first outfits for little adventures and everyday moments."},
    {id:"k-blush",name:"Blush Flower Dress",category:"kids",label:"KIDS",image:"./assets/images/products/baby-blush-dress.jpeg",alt:"Baby blush flower dress",description:"A playful little dress for special moments and everyday smiles."},
    {id:"k-coral-tee",name:"Coral Graphic Tee",category:"kids",label:"KIDS",image:"./assets/images/products/kids-coral-graphic-tee.jpeg",alt:"Coral graphic T-shirt for kids",description:"An easy T-shirt with a bright, playful graphic."}
  ];

  const productMap = new Map(products.map(product => [product.id, product]));
  const state = {
    filter: "all",
    search: "",
    cart: readStore("novrielle-cart", []),
    wishlist: readStore("novrielle-wishlist", []),
    toastTimer: null
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  function readStore(key, fallback) {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      return Array.isArray(value) ? value : fallback;
    } catch {
      return fallback;
    }
  }

  function writeStore() {
    try {
      localStorage.setItem("novrielle-cart", JSON.stringify(state.cart));
      localStorage.setItem("novrielle-wishlist", JSON.stringify(state.wishlist));
    } catch {
      showToast("Your browser could not save this preview selection.");
    }
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, char => ({
      "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
    }[char]));
  }

  function productCard(product) {
    const saved = state.wishlist.includes(product.id);
    return `
      <article class="product-card" data-product-id="${product.id}">
        <div class="product-card__image" role="button" tabindex="0" data-action="details" data-id="${product.id}" aria-label="View ${escapeHtml(product.name)} details">
          <img src="${product.image}" alt="${escapeHtml(product.alt)}" loading="lazy">
          <span class="product-card__label">Collection preview</span>
          <button class="product-card__wishlist ${saved ? "is-saved" : ""}" type="button" data-action="wishlist-toggle" data-id="${product.id}" aria-label="${saved ? "Remove from" : "Add to"} wishlist" aria-pressed="${saved}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.4 5.8a5 5 0 0 0-7.1 0L12 7.1l-1.3-1.3a5 5 0 0 0-7.1 7.1l1.3 1.3L12 21l7.1-6.8 1.3-1.3a5 5 0 0 0 0-7.1Z"/></svg>
          </button>
          <button class="product-card__view" type="button" data-action="details" data-id="${product.id}">Quick view</button>
        </div>
        <div class="product-card__info">
          <div class="product-card__category">${product.label} · FIRST EDIT</div>
          <h3 class="product-card__title">${escapeHtml(product.name)}</h3>
          <div class="product-card__note">Official details coming soon</div>
          <div class="product-card__actions">
            <span class="product-card__price">Price to be announced</span>
            <button class="product-card__add" type="button" data-action="add-to-bag" data-id="${product.id}">Add to preview bag +</button>
          </div>
        </div>
      </article>`;
  }

  function filteredProducts(filter = state.filter, search = state.search) {
    const term = search.trim().toLowerCase();
    return products.filter(product => {
      const matchesCategory = filter === "all" || product.category === filter;
      const matchesSearch = !term || [product.name, product.category, product.description].some(value => value.toLowerCase().includes(term));
      return matchesCategory && matchesSearch;
    });
  }

  function renderProductLists() {
    const visible = filteredProducts();
    const primary = $("#product-grid");
    const shop = $("#shop-grid");
    if (primary) primary.innerHTML = visible.slice(0, 8).map(productCard).join("") || '<p class="empty-results">No pieces match that search just yet.</p>';
    if (shop) shop.innerHTML = visible.map(productCard).join("") || '<p class="empty-results">No pieces match that search just yet.</p>';
    syncWishlistCount();
  }

  function syncCartCount() {
    const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const countNode = $("#cart-count");
    const drawerCount = $("#drawer-cart-count");
    if (countNode) countNode.textContent = String(count);
    if (drawerCount) drawerCount.textContent = `(${count})`;
  }

  function syncWishlistCount() {
    const count = state.wishlist.length;
    const countNode = $("#wishlist-count");
    const drawerCount = $("#drawer-wishlist-count");
    if (countNode) countNode.textContent = String(count);
    if (drawerCount) drawerCount.textContent = `(${count})`;
  }

  function showToast(message) {
    const toast = $("#toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(state.toastTimer);
    state.toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
  }

  function openLayer(element) {
    const overlay = $("#overlay");
    if (!element || !overlay) return;
    closeLayers();
    overlay.hidden = false;
    requestAnimationFrame(() => overlay.classList.add("is-visible"));
    element.classList.add("is-open");
    element.setAttribute("aria-hidden", "false");
    document.body.classList.add("has-overlay");
  }

  function closeLayers() {
    const overlay = $("#overlay");
    $$(".drawer.is-open").forEach(drawer => {
      drawer.classList.remove("is-open");
      drawer.setAttribute("aria-hidden", "true");
    });
    if (overlay) {
      overlay.classList.remove("is-visible");
      window.setTimeout(() => { overlay.hidden = true; }, 260);
    }
    document.body.classList.remove("has-overlay");
  }

  function renderCart() {
    const target = $("#cart-items");
    if (!target) return;
    if (!state.cart.length) {
      target.innerHTML = '<p class="drawer-empty">Your bag is waiting for a little inspiration.</p>';
    } else {
      target.innerHTML = state.cart.map(item => {
        const product = productMap.get(item.id);
        if (!product) return "";
        return `
          <div class="drawer-item">
            <img src="${product.image}" alt="${escapeHtml(product.alt)}">
            <div><h3>${escapeHtml(product.name)}</h3><p>Qty: ${item.quantity} · Preview only</p></div>
            <button class="drawer-remove" type="button" data-action="remove-cart" data-id="${product.id}">Remove</button>
          </div>`;
      }).join("");
    }
    syncCartCount();
  }

  function renderWishlist() {
    const target = $("#wishlist-items");
    if (!target) return;
    const saved = state.wishlist.map(id => productMap.get(id)).filter(Boolean);
    if (!saved.length) {
      target.innerHTML = '<p class="drawer-empty">Save the pieces that feel like you.</p>';
    } else {
      target.innerHTML = saved.map(product => `
        <div class="drawer-item">
          <img src="${product.image}" alt="${escapeHtml(product.alt)}">
          <div><h3>${escapeHtml(product.name)}</h3><p>${product.label} · Collection preview</p></div>
          <button class="drawer-remove" type="button" data-action="wishlist-toggle" data-id="${product.id}">Remove</button>
        </div>`).join("");
    }
    syncWishlistCount();
  }

  function addToCart(id) {
    const existing = state.cart.find(item => item.id === id);
    if (existing) existing.quantity += 1;
    else state.cart.push({id, quantity:1});
    writeStore();
    renderCart();
    showToast("Added to your preview bag. Orders are not open yet.");
  }

  function toggleWishlist(id) {
    if (state.wishlist.includes(id)) {
      state.wishlist = state.wishlist.filter(value => value !== id);
      showToast("Removed from your wishlist.");
    } else {
      state.wishlist.push(id);
      showToast("Saved to your wishlist.");
    }
    writeStore();
    renderProductLists();
    renderWishlist();
  }

  function openProduct(id) {
    const product = productMap.get(id);
    if (!product) return;
    const target = $("#modal-product-content");
    target.innerHTML = `
      <div class="modal-product">
        <div class="modal-product__image"><img src="${product.image}" alt="${escapeHtml(product.alt)}"></div>
        <div class="modal-product__info">
          <span class="modal-product__category">${product.label} · FIRST EDIT</span>
          <h2 id="modal-product-title">${escapeHtml(product.name)}</h2>
          <p>${escapeHtml(product.description)}</p>
          <span class="modal-product__availability">Product details & pricing to be confirmed</span>
          <button class="button button--dark button--full" type="button" data-action="add-to-bag" data-id="${product.id}">Add to preview bag</button>
          <p class="form-note">This item is shown for design preview. Sizes, price, inventory and ordering will be enabled after the official product catalogue is approved.</p>
        </div>
      </div>`;
    const modal = $("#product-modal");
    if (modal) {
      closeLayers();
      $("#overlay").hidden = false;
      requestAnimationFrame(() => $("#overlay").classList.add("is-visible"));
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("has-overlay");
    }
  }

  function closeModal() {
    const modal = $("#product-modal");
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    const overlay = $("#overlay");
    if (overlay) {
      overlay.classList.remove("is-visible");
      window.setTimeout(() => { overlay.hidden = true; }, 260);
    }
    document.body.classList.remove("has-overlay");
  }

  function setFilter(filter, shouldScroll = false) {
    state.filter = ["all","women","men","kids"].includes(filter) ? filter : "all";
    $$(".filter-pill").forEach(button => {
      const active = button.dataset.filter === state.filter;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    $$(".collection-tab").forEach(button => {
      const active = button.dataset.collection === state.filter;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", String(active));
    });
    renderProductLists();
    if (shouldScroll) $("#shop")?.scrollIntoView({behavior:"smooth",block:"start"});
  }

  function openCart() {
    renderCart();
    openLayer($("#cart-drawer"));
  }

  function openWishlist() {
    renderWishlist();
    openLayer($("#wishlist-drawer"));
  }

  document.addEventListener("click", event => {
    const actionNode = event.target.closest("[data-action]");
    if (actionNode) {
      const action = actionNode.dataset.action;
      const id = actionNode.dataset.id;
      if (action === "cart") openCart();
      if (action === "wishlist") openWishlist();
      if (action === "add-to-bag") addToCart(id);
      if (action === "wishlist-toggle") toggleWishlist(id);
      if (action === "details") openProduct(id);
      if (action === "remove-cart") {
        state.cart = state.cart.filter(item => item.id !== id);
        writeStore();
        renderCart();
        showToast("Removed from your preview bag.");
      }
      if (action === "account") showToast("Customer accounts will open when the store backend is connected.");
    }
    if (event.target.closest("[data-close-drawer]")) closeLayers();
    if (event.target.closest("[data-close-modal]")) closeModal();
    if (event.target.id === "overlay") {
      closeLayers();
      closeModal();
    }
    const filterLink = event.target.closest("[data-filter-link]");
    if (filterLink) {
      event.preventDefault();
      setFilter(filterLink.dataset.filterLink, true);
    }
    const categoryLink = event.target.closest("[data-category-link]");
    if (categoryLink) {
      event.preventDefault();
      setFilter(categoryLink.dataset.categoryLink, true);
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeLayers();
      closeModal();
      const nav = $("#mobile-nav");
      const toggle = $(".mobile-menu-toggle");
      if (nav && toggle) {
        nav.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
      }
    }
    const card = event.target.closest?.(".product-card__image[data-action='details']");
    if (card && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      openProduct(card.dataset.id);
    }
  });

  $$(".filter-pill").forEach(button => button.addEventListener("click", () => setFilter(button.dataset.filter)));
  $$(".collection-tab").forEach(button => button.addEventListener("click", () => setFilter(button.dataset.collection)));

  const searchInput = $("#site-search");
  const searchForm = $("#search-form");
  const searchClear = $("#search-clear");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      state.search = searchInput.value;
      if (searchClear) searchClear.hidden = !state.search;
      renderProductLists();
      if (state.search.trim()) $("#new-in")?.scrollIntoView({behavior:"smooth",block:"start"});
    });
  }
  searchForm?.addEventListener("submit", event => {
    event.preventDefault();
    state.search = searchInput?.value || "";
    renderProductLists();
    $("#new-in")?.scrollIntoView({behavior:"smooth",block:"start"});
  });
  searchClear?.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";
    state.search = "";
    searchClear.hidden = true;
    renderProductLists();
  });

  $(".mobile-menu-toggle")?.addEventListener("click", event => {
    const button = event.currentTarget;
    const nav = $("#mobile-nav");
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    button.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
    if (nav) nav.hidden = expanded;
  });
  $$("#mobile-nav a").forEach(link => link.addEventListener("click", () => {
    $("#mobile-nav").hidden = true;
    $(".mobile-menu-toggle")?.setAttribute("aria-expanded", "false");
  }));

  $("#preview-checkout")?.addEventListener("click", () => {
    showToast("Checkout is in preview mode. Orders will open after prices, delivery rules and secure backend are configured.");
  });

  $("#newsletter-form")?.addEventListener("submit", event => {
    event.preventDefault();
    const input = $("#newsletter-email");
    const note = $("#newsletter-note");
    if (!input || !input.checkValidity()) {
      input?.reportValidity();
      return;
    }
    try {
      const emails = readStore("novrielle-preview-interest", []);
      const email = input.value.trim().toLowerCase();
      if (!emails.includes(email)) emails.push(email);
      localStorage.setItem("novrielle-preview-interest", JSON.stringify(emails));
      input.value = "";
      if (note) note.textContent = "Saved in this browser preview only. No email has been sent to NOVRIELLE.";
      showToast("Thank you. Your preview interest has been saved in this browser.");
    } catch {
      showToast("This browser could not save your preview interest.");
    }
  });

  $("#current-year").textContent = String(new Date().getFullYear());
  renderProductLists();
  renderCart();
  renderWishlist();
})();