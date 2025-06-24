let change_theme_option = document.getElementById("change-theme-option");
let main_themes_div = document.getElementById("themes-div");
let forest_theme_box = document.getElementById("theme-box1");
let cave_theme_box = document.getElementById("theme-box2");
let forest_theme = document.getElementById("forest-theme");
let cave_theme = document.getElementById("cave-theme");
let theme_status;
 function change_theme(){
    main_themes_div.style.zIndex = "1003";
    main_themes_div.style.opacity = "100%";
 }

  change_theme_option.onclick = function(){
     change_theme();
 }
 cave_theme_box.onclick = function(){
    forest_theme.style.display = "none";
    cave_theme.style.display = "block";
    main_themes_div.style.zIndex = "0";
    main_themes_div.style.opacity = "0%";
    theme_status = localStorage.setItem("theme", "cave theme");
 }
forest_theme_box.addEventListener("click", function(){
   forest_theme.style.display = "block";
   cave_theme.style.display = "none";
    main_themes_div.style.zIndex = "0";
    main_themes_div.style.opacity = "0%";
    theme_status = localStorage.setItem("theme", "forest theme");
    
})