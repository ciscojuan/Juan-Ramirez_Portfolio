"use strict";
const darkSwitch = document.querySelector(".darkSwitch");
const theme = document.querySelector("#darkMode");
/* const light = "assets/css/lightMode/lightmode.css"
const dark = "assets/css/darkMode/darkmode.css" */

// Load theme on page load
window.addEventListener('load', () => {
    const themeMode = localStorage.getItem('theme');
    if (themeMode === 'dark') {
        theme.href = 'assets/css/darkmode/darkmode.css';
        darkSwitch.checked = true;
    } else {
        theme.href = 'assets/css/lightMode/lightmode.css';
    }
});

// Toggle theme on darkSwitch change
darkSwitch.addEventListener('change', () => {
    const themeMode = darkSwitch.checked ? 'dark' : 'light';
    theme.href = `assets/css/${themeMode}mode/${themeMode}mode.css`;
    localStorage.setItem('theme', themeMode);
});
