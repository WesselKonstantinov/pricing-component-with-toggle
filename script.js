const toggleInputs = document.querySelectorAll("[data-js='toggle-input']");
const cardPrices = document.querySelectorAll("[data-js='card-price']");

toggleInputs.forEach((toggleInput) => {
  toggleInput.addEventListener("input", () => {
    cardPrices.forEach((cardPrice) =>
      cardPrice.classList.toggle("card__price--hidden")
    );
  });
});
