const button = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

button.addEventListener("click", () => {
    menu.classList.toggle("open");
});

// Close when clicking outside
document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !button.contains(e.target)) {
        menu.classList.remove("open");
    }
});