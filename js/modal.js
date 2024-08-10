

const button = document.querySelector(".hero-button");
const backdrop = document.querySelector(".overlay");

button.addEventListener("click", toggleModal);

backdrop.addEventListener("click", (e) => {
  const target = e.target.closest(".model-close-btn");

  if (!target) {
    return;
  }
  toggleModal();
});


function toggleModal() {
  backdrop.classList.toggle("is-open");
}