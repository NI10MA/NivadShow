/* =========================================================
   ==================== THEME TOGGLE =======================
   ========================================================= */

const themeToggle =
    document.getElementById("themeToggle");

/* =========================================================
   ================= CHECK BUTTON =========================
   ========================================================= */

if (themeToggle) {

    /* -----------------------------------------------------
       Get Icon
    ----------------------------------------------------- */

    const themeIcon =
        themeToggle.querySelector("i");

    /* =====================================================
       ================= LOAD SAVED THEME ==================
       ===================================================== */

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        themeIcon.classList.remove("fa-moon");

        themeIcon.classList.add("fa-sun");
    }

    /* =====================================================
       ================== TOGGLE THEME =====================
       ===================================================== */

    themeToggle.addEventListener("click", function () {

        /* -------------------------------------------------
           Toggle Dark Mode
        ------------------------------------------------- */

        document.body.classList.toggle("dark-mode");

        /* -------------------------------------------------
           Check Current Theme
        ------------------------------------------------- */

        const isDarkMode =
            document.body.classList.contains("dark-mode");

        /* =================================================
           ================= DARK MODE =====================
           ================================================= */

        if (isDarkMode) {

            themeIcon.classList.remove("fa-moon");

            themeIcon.classList.add("fa-sun");

            localStorage.setItem(
                "theme",
                "dark"
            );
        }

        /* =================================================
           ================= LIGHT MODE ===================
           ================================================= */

        else {

            themeIcon.classList.remove("fa-sun");

            themeIcon.classList.add("fa-moon");

            localStorage.setItem(
                "theme",
                "light"
            );
        }
    });
}