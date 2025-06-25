const themeOptions = document.querySelectorAll("[name='theme']");

themeOptions.forEach(themeOption => {
    themeOption.addEventListener("click", () => {
        localStorage.setItem("theme", themeOption.id);
    });
});

let currentTheme = localStorage.getItem("theme");
document.getElementById(currentTheme).checked = true;
