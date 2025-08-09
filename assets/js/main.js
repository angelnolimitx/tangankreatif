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

// HEADER TOGGLE ANIMATION

// SEARCH
const toggleSearch = () => {
    const searchForm = document.querySelector(".search-form");
    const searchButton = document.querySelector(".search-button");
    const searchInput = document.querySelector(".search-input");

    searchButton.addEventListener("click", () => {
        searchForm.classList.toggle("active-search");
    });

    searchInput.addEventListener("keydown", e => {
        if (e.key === "Enter") {
            e.preventDefault();
            searchInput.value = "";
            searchForm.classList.remove("active-search");
        }
    });
};

toggleSearch();

// TENTANG
const btView = () => {
    const btV = document.querySelectorAll(".button-view");
    const tentang = document.getElementById("alertCon");
    btV.forEach(item => {
        item.addEventListener("click", () => {
            tentang.style.display = "block";
        });
    });
    const closTentang = document.getElementById("buttonAl");
    closTentang.addEventListener("click", cl => {
        tentang.style.display = "none";
    });
};
btView();
