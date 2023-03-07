"use strict";
const darkSwitch = document.querySelector(".darkSwitch");
const theme = document.querySelector("#darkMode");
const menu = document.querySelector('.aside__perfil');
const openMenu = document.querySelector('[data-greather]');
const closeMenu = document.querySelector('[data-lower]');
console.log(openMenu)
console.log(closeMenu)

openMenu.addEventListener('click', () => {
    console.log('running')
    menu.style.display = 'block';
    closeMenu.style.display = 'block';
    openMenu.style.display = 'none';
})

closeMenu.addEventListener('click', () => {
    menu.style.display = 'none';
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';

})
// Load theme on page load
window.addEventListener('load', () => {
    var themeMode = localStorage.getItem('theme');

    console.log(themeMode)
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
