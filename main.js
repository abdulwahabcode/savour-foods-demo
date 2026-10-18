/* Savour Foods — menu data, tabs, nav, reveal */
(function () {
  "use strict";

  /* ---------------- Menu data (PKR) ---------------- */
  var MENU = [
    // Pulao
    { cat: "pulao", name: "Chicken Pulao", price: 380, desc: "Slow-cooked yakhni rice with tender chicken & whole spices — our legend.", tags: ["bestseller"] },
    { cat: "pulao", name: "Beef Pulao", price: 480, desc: "Rich beef yakhni pulao, deeper flavour for the true pulao lover.", tags: [] },
    { cat: "pulao", name: "Kabab Rice (Chicken)", price: 420, desc: "Signature combo — 2 juicy seekh kababs over fragrant pulao rice.", tags: ["signature"] },
    { cat: "pulao", name: "Kabab Rice (Beef)", price: 500, desc: "Beef seekh kababs on a bed of steaming yakhni rice.", tags: [] },
    { cat: "pulao", name: "Chicken Tikka Rice", price: 450, desc: "Char-grilled chicken tikka piece served with pulao rice.", tags: [] },
    { cat: "pulao", name: "Egg Pulao", price: 280, desc: "Simple, homely — masala fried egg with our famous pulao rice.", tags: ["veg"] },
    // Kababs
    { cat: "kababs", name: "Chicken Seekh Kabab (2 pcs)", price: 380, desc: "Hand-rolled, charcoal-grilled, served with onion & chutney.", tags: ["bestseller"] },
    { cat: "kababs", name: "Beef Seekh Kabab (2 pcs)", price: 450, desc: "Smoky beef seekh kababs, grilled to order.", tags: [] },
    { cat: "kababs", name: "Chicken Malai Boti (8 pcs)", price: 480, desc: "Creamy, melt-in-mouth malai boti cubes.", tags: [] },
    { cat: "kababs", name: "Chicken Behari Boti (8 pcs)", price: 450, desc: "Behari-spiced boti with that classic charred edge.", tags: [] },
    { cat: "kababs", name: "Reshmi Kabab (6 pcs)", price: 480, desc: "Silky-soft reshmi kababs, mild & creamy.", tags: [] },
    { cat: "kababs", name: "Shami Kabab (4 pcs)", price: 300, desc: "Classic shami — perfect with naan or rice.", tags: [] },
    // BBQ
    { cat: "bbq", name: "Chicken Tikka (Leg)", price: 380, desc: "Overnight-marinated leg piece, flame-grilled.", tags: ["bestseller"] },
    { cat: "bbq", name: "Chicken Tikka (Chest)", price: 420, desc: "Juicy chest piece with smoky char.", tags: [] },
    { cat: "bbq", name: "Beef Bihari Kabab (8 pcs)", price: 520, desc: "Thin bihari strips, mustard-oil marinade, coal-fired.", tags: [] },
    { cat: "bbq", name: "Chicken Wings (6 pcs)", price: 450, desc: "Sticky, spicy grilled wings.", tags: [] },
    { cat: "bbq", name: "Mixed BBQ Platter", price: 1250, desc: "Tikka, seekh kabab & malai boti on one sizzling platter (serves 2–3).", tags: ["signature"] },
    // Family Deals
    { cat: "deals", name: "Lunch Special", price: 420, desc: "1 Chicken Pulao + soft drink + salad cup. Serves 1.", tags: [] },
    { cat: "deals", name: "Family Deal", price: 1550, desc: "2 Chicken Pulao, 4 seekh kabab, 4 naan, 2 raita, 1.5L drink. Serves 4–5.", tags: ["bestseller"] },
    { cat: "deals", name: "Family Deal 2", price: 1950, desc: "2 Beef Pulao, 6 seekh kabab, 1 tikka, 6 naan, 3 raita, 1.5L drink. Serves 5–6.", tags: [] },
    { cat: "deals", name: "Mega Family Feast", price: 2450, desc: "3 Beef Pulao, 6 seekh kabab, BBQ platter, 6 naan, 3 raita, 2×1.5L drinks. Serves 8–10.", tags: ["signature"] },
    { cat: "deals", name: "Kids Meal", price: 650, desc: "Chicken pulao (small), 2 shami kabab, juice box & kheer. Serves 1.", tags: ["veg"] },
    // Breads & Sides
    { cat: "sides", name: "Tandoori Naan", price: 60, desc: "Fresh from the tandoor, blistered & hot.", tags: ["veg"] },
    { cat: "sides", name: "Roghni Naan", price: 70, desc: "Soft, sesame-topped roghni naan.", tags: ["veg"] },
    { cat: "sides", name: "Garlic Naan", price: 100, desc: "Buttery naan with roasted garlic.", tags: ["veg"] },
    { cat: "sides", name: "Raita", price: 120, desc: "Cool mint raita — the pulao's best friend.", tags: ["veg"] },
    { cat: "sides", name: "Fresh Salad", price: 130, desc: "Kachumber-style chopped salad.", tags: ["veg"] },
    { cat: "sides", name: "Green Chutney", price: 100, desc: "Spicy hari chutney, made fresh daily.", tags: ["veg"] },
    // Drinks & Dessert
    { cat: "drinks", name: "Soft Drink", price: 140, desc: "Chilled regular bottle.", tags: [] },
    { cat: "drinks", name: "Fresh Lime Soda", price: 150, desc: "Sweet, salted or mixed — squeezed fresh.", tags: ["veg"] },
    { cat: "drinks", name: "Mint Margarita", price: 180, desc: "Fizzy mint cooler.", tags: ["veg"] },
    { cat: "drinks", name: "Sweet / Salted Lassi", price: 160, desc: "Thick Punjabi-style lassi.", tags: ["veg"] },
    { cat: "drinks", name: "Kashmiri Chai", price: 200, desc: "Pink tea with crushed nuts.", tags: ["veg"] },
    { cat: "drinks", name: "Kheer", price: 150, desc: "Slow-cooked rice pudding with cardamom.", tags: ["veg"] }
  ];

  var CAT_LABEL = {
    pulao: "Pulao", kababs: "Kababs", bbq: "BBQ",
    deals: "Family Deals", sides: "Breads & Sides", drinks: "Drinks & Dessert"
  };

  var TAG_LABEL = { bestseller: "Bestseller", signature: "Signature", veg: "Veg" };
  var TAG_CLASS = { bestseller: "tag-hot", signature: "tag-hot", veg: "tag-veg" };

  var grid = document.getElementById("menuGrid");

  function tagHtml(tags, cat) {
    var out = '<span class="tag tag-cat">' + CAT_LABEL[cat] + "</span>";
    tags.forEach(function (t) {
      out += '<span class="tag ' + (TAG_CLASS[t] || "tag-cat") + '">' + (TAG_LABEL[t] || t) + "</span>";
    });
    return out;
  }

  function renderMenu(filter) {
    var html = "";
    MENU.forEach(function (item) {
      if (filter !== "all" && item.cat !== filter) return;
      html +=
        '<article class="menu-item">' +
          '<div class="menu-item-top">' +
            "<h3>" + item.name + "</h3>" +
            '<span class="menu-price">Rs ' + item.price.toLocaleString("en-PK") + "</span>" +
          "</div>" +
          '<p class="menu-desc">' + item.desc + "</p>" +
          '<div class="menu-meta">' + tagHtml(item.tags, item.cat) + "</div>" +
        "</article>";
    });
    grid.innerHTML = html;
  }

  renderMenu("all");

  /* ---------------- Tabs ---------------- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".tab"));
  function setFilter(filter, scroll) {
    tabs.forEach(function (t) {
      var on = t.getAttribute("data-filter") === filter;
      t.classList.toggle("active", on);
      t.setAttribute("aria-selected", on ? "true" : "false");
    });
    renderMenu(filter);
    if (scroll) {
      document.getElementById("menu").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  tabs.forEach(function (t) {
    t.addEventListener("click", function () { setFilter(t.getAttribute("data-filter"), false); });
  });

  /* "See pulao →" style links jump to menu + set tab */
  document.querySelectorAll("[data-goto]").forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      setFilter(a.getAttribute("data-goto"), true);
    });
  });

  /* ---------------- Sticky nav shadow ---------------- */
  var nav = document.getElementById("nav");
  function onScroll() { nav.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------------- Mobile menu ---------------- */
  var toggle = document.getElementById("navToggle");
  var mobileMenu = document.getElementById("mobileMenu");
  toggle.addEventListener("click", function () {
    var open = mobileMenu.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  mobileMenu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      mobileMenu.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------------- Reveal on scroll ---------------- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  /* ---------------- Year ---------------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
