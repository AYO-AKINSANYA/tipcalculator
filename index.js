document.addEventListener("DOMContentLoaded", function () {
  const billInput = document.getElementById("bill");
  const peopleInput = document.getElementById("people");
  const tipButtons = document.querySelectorAll(".tip-btn");
  const customTipInput = document.getElementById("custom-tip");
  const tipAmountDisplay = document.getElementById("tip-amount");
  const totalAmountDisplay = document.getElementById("total-amount");
  const resetButton = document.getElementById("reset");

  function calculateTip(tipPercent) {
    const bill = parseFloat(billInput.value);
    const people = parseInt(peopleInput.value);

    if (isNaN(bill) || isNaN(people) || people <= 0) {
      return;
    }

    const tipAmount = (bill * (tipPercent / 100)) / people;
    const totalAmount = (bill + bill * (tipPercent / 100)) / people;

    tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
    totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
  }

  tipButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tipPercent = parseFloat(this.getAttribute("data-tip"));
      calculateTip(tipPercent);
    });
  });

  customTipInput.addEventListener("input", function () {
    const customTip = parseFloat(customTipInput.value);
    if (!isNaN(customTip)) {
      calculateTip(customTip);
    }
  });

  resetButton.addEventListener("click", function () {
    billInput.value = "";
    peopleInput.value = "";
    customTipInput.value = "";
    tipAmountDisplay.textContent = "$0.00";
    totalAmountDisplay.textContent = "$0.00";
  });
});
