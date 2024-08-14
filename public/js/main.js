
  document.addEventListener("DOMContentLoaded", function () {
    const decrementBtns = document.querySelectorAll(".btn-decrement");
    const incrementBtns = document.querySelectorAll(".btn-increment");

    decrementBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        handleQuantityChange(btn, -1);
      });
    });

    incrementBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        handleQuantityChange(btn, 1);
      });
    });

    function handleQuantityChange(btn, change) {
      const inputElement = btn.parentElement.querySelector(".quantity");
      let quantity = parseInt(inputElement.value);
      quantity += change;

      // Ensure the quantity doesn't go below 1
      if (quantity < 1) {
        quantity = 1;
      }

      inputElement.value = quantity;
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const addToCartBtn = document.getElementById("btnAddToCart");
    const donutQuantityDiv = document.querySelector(".donut-quantity");

    addToCartBtn.addEventListener("click", () => {
      donutQuantityDiv.style.display = "block";
    });
  });

  function scrollToDonutCards() {
    const donutCardsSection = document.querySelector(".donut-cards");
    donutCardsSection.scrollIntoView({ behavior: "smooth" });
  }

  document.addEventListener("DOMContentLoaded", function () {
    const cardapioLink = document.querySelector(".ul");
    cardapioLink.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link behavior
      scrollToDonutCards();
    });
  });

  function scrollToFooter() {
    const footerSection = document.querySelector('footer'); // Selecionar o elemento do rodapé
    footerSection.scrollIntoView({ behavior: 'smooth' });
  }

  document.addEventListener('DOMContentLoaded', function () {
    const phoneIcon = document.querySelector('.icon-phone');
    phoneIcon.addEventListener('click', (event) => {
      event.preventDefault();
      scrollToFooter();
    });
  });

  const coberturaCheckboxes = document.querySelectorAll('input[name="cobertura"]');
  const recheioCheckboxes = document.querySelectorAll('input[name="recheio"]');
  const quantityInput = document.querySelector('.quantity');
  const totalPriceSpan = document.getElementById('totalPrice');

  coberturaCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateTotalPrice);
  });

  recheioCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateTotalPrice);
  });

  quantityInput.addEventListener('input', updateTotalPrice);

  function updateTotalPrice() {
    let price = 5; // Base price for 1 cobertura and 1 recheio

    // Count selected checkboxes for cobertura and recheio
    const selectedCoberturas = Array.from(coberturaCheckboxes).filter(checkbox => checkbox.checked).length;
    const selectedRecheios = Array.from(recheioCheckboxes).filter(checkbox => checkbox.checked).length;

    // Add extra price for additional coberturas and recheios
    if (selectedCoberturas > 1) {
      price += (selectedCoberturas - 1) * 2.5;
    }

    if (selectedRecheios > 1) {
      price += (selectedRecheios - 1) * 2.5;
    }

    // Update total price display
    totalPriceSpan.textContent = price.toFixed(2);
  }
