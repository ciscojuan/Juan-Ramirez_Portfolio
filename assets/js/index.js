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

window.addEventListener('resize', ()=>{
    container.style.filter = "blur(0)";
    console.log('evento resize')
})

buttonMenu.addEventListener("click", (e) => {
    console.log('metodo funcionando!');
  isOpeneded =!isOpeneded;
  if(isOpeneded == true){
      menu.style.display = "block";
      arrowClose.style.display = "block";
      arrowOpen.style.display = "none";
      container.style.filter = "blur(2.5px)";
  }
  else{
    menu.style.display = "none";
    arrowClose.style.display = "none";
    arrowOpen.style.display = "block";
    container.style.filter = "blur(0)";
} 
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