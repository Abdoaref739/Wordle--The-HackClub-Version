let row1 = document.getElementById("row1");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let boxes = document.querySelectorAll(".box");
let try_again_button = document.getElementById("try-again-button");
let settings_icon = document.getElementById("settings-icon");
let forest_theme = document.getElementById("forest-theme");
let cave_theme = document.getElementById("cave-theme");
let game_div = document.getElementById("game-div");
let main_text = document.getElementById("main-text");
let hr_line = document.getElementById("hr-line");

    boxes.forEach(box =>{
   if(box.innerHTML == ""){
    box.style.backgroundColor = "rgb(255, 253, 163)";
}else if(box.innerHTML != ""){
    box.style.backgroundColor = "rgb(255, 255, 255)";
}
    })



window.onload = function() {
    let currentIndex = 0;
    btn1.focus();
    btn1.addEventListener("keydown", function(event){
        btn1.innerHTML = event.key;
            btn1.disabled = true;
            currentIndex = 1;
    btn2.focus();
        btn2.addEventListener("keydown", function(event){
            btn2.innerHTML = event.key
            btn2.disabled = true;
            currentIndex = 2;
            btn3.focus();
        btn3.addEventListener("keydown", function(event){
            btn3.innerHTML = event.key
            btn3.disabled = true;
            currentIndex = 3;
            btn4.focus();
        btn4.addEventListener("keydown", function(event){
            btn4.innerHTML = event.key
            btn4.disabled = true;
            currentIndex = 4;
            btn5.focus();
        btn5.addEventListener("keydown", function(event){
            btn5.innerHTML = event.key
            btn5.disabled = true;
            currentIndex = 5;
            btn5.blur();
            if(currentIndex == 5){
            get_user_word();
            
        }
    })
        })

        })
        })
    })
    document.onkeydown = function(event){
        if(event.key == "Backspace" && currentIndex > 0){
            currentIndex--;
            boxes[currentIndex - 1].focus();
            boxes[currentIndex - 1].disabled = false;
            boxes[currentIndex - 1].innerHTML = "";
            boxes[currentIndex].innerHTML = "";
        }
    }
}



 let i;
 let j;
 let the_choosen_word;
let words_list = [  "hacks", "clubs", "bytes", "coder", "debug", "input", "logic", "array",
  "loops", "stack", "queue", "build", "maker", "create", "react", "async",
  "await", "merge", "issue", "fixes", "patch", "class", "const", "error",
  "alert", "click", "print", "parse", "reset", "shift", "alert", "event",
  "style", "color", "align", "fetch", "posts", "pages", "links", "media",
  "image", "video", "route", "props", "state", "theme", "align", "fonts",
  "popup", "modal", "entry", "token", "email", "login", "admin", "users",
  "shell", "zshrc", "vscode", "https", "array", "float", "intjs", "nodes",
  "fiber", "clock", "count", "clear", "level", "pixel", "draws", "games",
  "click", "hover", "focus", "input", "valid", "toast", "timer", "hooks",
  "dream", "squad", "event", "logic", "split", "apply", "reset", "green"];
let random_number_word = Math.random() * (100 - 0) + 0;
let floored_number = Math.floor(random_number_word);
console.log(floored_number)
the_choosen_word = words_list[floored_number];
console.log(the_choosen_word)

function get_user_word(){
document.addEventListener("keydown", function(){
if(event.key == "Enter"){
    let btns = [btn1, btn2, btn3, btn4, btn5];
 user_word = [btn1.innerHTML + btn2.innerHTML + btn3.innerHTML + btn4.innerHTML + btn5.innerHTML];
    let merged_btns_data = (btn1.innerHTML + btn2.innerHTML + btn3.innerHTML + btn4.innerHTML + btn5.innerHTML);
console.log(merged_btns_data)
    if(merged_btns_data === words_list[random_number_word]){
        btns[i].style.backgroundColor = "green";
    }else{
        console.log(the_choosen_word.split(""))
        for(j = 0; j < 5; j++){
                      if(btns[j].innerHTML != the_choosen_word[j]){
        btns[j].style.backgroundColor = "red";
    }else{
        btns[j].style.backgroundColor = "lightgreen";
    }
}
}
}
})
 }

 try_again_button.onclick = function(){
    btn1.innerHTML = "";
    btn2.innerHTML = "";
    btn3.innerHTML = "";
    btn4.innerHTML = "";
    btn5.innerHTML = "";
    btn1.focus();
        boxes.forEach(box =>{
   if(box.innerHTML == ""){
    box.style.backgroundColor = "rgb(255, 253, 163)";
}else if(box.innerHTML != ""){
    box.style.backgroundColor = "rgb(255, 255, 255)";
}
    })
 }
 settings_icon.onclick = function(){
    window.location.href = "./settings.html";
 }
function change_theme(){
    let theme_status = localStorage.getItem("theme");
    if(theme_status === "cave theme"){
        forest_theme.style.display = "none";
        cave_theme.style.display = "block";
        game_div.style.marginLeft = "350px";
        try_again_button.style.marginLeft = "220px";
        main_text.style.marginLeft = "470px";
        hr_line.style.marginLeft = "580px";
        settings_icon.style.marginLeft = "900px";
        
    }
    else if(theme_status === "forest theme"){
        forest_theme.style.display = "block";
        cave_theme.style.display = "none";
    }
}
change_theme();