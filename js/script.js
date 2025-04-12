document.addEventListener("DOMContentLoaded", function () {
  // Navbar Scroll Effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile Menu Toggle
  const navbarNav = document.querySelector(".navbar-nav");
  const hamburgerMenu = document.querySelector("#hamburger-menu");

  hamburgerMenu.addEventListener("click", function (e) {
    e.preventDefault();
    navbarNav.classList.toggle("active");
    this.classList.toggle("active");
  });

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Close mobile menu if open
        if (navbarNav.classList.contains("active")) {
          navbarNav.classList.remove("active");
          hamburgerMenu.classList.remove("active");
        }

        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        });
      }
    });
  });

  // Search Functionality
  const searchButton = document.querySelector("#search");
  const searchForm = document.createElement("div");
  searchForm.className = "search-form";
  searchForm.innerHTML = `
      <form action="" class="search-box">
          <input type="text" placeholder="Cari menu..." autocomplete="off">
          <button type="submit"><i data-feather="search"></i></button>
      </form>
  `;
  document.body.appendChild(searchForm);

  searchButton.addEventListener("click", function (e) {
    e.preventDefault();
    searchForm.classList.toggle("active");
    if (searchForm.classList.contains("active")) {
      searchForm.querySelector("input").focus();
    }
  });

  // Shopping Cart Functionality
  const shoppingCartButton = document.querySelector("#shopping-cart");
  const shoppingCart = document.createElement("div");
  shoppingCart.className = "shopping-cart";
  shoppingCart.innerHTML = `
      <div class="cart-header">
          <h3>Keranjang Belanja</h3>
          <span class="close-cart"><i data-feather="x"></i></span>
      </div>
      <div class="cart-items">
          <p class="empty-cart">Keranjang belanja kosong</p>
      </div>
      <div class="cart-footer">
          <div class="cart-total">
              <span>Total:</span>
              <span class="total-price">IDR 0</span>
          </div>
          <button class="checkout-btn">Checkout</button>
      </div>
  `;
  document.body.appendChild(shoppingCart);

  shoppingCartButton.addEventListener("click", function (e) {
    e.preventDefault();
    shoppingCart.classList.toggle("active");
  });

  // Close cart when clicking close button
  shoppingCart
    .querySelector(".close-cart")
    .addEventListener("click", function () {
      shoppingCart.classList.remove("active");
    });

  // Close menus when clicking outside
  document.addEventListener("click", function (e) {
    // Mobile menu
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
      hamburgerMenu.classList.remove("active");
    }

    // Search form
    if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
      searchForm.classList.remove("active");
    }

    // Shopping cart
    if (
      !shoppingCartButton.contains(e.target) &&
      !shoppingCart.contains(e.target)
    ) {
      shoppingCart.classList.remove("active");
    }
  });

  // Order Button Functionality
  const orderButtons = document.querySelectorAll(".order-btn");
  orderButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const itemName = this.getAttribute("data-item");

      // In a real app, you would add to cart here
      // For demo, we'll just show an alert
      alert(`Anda telah memesan: ${itemName}`);

      // You could also add to the shopping cart
      // addToCart(itemName, price);
    });
  });

  // Form Submission
  const contactForm = document.querySelector(".contact form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = this.querySelector('input[type="text"]').value;
      const email = this.querySelector('input[type="email"]').value;
      const phone = this.querySelector('input[type="tel"]').value;
      const message = this.querySelector("textarea").value;

      // Simple validation
      if (!name || !email || !message) {
        alert("Harap isi semua field yang diperlukan");
        return;
      }

      // In a real app, you would send this to a server
      console.log({ name, email, phone, message });

      // Show success message
      alert("Pesan Anda telah terkirim! Kami akan menghubungi Anda segera.");

      // Reset form
      this.reset();
    });
  }

  // Shopee Button Functionality
  const shopeeButtons = document.querySelectorAll(".shopee-btn");
  shopeeButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      // In a real app, this would redirect to your Shopee store
      alert("Anda akan diarahkan ke toko Shopee kami!");
      // window.location.href = "https://shopee.co.id/your-store";
    });
  });

  // Initialize Feather Icons
  feather.replace();

  // Animation on Scroll
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      ".about .row, .menu-card, .shopee-card, .contact form"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (elementPosition < screenPosition) {
        element.classList.add("animate");
      }
    });
  };

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Run once on page load
});
