const toggleLabel = document.querySelector(".toggle-label");
const prices = document.querySelectorAll(".price span");
console.log(prices);

toggleLabel.addEventListener("click", () => {
  const toggle = document.querySelector("input[type=checkbox]").checked;
  if (toggle) {
    prices[0].innerHTML = "199.99";
    prices[1].innerHTML = "249.99";
    prices[2].innerHTML = "399.99";
  } else {
    prices[0].innerHTML = "19.99";
    prices[1].innerHTML = "24.99";
    prices[2].innerHTML = "39.99";
  }
});
