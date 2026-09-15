(function () {
  var partials = window.__PARTIALS || {};
  var headerMount = document.getElementById("site-header");
  var footerMount = document.getElementById("site-footer");
  var ctaMount = document.getElementById("site-cta");

  if (headerMount && partials.header) {
    headerMount.outerHTML = partials.header.trim();
  }

  if (ctaMount && partials.cta) {
    ctaMount.outerHTML = partials.cta.trim();
  }

  if (footerMount && partials.footer) {
    footerMount.outerHTML = partials.footer.trim();
  }

  var page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (!page || page === "") page = "index.html";

  document.querySelectorAll("[data-nav]").forEach(function (link) {
    if (link.getAttribute("data-nav") === page) {
      link.classList.add("active");
    }
  });

  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  document.dispatchEvent(new CustomEvent("layout:ready"));
})();
