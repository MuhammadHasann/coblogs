const loadingSection = document.getElementById("loading-section");
const technologySection = document.getElementById("technology-section");
const businessSection = document.getElementById("business-section");
const economySection = document.getElementById("economy-section");
const lyfeSection = document.getElementById("lyfe-section");

const Articles = (b) => {
  return `
    <article>
      <div class="detail-article">
        <h2>${b.title}</h2>
        <p>${b.description}</p>
        <div class="sub-detail-article">
          <span>${b.published_at}</span>
          <i class="fa-solid fa-circle"></i>
          <span>${b.category}</span>
        </div>
        <button id="see-detail" data-id-blog="${b.id}">Lihat Detail</button>
      </div>
      <figure>
        <img class="article-image" src="${b.image}" alt="${b.tittle}" />
      </figure>
    </article>
  `;
};

const Modal = (b) => {
  return `
    <div class="modal-header">
      <button id="icon-back"><i class="fa-solid fa-arrow-left icon-back"></i></button>
    </div>
    <article>
      <figure>
        <img src="${b.image}" alt="${b.title}" />
      </figure>
      <div class="modal-sub-detail-article">
        <p>${b.published_at}</p>
        <p>${b.category}</p>
      </div>
      <h1>${b.title}</h1>
      <p>${b.article}</p>
      <button id="icon-back">Kembali</button>
    </article>
  `;
};

const updateUI = (articles) => {
  let technology = `<h1 class="title-category-article">Teknologi</h1>`;
  let business = `<h1 class="title-category-article">Bisnis</h1>`;
  let economy = `<h1 class="title-category-article">Ekonomi</h1>`;
  let lyfe = `<h1 class="title-category-article">Kehidupan</h1>`;

  articles.filter((article) => article.category === "Technology").map((article) => (technology += Articles(article)));
  articles.filter((article) => article.category === "Business").map((article) => (business += Articles(article)));
  articles.filter((article) => article.category === "Economy").map((article) => (economy += Articles(article)));
  articles.filter((article) => article.category === "Lyfe").map((article) => (lyfe += Articles(article)));

  technologySection.innerHTML += technology;
  businessSection.innerHTML += business;
  economySection.innerHTML += economy;
  lyfeSection.innerHTML += lyfe;
};

const loadingUI = () => {
  loadingSection.innerHTML = `<div class="loader"></div>`;
};

const showUI = () => {
  technologySection.style.display = "flex";
  businessSection.style.display = "flex";
  economySection.style.display = "flex";
  lyfeSection.style.display = "flex";
  loadingSection.style.display = "none";
  loadingSection.innerHTML = "";
};

const getData = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch("public/data.json");
    if (!response.ok) {
      throw new Error("url fetch yang dituju tidak ditemukan");
    }
    const data = await response.json();

    updateUI(data);

    const openModal = document.querySelectorAll("#see-detail");
    const openDetail = document.getElementById("modal-detail-blog");

    openModal.forEach((button) => {
      button.addEventListener("click", (e) => {
        const idBlog = e.target.getAttribute("data-id-blog");
        const modalDetail = document.getElementById("modal-detail-blog");
        let detailBlog = "";

        data.filter((d) => d.id == idBlog).map((d) => (detailBlog = Modal(d)));

        modalDetail.innerHTML = detailBlog;
        openDetail.classList.add("active");
        document.body.classList.add("modal-open");
      });
    });

    document.addEventListener("click", (e) => {
      if (e.target.id === "icon-back" || e.target.classList.contains("icon-back")) {
        openDetail.classList.remove("active");
        document.body.classList.remove("modal-open");
      }
    });
  } catch (err) {
    technologySection.innerHTML = `<h1 class="title-category-article">${err}</h1>`;
    console.log(err);
  } finally {
    showUI();
  }
};

loadingUI();
getData();
