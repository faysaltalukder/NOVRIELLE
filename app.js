(() => {
  "use strict";

  const products = [
    {id:"w-sage",name:"Sage Gathered Blouse",category:"women",group:"Womens Top Wear",image:"./assets/images/products/women-sage-gathered-top.png",alt:"Sage green gathered blouse"},
    {id:"w-ivory-layer",name:"Ivory Layered Blouse",category:"women",group:"Womens Top Wear",image:"./assets/images/products/women-ivory-layered-blouse.png",alt:"Ivory layered blouse"},
    {id:"w-floral",name:"Floral Day Dress",category:"women",group:"Ethnic Wear",image:"./assets/images/products/women-floral-day-dress.png",alt:"Floral day dress"},
    {id:"w-rose-jacket",name:"Rose Utility Jacket",category:"women",group:"Womens Top Wear",image:"./assets/images/products/women-rose-utility-jacket.png",alt:"Rose utility jacket"},
    {id:"w-piped",name:"Ivory Piped Shirt",category:"women",group:"Womens Top Wear",image:"./assets/images/products/women-ivory-piped-shirt.png",alt:"Ivory piped shirt"},
    {id:"w-sky",name:"Sky Tie Blouse",category:"women",group:"Womens Top Wear",image:"./assets/images/products/women-sky-tie-blouse.png",alt:"Sky blue tie blouse"},
    {id:"w-berry",name:"Berry Printed Tunic",category:"women",group:"Ethnic Wear",image:"./assets/images/products/women-berry-printed-tunic.png",alt:"Berry printed tunic"},
    {id:"w-wrap",name:"Ivory Wrap Top",category:"women",group:"Womens Top Wear",image:"./assets/images/products/women-ivory-wrap-top.jpeg",alt:"Ivory wrap top"},
    {id:"w-noir",name:"Noir Embroidered Top",category:"women",group:"Womens Top Wear",image:"./assets/images/products/women-noir-embroidered-top.jpeg",alt:"Black embroidered top"},
    {id:"w-navy",name:"Navy Everyday Tee",category:"women",group:"Womens Top Wear",image:"./assets/images/products/women-navy-casual-top.jpeg",alt:"Navy women's casual top"},
    {id:"w-midi",name:"Noir Midi Dress",category:"women",group:"Ethnic Wear",image:"./assets/images/products/women-noir-midi-dress.png",alt:"Black midi dress"},
    {id:"w-coral",name:"Coral Utility Jacket",category:"women",group:"Womens Top Wear",image:"./assets/images/products/women-coral-utility-jacket.png",alt:"Coral utility jacket"},
    {id:"w-white",name:"White Layered Shirt",category:"women",group:"Womens Top Wear",image:"./assets/images/products/women-white-layered-shirt.png",alt:"White layered shirt"},
    {id:"w-cobalt",name:"Cobalt Embroidered Tunic",category:"women",group:"Ethnic Wear",image:"./assets/images/products/women-cobalt-embroidered-tunic.png",alt:"Cobalt embroidered tunic"},
    {id:"w-ethnic",name:"Occasion Edit Set",category:"women",group:"Ethnic Wear",image:"./assets/images/products/women-ethnic-occasion-set.jpeg",alt:"Women's ethnic occasion set"},

    {id:"m-heritage",name:"Heritage Kurta",category:"men",group:"Panjabi",image:"./assets/images/products/men-heritage-kurta.jpeg",alt:"Men's heritage kurta"},
    {id:"m-jacket",name:"Crimson Zip Jacket",category:"men",group:"Mens Top Wear",image:"./assets/images/products/men-crimson-zip-jacket.jpeg",alt:"Crimson zip jacket"},
    {id:"m-crimson",name:"Crimson Everyday Kurta",category:"men",group:"Panjabi",image:"./assets/images/products/men-crimson-kurta.jpeg",alt:"Crimson kurta"},
    {id:"m-sky",name:"Sky Blue Polo",category:"men",group:"Mens Top Wear",image:"./assets/images/products/men-sky-polo.png",alt:"Sky blue men's polo"},
    {id:"m-stripe",name:"Red Stripe Polo",category:"men",group:"Mens Top Wear",image:"./assets/images/products/men-red-stripe-polo.png",alt:"Red striped men's polo"},
    {id:"m-plum",name:"Plum Heritage Kurta",category:"men",group:"Panjabi",image:"./assets/images/products/men-plum-kurta.jpeg",alt:"Plum men's kurta"},
    {id:"m-ivory",name:"Ivory Classic Kurta",category:"men",group:"Panjabi",image:"./assets/images/products/men-ivory-kurta.jpeg",alt:"Ivory men's kurta"},
    {id:"m-blue-shirt",name:"Blue Printed Shirt",category:"men",group:"Mens Top Wear",image:"./assets/images/products/men-blue-printed-shirt.jpeg",alt:"Blue printed men's shirt"},

    {id:"k-weekend",name:"Kids Weekend Set",category:"kids",group:"Kids Collection",image:"./assets/images/products/kids-weekend-set.jpeg",alt:"Kids coordinated weekend outfits"},
    {id:"k-blush",name:"Blush Flower Dress",category:"kids",group:"Kids Collection",image:"./assets/images/products/baby-blush-dress.jpeg",alt:"Blush flower dress"},
    {id:"k-coral-tee",name:"Coral Graphic Tee",category:"kids",group:"Kids Collection",image:"./assets/images/products/kids-coral-graphic-tee.jpeg",alt:"Coral graphic tee for kids"},
    {id:"k-navy-set",name:"Navy Floral Co-ord",category:"kids",group:"Kids Collection",image:"./assets/images/products/kids-navy-floral-set.png",alt:"Navy floral kids set"},
    {id:"k-teal-set",name:"Teal Ethnic Set",category:"kids",group:"Kids Collection",image:"./assets/images/products/kids-teal-ethnic-set.png",alt:"Teal ethnic set for kids"},
    {id:"k-floral-dress",name:"Floral Party Dress",category:"kids",group:"Kids Collection",image:"./assets/images/products/kids-floral-party-dress.jpeg",alt:"Floral party dress for kids"},
    {id:"k-sand-kurta",name:"Sand Classic Kurta",category:"kids",group:"Panjabi",image:"./assets/images/products/kids-sand-kurta.jpeg",alt:"Sand kurta for boys"},
    {id:"k-indigo-kurta",name:"Indigo Occasion Kurta",category:"kids",group:"Panjabi",image:"./assets/images/products/kids-indigo-kurta.jpeg",alt:"Indigo kurta for boys"},

    {id:"a-wallet-black",name:"Black Leather Wallet",category:"accessories",group:"Mens Wallet",image:"./assets/images/products/accessory-black-leather-wallet.jpeg",alt:"Black leather wallet"},
    {id:"a-wallet-brown",name:"Brown Long Wallet",category:"accessories",group:"Mens Wallet",image:"./assets/images/products/accessory-brown-long-wallet.jpeg",alt:"Brown long wallet"},
    {id:"a-wallet-woven",name:"Woven Leather Wallet",category:"accessories",group:"Mens Wallet",image:"./assets/images/products/accessory-woven-wallet.jpeg",alt:"Woven leather wallet"},
    {id:"a-wallet-fold",name:"Black Fold Wallet",category:"accessories",group:"Mens Wallet",image:"./assets/images/products/accessory-black-fold-wallet.jpeg",alt:"Black fold wallet"},
    {id:"a-wallet-open",name:"Classic Open Wallet",category:"accessories",group:"Mens Wallet",image:"./assets/images/products/accessory-open-wallet.jpeg",alt:"Open black wallet"},
    {id:"a-wallet-slim",name:"Slim Leather Wallet",category:"accessories",group:"Mens Wallet",image:"./assets/images/products/accessory-slim-wallet.png",alt:"Slim black wallet"},
    {id:"a-cap",name:"Camo Everyday Cap",category:"accessories",group:"Caps",image:"./assets/images/products/accessory-camo-cap.png",alt:"Camouflage cap"},
    {id:"a-belt",name:"Brown Leather Belt",category:"accessories",group:"Mens Belt",image:"./assets/images/products/accessory-brown-leather-belt.jpeg",alt:"Brown leather belt"}
  ];

  const productMap = new Map(products.map(product => [product.id, product]));
  const state = {
    cart: readStorage("novrielle-cart", []),
    wishlist: readStorage("novrielle-wishlist", []),
    search: "",
    activeTrending: "panjabi",
    activeAccessory: "wallets",
    heroSlide: 0,
    heroTimer: null,
    toastTimer: null
  };

  const shelves = {
    new: ["w-ethnic","m-heritage","w-sage","k-floral-dress","m-sky","w-midi","k-weekend","w-cobalt","m-blue-shirt","w-rose-jacket","k-teal-set","a-wallet-black"],
    panjabi: ["m-heritage","m-crimson","m-plum","m-ivory","k-sand-kurta","k-indigo-kurta","m-heritage","m-plum","m-crimson","m-ivory","k-sand-kurta","k-indigo-kurta"],
    ethnic: ["w-ethnic","w-berry","w-cobalt","w-floral","w-sky","k-teal-set","k-floral-dress","k-navy-set","w-midi","w-ethnic","w-cobalt","w-berry"],
    menswear: ["m-sky","m-stripe","m-blue-shirt","m-jacket","m-heritage","m-crimson","m-plum","m-ivory","m-sky","m-stripe","m-blue-shirt","m-jacket"],
    womenswear: ["w-sage","w-piped","w-wrap","w-noir","w-navy","w-white","w-coral","w-sky","w-midi","w-cobalt","w-berry","w-rose-jacket"],
    wallets: ["a-wallet-black","a-wallet-brown","a-wallet-woven","a-wallet-fold","a-wallet-open","a-wallet-slim","a-wallet-black","a-wallet-woven"],
    belts: ["a-belt","a-belt","a-wallet-brown","a-wallet-black"],
    caps: ["a-cap","a-cap","a-wallet-black","a-wallet-brown"],
    all: ["a-wallet-black","a-wallet-brown","a-wallet-woven","a-wallet-fold","a-wallet-open","a-wallet-slim","a-cap","a-belt"]
  };

  const $ = (selector, root=document) => root.querySelector(selector);
  const $$ = (selector, root=document) => Array.from(root.querySelectorAll(selector));

  function readStorage(key, fallback) {
    try {
      const parsed = JSON.parse(localStorage.getItem(key));
      return Array.isArray(parsed) ? parsed : fallback;
    } catch { return fallback; }
  }

  function persist() {
    try {
      localStorage.setItem("novrielle-cart", JSON.stringify(state.cart));
      localStorage.setItem("novrielle-wishlist", JSON.stringify(state.wishlist));
    } catch {
      toast("Your browser could not save this preview selection.");
    }
  }

  function safe(text) {
    return String(text).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  }

  function renderCard(product, index) {
    if (!product) return "";
    const saved = state.wishlist.includes(product.id);
    const badge = index < 3 ? "NEW EDIT" : "NOVRIELLE";
    return `
      <article class="product-card" data-product="${product.id}">
        <div class="product-card__image" role="button" tabindex="0" data-action="details" data-id="${product.id}" aria-label="View details for ${safe(product.name)}">
          <img src="${product.image}" alt="${safe(product.alt)}" loading="lazy">
          <span class="product-card__badge">${badge}</span>
          <button type="button" class="product-card__wishlist ${saved ? "is-saved" : ""}" data-action="wishlist" data-id="${product.id}" aria-label="${saved ? "Remove from wishlist" : "Add to wishlist"}" aria-pressed="${saved}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.4 5.8a5 5 0 0 0-7.1 0L12 7.1l-1.3-1.3a5 5 0 0 0-7.1 7.1l1.3 1.3L12 21l7.1-6.8 1.3-1.3a5 5 0 0 0 0-7.1Z"/></svg>
          </button>
          <button class="product-card__quick" type="button" data-action="details" data-id="${product.id}">Quick View</button>
        </div>
        <div class="product-card__body">
          <div class="product-card__category">${safe(product.group)}</div>
          <h3 class="product-card__name">${safe(product.name)}</h3>
          <div class="product-card__price-row"><span class="product-card__price">Price coming soon</span><span class="product-card__more">Details ↗</span></div>
          <button class="product-card__add" type="button" data-action="add-cart" data-id="${product.id}">Add to preview bag</button>
        </div>
      </article>`;
  }

  function renderShelf(target, ids) {
    const node = $(target);
    if (!node) return;
    const term = state.search.trim().toLowerCase();
    let list = [...new Map(ids.map(id => productMap.get(id)).filter(Boolean).map(product => [product.id, product])).values()];
    if (term) {
      list = products.filter(p => [p.name,p.category,p.group,p.alt].some(v => v.toLowerCase().includes(term)));
      const title = $(".section-title-row h2", $("#new-collection"));
      if (title) title.textContent = "Search Results";
    } else if (target === "#new-products") {
      const title = $(".section-title-row h2", $("#new-collection"));
      if (title) title.textContent = "New Collection";
    }
    node.innerHTML = list.map((product,i) => renderCard(product,i)).join("") || '<div class="empty-results">No matching products found. Try another search.</div>';
  }

  function renderAll() {
    renderShelf("#new-products", shelves.new);
    if (!state.search) {
      renderShelf("#trending-products", shelves[state.activeTrending]);
      renderShelf("#accessory-products", shelves[state.activeAccessory]);
    } else {
      $("#trending-products").innerHTML = "";
      $("#accessory-products").innerHTML = "";
    }
    syncCounts();
  }

  function syncCounts() {
    const cartCount = state.cart.reduce((n,item)=>n+item.quantity,0);
    $("#cart-count").textContent = String(cartCount);
    $("#wishlist-count").textContent = String(state.wishlist.length);
    $("#drawer-cart-count").textContent = `(${cartCount})`;
    $("#drawer-wishlist-count").textContent = `(${state.wishlist.length})`;
  }

  function toast(message) {
    const node = $("#toast");
    if (!node) return;
    node.textContent = message;
    node.classList.add("is-visible");
    clearTimeout(state.toastTimer);
    state.toastTimer = setTimeout(()=>node.classList.remove("is-visible"),2600);
  }

  function renderCart() {
    const node = $("#cart-items");
    if (!node) return;
    if (!state.cart.length) {
      node.innerHTML = '<p class="drawer-empty">Your cart is empty. Start exploring the collection.</p>';
    } else {
      node.innerHTML = state.cart.map(item => {
        const p = productMap.get(item.id);
        if (!p) return "";
        return `<div class="drawer-item">
          <img src="${p.image}" alt="${safe(p.alt)}">
          <div><h3>${safe(p.name)}</h3><p>Quantity: ${item.quantity} · Product preview</p></div>
          <button type="button" data-action="remove-cart" data-id="${p.id}">Remove</button>
        </div>`;
      }).join("");
    }
    syncCounts();
  }

  function renderWishlist() {
    const node = $("#wishlist-items");
    if (!node) return;
    const list = state.wishlist.map(id=>productMap.get(id)).filter(Boolean);
    if (!list.length) node.innerHTML = '<p class="drawer-empty">Your wishlist is waiting for your favourites.</p>';
    else node.innerHTML = list.map(p=>`<div class="drawer-item">
      <img src="${p.image}" alt="${safe(p.alt)}">
      <div><h3>${safe(p.name)}</h3><p>${safe(p.group)}</p></div>
      <button type="button" data-action="wishlist" data-id="${p.id}">Remove</button>
    </div>`).join("");
    syncCounts();
  }

  function showDrawer(id) {
    closeDrawers();
    const drawer = $(id);
    $("#overlay").hidden = false;
    requestAnimationFrame(()=>$("#overlay").classList.add("is-visible"));
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden","false");
    document.body.classList.add("has-overlay");
  }

  function closeDrawers() {
    $$(".drawer.is-open").forEach(drawer=>{
      drawer.classList.remove("is-open");
      drawer.setAttribute("aria-hidden","true");
    });
    $("#overlay").classList.remove("is-visible");
    setTimeout(()=>$("#overlay").hidden=true,250);
    document.body.classList.remove("has-overlay");
  }

  function closeModal() {
    const modal=$("#product-modal");
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden","true");
    $("#overlay").classList.remove("is-visible");
    setTimeout(()=>$("#overlay").hidden=true,250);
    document.body.classList.remove("has-overlay");
  }

  function openProduct(id) {
    const p=productMap.get(id);
    if(!p)return;
    $("#modal-product-content").innerHTML=`<div class="modal-product">
      <div class="modal-product__image"><img src="${p.image}" alt="${safe(p.alt)}"></div>
      <div class="modal-product__info">
        <small>${safe(p.group)} · NOVRIELLE COLLECTION</small>
        <h2 id="modal-product-title">${safe(p.name)}</h2>
        <p>Part of the NOVRIELLE collection preview. Official product description, size options, colour availability and pricing will be published with the confirmed catalogue.</p>
        <span class="modal-product__note">PRODUCT DETAILS COMING SOON</span>
        <button type="button" class="dark-button dark-button--full" data-action="add-cart" data-id="${p.id}">ADD TO PREVIEW CART</button>
      </div>
    </div>`;
    $(".drawer.is-open").forEach(drawer=>{
      drawer.classList.remove("is-open");
      drawer.setAttribute("aria-hidden","true");
    });
    $("#overlay").hidden=false;
    requestAnimationFrame(()=>$("#overlay").classList.add("is-visible"));
    $("#product-modal").classList.add("is-open");
    $("#product-modal").setAttribute("aria-hidden","false");
    document.body.classList.add("has-overlay");
  }

  function addCart(id) {
    const found=state.cart.find(item=>item.id===id);
    if(found)found.quantity++;
    else state.cart.push({id,quantity:1});
    persist();
    renderCart();
    toast("Added to your preview cart. Orders are not open yet.");
  }

  function toggleWishlist(id) {
    if(state.wishlist.includes(id)){
      state.wishlist=state.wishlist.filter(value=>value!==id);
      toast("Removed from wishlist.");
    }else{
      state.wishlist.push(id);
      toast("Added to wishlist.");
    }
    persist();
    renderAll();
    renderWishlist();
  }

  function setHero(index) {
    const slides=$$(".hero-slide");
    state.heroSlide=(index+slides.length)%slides.length;
    slides.forEach((slide,i)=>slide.classList.toggle("is-active",i===state.heroSlide));
    $$("#hero-dots button").forEach((dot,i)=>dot.classList.toggle("is-active",i===state.heroSlide));
  }

  $("#hero-prev").addEventListener("click",()=>setHero(state.heroSlide-1));
  $("#hero-next").addEventListener("click",()=>setHero(state.heroSlide+1));
  $$("#hero-dots button").forEach(button=>button.addEventListener("click",()=>setHero(Number(button.dataset.slideTo))));
  state.heroTimer=setInterval(()=>setHero(state.heroSlide+1),6500);

  $("#category-toggle").addEventListener("click",()=>{
    const menu=$("#mega-menu");
    const open=menu.hidden;
    menu.hidden=!open;
    $("#category-toggle").setAttribute("aria-expanded",String(open));
  });

  $("#mobile-menu-button").addEventListener("click",()=>{
    const nav=$("#mobile-navigation");
    const open=nav.hidden;
    nav.hidden=!open;
    $("#mobile-menu-button").setAttribute("aria-expanded",String(open));
  });
  $$("#mobile-navigation a").forEach(link=>link.addEventListener("click",()=>{
    $("#mobile-navigation").hidden=true;
    $("#mobile-menu-button").setAttribute("aria-expanded","false");
  }));

  document.addEventListener("click",event=>{
    const openButton=event.target.closest("[data-open]");
    if(openButton){
      const type=openButton.dataset.open;
      if(type==="cart"){renderCart();showDrawer("#cart-drawer");}
      if(type==="wishlist"){renderWishlist();showDrawer("#wishlist-drawer");}
      if(type==="account")toast("Customer accounts will be enabled after the store backend is connected.");
    }
    const action=event.target.closest("[data-action]");
    if(action){
      const id=action.dataset.id;
      if(action.dataset.action==="details")openProduct(id);
      if(action.dataset.action==="wishlist")toggleWishlist(id);
      if(action.dataset.action==="add-cart")addCart(id);
      if(action.dataset.action==="remove-cart"){
        state.cart=state.cart.filter(item=>item.id!==id);
        persist();renderCart();toast("Removed from cart preview.");
      }
    }
    if(event.target.closest("[data-close]"))closeDrawers();
    if(event.target.closest("[data-modal-close]"))closeModal();
    if(event.target.id==="overlay"){closeDrawers();closeModal();}
    if(!event.target.closest(".main-navigation")&&!event.target.closest("#category-toggle")){
      $("#mega-menu").hidden=true;
      $("#category-toggle").setAttribute("aria-expanded","false");
    }
  });

  document.addEventListener("keydown",event=>{
    if(event.key==="Escape"){
      closeDrawers();closeModal();
      $("#mega-menu").hidden=true;
      $("#category-toggle").setAttribute("aria-expanded","false");
      $("#mobile-navigation").hidden=true;
      $("#mobile-menu-button").setAttribute("aria-expanded","false");
    }
    const card=event.target.closest?.(".product-card__image[data-action='details']");
    if(card&&(event.key==="Enter"||event.key===" ")){event.preventDefault();openProduct(card.dataset.id);}
  });

  $$(".shelf-tabs button[data-shelf]").forEach(button=>button.addEventListener("click",()=>{
    state.activeTrending=button.dataset.shelf;
    $$(".shelf-tabs button[data-shelf]").forEach(b=>{
      const active=b===button;b.classList.toggle("is-active",active);b.setAttribute("aria-selected",String(active));
    });
    const labels={panjabi:"Panjabi",ethnic:"Ethnic Wear",menswear:"Mens Top Wear",womenswear:"Womens Top Wear"};
    $("#trending-see-label").textContent=labels[state.activeTrending];
    if(!state.search)renderShelf("#trending-products",shelves[state.activeTrending]);
  }));

  $$(".shelf-tabs button[data-accessory]").forEach(button=>button.addEventListener("click",()=>{
    state.activeAccessory=button.dataset.accessory;
    $$(".shelf-tabs button[data-accessory]").forEach(b=>{
      const active=b===button;b.classList.toggle("is-active",active);b.setAttribute("aria-selected",String(active));
    });
    const labels={wallets:"Mens Wallet",belts:"Mens Belt",caps:"Caps",all:"All Accessories"};
    $("#accessory-see-label").textContent=labels[state.activeAccessory];
    if(!state.search)renderShelf("#accessory-products",shelves[state.activeAccessory]);
  }));

  const search=$("#site-search");
  $("#search-form").addEventListener("submit",event=>{
    event.preventDefault();
    state.search=search.value.trim();
    renderAll();
    $("#new-collection").scrollIntoView({behavior:"smooth",block:"start"});
  });
  search.addEventListener("input",()=>{
    state.search=search.value.trim();
    renderAll();
  });
  $("#search-clear").addEventListener("click",()=>{
    search.value="";state.search="";renderAll();$("#search-clear").hidden=true;
  });
  search.addEventListener("input",()=>$("#search-clear").hidden=!search.value);

  $("#checkout-preview").addEventListener("click",()=>toast("Checkout is not connected yet. Official pricing, delivery and secure order processing are still being prepared."));
  $("#current-year").textContent=String(new Date().getFullYear());

  renderAll();
  renderCart();
  renderWishlist();
})();