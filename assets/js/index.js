"use strict";
const darkSwitch = document.querySelector(".darkSwitch");
const theme = document.querySelector("#darkMode");
const container = document.querySelector('.container__sections')
/* ################################## menu ############################ */
const buttonMenu = document.querySelector(".button__container");
const menu = document.querySelector(".aside__perfil");
const arrowOpen = document.querySelector("[data-greather]");
const arrowClose = document.querySelector("[data-lower]");
let isOpeneded = false;


buttonMenu.addEventListener("click", (e) => {

  isOpeneded =!isOpeneded;
  if(isOpeneded == true && document.documentElement.clientWidth <= 768){
      menu.style.display = "block";
      arrowClose.style.display = "block";
      arrowOpen.style.display = "none";
      container.style.filter = "blur(2.5px)";
  }else{
    menu.style.display = "none";
    arrowClose.style.display = "none";
    arrowOpen.style.display = "block";
    container.style.filter = "blur(0)";
  } e.stopImmediatePropagation()
});

// Load theme on page load
window.addEventListener("load", () => {
  var themeMode = localStorage.getItem("theme");

  console.log(themeMode);
  if (themeMode === "dark") {
    theme.href = "assets/css/darkmode/darkmode.css";
    darkSwitch.checked = true;
  } else {
    theme.href = "assets/css/lightMode/lightmode.css";
  }
});

// Toggle theme on darkSwitch change
darkSwitch.addEventListener("change", () => {
  const themeMode = darkSwitch.checked ? "dark" : "light";
  theme.href = `assets/css/${themeMode}mode/${themeMode}mode.css`;
  localStorage.setItem("theme", themeMode);
});
