(function () {
  const categoryId = document.body.dataset.category;
  const grid = document.getElementById("project-grid");
  const projects = PROJECTS.filter((p) => p.category === categoryId);

  function render(filter) {
    grid.innerHTML = "";
    projects
      .filter((p) => filter === "all" || p.status === filter)
      .forEach((p) => {
        const isLive = p.status === "live";
        const el = document.createElement(isLive ? "a" : "div");
        el.className = `project-card ${isLive ? "is-live" : "is-coming-soon"}`;
        if (isLive) {
          el.href = p.url;
          el.target = "_blank";
          el.rel = "noopener";
        }
        el.innerHTML = `
          <span class="badge ${isLive ? "live" : "coming-soon"}">${isLive ? "Live" : "Coming Soon"}</span>
          ${p.icon ? `<img class="project-icon" src="${p.icon}" alt="" />` : ""}
          <h3>${p.title}</h3>
          <p>${p.description || ""}</p>
        `;
        grid.appendChild(el);
      });
  }

  document.querySelectorAll(".filter-buttons button").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-buttons button").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      render(btn.dataset.filter);
    });
  });

  render("all");
})();
