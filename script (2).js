document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  const quoteForm = document.getElementById("quoteForm");
  const formMessage = document.getElementById("formMessage");
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (quoteForm && formMessage) {
    quoteForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = quoteForm.name.value.trim();
      const email = quoteForm.email.value.trim();
      const service = quoteForm.service.value;

      if (!name || !email || !service) {
        formMessage.textContent = "Please complete your name, email, and service selection.";
        formMessage.className = "form-message error";
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.className = "form-message error";
        return;
      }

      const frequency = quoteForm.frequency.value;
      const products = quoteForm.products.value;

      formMessage.textContent =
        "Thank you, " + name + "! Your " + frequency + " " + products +
        " cleaning request has been received. We will contact you shortly with your quote.";
      formMessage.className = "form-message success";

      quoteForm.reset();
    });
  }
});
