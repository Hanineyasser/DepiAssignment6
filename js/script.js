// Show/hide lightning ul when sun or moon is clicked
// document.addEventListener("DOMContentLoaded", function () {
//     var lightning = document.querySelector(".lightning");
//     if (!lightning) return;
//     var ul = lightning.querySelector("ul");
//     var sun = lightning.querySelector(".sun");
//     var moon = lightning.querySelector(".fa-moon");
//     var lightLi = ul ? ul.querySelector(".light") : null;
//     var darkLi = ul ? ul.querySelector(".dark") : null;

//     // Initial state: show sun, hide moon
//     if (sun) sun.style.display = "";
//     if (moon) moon.style.display = "none";

//     // Show ul when sun is clicked
//     if (sun && ul) {
//         sun.addEventListener("click", function (e) {
//             ul.classList.toggle("active");
//         });
//     }

//     // When 'dark' is chosen, show moon, hide sun, hide ul, enable dark mode
//     if (darkLi && sun && moon && ul) {
//         darkLi.addEventListener("click", function () {
//             console.log("Dark mode clicked");
//             sun.style.display = "none";
//             moon.style.display = "";
//             ul.classList.remove("active");
//             document.body.classList.add("dark-mode");
//             console.log(
//                 "dark-mode class added:",
//                 document.body.classList.contains("dark-mode")
//             );
//         });
//     }

//     // When 'light' is chosen, show sun, hide moon, hide ul, disable dark mode
//     if (lightLi && sun && moon && ul) {
//         lightLi.addEventListener("click", function () {
//             sun.style.display = "";
//             moon.style.display = "none";
//             ul.classList.remove("active");
//             document.body.classList.remove("dark-mode");
//         });
//     }

//     // Optionally, clicking moon can also show the ul for switching back
//     if (moon && ul) {
//         moon.addEventListener("click", function (e) {
//             ul.classList.toggle("active");
//         });
//     }
// });

// // Toggle mobile menu and freeze scroll, close on outside click
// document.addEventListener("DOMContentLoaded", function () {
//     var menuBtn = document.querySelector(".menu-btn");
//     var servicesMenu = document.querySelector("nav .services");
//     var nav = document.querySelector("nav");
//     var overlay = document.querySelector(".menu-overlay");
//     if (menuBtn && servicesMenu) {
//         menuBtn.addEventListener("click", function (e) {
//             e.stopPropagation();
//             servicesMenu.classList.toggle("show-menu");
//             if (servicesMenu.classList.contains("show-menu")) {
//                 document.body.classList.add("freeze-scroll");
//                 if (nav) nav.classList.add("menu-open");
//                 if (overlay) overlay.style.visibility = "visible";
//             } else {
//                 document.body.classList.remove("freeze-scroll");
//                 if (nav) nav.classList.remove("menu-open");
//                 if (overlay) overlay.style.visibility = "hidden";
//             }
//         });

//         // Close menu when clicking outside
//         document.addEventListener("click", function (e) {
//             if (
//                 servicesMenu.classList.contains("show-menu") &&
//                 !servicesMenu.contains(e.target) &&
//                 !menuBtn.contains(e.target)
//             ) {
//                 servicesMenu.classList.remove("show-menu");
//                 document.body.classList.remove("freeze-scroll");
//                 if (nav) nav.classList.remove("menu-open");
//                 if (overlay) overlay.classList.remove("active");
//             }
//         });
//     }
// });

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
// --- Settings Panel Logic ---
document.addEventListener('DOMContentLoaded', function() {
    const customizeBtn = document.querySelector('.floating-customize-btn');
    const settingsPanel = document.querySelector('.settings-panel');
    const closeBtn = document.querySelector('.settings-close-btn');
    const settingsOverlay = document.querySelector('.settings-overlay');

    // Make sure all elements exist before adding listeners
    if (customizeBtn && settingsPanel && closeBtn && settingsOverlay) {
        
        const openPanel = () => {
            settingsPanel.classList.add('show');
            settingsOverlay.classList.add('active');
            document.body.classList.add('freeze-scroll');
        };

        const closePanel = () => {
            settingsPanel.classList.remove('show');
            settingsOverlay.classList.remove('active');
            document.body.classList.remove('freeze-scroll');
        };

        customizeBtn.addEventListener('click', openPanel);
        closeBtn.addEventListener('click', closePanel);
        settingsOverlay.addEventListener('click', closePanel);
    }
});