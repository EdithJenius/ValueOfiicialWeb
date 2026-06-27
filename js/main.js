// ============================================
// 超值假期旅游咨询 - Main JavaScript
// ============================================

document.addEventListener("DOMContentLoaded", function () {
  // --- Header scroll effect ---
  const header = document.getElementById("header");
  let lastScroll = 0;

  function handleScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 80) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    lastScroll = scrollY;
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // --- Mobile menu toggle ---
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
      });
    });
  }

  // --- FAQ accordion ---
  document.querySelectorAll(".faq-question").forEach(function (question) {
    question.addEventListener("click", function () {
      var item = this.parentElement;
      item.classList.toggle("open");
    });
  });

  // --- Destination filter (on destinations page) ---
  var filterBtns = document.querySelectorAll(".filter-btn");
  var destCards = document.querySelectorAll(".dest-card[data-category]");

  if (filterBtns.length > 0 && destCards.length > 0) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterBtns.forEach(function (b) { b.classList.remove("active"); });
        this.classList.add("active");

        var filter = this.getAttribute("data-filter");

        destCards.forEach(function (card) {
          if (filter === "all" || card.getAttribute("data-category") === filter) {
            card.style.display = "";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  // --- Contact form ---
  var contactForm = document.getElementById("contactForm");
  var formSuccess = document.getElementById("formSuccess");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simple validation
      var name = document.getElementById("name").value.trim();
      var contact = document.getElementById("contact").value.trim();

      if (!name || !contact) {
        alert("请填写姓名和联系方式");
        return;
      }

      // Simulate form submission
      contactForm.style.display = "none";
      formSuccess.style.display = "block";

      // In production, you would send the data to your backend here
      console.log("Form submitted:", {
        name: name,
        contact: contact,
        destination: document.getElementById("destination").value,
        travelers: document.getElementById("travelers").value,
        travelDate: document.getElementById("travelDate").value,
        budget: document.getElementById("budget").value,
        message: document.getElementById("message").value
      });
    });
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll("a[href^=\"/\"]").forEach(function (link) {
    link.addEventListener("click", function (e) {
      var href = this.getAttribute("href");
      // Only do smooth scroll for same-page anchors
      if (href.startsWith("#") && href.length > 1) {
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
});
