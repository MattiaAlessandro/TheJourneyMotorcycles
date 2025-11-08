document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn-partecipa");
    const formContainer = document.getElementById("form-partecipa");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            formContainer.style.display = "block";
            window.scrollTo({ top: formContainer.offsetTop, behavior: "smooth" });
        });
    });
});