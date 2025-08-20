// Small animation / interactivity
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    alert(`You clicked on: ${card.querySelector("h3").innerText}`);
  });
});
