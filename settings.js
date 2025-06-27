let change_theme_option = document.getElementById("change-theme-option");
let main_themes_div = document.getElementById("themes-div");
let forest_theme_box = document.getElementById("theme-box1");
let cave_theme_box = document.getElementById("theme-box2");
let theme_status;
 function change_theme(){
    main_themes_div.style.zIndex = "1003";
    main_themes_div.style.display = "grid";
 }

  change_theme_option.onclick = function(){
     change_theme();
 }
 cave_theme_box.onclick = function(){
    document.body.backgroundImage = `url("D:\SoM Ships\wordle game - hackclub version\themes\cave theme\Reference-Image.png")`;
    main_themes_div.style.zIndex = "0";
    main_themes_div.style.display = "none";
    
    theme_status = localStorage.setItem("theme", "cave theme");
 }
forest_theme_box.addEventListener("click", function(){
   document.body.backgroundImage = `url("./themes/mountains\ themes/orig_big.png")`;
    main_themes_div.style.zIndex = "0";
    main_themes_div.style.display = "none";
    theme_status = localStorage.setItem("theme", "forest theme");
    
})