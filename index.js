const numberOfCards = 10;
const cardTemplate = {
  title: "CAPSULAS",
  text: "3a Edición Curso de Especialización en Incubación",
  price: "30 US$",
  image:
    "https://agrinews.tv/agrinewscampus/wp-content/uploads/2024/09/capsula-salmonella.jpg",
};
const cardsData = Array.from({ length: numberOfCards }, () => cardTemplate);

const cardsContainer = document.querySelector(".cards-container");

let isDragging = false;
let startX;
let scrollLeft;

cardsContainer.addEventListener("mousedown", (e) => {
  isDragging = true;
  cardsContainer.classList.add("dragging");
  startX = e.pageX - cardsContainer.offsetLeft;
  scrollLeft = cardsContainer.scrollLeft;
});

cardsContainer.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - cardsContainer.offsetLeft;
  const distance = x - startX;
  cardsContainer.scrollLeft = scrollLeft - distance;
});

cardsContainer.addEventListener("mouseup", () => {
  isDragging = false;
  cardsContainer.classList.remove("dragging");
});

cardsContainer.addEventListener("mouseleave", () => {
  isDragging = false;
  cardsContainer.classList.remove("dragging");
});

cardsData.forEach((card) => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card", "card-detaild");
  cardElement.style.backgroundImage = `url(${card.image})`;

  cardElement.innerHTML = `
    <div class="card-overlay"></div>
    <div class="card-body">
      <p class="card-title mb-3">${card.title}</p>
      <p class="card-text mb-5">${card.text}</p>
      <button type="button" class="btn btn-light">${card.price}</button>
    </div>
  `;

  cardsContainer.appendChild(cardElement);
});

// ! MODAL LOGIC

const modal = document.querySelector(".modal");
const openModalButton = document.querySelector(".contact-mobile button");
const closeModalButton = modal.querySelector("button");
const closeModalX = document.querySelector(".close-btn");

const showModal = () => {
  modal.classList.add("show");
};

const hideModal = () => {
  modal.classList.remove("show");
};

openModalButton.addEventListener("click", showModal);

closeModalButton.addEventListener("click", hideModal);

closeModalX.addEventListener("click", hideModal);

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    hideModal();
  }
});
