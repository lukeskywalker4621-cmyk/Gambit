document.addEventListener("DOMContentLoaded", () => {
    const isPagesPage = window.location.pathname.includes("/pages/");
    const prefix = isPagesPage ? "../" : "./";

    const destinations = {
        ".play-button": "pages/play.html",
        ".learn-button": "pages/learn.html",
        ".about-button": "pages/about.html",
        ".profile-button": "pages/profile.html",
        ".logo": "index.html",
        ".signin-button": "pages/login.html",
        ".register-button": "pages/register.html"
    };

    Object.entries(destinations).forEach(([selector, destination]) => {
        const button = document.querySelector(selector);
        if (button) {
            button.addEventListener("click", () => {
                window.location.href = prefix + destination;
            });
        }
    });
});