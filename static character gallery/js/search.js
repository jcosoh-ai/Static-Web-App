const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase().trim();

    cards.forEach(card => {
        const name = card.dataset.name?.toLowerCase() || "";
        const isVisible = name.includes(value);
        card.style.display = isVisible ? "block" : "none";
    });
});