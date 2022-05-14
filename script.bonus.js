const navMenu = document.querySelector(".nav-menu");
const toggle = document.querySelector(".toggle");

const body = document.querySelector(".myColor");

const yellow = document.querySelector(".nav-link2-yellow");
const home = document.querySelector(".nav-link1-white");
const blue = document.querySelector(".nav-link3-blue");
const purple = document.querySelector(".nav-link4-purple");
const green = document.querySelector(".nav-link5-green");
const text = document.querySelector("#zeg");

toggle.addEventListener("mouseover", () => {
    navMenu.classList.toggle("active");
})

home.addEventListener("click", function() {
    body.style.backgroundColor = "white";
    text.innerText = "white";
});
yellow.addEventListener("click", function() {
    body.style.backgroundColor = "yellow";
    text.innerText = "yellow";
});
blue.addEventListener("click", function() {
    body.style.backgroundColor = "blue"; 
    text.innerText = "blue";
});
purple.addEventListener("click", function() {
    body.style.backgroundColor = "purple"; 
    text.innerText = "purple";
});
green.addEventListener("click", function() {
    body.style.backgroundColor = "green"; 
    text.innerText = "green";
});
document.querySelectorAll(".nav-menu").forEach(n => n.addEventListener("click", function(){
    navMenu.classList.remove("active");
}));

window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key){
    if (key.keyCode == "49"){
        body.style.backgroundColor = "white";
        text.innerText = "white";
    }else if(key.keyCode == "50"){
        body.style.backgroundColor = "yellow";
        text.innerText = "yellow";
    }else if(key.keyCode == "51"){
        body.style.backgroundColor = "blue";
        text.innerText = "blue";
    }else if(key.keyCode == "52"){
        body.style.backgroundColor = "purple";
        text.innerText = "purple";
    }else if(key.keyCode == "53"){
        body.style.backgroundColor = "green";
        text.innerText = "green";
    }
}

