jQuery(function ($) {

    'use strict';

    (function () {

        const THEME = {
            LIGHT: 'light-mode',
            DARK: 'dark-mode'
        }

        const ButtonTheme = document.getElementById("btn-change-theme")
        $('#preloader').delay(200).fadeOut('slow');

        function checkIfThemeIsInLocalStorage() {
            const html = document.documentElement
            const currentTheme = localStorage.getItem("theme") || THEME.LIGHT
            if (currentTheme === THEME.LIGHT) {
                ButtonTheme.innerText = "dark mode"
            } else {
                ButtonTheme.innerText = "light mode"
            }

            html.setAttribute('theme', currentTheme)
        }

        function toggleTheme() {
            const html = document.documentElement
            const currentTheme = document.documentElement.getAttribute('theme')
            if (currentTheme === THEME.DARK) {
                html.setAttribute('theme', THEME.LIGHT)
                ButtonTheme.innerText = 'dark mode'
                localStorage.setItem('theme', THEME.LIGHT);
            } else {
                html.setAttribute('theme', THEME.DARK)
                ButtonTheme.innerText = 'light mode'
                localStorage.setItem('theme', THEME.DARK);
            }
        }

        checkIfThemeIsInLocalStorage()
        ButtonTheme.addEventListener("click", () => toggleTheme())
    }());
});