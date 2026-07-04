document.addEventListener("DOMContentLoaded", () => {

    // Prevent going back to previous page
    history.pushState(null, "", location.href);

    window.addEventListener("popstate", () => {
        history.pushState(null, "", location.href);
    });

    // Login Again Button
    const loginBtn = document.querySelector(".btn-primary");

    loginBtn.addEventListener("click", function (e) {
        e.preventDefault();

        document.body.style.opacity = "0.8";

        setTimeout(() => {
            window.location.href = "login.html";
        }, 400);
    });

    // Home Button
    const homeBtn = document.querySelector(".btn-secondary");

    homeBtn.addEventListener("click", function (e) {
        e.preventDefault();

        document.body.style.opacity = "0.8";

        setTimeout(() => {
            window.location.href = "index.html";
        }, 400);
    });

    // Success Animation
    const successCircle = document.querySelector(".success-circle");

    successCircle.style.transform = "scale(0)";

    setTimeout(() => {
        successCircle.style.transition = "0.5s ease";
        successCircle.style.transform = "scale(1)";
    }, 100);

});