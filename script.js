const container = document.getElementById("gameContainer");
const cards = Array.from(container.children);
const pagination = document.getElementById("pagination");

let currentPage = 1;
const cardsPerPage = 20; 
const totalPages = Math.ceil(cards.length / cardsPerPage);


function showPage(page) {
  container.innerHTML = ""; 
  const start = (page - 1) * cardsPerPage;
  const end = start + cardsPerPage;

  const pageCards = cards.slice(start, end);
  pageCards.forEach((card) => container.appendChild(card));

  renderPagination(page);
}

function renderPagination(activePage) {
  pagination.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.classList.toggle("active", i === activePage);

    btn.addEventListener("click", () => {
      currentPage = i;
      showPage(currentPage);
    });

    pagination.appendChild(btn);
  }
}

showPage(currentPage);
