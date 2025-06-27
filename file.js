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
let full_heart1 = document.getElementById("full-heart1");
let full_heart2 = document.getElementById("full-heart2");
let full_heart3 = document.getElementById("full-heart3");
let another_word_button = document.getElementById("another-word-button");
let add_hint_button = document.getElementById("add-hint");
let add_two_hints_button = document.getElementById("add-two-hints");
let change_the_word_button = document.getElementById("change-the-word");
let leaves = document.getElementById("leaves");





    boxes.forEach(box =>{
   if(box.innerHTML === ""){
    box.style.backgroundColor = "rgb(255, 253, 163)";
}
if(box.innerHTML !== ""){
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
let words_list = [  "hacks", "clubs", "bytes", "allow"];
let random_number_word = Math.random() * (4 - 0) + 0;
let floored_number = Math.floor(random_number_word);
console.log(floored_number)
the_choosen_word = words_list[floored_number];
console.log(the_choosen_word)






another_word_button.onclick = function(){
    another_word_button.style.display = "none";
    try_again_button.style.display = "block";
let random_number_word = Math.random() * (3 - 0) + 0;
let floored_number = Math.floor(random_number_word);
console.log(floored_number)
the_choosen_word = words_list[floored_number];
console.log(the_choosen_word)
addHints();
btn1.innerHTML = "";
btn2.innerHTML = "";
btn3.innerHTML = "";
btn4.innerHTML = "";
btn5.innerHTML = "";
btn1.style.backgroundColor = "rgb(255, 253, 163)";
btn2.style.backgroundColor = "rgb(255, 253, 163)";
btn3.style.backgroundColor = "rgb(255, 253, 163)";
btn4.style.backgroundColor = "rgb(255, 253, 163)";
btn5.style.backgroundColor = "rgb(255, 253, 163)";
btn1.focus();
get_user_word();
}


function addHints(){
    let hint_sentence = document.querySelector(".hint-sentence");
if(the_choosen_word === "hacks"){
    hint_sentence.innerHTML = `Hint: More than a single hack!`;
}
else if(the_choosen_word === "clubs"){
    hint_sentence.innerHTML = `Hint: We play sports and have fun in them!`;
}
else if(the_choosen_word === "bytes"){
    hint_sentence.innerHTML = "Hint: consists of a number of funny bits!";
}
else if(the_choosen_word === "allow"){
    hint_sentence.innerHTML = "Hint: Giving Access to somebody for something!";
}
}
addHints();



 add_hint_button.onclick = function(){
    btn1.innerHTML = the_choosen_word[0];
    btn2.focus();
} 
 add_two_hints_button.onclick = function(){
    btn2.innerHTML = the_choosen_word[1];
    btn3.focus();
} 
 change_the_word_button.onclick = function(){
    btn1.focus();
    random_number_word = Math.random() * (3 - 0) + 0;
floored_number = Math.floor(random_number_word);
console.log(floored_number)
the_choosen_word = words_list[floored_number];
console.log(the_choosen_word)
addHints();
btn1.innerHTML = "";
btn2.innerHTML = "";
btn3.innerHTML = "";
btn4.innerHTML = "";
btn5.innerHTML = "";
btn1.style.backgroundColor = "rgb(255, 253, 163)";
btn2.style.backgroundColor = "rgb(255, 253, 163)";
btn3.style.backgroundColor = "rgb(255, 253, 163)";
btn4.style.backgroundColor = "rgb(255, 253, 163)";
btn5.style.backgroundColor = "rgb(255, 253, 163)";
   
} 

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
        full_heart1.src = "./dead-heart.png";
        if(full_heart1.src == "./dead-heart.png"){
            full_heart2.src = "./dead-heart.png";
        }else if(full_heart2 == "./dead-heart.png"){
            full_heart3.src = "./dead-heart.png";
        }
        another_word_button.style.display = "none";
        try_again_button.style.display = "block";
    }
    if(btns[j].innerHTML === the_choosen_word[j]){
        btns[j].style.backgroundColor = "lightgreen";
        another_word_button.style.display = "block";
        try_again_button.style.display = "none";

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
   if(box.innerHTML === ""){
    box.style.backgroundColor = "rgb(255, 253, 163)";
}else if(box.innerHTML !== ""){
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
        leaves.style.display = "none";
        
    }
    else if(theme_status === "forest theme"){
        forest_theme.style.display = "block";
        cave_theme.style.display = "none";
    }
}
change_theme();
