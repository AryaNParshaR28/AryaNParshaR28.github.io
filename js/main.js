(function () {
  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var links = document.querySelector(".nav-links");
    if (!toggle || !links) return;

    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initHeaderScroll() {
    var header = document.querySelector(".site-header");
    if (!header) return;

    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");

        if (entry.target.classList.contains("stagger")) {
          entry.target.querySelectorAll("li").forEach(function (li, i) {
            li.style.transitionDelay = 0.05 * i + "s";
            li.classList.add("is-visible");
          });
        }

        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
  );

  function observeReveals(root) {
    var scope = root || document;
    scope.querySelectorAll(".reveal, .project-item, .capability-card, .stagger").forEach(function (el) {
      if (!el.classList.contains("is-visible")) observer.observe(el);
    });
  }

  function initTiltCards() {
    document.querySelectorAll(".capability-card").forEach(function (card) {
      card.addEventListener("pointermove", function (e) {
        var rect = card.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform =
          "translateY(-6px) rotateX(" + (-y * 4) + "deg) rotateY(" + x * 5 + "deg)";
      });

      card.addEventListener("pointerleave", function () {
        card.style.transform = "";
      });
    });
  }

  function initPlatformSlider() {
    var slider = document.querySelector("[data-platform-slider]");
    if (!slider) return;

    var track = slider.querySelector(".platform-track");
    var viewport = slider.querySelector(".platform-slider-viewport");
    if (!track || !viewport) return;

    track.innerHTML = track.innerHTML + track.innerHTML;

    var offset = 0;
    var paused = false;
    var speed = 0.45;
    var halfWidth = 0;

    function measure() {
      halfWidth = track.scrollWidth / 2;
    }

    function apply() {
      if (halfWidth > 0) {
        offset = ((offset % halfWidth) + halfWidth) % halfWidth;
      }
      track.style.transform = "translate3d(" + -offset + "px, 0, 0)";
    }

    function tick() {
      if (!paused) {
        offset += speed;
        apply();
      }
      window.requestAnimationFrame(tick);
    }

    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);

    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduceMotion) {
      window.requestAnimationFrame(tick);
    }

    slider.addEventListener("mouseenter", function () { paused = true; });
    slider.addEventListener("mouseleave", function () { paused = false; });
  }

  function initHeroFloatMotion() {
    var field = document.querySelector(".hero-float");
    var hero = document.querySelector(".hero");
    if (!field || !hero) return;

    var icons = Array.prototype.slice.call(field.querySelectorAll(".float-icon"));
    if (!icons.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    var targetX = 0;
    var targetY = 0;
    var currentX = 0;
    var currentY = 0;
    var active = false;

    icons.forEach(function (icon, i) {
      if (!icon.style.getPropertyValue("--depth")) {
        icon.style.setProperty("--depth", String(0.7 + (i % 5) * 0.12));
      }
    });

    function onMove(e) {
      var rect = hero.getBoundingClientRect();
      var nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      var ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      targetX = Math.max(-1, Math.min(1, nx));
      targetY = Math.max(-1, Math.min(1, ny));
      active = true;
    }

    function onLeave() {
      targetX = 0;
      targetY = 0;
      active = false;
    }

    function tick() {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      field.style.setProperty("--tilt-x", (-currentY * 5).toFixed(2) + "deg");
      field.style.setProperty("--tilt-y", (currentX * 7).toFixed(2) + "deg");

      icons.forEach(function (icon) {
        var depth = parseFloat(icon.style.getPropertyValue("--depth")) || 1;
        var px = currentX * 22 * depth;
        var py = currentY * 16 * depth;
        icon.style.setProperty("--px", px.toFixed(1) + "px");
        icon.style.setProperty("--py", py.toFixed(1) + "px");
        icon.style.transform =
          "translate3d(" + px.toFixed(1) + "px, " + py.toFixed(1) + "px, 0)";
      });

      window.requestAnimationFrame(tick);
    }

    hero.addEventListener("pointermove", onMove);
    hero.addEventListener("pointerleave", onLeave);
    window.requestAnimationFrame(tick);
  }

  function initPage() {
    initNav();
    initHeaderScroll();
    observeReveals();
    initTiltCards();
    initPlatformSlider();
    initHeroFloatMotion();
    document.body.classList.add("is-ready");
  }

  if (document.querySelector(".site-header")) {
    initPage();
  } else {
    document.addEventListener("layout:ready", initPage);
  }

  /* ---------- Projects pagination ---------- */
  function initProjects() {
    var listEl = document.getElementById("project-list");
    var paginationEl = document.getElementById("project-pagination");
    if (!listEl || !paginationEl || !window.PORTFOLIO_PROJECTS) return;

    var PER_PAGE = 5;
    var projects = window.PORTFOLIO_PROJECTS;
    var totalPages = Math.max(1, Math.ceil(projects.length / PER_PAGE));
    var currentPage = 1;

    function escapeHtml(text) {
      return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    }

    function renderLinks(links) {
      if (!links || !links.length) return "";
      return links
        .map(function (link) {
          if (!link.url) {
            return (
              '<span class="project-link project-link--muted">' +
              escapeHtml(link.label) +
              "</span>"
            );
          }
          return (
            '<a class="project-link" href="' +
            escapeHtml(link.url) +
            '" target="_blank" rel="noopener noreferrer">' +
            escapeHtml(link.label) +
            "</a>"
          );
        })
        .join("<br />");
    }

    function renderProjects() {
      var start = (currentPage - 1) * PER_PAGE;
      var pageItems = projects.slice(start, start + PER_PAGE);

      listEl.innerHTML = pageItems
        .map(function (project, index) {
          return (
            '<article class="project-item" style="--d:' +
            index +
            '">' +
            "<div>" +
            "<h3>" +
            escapeHtml(project.title) +
            "</h3>" +
            '<p class="tech">' +
            escapeHtml(project.tech) +
            "</p>" +
            "</div>" +
            "<p>" +
            escapeHtml(project.description) +
            "</p>" +
            "<div>" +
            renderLinks(project.links) +
            "</div>" +
            "</article>"
          );
        })
        .join("");

      observeReveals(listEl);
      renderPagination();
    }

    function goToPage(page) {
      currentPage = page;
      renderProjects();
      listEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function renderPagination() {
      var prevBtn = document.getElementById("page-prev");
      var nextBtn = document.getElementById("page-next");
      var numbersEl = document.getElementById("page-numbers");
      var metaEl = document.getElementById("page-meta");

      if (totalPages <= 1) {
        paginationEl.hidden = true;
        return;
      }

      paginationEl.hidden = false;
      prevBtn.disabled = currentPage === 1;
      nextBtn.disabled = currentPage === totalPages;

      numbersEl.innerHTML = "";
      for (var i = 1; i <= totalPages; i++) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "pagination-num" + (i === currentPage ? " is-active" : "");
        btn.textContent = String(i);
        btn.setAttribute("aria-label", "Page " + i);
        if (i === currentPage) btn.setAttribute("aria-current", "page");
        btn.addEventListener(
          "click",
          (function (page) {
            return function () {
              goToPage(page);
            };
          })(i)
        );
        numbersEl.appendChild(btn);
      }

      var from = (currentPage - 1) * PER_PAGE + 1;
      var to = Math.min(currentPage * PER_PAGE, projects.length);
      metaEl.textContent =
        "Showing " + from + "–" + to + " of " + projects.length + " projects";
    }

    document.getElementById("page-prev").addEventListener("click", function () {
      if (currentPage > 1) goToPage(currentPage - 1);
    });

    document.getElementById("page-next").addEventListener("click", function () {
      if (currentPage < totalPages) goToPage(currentPage + 1);
    });

    var params = new URLSearchParams(window.location.search);
    var pageParam = parseInt(params.get("page"), 10);
    if (!isNaN(pageParam) && pageParam >= 1 && pageParam <= totalPages) {
      currentPage = pageParam;
    }

    renderProjects();
  }

  if (document.querySelector(".site-header")) {
    initProjects();
  } else {
    document.addEventListener("layout:ready", initProjects);
  }
})();
