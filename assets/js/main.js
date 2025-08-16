/*=============== SHOW SIDEBAR ===============*/
const showSidebar = (toggleId, sidebarId, headerId, mainId) => {
    const toggle = document.getElementById(toggleId),
        sidebar = document.getElementById(sidebarId),
        header = document.getElementById(headerId),
        main = document.getElementById(mainId);

    if (toggle && sidebar && header && main) {
        toggle.addEventListener("click", () => {
            /* Show sidebar */
            sidebar.classList.toggle("show-sidebar");
            /* Add padding header */
            header.classList.toggle("left-pd");
            /* Add padding main */
            main.classList.toggle("left-pd");
        });
    }
};
showSidebar("header-toggle", "sidebar", "header", "main");

/*=============== LINK ACTIVE ===============*/
//ganti class sidebar
const tog = document.getElementById("menuTog");
tog.addEventListener("click", () => {
    if (tog.classList.contains("ri-menu-line")) {
        tog.classList.remove("ri-menu-line");
        tog.classList.add("ri-close-circle-line");
    } else {
        tog.classList.remove("ri-close-circle-line");
        tog.classList.add("ri-menu-line");
    }
});
const sidebarLink = document.querySelectorAll(".sidebar__list a");

function linkColor() {
    sidebarLink.forEach(l => l.classList.remove("active-link"));
    this.classList.add("active-link");
}

sidebarLink.forEach(l => l.addEventListener("click", linkColor));

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-fill";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme)
        ? "ri-moon-clear-fill"
        : "ri-sun-fill";

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
    );
    themeButton.classList[
        selectedIcon === "ri-moon-clear-fill" ? "add" : "remove"
    ](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== GALERI ===============*/
// FOLDER
const folderToFotos = () => {
    const folders = document.querySelectorAll(".folder-card");
    const displayFoto = document.getElementById("conGaleriFoto");
    const displayFolder = document.getElementById("conGaleriFolder");
    folders.forEach(folders => {
        folder.addEventListener("click", open => {
            displayFolder.style.display = "none";
            displayFoto.style.display = "block";
        });
    });
};
folderToFotos();
// FOTO
const fotoZoom = () => {
    const img = document.querySelectorAll(".gallery-img");
    const over = document.getElementById("overlay");
    const fotoBesar = document.getElementById("fotoBesar");
    const tutupImg = document.getElementById("tutupImg");

    img.forEach(img => {
        img.addEventListener("click", () => {
            over.style.display = "block";
            fotoBesar.src = img.src;
        });
    });
    tutupImg.addEventListener("click", () => {
        over.style.display = "none";
    });
};
fotoZoom();
