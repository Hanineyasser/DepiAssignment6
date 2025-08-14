// Show/hide lightning ul when sun or moon is clicked
document.addEventListener("DOMContentLoaded", function () {
    var lightning = document.querySelector(".lightning");
    if (!lightning) return;
    var ul = lightning.querySelector("ul");
    var sun = lightning.querySelector(".sun");
    var moon = lightning.querySelector(".fa-moon");
    var lightLi = ul ? ul.querySelector(".light") : null;
    var darkLi = ul ? ul.querySelector(".dark") : null;

    if (sun) sun.style.display = "";
    if (moon) moon.style.display = "none";

    if (sun && ul) {
        sun.addEventListener("click", function (e) {
            ul.classList.toggle("active");
        });
    }

    if (darkLi && sun && moon && ul) {
        darkLi.addEventListener("click", function () {
            sun.style.display = "none";
            moon.style.display = "";
            ul.classList.remove("active");
            document.body.classList.add("dark-mode");
        });
    }

    if (lightLi && sun && moon && ul) {
        lightLi.addEventListener("click", function () {
            sun.style.display = "";
            moon.style.display = "none";
            ul.classList.remove("active");
            document.body.classList.remove("dark-mode");
        });
    }

    if (moon && ul) {
        moon.addEventListener("click", function (e) {
            ul.classList.toggle("active");
        });
    }
});

// Toggle mobile menu and freeze scroll, close on outside click
document.addEventListener("DOMContentLoaded", function () {
    var menuBtn = document.querySelector(".menu-btn");
    var servicesMenu = document.querySelector("nav .services");
    var nav = document.querySelector("nav");
    var overlay = document.querySelector(".menu-overlay");

    if (menuBtn && servicesMenu && overlay) {
        // Ensure overlay exists
        menuBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            var isOpen = servicesMenu.classList.toggle("show-menu");
            overlay.classList.toggle("active", isOpen); // Sync overlay with menu
            document.body.classList.toggle("freeze-scroll", isOpen);
            if (nav) nav.classList.toggle("menu-open", isOpen);
        });

        // Close menu when clicking the overlay or outside the menu
        document.addEventListener("click", function (e) {
            if (servicesMenu.classList.contains("show-menu")) {
                if (
                    !servicesMenu.contains(e.target) &&
                    !menuBtn.contains(e.target)
                ) {
                    servicesMenu.classList.remove("show-menu");
                    overlay.classList.remove("active");
                    document.body.classList.remove("freeze-scroll");
                    if (nav) nav.classList.remove("menu-open");
                }
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // --- Settings Panel Logic ---
    const customizeBtn = document.querySelector(".floating-customize-btn");
    const settingsPanel = document.querySelector(".settings-panel");
    const closeBtn = document.querySelector(".settings-close-btn");
    const settingsOverlay = document.querySelector(".settings-overlay");

    if (customizeBtn && settingsPanel && closeBtn && settingsOverlay) {
        const openPanel = () => {
            settingsPanel.classList.add("show");
            settingsOverlay.classList.add("active");
            document.body.classList.add("settings-panel-open");
        };

        const closePanel = () => {
            settingsPanel.classList.remove("show");
            settingsOverlay.classList.remove("active");
            document.body.classList.remove("settings-panel-open");
        };

        customizeBtn.addEventListener("click", openPanel);
        closeBtn.addEventListener("click", closePanel);
        settingsOverlay.addEventListener("click", closePanel);
    }

    // --- Color Picker Logic with CSS Variables ---
    const colorPickers = document.querySelectorAll(".color-picker-input");
    colorPickers.forEach((picker) => {
        // This line was missing the variable declaration
        const colorVariable = picker.dataset.color;

        picker.style.backgroundColor = picker.value;

        picker.addEventListener("input", (event) => {
            const newColor = event.target.value;
            const textInput = event.target.previousElementSibling;

            if (textInput && textInput.classList.contains("color-text-input")) {
                textInput.value = newColor;
            }

            event.target.style.backgroundColor = newColor;

            // Now this will work correctly
            if (colorVariable) {
                document.documentElement.style.setProperty(
                    colorVariable,
                    newColor
                );
            }
        });
    });
});

