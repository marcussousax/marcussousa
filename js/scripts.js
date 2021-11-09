jQuery(function ($) {

    'use strict';

    (function () {
        let ButtonTheme = document.getElementById("btn-change-theme")
        $('#preloader').delay(200).fadeOut('slow');

        function checkIfThemeIsInLocalStorage() {
            let html = document.documentElement
            let currentTheme = localStorage.getItem("theme") || "light-mode"
            if(currentTheme === "light-mode") {
                ButtonTheme.innerText = "dark mode"
            } else {
                ButtonTheme.innerText = "light mode"
            }

            html.setAttribute('theme', currentTheme)
        }

        function toggleTheme() {
            let html = document.documentElement
            let currentTheme = document.documentElement.getAttribute('theme')
            if (currentTheme === "dark-mode") {
                html.setAttribute('theme', 'light-mode')
                ButtonTheme.innerText = 'dark mode'
                localStorage.setItem('theme', 'light-mode');
            } else {
                html.setAttribute('theme', 'dark-mode')
                ButtonTheme.innerText = 'light mode'
                localStorage.setItem('theme', 'dark-mode');
            }
        }

        checkIfThemeIsInLocalStorage()
        ButtonTheme.addEventListener("click", () => toggleTheme())
    }());
});