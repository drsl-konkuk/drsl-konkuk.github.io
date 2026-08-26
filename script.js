
const bodyPage = document.body.dataset.page;
document.querySelectorAll("[data-page]").forEach(a => {
  if (a.dataset.page === bodyPage) a.classList.add("active");
});

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

document.getElementById("year").textContent = new Date().getFullYear();

const publicationList = document.getElementById("publication-list");
const search = document.getElementById("publication-search");

if (publicationList) {
  let publications = [];

  const render = (items) => {
    publicationList.innerHTML = "";
    if (!items.length) {
      publicationList.innerHTML = '<p>No matching publications found.</p>';
      return;
    }
    items
      .slice()
      .sort((a,b) => b.year - a.year)
      .forEach(item => {
        const article = document.createElement("article");
        article.className = "publication-item";
        const year = document.createElement("div");
        year.className = "publication-year";
        year.textContent = item.year;
        const content = document.createElement("div");
        const p = document.createElement("p");
        p.textContent = item.text;
        content.appendChild(p);

        if (item.doi) {
          const link = document.createElement("a");
          link.className = "publication-link";
          link.href = item.doi;
          link.target = "_blank";
          link.rel = "noopener";
          link.textContent = "DOI ↗";
          content.appendChild(link);
        }

        article.append(year, content);
        publicationList.appendChild(article);
      });
  };

  fetch("data/publications.json")
    .then(r => r.json())
    .then(data => {
      publications = data;
      render(publications);
    })
    .catch(() => {
      publicationList.innerHTML = '<p>Could not load publication data. Run the site through GitHub Pages or a local web server rather than opening the HTML directly as a file.</p>';
    });

  search?.addEventListener("input", e => {
    const q = e.target.value.toLowerCase().trim();
    render(publications.filter(x =>
      String(x.year).includes(q) || x.text.toLowerCase().includes(q)
    ));
  });
}
