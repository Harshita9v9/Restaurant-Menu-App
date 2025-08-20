// Select all offer buttons
const offerButtons = document.querySelectorAll(".offer-btn");

offerButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    const offerText = e.target.closest(".offer-card").dataset.offer;
    alert("🎉 You selected: " + offerText);
  });
});
