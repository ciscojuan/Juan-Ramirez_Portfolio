"use strict";
const darkSwitch = document.querySelector(".darkSwitch");
const theme = document.querySelector("#darkMode");
const light = "assets/css/lightMode/lightMode.css"
const dark = "assets/css/lightMode/darkMode.css"
darkSwitch.addEventListener("change", () => {
    if(darkSwitch.checked){
        theme.setAttribute("href", "assets/css/darkmode/darkmode.css");
        localStorage.getItem('light') ? localStorage.removeItem('light'):localStorage.setItem('dark', dark)
    }else{
        theme.setAttribute("href", "assets/css/lightMode/lightMode.css")
        localStorage.getItem('dark') ? localStorage.removeItem('dark'):localStorage.setItem('light', light)
    }
    
       

    
});
