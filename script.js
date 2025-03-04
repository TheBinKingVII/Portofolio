document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("active");
        hamburger.classList.toggle("active");

        // Ubah ikon hamburger menjadi "X"
        if (hamburger.innerHTML === "☰") {
            hamburger.innerHTML = "☰"; // Ikon X ketika menu aktif
        } else {
            hamburger.innerHTML = "X"; // Ikon ☰ ketika menu tertutup
        }
    });
});
